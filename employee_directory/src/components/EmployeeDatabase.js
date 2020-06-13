import React from "react";
import "./style.css";

function EmployeeDatabase(props) {
  const [sortedField, setSortedField] = React.useState(null);
  let sortedLastName = [props.office];
  if (sortedField !== null) {
    sortedLastName.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }
  return (
    <table className="employees">
      <thead>
        <tr>
          <th>First Name</th>
          <th><button type="button" onClick={() => setSortedField('last')}>
              Last Name
            </button></th>
          <th>Role</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      {props.office.map(office => (
          <tr key={office.id}>
            <td>{office.first}</td>
            <td>{office.last}</td>
            <td>{office.occupation}</td>
            <td><img src={office.image} alt={office.first} thumbnail responsive/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// function EmployeeDatabase() {
//   // const { products } = props;
//   return (
//     <div>
//       <h1>Dunder Mifflin Employee Database</h1>
//       <table className="employees">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Role</th>
//             <th>Image</th>
//           </tr>
//         </thead>
//         <tbody>
//             <tr>
//               <td>Dwight</td>
//               <td>Schrute</td>
//               <td>Assistant to the Regional Manager</td>
//               <td><img src="images/dwight.jpg" alt="Dwigth" /></td>
//             </tr>
//             <tr>
//               <td>Pam</td>
//               <td>Beesley</td>
//               <td>Receptionist</td>
//               <td><img src="images/pam.jpeg" alt="Pam" /></td>
//             </tr>
//             <tr>
//               <td>Jim</td>
//               <td>Halpert</td>
//               <td>Sales</td>
//               <td><img src="images/jim.jpeg" alt="Jim" /></td>
//             </tr>
//             <tr>
//               <td>Michael</td>
//               <td>Scott</td>
//               <td>Regional Manager</td>
//               <td><img src="images/michael.png" alt="Michael" /></td>
//             </tr>
//             <tr>
//               <td>Ryan</td>
//               <td>Howard</td>
//               <td>Temp</td>
//               <td><img src="images/ryan.png" alt="Ryan" /></td>
//             </tr>
//             <tr>
//               <td>Kevin</td>
//               <td>Malone</td>
//               <td>Accountant</td>
//               <td><img src="images/kevin.png" alt="Kevin" /></td>
//             </tr>
//             <tr>
//               <td>Toby</td>
//               <td>Flenderson</td>
//               <td>Human Resources</td>
//               <td><img src="images/tobi.png" alt="Toby" /></td>
//             </tr>
//             <tr>
//               <td>Stanley</td>
//               <td>Hundson</td>
//               <td>Sales</td>
//               <td><img src="images/stanley.jpg" alt="Stanley" /></td>
//             </tr>
//             <tr>
//               <td>Angela</td>
//               <td>Martin</td>
//               <td>Accountant</td>
//               <td><img src="images/angela.jpg" alt="Angela" /></td>
//             </tr>
//             <tr>
//               <td>Kelly</td>
//               <td>Kapoor</td>
//               <td>Customer Service</td>
//               <td><img src="images/kelly.jpeg" alt="Kelly" /></td>
//             </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default EmployeeDatabase;