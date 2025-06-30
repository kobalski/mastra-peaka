import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { getSQLRuleSet, mcp } from "./mcp";

export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions:
    `
      You are a helpful weather assistant that does text2sql

` + (await getSQLRuleSet()),
  model: openai("gpt-4o-mini"),
  tools: await mcp.getTools(),
});
