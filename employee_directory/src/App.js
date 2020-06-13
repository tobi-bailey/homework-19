// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import HelloDiv from "./components/EmployeeDatabase";
import EmployeeDatabase from "./components/EmployeeDatabase";

const office = [
  {
   id: 1,
   first: "Michael",
   last: "Scott",
   occupation: "Regional Manager",
   image: "images/michael.png",
  },
  {
    id: 2,
    first: "Dwight",
    last: "Schrute",
    occupation: "Assistant to the Regional Manager",
    image: "images/dwight.jpg",
        
  },
  {
    id: 3,
    first: "Pam",
    last: "Beesley",
    occupation: "Receptionist",
    image: "images/pam.jpeg",
  },
  {
    id: 4,
    first: "Jim",
    last: "Halpert",
    occupation: "Sales",
    image:  "images/jim.jpeg",
  },
  {
    id: 5,
    first: "Ryan",
    last: "Howard",
    occupation: "Temp",
    image: "images/ryan.png",
  },
  {
    id: 6,
    first: "Kevin",
    last: "Malone",
    occupation: "Accountant",
    image: "images/kevin.png",
  },
  {
    id: 7,
    first: "Toby",
    last: "Flenderson",
    occupation: "Human Resources",
    image: "images/tobi.png",
  },
  {
    id: 8,
    first: "Stanley",
    last: "Hudson",
    occupation: "Sales",
    image: "images/stanley.jpg",
  },
  {
    id: 9,
    first: "Angela",
    last: "Martin",
    occupation: "Accountant",
    image: "images/angela.jpg",
    },
  {
    id: 10,
    first: "Kelly",
    last: "Kapoor",
    occupation: "Customer Service",
    image: "images/kelly.jpeg",
  }
];

function App() {
  return <EmployeeDatabase office={office} />;
}

// function App() {
//   return <EmployeeDatabase />;
// }

export default App;
