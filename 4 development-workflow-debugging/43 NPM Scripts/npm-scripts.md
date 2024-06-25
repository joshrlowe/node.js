# NPM Scripts

## `npm init`

The `npm init` command is used to create a new `package.json` file for your Node.js project. This file is essential for managing the project's dependencies, scripts, version, and other metadata. When you run `npm init`, it will prompt you to enter various details about your project, such as the name, version, description, entry point, test command, Git repository, keywords, author, and license. You can also use `npm init -y` to skip the prompts and create a `package.json` file with default values.

Usage: `npm init` or `npm init -y`

## `npm run <command>`

The `npm run <command>` command is used to run scripts defined in the `scripts` section of your `package.json` file. These scripts can automate various tasks such as testing, building, and deploying your project. To define a script, add it to the `scripts` section of `package.json` with a name and the command to execute.

In `package.json`:

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  }
}
```

To run the build script: `npm run build`

## `npm start`

The `npm start` command is a special script defined in the `scripts` section of `package.json` that runs when you execute `npm start`. By default, it runs the `node server.js` command if no start script is specified. It's commonly used to start your application or server.

In `package.json`:

```json
{
  "scripts": {
    "start": "node app.js"
  }
}
```

To start the application: `npm start`
