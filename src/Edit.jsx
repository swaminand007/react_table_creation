import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Edit extends React.Component {
  constructor() {
    super();
  }
  render() {
    var data = [
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
        OrderId: 1,
        OrderOwner: "swami",
        OrderName: "Rice",
        OrderQutantity: "1kg",
        OrderPrice: 40,
        OrderCreationDate: "15-06-2018",
        OrderStatus: "Pending"
      }
    ];
    const columns = [
      {
        Header: " ",
        accessor: "chechbox",
        Cell: ({ original }) => {
          return <input type="checkbox" className="checkbox" />;
        }
      },
      {
        Header: "OrderId",
        accessor: "OrderId"
      },
      {
        Header: "OrderOwner",
        accessor: "OrderOwner"
      },
      {
        Header: "OrderName",
        accessor: "OrderName"
      },
      {
        Header: "OrderQutantity",
        accessor: "OrderQutantity"
      },
      {
        Header: "OrderPrice",
        accessor: "OrderPrice"
      },
      {
        Header: "OrderCreationDate",
        accessor: "OrderCreationDate"
      },
      {
        Header: "OrderStatus",
        accessor: "OrderStatus"
      }
    ];
    return <ReactTable data={data} columns={columns} />;
  }
}
export default Edit;
//return <div>{listsrow.map(item => <ReactTable {...item} />)}</div>;
