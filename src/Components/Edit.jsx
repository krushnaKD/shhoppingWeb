import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Contex";

const Edit = () => {
  const [products, setproducts] = useContext(ProductContext);
  const Navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [product, setproduct] = useState({
    title: "",
    image: "",
    price: "",
    category: "",
    description: "",
  });

  const Changehandler = (e) => {
    // console.log([e.target.name] ,e.target.value );

    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
    // console.log(product);
  }, [id]);

  const getDataHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.category.trim().length < 5 ||
      product.description.trim().length < 5
    ) {
      alert("Each & Every input shuld be greter then 4");
    }

    const pi = products.findIndex((p) => p.id == id);
    const Copydata = [...products];
    Copydata[pi] = { ...products[pi], ...product };

    console.log(products);
    setproducts([...products, product]);

    localStorage.setItem("products", JSON.stringify([...products, product]));
    Navigate("/");
  };
  console.log(product);

  return (
    <>
      <div className="w-full h-screen  p-[5%] pl-[20%]">
        <form
          onSubmit={getDataHandler}
          action=""
          className="pl-10 flex flex-col gap-3"
        >
          <h1 className="text-2xl font-semibold mb-3">Add New Items!</h1>
          <input
            type="url"
            placeholder="Enter Image Link"
            className="w-[52%] border-1 border-zinc-400 bg-zinc-200 rounded-md py-3 text-lg pl-1"
            name="image"
            onChange={Changehandler}
            value={product && product.image}
          />
          <input
            type="text"
            placeholder="Title"
            className="w-[52%] border-1 border-zinc-400 bg-zinc-200 rounded-md py-3 text-lg pl-1"
            name="title"
            onChange={Changehandler}
            value={product && product.title}
          />
          <div className="gap-4 flex">
            <input
              type="text"
              placeholder="Category"
              className="w-[25%] border-1 border-zinc-400 bg-zinc-200 rounded-md ml-1 py-3 text-lg pl-1"
              name="category"
              onChange={Changehandler}
              value={product && product.category}
            />
            <input
              type="Number"
              placeholder="Price"
              className="w-[25%] border-1 border-zinc-400 bg-zinc-200 rounded-md py-3 text-lg pl-1"
              name="price"
              onChange={Changehandler}
              value={product && product.price}
            />
          </div>

          <textarea
            name="description"
            onChange={Changehandler}
            value={product && product.description}
            className="text-md bg-zinc-200 rounded-md  p-3 w-[52%]"
            rows="7"
          ></textarea>

          <button
            onClick={Changehandler}
            className="border-2 w-[20%] border-blue-300 px-2 py-1 rounded mt-5"
          >
            Add New Product
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
