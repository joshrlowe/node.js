# Nodemon

Nodemon is a utility for Node.js applications that automatically restarts the server whenever changes are detected in the code. It is particularly useful during development as it eliminates the need to manually stop and start the server after each code modification.

## Key Features of Nodemon

- **Automatic Restarts**: Nodemon watches the files in your project directory and automatically restarts the server when changes are detected.
- **Customizable Watching**: You can configure Nodemon to watch specific files or directories, ignore certain paths, and even watch for specific file extensions.
- **Integration with Existing Node.js Applications**: Nodemon can be used directly with your existing Node.js applications without requiring changes to your code.

### Installation

Nodemon can be installed globally or locally in your project:

Installing Nodemon globally allows you to use it across multiple projects:  
`npm install -g nodemon`

Installing Nodemon locally adds it as a dependency in your project and makes it available in your project's `node_modules` directory:  
`npm install --save-dev nodemon`

### Usage

You can run your application with Nodemon instead of the usual `node` command. If your entry point file is `app.js`, you would run `nodemon app.js` or `npx nodemon app.js` if only installed locally.
