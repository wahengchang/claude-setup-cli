
# Stable Project Setup

For mature codebases with established workflows and existing team structures.

## Prerequisites
- Existing codebase with established patterns
- Current documentation (even if outdated)
- Understanding of project architecture and team roles

## Key Features
- Task tracking in `./tasks/[number]_[taskname].md`
- Change documentation in `changelog.md`
- Role-based agent system in `./.claude/agents/`
- Workflow coordination between specialized agents

## Setup Process

### 1. Review Core Documentation
**Objective**: Streamline existing documentation to essential information only.

- **prd.md**: Update product requirements based on current codebase state
  - Remove outdated features
  - Focus on active/planned functionality
  - Keep stakeholder requirements current
- **dev.md**: Align development architecture with actual implementation
  - Update technology stack
  - Document current patterns and conventions
  - Include planning, deployment and testing procedures

### 2. Review Team Roles
**Objective**: Audit and optimize agent roles for current project needs.

Audit `./.claude/agents/[role].md` files. Remove outdated roles, ensure these core roles exist:
- **Orchestrator** (workflow coordination and task management)
- **Requirements Analyst** (PRD analysis and feature specification)  
- **Implementation Lead** (code architecture and development)
- **Validator** (testing, code review, and quality assurance)
- **Domain-specific roles** tailored to your project


Each role file should include:
```yaml
---
name: role-name
description: When and how this agent should be invoked
tools: specific-tools-if-needed
---
```

### 3. Update CLAUDE.md
**Objective**: Create comprehensive workflow documentation.

Update CLAUDE.md with:
- **Role Definitions**: Explicitly state name, responsibility, and trigger conditions for each role
- **Workflow Section**: Document interaction patterns between agents
  - Task handoff procedures
  - Decision-making hierarchy
  - Escalation paths
- **Task Management**: Reference to `./tasks/` structure
- **Change Tracking**: How changes are recorded in `changelog.md`
- **Project Context**: Current architecture, constraints, and goals

### 4. Update CLAUDE.md
**Objective**: Ensure CLAUDE.md reflects current project state and workflow.

Follow `./command-update-claude.md` to:
- Update role definitions and responsibilities
- Document the core workflow: Plan → Implement → Document
- Define agent interaction patterns
- Establish task management and change tracking systems

### 5. Subagent Review
**Objective**: Optimize individual agent performance.

Follow `./command-subagent-review.md` to:
- Evaluate each agent's effectiveness
- Remove redundant or unused roles
- Streamline agent instructions
- Ensure workflow alignment

### 6. Final Review
**Objective**: Ensure consistency across all documentation.

Cross-reference and validate:
- **CLAUDE.md** workflow matches actual agent roles
- **dev.md** architecture aligns with CLAUDE.md processes
- All role files are referenced and utilized
- Task and change tracking systems are properly configured

### 7. Cleanup
**Objective**: Remove setup artifacts.

Remove temporary files:
- `./command*` files (command-subagent-review.md, command-update-claude.md, etc.)
- `setup.md` (this file)
