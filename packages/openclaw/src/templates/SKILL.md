---
name: hyperspell-memory
description: "Long-term memory powered by Hyperspell"
metadata:
  openclaw:
    emoji: "🧠"
    tools: ["hyperspell_recall", "hyperspell_remember", "hyperspell_forget", "hyperspell_profile"]
---

# Hyperspell Memory

You have access to long-term memory via Hyperspell. Use these tools to remember and recall information across sessions. Memories are searchable alongside content from connected sources (Notion, Gmail, Slack, Google Drive, and more).

## When to Recall

- Before responding to complex questions, search for relevant past context
- When the user references something from a previous conversation
- When you need background on a topic you've discussed before
- At the start of a new task, check if there's relevant prior context

## When to Remember

- After important decisions or preferences are shared
- After completing significant tasks
- When the user shares personal context (preferences, key dates, contacts)
- After learning something new about the user's needs or workflow
- When debugging reveals an important insight

## When to Forget

- When the user asks you to delete outdated information
- When information has changed and the old version is misleading

## Tools

- `hyperspell_recall` — Search memories and connected sources for relevant context
- `hyperspell_remember` — Store a conversation or insight for future recall
- `hyperspell_forget` — Delete a memory by ID or semantic search
- `hyperspell_profile` — View recent and semantically similar memories

## Tips

- Include enough context in memories so they're useful when recalled later
- Use tags to categorize memories (e.g., "preferences", "architecture", "debugging")
- When recalling, use natural language queries — semantic search handles paraphrasing
- Check `hyperspell_profile` to understand what context is already available
