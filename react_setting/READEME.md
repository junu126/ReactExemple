# Webpack 4와 babel 7으로 react개발환경 셋업하기

Creat-React-App을 사용하지 않고 직접 webpack과 babel을 만져 React개발환경을 구성.

1. React 폴더 생성.

2. Package.json 설정.

```npm
// 웹펙 추가
npm i webpack webpack-cli

// 바벨 추가
npm i @babel/core babel-loader @babel/preset-env @babel/polyfill

// 리엑트 추가
npm i react react-dom @babel/preset-react

// HTML 로더 추가
npm i html-webpack-plugin html-loader

// CSS 로더 추가
npm i mini-css-extract-plugin css-loader
```

3. webpack.config.js & .babelrc 파일 생성.

```js
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ['@babel/polyfill', __dirname + '/src/index.js'],
  output: { path: __dirname + '/dist', filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunckFilename: "[id].css"
    })
  ]
}
```

```json
// .babelrc

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

4. root폴더에 src폴더 생성

5. src에 App.jsx & App.css & index.html & index.js 생성
```js
// App.jsx

import React from 'react';

const App = () => (
  <div>
    <p>React Here!</p>
  </div>
);

export default App;
```

```css
/* App.css */

body {
  width: 300px;
}
```

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ReactSetting</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));
```

6. webpack-dev-server 설치
```npm
npm i --save-dev webpack-dev-server
```

7. package.json의 scripts에 start 추가
```json
// package.json
{
  // ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --hot --inline --mode development --open"
  },
  // ...
}

8. server running
> npm start