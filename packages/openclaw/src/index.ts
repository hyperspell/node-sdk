#!/usr/bin/env node

/**
 * CLI installer for the Hyperspell OpenClaw integration.
 *
 * Usage:
 *   npx @hyperspell/openclaw install          # Install hook + skill
 *   npx @hyperspell/openclaw install --hook    # Install hook only
 *   npx @hyperspell/openclaw install --skill   # Install skill only
 *   npx @hyperspell/openclaw uninstall         # Remove hook + skill
 */

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import yargs from 'yargs';
import { getSkillContent, getHookContent, getHookHandlerPath } from './skill';

const HOOK_NAME = 'hyperspell-memory';
const SKILL_NAME = 'hyperspell-memory';

function getOpenClawHooksDir(): string {
  return path.join(os.homedir(), '.openclaw', 'hooks');
}

function getOpenClawSkillsDir(): string {
  return path.join(os.homedir(), '.openclaw', 'skills');
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function installHook(): void {
  const hooksDir = getOpenClawHooksDir();
  const hookDir = path.join(hooksDir, HOOK_NAME);
  ensureDir(hookDir);

  // Write HOOK.md
  const hookMdContent = getHookContent();
  fs.writeFileSync(path.join(hookDir, 'HOOK.md'), hookMdContent, 'utf-8');

  // Copy the compiled hook handler
  const handlerSource = getHookHandlerPath();
  const handlerDest = path.join(hookDir, 'handler.js');

  if (fs.existsSync(handlerSource)) {
    fs.copyFileSync(handlerSource, handlerDest);
  } else {
    // Fallback: write a wrapper that requires the installed package
    const wrapper = [
      '// Auto-generated wrapper for @hyperspell/openclaw hook',
      "const { handler } = require('@hyperspell/openclaw/hook');",
      'module.exports = handler;',
      'module.exports.default = handler;',
    ].join('\n');
    fs.writeFileSync(handlerDest, wrapper, 'utf-8');
  }

  console.log(`  Hook installed to ${hookDir}`);
}

function installSkill(): void {
  const skillsDir = getOpenClawSkillsDir();
  const skillDir = path.join(skillsDir, SKILL_NAME);
  ensureDir(skillDir);

  const skillContent = getSkillContent();
  fs.writeFileSync(path.join(skillDir, 'SKILL.md'), skillContent, 'utf-8');

  console.log(`  Skill installed to ${skillDir}`);
}

function uninstallHook(): void {
  const hookDir = path.join(getOpenClawHooksDir(), HOOK_NAME);
  if (fs.existsSync(hookDir)) {
    fs.rmSync(hookDir, { recursive: true });
    console.log(`  Hook removed from ${hookDir}`);
  } else {
    console.log('  Hook not found, nothing to remove');
  }
}

function uninstallSkill(): void {
  const skillDir = path.join(getOpenClawSkillsDir(), SKILL_NAME);
  if (fs.existsSync(skillDir)) {
    fs.rmSync(skillDir, { recursive: true });
    console.log(`  Skill removed from ${skillDir}`);
  } else {
    console.log('  Skill not found, nothing to remove');
  }
}

function checkCredentials(): void {
  const apiKey = process.env['HYPERSPELL_API_KEY'];
  const userId = process.env['HYPERSPELL_USER_ID'];

  if (!apiKey || !userId) {
    console.log('\nConfiguration required:');
    console.log('  Set these environment variables for the hook to work:');
    if (!apiKey) {
      console.log('    export HYPERSPELL_API_KEY="your-api-key"');
    }
    if (!userId) {
      console.log('    export HYPERSPELL_USER_ID="your-user-id"');
    }
    console.log('\n  Get credentials from https://app.hyperspell.com');
  }
}

function printMcpConfig(): void {
  console.log('\nMCP server configuration (for explicit recall/remember tools):');
  console.log('  Add to your OpenClaw config:');
  console.log('');
  console.log('  "mcpServers": {');
  console.log('    "hyperspell": {');
  console.log('      "command": "npx",');
  console.log('      "args": ["-y", "hyperspell-mcp@latest", "--tools=memory"],');
  console.log('      "env": {');
  console.log('        "HYPERSPELL_API_KEY": "your-api-key",');
  console.log('        "HYPERSPELL_USER_ID": "your-user-id"');
  console.log('      }');
  console.log('    }');
  console.log('  }');
}

async function main(): Promise<void> {
  const argv = await yargs
    .scriptName('hyperspell-openclaw')
    .usage('$0 <command>', 'Hyperspell memory integration for OpenClaw')
    .command('install', 'Install the Hyperspell hook and skill for OpenClaw', (y) =>
      y
        .option('hook', {
          type: 'boolean',
          describe: 'Install hook only',
          default: false,
        })
        .option('skill', {
          type: 'boolean',
          describe: 'Install skill only',
          default: false,
        }),
    )
    .command('uninstall', 'Remove the Hyperspell hook and skill')
    .demandCommand(1, 'Please specify a command: install or uninstall')
    .help()
    .parse();

  const command = argv._[0];

  if (command === 'install') {
    const hookOnly = (argv as Record<string, unknown>)['hook'] === true;
    const skillOnly = (argv as Record<string, unknown>)['skill'] === true;
    const installBoth = !hookOnly && !skillOnly;

    console.log('Installing Hyperspell memory integration for OpenClaw...\n');

    if (installBoth || hookOnly) {
      installHook();
    }
    if (installBoth || skillOnly) {
      installSkill();
    }

    checkCredentials();
    printMcpConfig();

    console.log('\nDone! Restart OpenClaw to activate the integration.');
  } else if (command === 'uninstall') {
    console.log('Removing Hyperspell memory integration...\n');
    uninstallHook();
    uninstallSkill();
    console.log('\nDone!');
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
}

export { installHook, installSkill, uninstallHook, uninstallSkill };
