import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const [isClick, setIsClick] = useState(false);
  const [thumbnailURL, setThumbnailURL] = useState("");
  const [productImageURL, setProductImageURL] = useState([]);

  useEffect(() => {}, [productImageURL]);

  const handleImageUpload = (e) => {
    const imgFiles = e.target.files;
    let imgArr = [];
    for (let i = 0; i < imgFiles.length; i++) {
      let imageData = new FormData();
      imageData.set("key", "732ba5e9e325dbcc90fb02012f317b89");
      imageData.append("image", imgFiles[i]);
      axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then((res) => {
          setThumbnailURL(res.data.data.display_url);
          imgArr.push(res.data.data.display_url);
          setProductImageURL(imgArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const onSubmit = async (data) => {
    const title = data.title;
    const description = data.description;
    const price = data.price;
    const discount = data.discount;
    const unit = data.unit;
    const quantity = data.quantity;
    const brand = data.brand;
    const status = data.status;
    const categories = data.categories;
    const thumbnail = thumbnailURL;
    const productImage = productImageURL;
    const newProduct = {
      title,
      brand,
      description,
      price,
      discount,
      unit,
      quantity,
      status,
      categories,
      thumbnail,
      productImage,
    };
    setIsClick(false);
    axios
      .post("http://localhost:5000/app/v1/product", newProduct)
      .then((response) => {
        if (response.data?.status === "success") {
          toast.success(`${response.data?.message}`);
          reset();
        }
      })
      .catch((err) => {
        swal("Alert!", `${err.response.data.message}`, "error");
      });
  };
  return (
    <section>
      <div className="container mt-2 bg-light">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-6">
            <div className="shadow p-3 p-md-5 rounded-bottom">
              <p className="display-6 text-muted text-center">
                Add a new product
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="row justify-content-center g-4"
              >
                <div className="col-12">
                  <label htmlFor="title">Title/Name:</label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    {...register("title")}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="brand">Brand:</label>
                  <input
                    type="text"
                    id="brand"
                    className="form-control"
                    {...register("brand")}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="categories">Categories:</label>
                  <input
                    type="text"
                    id="categories"
                    className="form-control"
                    {...register("categories")}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    {...register("description")}
                  ></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="thumbnail">Thumbnail:</label>
                  <input
                    type="file"
                    id="thumbnail"
                    className="form-control"
                    {...register("thumbnail")}
                    onChange={handleImageUpload}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="productImage">Product all image:</label>
                  <input
                    type="file"
                    id="productImage"
                    className="form-control"
                    multiple
                    {...register("productImage")}
                    onChange={handleImageUpload}
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    {...register("price")}
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="discount">Discount:</label>
                  <input
                    type="number"
                    id="discount"
                    className="form-control"
                    {...register("discount")}
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    {...register("quantity")}
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="unit">Unit:</label>
                  <select
                    className="form-select"
                    id="unit"
                    {...register("unit")}
                  >
                    <option value="kg">kg</option>
                    <option value="litre">litre</option>
                    <option value="pcs">pcs</option>
                  </select>
                </div>
                <div className="col-5">
                  <label htmlFor="status">Status:</label>
                  <select
                    className="form-select"
                    id="status"
                    {...register("status")}
                  >
                    <option value="in-stock">in-stock</option>
                    <option value="out-of-stock">out-of-stock</option>
                    <option value="discontinued">discontinued</option>
                  </select>
                </div>
                <div className="text-center">
                  {isClick ? (
                    <LoadingButton
                      loading
                      loadingPosition="start"
                      startIcon={<SaveIcon />}
                      variant="outlined"
                    >
                      Loading
                    </LoadingButton>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                    >
                      Add Product
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
