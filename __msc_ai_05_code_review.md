
# Code Reviews

---

## Adversarial Code Review core principles

Adversarial code review core principle: review like code trying to fail in production, not like teammate trying hard.

Core principles:

1. Assume hostile reality
Code hit bad inputs, race conditions, partial outages, stale data, weird timing, misuse.

2. Review behavior, not intent
Ignore `what author meant.` Check what code actually does on all paths.

3. Search failure modes first
Ask:
- What breaks?
- What leaks?
- What corrupts data?
- What deadlocks, loops, or retries forever?
- What becomes slow at scale?

4. Attack trust boundaries
Focus on:
- user input
- network responses
- file system
- env vars
- auth claims
- DB results
- third-party services

Never trust unchecked data.

5. Look for invariant violations
Find assumptions code must preserve:
- state stays consistent
- permissions stay enforced
- money/counts never drift
- resource lifecycle always closed/cleaned up

6. Trace unhappy paths
Happy path easy. Review:
- null/undefined
- timeout
- retry
- partial success
- rollback
- duplicate request
- concurrent update

7. Think like attacker and chaos monkey
Could malicious or accidental actor:
- bypass auth
- escalate privileges
- inject commands/query/data
- trigger denial of service
- exfiltrate secrets
- abuse expensive operations

8. Prefer concrete evidence
Findings should tie to exact code path, input, and outcome. Not vibes.

9. Prioritize impact over style
Order review by:
- correctness
- security
- data integrity
- reliability
- performance
- maintainability
Style last unless it hides bug.

10. Demand testable fixes
Good review comment says:
- where bug lives
- why bug happens
- how it can fail
- what change or test should cover it

11. Review system context, not isolated diff only
Diff can look safe but break:
- callers
- schema contracts
- caching
- retries
- background jobs
- monitoring
- migrations

12. Be skeptical of `works locally`
Local success proves little. Ask about load, concurrency, old data, bad data, prod config.

Practical reviewer mindset:
- `What assumption here false?`
- `What if this called twice?`
- `What if response late/out of order?`
- `Who should not reach this path?`
- `What happens after dependency fails?`
- `Can state become half-updated?`

If you want, I can turn this into:
1. short reviewer checklist
2. senior-level PR review template
3. adversarial review rubric for frontend/backend specifically


---

**TODO**

- SEARCH FOR BEST CODE REVIEW SKILLS -- neutral ones, language specific ones
