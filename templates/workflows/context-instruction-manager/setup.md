# Context Instruction Manager Setup

1. Analyze the existing project structure, find the ./docs/ folder, ./instructions/ folder, and ./claude.md file
2. Based on the File Categories, copy and modify the `_instruction-agent.md` file to `./.claude/agents/instruction-agent.md`
3. Create the necessary directories if they don't exist:
   - `./instructions/` for instruction definitions
   - `./temp/` for execution workspaces
4. Remove all temporary files: `_instruction-agent.md`, `setup.md`