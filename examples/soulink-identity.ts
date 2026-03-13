/**
 * Soulink Agent Identity + Hyperspell Memory
 *
 * Persists verified on-chain agent identities into the memory graph.
 * Agents remember who they've interacted with and their trust levels,
 * grounded in Soulink's on-chain credit scores (not hallucinated context).
 *
 * Soulink: https://soulink.dev
 */
import Hyperspell from 'hyperspell'

const SOULINK_API = 'https://soulink.dev/api/v1'

const client = new Hyperspell({
  apiKey: process.env['HYPERSPELL_API_KEY'],
})

interface SoulinkIdentity {
  name: string
  owner: string
  expires_at: string
}

interface SoulinkCredit {
  name: string
  score: number
  total_reports: number
}

async function resolveAgent(name: string): Promise<SoulinkIdentity> {
  const res = await fetch(`${SOULINK_API}/resolve/${encodeURIComponent(name)}`)
  if (!res.ok) throw new Error(`Failed to resolve ${name}: ${res.status}`)
  return res.json() as Promise<SoulinkIdentity>
}

async function getCredit(name: string): Promise<SoulinkCredit> {
  const res = await fetch(`${SOULINK_API}/credit/${encodeURIComponent(name)}`)
  if (!res.ok) throw new Error(`Failed to get credit for ${name}: ${res.status}`)
  return res.json() as Promise<SoulinkCredit>
}

// Store your own agent's identity in memory on startup
async function persistSelfIdentity(agentName: string) {
  const identity = await resolveAgent(agentName)
  const credit = await getCredit(agentName)

  await client.memories.add({
    text: [
      `I am ${identity.name}.agent.`,
      `My wallet is ${identity.owner}.`,
      `My credit score is ${credit.score}/100 based on ${credit.total_reports} reports.`,
    ].join(' '),
  })

  console.log(`Persisted self identity: ${identity.name} (score: ${credit.score})`)
}

// Remember another agent after interacting with them
async function rememberAgent(agentName: string) {
  const identity = await resolveAgent(agentName)
  const credit = await getCredit(agentName)

  await client.memories.add({
    text: [
      `Agent ${identity.name}.agent has a credit score of ${credit.score}/100`,
      `based on ${credit.total_reports} reports.`,
      `Their wallet is ${identity.owner}.`,
      `Last seen: ${new Date().toISOString()}.`,
    ].join(' '),
  })

  console.log(`Remembered agent: ${identity.name} (score: ${credit.score})`)
}

// Search memory for agents you've interacted with
async function recallAgents(query: string) {
  const results = await client.memories.search({ text: query })
  console.log(`Found ${results.length} matching memories:`)
  for (const result of results) {
    console.log(`  - ${result.resource_id}`)
  }
  return results
}

async function main() {
  // On startup, persist your own identity
  await persistSelfIdentity('my-agent')

  // After interacting with another agent, remember them
  await rememberAgent('helper-bot')

  // Later, recall trusted agents from memory
  await recallAgents('credit score agent')
}

main().catch(console.error)
