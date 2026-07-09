# Frontend AI Capstone

## Goal

This repository is my setup repository for the Frontend AI Engineering track. The goal is to practice building frontend projects with a clean AI-assisted workflow using Node.js LTS, Git, GitHub, and Claude Code or Cursor.

This repo specifically exists to prove that my frontend AI engineering environment (toolchain, repo structure, and AI assistant configuration) is set up correctly before starting capstone project work.

## Tech Stack

- **Runtime:** Node.js (LTS)
- **Version control:** Git + GitHub
- **AI tooling:** Claude Code / Cursor
- **Editor:** VS Code (or equivalent)

## AI Usage

This project is built using an AI-assisted workflow. Claude Code (or Cursor) is used to:

- Scaffold and maintain repository structure
- Draft and refine documentation
- Assist with commits following the Conventional Commits standard

AI assistant behavior and rules for this repo are defined in [`CLAUDE.md`](./CLAUDE.md).

## Current Status

Environment setup in progress. Core repo files (README, LICENSE, .gitignore, CLAUDE.md) have been added and the workflow has been verified with a small commit history.

## Verify the Environment

Run these commands to confirm the toolchain is set up correctly:

```bash
node -v            # Node.js LTS installed
git --version
gh --version        # GitHub CLI, used to create/manage this repo
npm run check-node  # confirms the running Node version satisfies package.json's engines field
git log --oneline
```

The last command should show at least 3 commits following the Conventional Commits format (`docs:`, `chore:`, etc.).

## Success Criteria

- [x] Repo initialized with README, LICENSE, .gitignore, and CLAUDE.md
- [x] Git history uses Conventional Commits
- [ ] First real frontend capstone project scaffolded on top of this setup
