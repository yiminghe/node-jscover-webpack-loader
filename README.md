# node-jscover-webpack-loader

webpack loader for node-jscover

## example

webpack.config.js

```js
 module: {
    loaders: [ ... ],
    postLoaders: [{ // << add subject as webpack's postloader
      test: /\.js$/,
      exclude: /(tests|node_modules)\//,
      loader: 'node-jscover-webpack'
    }]
  }
```
