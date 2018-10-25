# todo-list

This app is based on those Caster.io courses:
* [Build a React Native Application](https://caster.io/courses/build-a-react-native-application)
* [React Native with Redux](https://caster.io/courses/react-native-with-redux)

Are the best React Native courses ever :raised_hands:

Running the Server:
* Download the server folder [here](https://github.com/nanohop/react-native-todo/tree/master/server)
* From your terminal run `yarn install` within `server` folder
* Then `node index.js`

Running the app:
* Install [React Native](https://facebook.github.io/react-native/docs/getting-started.html) dependencies (If you haven't yet)
* Clone or download this repo
* From your terminal run `yarn install` within `TodoList` folder
* Put your own IP address in the `lib/api.js` file (Android)
* Then `react-native run-android` or `react-native run-ios`

This project you will find libraries like:
* Redux to set a global state and local data persistence
* Redux Thunk to dispach asynchronous redux actions
* Native Base for the UI components
* React Navigation for routing and navigation

And you will find three branches:
* `layer/init hosts` the app without Redux
* `layer/redux hosts` the app with Redux

What's next:
* Improve the app using Redux (WIP)
* Improve the app implementing advanced things

![](/art/todo-list.png)
