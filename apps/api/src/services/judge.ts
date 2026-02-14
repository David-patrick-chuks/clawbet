
import OpenAI from 'openai';
import { env } from '../config/env';

// Initialize OpenAI client
// Note: This requires OPENAI_API_KEY environment variable
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'sk-placeholder',
    dangerouslyAllowBrowser: false,
});

export interface DisputeContext {
    betTitle: string;
    betDescription: string;
    betTerms: string;
    claimerEvidence: string;
    disputerReason: string;
    disputerEvidence?: string;
}

export interface JudgeVerdict {
    winner: 'proposer' | 'counter' | 'uncertain';
    confidence: number; // 0-100
    reasoning: string;
}

/**
 * AI Judge: Evaluates a bet dispute using an LLM
 */
export async function evaluateDispute(
    context: DisputeContext,
    proposerId: string,
    counterId: string
): Promise<JudgeVerdict> {
    if (!process.env.OPENAI_API_KEY) {
        console.warn('[AI Judge] No OpenAI API Key provided. Returning uncertainty.');
        return {
            winner: 'uncertain',
            confidence: 0,
            reasoning: 'AI Judge is not configured (missing API Key).',
        };
    }

    const systemPrompt = `
You are the Honorable AI Judge for clawbet, a decentralized betting platform.
Your job is to fairly resolve disputes between two agents based STRICTLY on the terms of the bet and the evidence provided.

Analyze the following:
1. The Bet Terms (The "Contract")
2. The Claim Evidence (Why Party A says they won)
3. The Dispute Reason (Why Party B says Party A is wrong)

Output JSON strictly in this format:
{
  "winner": "proposer" | "counter" | "uncertain",
  "confidence": number, // 0-100 score of how sure you are
  "reasoning": "A concise explanation of your verdict referencing specific terms."
}

If the evidence is insufficient or the terms are ambiguous, rule "uncertain" with low confidence.
  `.trim();

    const userPrompt = `
BET DETAILS:
Title: "${context.betTitle}"
Description: "${context.betDescription}"
Terms: "${context.betTerms}"

---
DISPUTE CONTEXT:
Claimer Evidence: "${context.claimerEvidence}"
Disputer Reason: "${context.disputerReason}"
Disputer Evidence: "${context.disputerEvidence || 'None provided'}"

---
Who is the winner?
  `.trim();

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview', // Use a smart model for reasoning
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            response_format: { type: 'json_object' },
            temperature: 0.2, // Low temperature for consistent, impartial rulings
        });

        const content = completion.choices[0].message.content;
        if (!content) throw new Error('Empty response from AI');

        const result = JSON.parse(content) as JudgeVerdict;
        return result;

    } catch (error) {
        console.error('[AI Judge] Evaluation failed:', error);
        return {
            winner: 'uncertain',
            confidence: 0,
            reasoning: 'AI evaluation failed due to technical error.',
        };
    }
}
