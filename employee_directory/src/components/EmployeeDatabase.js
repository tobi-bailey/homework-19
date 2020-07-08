import React, { Component } from "react";
import "./style.css";
import office from "../data/office.json";


class EmployeeDatabase extends Component {
  // const [sortedField, setSortedField] = React.useState(null);
  // let sortedLastName = [props.office];
  // if (sortedField !== null) {
  //   sortedLastName.sort((a, b) => {
  //     if (a[sortedField] < b[sortedField]) {
  //       return -1;
  //     }
  //     if (a[sortedField] > b[sortedField]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }
  state = {
    office: office,
    sorted: false,
    order: "desc"
  }
  handleToggle = () => {
    if (this.state.sorted) {
      this.setState({
        order: "asc"
      })
    } else {
        this.setState({
          order: "desc"
        })
    }
    const sortLastName = () => {
      var last1 = office.last[0];
      var last2 = office.last[1];
      var n = last1.localeCompare(last2);
      document.getElementById("demo").innerHTML = n;
      if (this.state.sorted = "asc"){
        console.log(last1)
      }
      console.log(n);
    }
}


render() {
  return (
    <div className="sort">
    <div className="sortText">Earliest first --- Latest first</div>
      <table className="employees">
        <thead>
          <tr>
            <th>First Name</th>
            <th><input
                checked={this.state.sorted}
                onChange={this.handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                />
                Last Name</th>
            <th>Role</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
        {this.state.office.map(office => (
            <tr key={office.id}>
              <td>{office.first}</td>
              <td>{office.last}</td>
              <td>{office.occupation}</td>
              <td><img src={office.image} alt={office.first} thumbnail responsive/></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
  }
};

export default EmployeeDatabase;