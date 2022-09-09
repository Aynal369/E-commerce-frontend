import React from "react";
import useDB from "../../hook/useDB";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ShowProducts = () => {
  const { allProducts, setAllProducts } = useDB();

  return (
    <section>
      <div className="container">
        <div className="row g-4">
          {allProducts.map((data) => (
            <div className="col-sm-3" key={data._id}>
              <div className="shadow-sm bg-light">
                <div className="text-center">
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="img-fluid"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>

                <div className="mt-3 text-center">
                  <h4>{data.title}</h4>
                </div>
                <div className="d-flex justify-content-around mt-3">
                  <p>$ {data.price}</p>
                  <div>
                    <AddShoppingCartIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowProducts;
