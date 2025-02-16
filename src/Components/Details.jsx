import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { ProductContext } from "../utils/Contex";

const Details = () => {
  const [products, setproducts] = useContext(ProductContext);
 const Navigate = useNavigate()
  const [product, setproduct] = useState(null);

  const { id } = useParams();
  console.log(id);

  // const getproductsdata = async() =>  {
  //   try {
  //     const {data} = await axios.get(`/products/${id}`);
  //     console.log(data);
  //     setproducts(data)
  //   } catch (error) {
  //     console.log(error);

  //   }

  // }

 const  deleteHandler = (id) =>{
   const copyofproducts = products.filter((p)=>p.id !== id)

   setproduct(copyofproducts)
   localStorage.setItem("products",JSON.stringify(copyofproducts))
   Navigate("/")
 }

 

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    // getproductsdata();
  }, []);

  return product ? (
    <div className="w-full h-screen p-20 flex items-center justify-center ">
      <div className="w-[60%] flex gap-20 ">
        <img
          className="w-[50vh] bg-no-repeat object-contain"
          src={product.image}
          alt=""
        />
        <div className="mt-20">
          <h1 className="text-3xl font-semibold mb-5">{product.title}</h1>
          <h3 className="text-zinc-500 mb-5">{product.category}</h3>
          <h2 className="mb-10 text-pink-400 font-semibold">
            $ {product.price}
          </h2>
          <p className="font-semibold text-lg text-zinc-500 mb-5">
            {product.description}
          </p>
          {/* <Link to={`/Edit/${product.id}`}  className="rounded text-slate-500 text-lg border-2 border-slate-200 px-6 py-1 hover:bg-green-100 ">
            Edit
          </Link>
          <button onClick={()=>deleteHandler(product.id)} className="rounded text-red-300 text-lg border-2 border-red-200 px-6 py-1 ml-2 hover:bg-red-300 hover:text-black  ">
            Delete
          </button> */}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
