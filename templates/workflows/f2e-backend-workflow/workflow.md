# Development Workflow

::: mermaid
sequenceDiagram
    participant U as User
    participant C as Claude Code CLI
    participant B as Backend Server
    participant P as Playwright Browser
    participant L as server.log
    
    Note over U,L: Development Process Flow
    
    U->>C: 1. $ claude
    C->>B: 2. $ npm run dev:logs
    B->>L: 3. Generate server logs
    C<<->>P: 4. Open browser via MCP
    P->>B: 5. Navigate to localhost:3000
    B->>P: 6. Serve frontend
    L<<->>U: 8. $npm run monitor
:::


## Steps

### 1. MCP browser
before implementing , make sure that claude can open browser via MCP (Model Context Protocol).
and server is running with `npm run dev:logs`

1. open browser via MCP
2. `npm run dev:logs`
3. navigate to localhost:3000 (or target page)

when everything is ready, claude will start to implement the feature.
