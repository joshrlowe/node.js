# Installing 3rd Party Packages with NPM

Node.js provides several key concepts, and it's crucial to understand the differences between them:

- **Global Features**: These include keywords like `const` and `function`, as well as global objects like `process`. These features are always available and do not require importing into files where they are used.
- **Core Node.js Modules**: These are built-in modules that come with the Node.js installation, such as `fs` (file system module), `http` (HTTP module), and `path` (path module). These modules do not need to be installed but must be imported into your files when you want to use their features.
- **Third-Party Modules**: These modules are installed using `npm install` and can add various features to your application. They must be installed in the project directory and imported into your files when you want to use their functionality.

## `npm install <package-name>`

The `npm install <package-name>` command installs a package from the npm repository and adds it to your project's `node_modules` directory. If the `package.json` file exists, it also updates the `dependencies` section.

Example: `npm install express`

## `npm install <package-name> --save`

The `npm install <package-name> --save` command installs a package and automatically adds it to the `dependencies` section of your `package.json` file. This is useful for packages that are required for your project to run in production.

Example: `npm install express --save`

## `npm install <package-name> --save-dev`

The `npm install <package-name> --save-dev` command installs a package and adds it to the `devDependencies` section of your `package.json` file. This is used for packages that are only needed during the development phase, such as testing frameworks or build tools.

Example: `npm install mocha --save-dev`

## `npm install <package-name> -g`

The `npm install <package-name> -g` command installs a package globally on your system, making it available from the command line anywhere on your machine. This is typically used for tools that you want to use across multiple projects.

Example: `npm install nodemon -g`

## devDependencies in package.json

The `devDependencies` section in `package.json` lists packages that are only needed during the development of your project. These dependencies are not required in the production environment. They typically include testing libraries, build tools, and other utilities that assist in the development process.

### Example

In `package.json`:

```json
{
  "devDependencies": {
    "mocha": "^8.3.2",
    "webpack": "^5.24.2"
  }
}
```

## node_modules Directory

The `node_modules` directory contains all the installed packages and their dependencies for your project. It is automatically created when you install packages using npm. This directory can become quite large as it includes not only the packages you installed but also their dependencies.

### Should You Include `node_modules` in Version Control?

It is generally recommended not to include the `node_modules` directory in version control systems like Git. Instead, the `package.json` and `package-lock.json` files should be included. These files provide a complete record of the dependencies and their versions, allowing others to recreate the `node_modules` directory by running `npm install`.
