"use strict";

import envVars from "./constants/env-vars";
import { createServer } from "./server";


const port = envVars.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});