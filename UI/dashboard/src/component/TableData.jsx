import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function TableData() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/table");
        console.log("table", response.data);
        setTableData(response.data);
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchData();
  },[]);

  return (
    <div>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Price</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {tableData.map((item) => (
            
            <tr key={item.id}>
              <th scope='row'>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
