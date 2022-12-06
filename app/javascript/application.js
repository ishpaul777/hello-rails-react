// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/greetings" element={<Greeting/>}/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);

// how to use react with rails with jsbundling-rails
//step 1: add the following to your Gemfile
// gem 'jsbundling-rails', '~> 0.1.0'

//step 2: add the following to your package.json
// "dependencies": {
//   "@hotwired/turbo-rails": "^7.0.0-beta.3",
//   "react": "^17.0.2",
//   "react-dom": "^17.0.2"
// }

//step 3: add the following to your app/javascript/application.js
// import "@hotwired/turbo-rails"
// import "./controllers"
// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//   return (<h1>Hello World!</h1>);
// }

// ReactDOM.render(
//   <App/>,

//   document.getElementById('root'),
// );
