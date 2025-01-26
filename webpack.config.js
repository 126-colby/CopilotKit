const path = require('path');

module.exports = {
  entry: './examples/coagents-routing/ui/src/app/api/copilotkit/route.ts', // Entry point for your application
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Apply this rule to TypeScript files
        use: 'ts-loader', // Use ts-loader to transpile TypeScript to JavaScript
        exclude: /node_modules/, // Exclude node_modules directory from transpilation
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these file extensions
  },
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};
