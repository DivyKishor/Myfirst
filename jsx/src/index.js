//import React and ReactDom libraries 
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

//Get a reference to div with ID root
const el = document.getElementById('root');

//Tell React to take control of that element
const root = ReactDom.createRoot(el);

// create a component
	

//show the component on screen
root.render(<App />);
