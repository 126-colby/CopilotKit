const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to 'development' or 'production'
  entry: './examples/coagents-routing/ui/src/app/api/copilotkit/route.ts', // Adjust this path if needed
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
