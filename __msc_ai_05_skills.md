

# Agent Skills

Agent Skills are great to achieve consistency. Humble beginnings: start with very short skills, then iterate.

Situations in which you may want to create an agent skill:
- a 1-5 lines long prompt you run 3+ times per week, you want a shortcut
- a 6+ lines long prompt you run 1+ time per week, you want 1/ a shortcut 2/ to iterate on it to make it more efficient 3/ achieve consistency across runs



## Best Practices When Creating Agent Skills

- Start small - your ego is not your amigo
- Build many tiny skills
- Grow slowly - use the skill a lot, build trust and experience, and only when it feels mature and stable, then iterate
- Keep instructions concise - consider using caveman-like tool
- Agents are verbose, if an agent helps you create the skill, instruct it to "make the smallest possible change"
- Provide the least paths possible - this may confuse the agent
- Provide the least loops possible
- Guide the user as much as possible - highlight important info in tiny table of 1 cell if needed
- Only use name and description in the frontmatter -> so it's supported across harnesses



## Agent Skills Finders

- https://www.skills.sh/ - skill.sh (by vercel) 

- https://github.com/anthropics/skills - Anthropic Skills

- https://mcpservers.org/agent-skills

- https://www.skillsdirectory.com

- https://www.skills.sh/vercel-labs/skills/find-skills - "find skill" skill 

- https://skillsmp.com/

- https://smithery.ai/skills

- https://mcpmarket.com/tools/skills

- https://www.skillsdirectory.com/

- https://github.com/travisvn/awesome-claude-skills



## Reknown Skills Repos And Creators

- https://github.com/obra/superpowers

- https://www.skills.sh/vercel-labs/agent-skills/ --> Vercel

- https://github.com/affaan-m/

- https://github.com/mattpocock/skills/ --> videos on https://www.youtube.com/@mattpocockuk

- https://github.com/bmad-code-org/BMAD-METHOD/ --> videos on https://www.youtube.com/@BMadCode

- https://github.com/kunchenguid/ --> videos on https://www.youtube.com/@kunchenguid

- https://github.com/addyosmani/agent-skills/

- https://github.com/anthropics/skills/ --> Anthropic

- https://github.com/cursor/plugins --> Cursor

- https://github.com/cursor/plugins/tree/main/pstack

- https://github.com/t3dotgg --> videos on https://youtube.com/@t3dotgg


## Favorites Skills

- React Best Practices (by Vercel) - https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices
  - https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices

- React Patterns - https://skillsmp.com/skills/affaan-m-ecc-skills-react-patterns-skill-md
  - https://github.com/affaan-m/ECC/blob/main/skills/react-patterns/SKILL.md
  
- React Testing - https://skillsmp.com/skills/affaan-m-ecc-skills-react-testing-skill-md
  - https://github.com/affaan-m/ECC/tree/main/skills/react-testing

- React Best Practices - https://www.skills.sh/mastra-ai/mastra/react-best-practices
  - https://github.com/mastra-ai/mastra/blob/main/.claude/skills/react-best-practices/SKILL.md

- React Doctor - https://github.com/millionco/react-doctor

- Caveman - makes agent talk like caveman - https://github.com/juliusbrussee/caveman
For Windows, install by saving to a file first, then run:
`irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 -OutFile .\install.ps1`
`.\install.ps1`

- no-mistakes - ship relentlessly - https://github.com/kunchenguid/no-mistakes

- treehouse - git worktrees made easy - https://github.com/kunchenguid/treehouse



# Skills To Try

- Review: Code Review - https://github.com/mattpocock/skills/tree/main/skills/engineering/code-review

- Review: Code Review - https://github.com/bmad-code-org/BMAD-METHOD/tree/main/src/bmm-skills/4-implementation/bmad-code-review

- Meta: Skill Creator skill - https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md

- Meta: Writing Great Skills - https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-great-skills/SKILL.md

- SDD: Grilling - https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md

- SDD: Brainstorming - https://github.com/bmad-code-org/BMAD-METHOD/tree/main/src/core-skills/bmad-brainstorming

- TDD - https://github.com/addyosmani/agent-skills/blob/main/skills/test-driven-development/SKILL.md

- TDD - https://github.com/wshobson/agents/tree/main/plugins/tdd-workflows

- TDD - https://github.com/rohitg00/awesome-claude-code-toolkit/blob/main/skills/tdd-mastery/SKILL.md

- TDD - https://github.com/mattpocock/skills/tree/main/skills/engineering/tdd

- Generates web assets (i.e. favicons, app icons) - https://github.com/alonw0/web-asset-generator

- FE Design - https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md

- Learn: Teach - https://github.com/mattpocock/skills/tree/main/skills/productivity/teach

- Learn: Do I understand - https://github.com/AnthonyPAlicea/skills/tree/main/skills/do-i-understand

- Perf: RTK - reduce LLM token consumption by 60-90% - https://github.com/rtk-ai/rtk



## Specs Skills

- Agent Skills Open Standard - https://agentskills.io/
- Agent Skills Open Standard: Specs - https://agentskills.io/specification
- Claude Code CLI: Agent Skills - https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- OpenCode: Agent Skills - https://opencode.ai/docs/skills/
- Copilot: Agent Skills - https://docs.github.com/en/copilot/concepts/agents/about-agent-skills
- Codex: Agent Skills - https://developers.openai.com/codex/skills


## Prompt: Make Claude Skills Compatible With Copilot

I added the below agent skill to but it was for Claude Code, what are the modifications required to make it supported by Github Copilot?
[SKILL_PATH]

I added links to the documentation in case this can help
- Copilot: Agent Skills https://docs.github.com/en/copilot/concepts/agents/about-agent-skills 
- Claude Code CLI: Agent Skills https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview 


## Prompt: Make Claude Skills Compatible With GPT

I added the below agent skill to but it was for Claude Code, what are the modifications required to make it supported by GPT?
[SKILL_PATH]

I added links to the documentation in case this can help
- Codex: Agent Skills https://developers.openai.com/codex/skills
- Claude Code CLI: Agent Skills https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview 


---

**TODO**

- SEARCH FOR SKILL CREATOR
