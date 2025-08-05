
# Project Setup Workflow

Based on user input, execute the following sequence (pause at each step, wait for user to continue):

## 1. Product Specification
Generate `prd.md` following `./command-prd.md`

## 2. Technical Architecture  
Generate `dev.md` following `./command-dev.md`

## 3. Architecture Review
Review and improve `dev.md` following `./command-dev-review.md`

## 4. Claude Configuration
create `CLAUDE.md` from `_CLAUDE.md` with project context

## 5. Team Planning
Based on `dev.md`, following `./command-subagent.md`, to identify minimal roles needed to complete the project

## 6. Subagent Review
following `./command-subagent-review.md`, to review and improve subagents

## 7. remove setup files
remove all files in ./command* , ./sample-subagent/*, setup.md

