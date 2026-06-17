

---

# Glossary

---


## Artifacts

- An artifact is almost always a snapshot that is only true for a specific point in time.Once an artifact is created, it becomes a historical record. It reflects the exact state of knowledge, code, or data at the moment of its creation.
- "Living Artifacts" are continuously updated to reflect the current, real-time truth. However, even these are usually backed by version control, allowing you to look back at past snapshots.
- Spec and plan docs are artifacts, commit them



## LSP (Language Server Protocol)

- Provide features like: Go to definition, Find all references, Real-time error diagnostics, Autocompletion.
- Open, standardized communication protocol.
- Defines a common language for programming language analyzers to speak.
- Reduces the m-times-n complexity problem of providing a high level of support for any programming language in any editor, IDE, or client endpoint to a simpler m-plus-n problem.
- Acts as a bridge between a code editor (the "client", such as VS Code, Neovim, or JetBrains) and the tooling that powers code intelligence (the "server").
- Originally developed by Microsoft. Now also supported by Codenvy, Red Hat, and Sourcegraph among others.
- In the early 2020s, LSP quickly became a "norm" for language intelligence tools providers.



## C4 Model

- Context: The system's place in the world (users, other systems).
- Containers: The deployable units (apps, databases, microservices).
- Components: The modules inside a container.
- Code: Class diagrams (rarely generated, mostly just the code itself).

Developer-friendly approach to software architecture diagramming based on hierarchical abstractions.


