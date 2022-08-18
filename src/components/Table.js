import React, { useState } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import axios from "axios";

const fixedItemArray = [
  "LME-ALU",
  "LME-XCU",
  "LME-ZNC",
  "LME-NI",
  "LME-LEAD",
  "LME-TIN",
  "URANIUM",
  "STEEL-SC",
  "STEEL-RE",
];

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function CommodityTable() {
  const [data, setData] = useState([]);
  const getData = async function () {
    const response = await axios.get(
      "https://metals-api.com/api/latest?access_key=543nnp1c89tbo4bzc2my0moo3r66eby8c8nm5csp8udx4r33sbmceaqapdml"
    );
    let finalData = fixedItemArray.reduce((acc, ele) => {
      if (response.data.rates[ele]) {
        acc.push({
          commodity: ele,
          price: response.data.rates[ele],
        });
      }
      return acc;
    }, []);

    setData(finalData);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Commodity",
        accessor: "commodity",
      },
      {
        Header: "Prices",
        accessor: "price",
      },
    ],
    []
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
      <button onClick={getData} style={{ width: "150px" }}>
        Fetch Latest Data
      </button>
    </div>
  );
}

export default CommodityTable;
