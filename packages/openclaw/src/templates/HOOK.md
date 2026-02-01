---
name: hyperspell-memory
description: "Long-term memory powered by Hyperspell — automatically saves conversations and recalls relevant context"
metadata:
  openclaw:
    emoji: "🧠"
    events: ["agent:bootstrap"]
    requires:
      env: ["HYPERSPELL_API_KEY", "HYPERSPELL_USER_ID"]
---

# Hyperspell Memory Hook

Automatically integrates [Hyperspell](https://hyperspell.com) long-term memory into your OpenClaw assistant.

## What It Does

On each agent run:
1. **Saves** the previous session's conversation to Hyperspell memory
2. **Recalls** relevant memories and connected content (Notion, Gmail, Slack, Drive) and injects them into the agent's context

## Configuration

Set your Hyperspell credentials as environment variables:

```bash
export HYPERSPELL_API_KEY="your-api-key"
export HYPERSPELL_USER_ID="your-user-id"
```

Get credentials from the [Hyperspell Dashboard](https://app.hyperspell.com).

## How It Works

- Listens to `agent:bootstrap` events
- Uses session deduplication to avoid saving the same conversation twice
- Injects recalled context as `HYPERSPELL_CONTEXT.md` bootstrap file
- Silently skips if credentials are missing or API calls fail
