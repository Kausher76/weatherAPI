import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ButtonExample from "./ButtonExample";
import Table from "react-bootstrap/Table";
function ApiCalling() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products`);
        setData(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  // console.log(data);

  if (loading) return <ButtonExample />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>
        <Table striped bordered hover variant="dark" responsive="xl">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Warranty</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>
                    {data.category.charAt(0).toUpperCase() +
                      data.category.slice(1)}
                  </td>
                  <td>{data.price}</td>
                  <td>{data.rating}/5</td>
                  <td>{data.warrantyInformation}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ApiCalling;
