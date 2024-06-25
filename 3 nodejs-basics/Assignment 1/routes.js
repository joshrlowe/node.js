const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(`
            <html>
                <head>
                    <title>Assignment 1 - Home</title>
                </head>
                <body>
                    <h1>Welcome to my Assignment 1!</h1>
                    <h2>Create User</h2>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username">
                        <button type="Submit">Send</button>
                    </form>
                </body>
            </html>`);
    return res.end();
  }

  if (url === "/users") {
    res.write(`
            <html>
                <head>
                    <title>Assignment 1 - Users</title>
                </head>
                <body>
                    <h1>Users</h1>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                    </ul>
                </body>
            </html>`);
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const username = Buffer.concat(body).toString().split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
};

module.exports = routeHandler;
