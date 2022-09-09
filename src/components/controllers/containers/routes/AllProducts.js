import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useDB from "../../../../hook/useDB";

const AllProducts = () => {
  const { allProducts, setAllProducts } = useDB();

  let navigate = useNavigate();

  const handleClientUpdate = (id) => {
    //navigate(`/dashboard/users/edit/${id}`);
  };
  const handleDeleteClient = (id) => {
    /* const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://tranquil-gorge-34559.herokuapp.com/clients/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.warn("Successfully delete 1 client ");
            const remaining = allProducts.filter((data) => data._id !== id);
            setAllProducts(remaining);
          }
        });
    } */
  };
  return (
    <section>
      <div className="container mt-2 bg-light">
        <div className="row justify-content-center align-items-center">
          <div className="shadow p-3 rounded-bottom">
            <div className="table-responsive">
              <table className="table table-sm table-hover table-bordered align-middle text-center">
                <thead className="table-success">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Categories</th>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts.map((data, index) => (
                    <tr key={data._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.title}</td>
                      <td>{data.brand}</td>
                      <td>{data.categories}</td>
                      <td>
                        <img src={data.thumbnail} alt={data.title} width={60} />
                      </td>
                      <td>{data.price}</td>
                      <td>{data.discount}</td>
                      <td>{data.quantity}</td>
                      <td>{data.status}</td>
                      <td>
                        <Button
                          variant="outlined"
                          color="warning"
                          disabled
                          onClick={() => handleClientUpdate(data._id)}
                        >
                          <EditIcon />
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="outlined"
                          color="error"
                          disabled
                          onClick={() => handleDeleteClient(data._id)}
                        >
                          <DeleteForeverIcon />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
