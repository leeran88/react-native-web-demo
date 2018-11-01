# react-native-web-demo

## Running the demo
* `npm run start-web` - to start web demo using webpack
* `npm run start-native` - to start native demo using expo

## Demos
* Demo - A simple React Native app running also on the web.
* Demo2 - An app using a 3rd party library supporting react native web
* Demo3 - An app using a 3rd party library not supporting react native web

## Switching between each demo
Inside `App.js` file, replace the following import statement: `import Demo from './app-react-native/Demo';` with
* `import Demo from './app-react-native/Demo2;`
* `import Demo from './app-react-native/Demo3;`
