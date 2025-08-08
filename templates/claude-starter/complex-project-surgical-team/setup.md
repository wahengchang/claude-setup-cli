
# Project Setup Workflow
This is a claude setup document, it will help you to setup a claude config with surgical team model. 
*important: No need to implement the programing part.

## Background

The project now going to  **critical and complex feature** in an evolving, unstable project.

- Establish a stable setup to support deep, high-risk development.
- Align all agents and humans around clear roles and workflow.
- Use minimal fils, lightweight but effective docs for coordination and tracking.

## 🧩 Core Setup Files

| File | Purpose |
|------|---------|
| `prd.md` | Defines the feature’s purpose, scope, goals, and success criteria. |
| `dev.md` | Outlines the technical plan: architecture, modules, priorities. |
| `workflow.md` | Describes how the AI agent team collaborates and when to trigger each one. |

---

## 🗂️ Management & Coordination Files

| File | Purpose |
|------|---------|
| `taskboard.md` | Tracks progress using simple columns: Backlog → In Progress → Review → Done. |
| `issue.md` | Logs bugs, blockers, and design questions during development. |
| `changelog.md` | Records meaningful changes to features, code, or structure. Timestamped and concise. |

These files ensure visibility and traceability across fast-moving changes.

## Setup instruction


### 0. User input
user input and save it in file `_input.md`(if it s not exsisted, ask the user),

### 1. Product Specification
review the existing `prd.md`, analyze `_input.md`, update`prd.md`

### 2. Technical Architecture  
review the existing `dev.md`, analyze updated `prd.md`, then update `dev.md` 

### 3. Team Planning
Based on `dev.md`, review `./sample-subagent/*`, to see if the subagents needed to update or we need more agents, after that copy the agents to `./.claude/agents/*`

### 4. memorize the workflow
base on the subagent we have on step4, review the `sample-memory/workflow.md`
then move the files in `sample-memory/*` to `./.claude/memory/*`

### 5. Claude Configuration
create/update `CLAUDE.md` from `_CLAUDE.md` with project context

### 6. remove setup files
remove all files : `_input.md`, `./sample-*`, `_CLAUDE.md` and `setup.md`

### 7. reload claude
request the user to reload claude