import React from "react";
import ReactDOM from "react-dom";

class RowMapper extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.OrderId}</td>
        <td>{this.props.OrderOwner}</td>
        <td>{this.props.OrderName}</td>
        <td>{this.props.OrderQutantity}</td>
        <td>{this.props.OrderPrice}</td>
        <td>{this.props.OrderCreationDate}</td>
        <td>{this.props.OrderStatus}</td>
      </tr>
    );
  }
}

var orders = [
  {
    OrderId: 1,
    OrderOwner: "swami",
    OrderName: "Rice",
    OrderQutantity: "1kg",
    OrderPrice: 40,
    OrderCreationDate: "15-06-2018",
    OrderStatus: "Pending"
  },
  {
    OrderId: 2,
    OrderOwner: "shasank",
    OrderName: "Rice",
    OrderQutantity: "1kg",
    OrderPrice: 40,
    OrderCreationDate: "15-06-2018",
    OrderStatus: "tomorrow"
  }
];

class Order extends React.Component {
  Add(event) {
    alert("hi....");
    event.preventDefault();
  }
  Edit(event) {
    alert("Edited sucessfully....");
    event.preventDefault();
  }

  Delete(event) {
    alert("Deleted sucessfully....");
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <table border="1">
          <tr>
            <input type="submit" value="Add" onClick={this.Add} />|
            <input type="submit" value="Edit" onClick={this.Edit} />|
            <input type="submit" value="Delete" onClick={this.Add} />
          </tr>
          <tr>
            <th>OrderId</th>
            <th>OrderOwner</th>
            <th>OrderName</th>
            <th>OrderQutantity</th>
            <th>OrderPrice</th>
            <th>OrderCreationDate</th>
            <th>OrderStatus</th>
          </tr>
          {orders.map(item => <RowMapper {...item} />)}
        </table>
      </div>
    );
  }
}
export default Order;

// Orders Contain
// OrderId: GUID
// OrderOwner: string with firast Name and last name
// OrderName: string
// OrderQutantity: in Kgs
// OrderPrice: float
// OrderCreationDate: DateTime
// OrderStatus: Pending, Accepted, Cancelled
