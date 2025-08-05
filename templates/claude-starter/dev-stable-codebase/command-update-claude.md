# Update CLAUDE.md Command

As the Orchestrator and Tech Lead, update CLAUDE.md to reflect the current project state and workflow.

## Objectives
- Ensure CLAUDE.md accurately represents the current team structure
- Document the core workflow process
- Validate role definitions and interactions

## Tasks

### 1. Role Definitions Update
Review and update each agent role in CLAUDE.md:
- **Name**: Clear, descriptive role name
- **Responsibility**: Specific duties and scope
- **Trigger Conditions**: When this agent should be invoked
- **Tools**: Required tools (if role-specific)

### 2. Core Workflow Documentation
**Critical**: Ensure this workflow is clearly documented:

```
Plan → Implement → Document
```

1. **Plan Phase**
   - Create task file: `./tasks/[number]_[taskname].md`
   - Define scope, requirements, and acceptance criteria
   - Assign appropriate agents

2. **Implement Phase**
   - Execute development work with designated agents
   - Follow established code patterns and conventions
   - Maintain quality standards

3. **Document Phase**
   - Record all changes in `changelog.md`
   - Update relevant documentation
   - Close task file with completion status

### 3. Agent Interaction Patterns
Document how agents collaborate:
- **Task Handoff**: How work passes between agents
- **Decision Making**: Authority and escalation paths  
- **Quality Gates**: Review and validation checkpoints
- **Communication**: How agents coordinate and share context

### 4. Task Management System
Specify in CLAUDE.md:
- Task file naming convention: `./tasks/[number]_[taskname].md`
- Task file structure and required sections
- Status tracking and completion criteria
- Integration with changelog.md

### 5. Change Tracking Process
Define changelog.md structure:
- Entry format and required information
- Categorization (features, fixes, changes, etc.)
- Linking to task files and commits
- Version/milestone organization

## Validation Checklist
- [ ] All active agent roles are documented
- [ ] Core workflow (Plan → Implement → Document) is explicit
- [ ] Task management process is clear
- [ ] Change tracking system is defined
- [ ] Agent interaction patterns are documented
- [ ] CLAUDE.md aligns with actual project structure

## Success Criteria
- Team members can follow workflow without confusion
- New agents can understand their role and triggers
- Task tracking and change management are systematic
- Documentation is maintainable and scales with project growth