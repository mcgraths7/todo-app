import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>App</div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root)
})