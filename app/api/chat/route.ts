import { kiToolbox } from '@/lib/ai_model_provider';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: kiToolbox("kit.minimax-m2.7-229b"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}