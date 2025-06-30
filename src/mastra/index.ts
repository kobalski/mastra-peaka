import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { weatherAgent } from "./agents/weather-agent";
import { VercelDeployer } from "@mastra/deployer-vercel";

export const mastra = new Mastra({
  deployer: new VercelDeployer(),
  agents: { weatherAgent },
  storage: new LibSQLStore({
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
