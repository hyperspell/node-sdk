/**
 * Skill template content for OpenClaw integration.
 *
 * The skill instructs the OpenClaw agent when and how to use
 * Hyperspell MCP tools for on-demand memory operations.
 */

import * as fs from 'fs';
import * as path from 'path';

export function getSkillContent(): string {
  const templatePath = path.join(__dirname, 'templates', 'SKILL.md');
  return fs.readFileSync(templatePath, 'utf-8');
}

export function getHookContent(): string {
  const templatePath = path.join(__dirname, 'templates', 'HOOK.md');
  return fs.readFileSync(templatePath, 'utf-8');
}

export function getHookHandlerPath(): string {
  return path.join(__dirname, 'hook.js');
}
