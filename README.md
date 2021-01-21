# Socket IO Test Client

## Intro

Want to test your socket io implementation in your backend while your client isn't ready, then this is for you.

## Usage

- On your server, set the cors origin to a wildcard(\*)
  ```js
  const io = require("socket.io")(http, {
    cors: { origin: "*" },
  });
  ```
- Run your server
- Visit [the test client](https://socket-client.netlify.app/)
- Connect to your server
- Emit and Listen ⚡
