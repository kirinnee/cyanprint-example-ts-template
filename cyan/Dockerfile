FROM oven/bun:1.0.11
LABEL cyanprint.dev=true
COPY package.json .
COPY bun.lockb .
RUN bun install
COPY . .
CMD bun run index.ts
