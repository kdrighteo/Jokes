import React from "react";
import ReactDOM from "react-dom";
import Button from "./Component/Button";
import './App.css';

const rootElement = document.getElementById("root");


const App = () => {
  // Declare a state variable
  const [Joke, setJoke] = React.useState("");

  const fetchApi = () => {
      // Fetching data from the API
          fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
          .then((res) => res.json())
          .then((data) => setJoke(data.joke));
    };
return (
 // Return the Button Component with a conditional statement
  <div className=" mt-60 flex justify-center items-center inline ">
     <div className="box-border hover:box-content h-40 w rounded-2xl border-2 bg-green-60 font-mono italic text-violet-600">{Joke === "" ? <Button callApi={fetchApi} /> : 
      <p className="text-2xl">{Joke}</p>
    }</div>
  </div>
  
 );}
ReactDOM.render(
  <App />,
rootElement
);
export default App
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
