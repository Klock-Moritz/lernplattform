import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { extractReasoningMiddleware, wrapLanguageModel } from "ai";

/**
 * A provider for local and external LLMs at the KIT.
 * 
 * You must provide your API key in the environment variable
 * `KI_TOOLBOX_API_KEY`.
 * 
 * @see {@link https://www.zml.kit.edu/ki-toolbox.php}
 */
export const kiToolbox = createOpenAICompatible({
  name: 'kiToolbox',
  apiKey: process.env.KI_TOOLBOX_API_KEY,
  baseURL: 'https://ki-toolbox.scc.kit.edu/api/v1',
  includeUsage: true,
});

export const model = wrapLanguageModel({
  model: kiToolbox("kit.minimax-m2.7-229b"),
  middleware: extractReasoningMiddleware({
    tagName: "think"
  })
});