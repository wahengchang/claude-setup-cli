# Minimal Generation Pack — Instructions

## What this is
A tiny scaffolding system. You write ONE file (a Purpose Spec) and generate:
- agents (identity + memory notes)
- workflows (trigger + state labels)
- a secrets contract (no real secrets)
- docs (DESIGN, RUNBOOK, ADR, CHANGELOG)

No tools, evals, policies, routing, telemetry, README site, or manifest.

## Quickstart
1) Provide a draft idea of what you want to build (see `instructions/00-draft-to-spec.md`)
2) Generate `purposes/<your>.yaml` from your draft idea
3) Run your generator to hydrate `templates/*` into:
   - `CLAUDE.md` (main entry point), `.claude/agents/`, `workflows/`, `configs/`, `docs/`
4) Review & commit.
5) Clean up: Remove temporary files and folders (`instructions/`, `templates/`, `purposes/`, `INSTRUCTIONS.md`)

## Usage
See `instructions/GENERATOR.md` for complete step-by-step instructions, or jump directly to:
- Start: `instructions/00-draft-to-spec.md` (transform idea → purpose spec)
- Generate: `instructions/01-parse-spec.md` through `instructions/05-create-docs.md`
- Reference: `instructions/06-variables.md` and `instructions/07-special-filters.md`

## Regeneration
- Update `purposes/<your>.yaml` → re-run generation → review diffs.

## Boundaries
- Agents here are advisory only. Execution, routing, guardrails, and telemetry are out of scope and can be added later via separate packs.

## Final Cleanup
After generation is complete and reviewed, remove all temporary scaffolding files:
```bash
rm -rf instructions/ templates/ purposes/ INSTRUCTIONS.md
```

This leaves only the generated project files (`CLAUDE.md`, `claude/agents/`, `workflows/`, `configs/`, `docs/`) and the README.md.