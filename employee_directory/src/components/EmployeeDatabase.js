import React, {Component} from 'react';
import './style.css';
import office from '../data/office.json';
class EmployeeDatabase extends Component {
  state = {
    office: office,
    sorted: false,
  };
  handleToggle = (keyToSortBy) => {
    this.sortList(keyToSortBy);
  };
  sortList = (keyToSortBy) => {
    const copyOffice = [...this.state.office];
    let sorted;
    sorted = copyOffice.sort((a, b) => (a.keyToSortBy > b.keyToSortBy ? 1 : -1));
    this.setState({office: sorted});
  };
  render() {
    return (
      <div className='sort'>
        <table className='employees'>
          <thead>
            <tr>
              <th>
                <input
                    checked={this.state.sorted}
                    onChange={() => this.handleToggle('first')}
                    className='react-switch-checkbox'
                    id={`react-switch-new`}
                    type='checkbox'
                />First Name</th>
              <th>
                <input
                  checked={this.state.sorted}
                  onChange={() => this.handleToggle('last')}
                  className='react-switch-checkbox'
                  id={`react-switch-new`}
                  type='checkbox'
                />
                Last Name
              </th>
              <th>Role</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.office.map((office) => (
              <tr key={office.id}>
                <td>{office.first}</td>
                <td>{office.last}</td>
                <td>{office.occupation}</td>
                <td>
                  <img src={office.image} alt={office.first} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default EmployeeDatabase;