1. `npm run mockapi`

   - `"mockapi": "docker run --rm -it -p 3001:4010 -v ${PWD}:/tmp -P stoplight/prism:4 mock -h 0.0.0.0 --cors /tmp/openapi.yaml"`

2. `npx tsx app.ts`

   - `${endpoint}/users/${userId}`を GET でたたく
