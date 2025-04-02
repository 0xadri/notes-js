import React from 'react';

function HelloWorld(){
  return <h1>Hello World!</h1>
}

export default HelloWorld;





import React from 'react';
import HelloWorld from './HelloWorld'

function App(){
  return <HelloWorld/>
}

export default App;





import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);

