# OpenAI App Reference

Verified on: **2026-07-14**

Recheck these references before each implementation stage because platform contracts, naming, review requirements, and deployment guidance may change.

## Canonical OpenAI Apps SDK Documentation

- Apps SDK home  
  https://developers.openai.com/apps-sdk

- Quickstart  
  https://developers.openai.com/apps-sdk/quickstart

- MCP Apps compatibility in ChatGPT  
  https://developers.openai.com/apps-sdk/mcp-apps-in-chatgpt

- Apps SDK MCP server concept  
  https://developers.openai.com/apps-sdk/concepts/mcp-server

- Build the MCP server  
  https://developers.openai.com/apps-sdk/build/mcp-server

- Build the ChatGPT UI  
  https://developers.openai.com/apps-sdk/build/chatgpt-ui

- Authentication  
  https://developers.openai.com/apps-sdk/build/auth

- State management  
  https://developers.openai.com/apps-sdk/build/state-management

- UX principles  
  https://developers.openai.com/apps-sdk/concepts/ux-principles

- UI guidelines  
  https://developers.openai.com/apps-sdk/concepts/ui-guidelines

- Security and privacy  
  https://developers.openai.com/apps-sdk/guides/security-privacy

- Examples documentation  
  https://developers.openai.com/apps-sdk/build/examples

- Connect from ChatGPT  
  https://developers.openai.com/apps-sdk/deploy/connect-chatgpt

- Test the integration  
  https://developers.openai.com/apps-sdk/deploy/testing

- App guidelines  
  https://developers.openai.com/apps-sdk/app-guidelines

- Apps SDK reference  
  https://developers.openai.com/apps-sdk/reference

## Official Example Repository

- OpenAI Apps SDK examples  
  https://github.com/openai/openai-apps-sdk-examples

## ToadAid Review Checklist

Before adopting an example or platform feature, verify:

- whether it follows the open MCP Apps bridge or a ChatGPT-specific extension;
- whether tool schemas remain connector-visible and bounded;
- whether UI actions call explicit governed tools;
- whether authentication tokens remain server-side;
- whether sensitive data can reach the model or frontend;
- whether approval and execution remain distinct;
- whether the feature works in the intended ChatGPT plan/workspace;
- whether deployment or plugin submission rules changed;
- whether a local development tunnel is private and authenticated;
- whether the integration preserves Mirror Bridge authority boundaries.

## Portability Direction

Prefer MCP Apps standard contracts for reusable UI behavior. Add ChatGPT-specific capabilities through a thin host adapter only where they materially improve the experience.
