import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Contex";
import Loading from "./Loading";
import axios from "../utils/Axios";
const Home = () => {
  const [products] = useContext(ProductContext);

   const {search } = useLocation();
   let category = decodeURIComponent(search.split('=')[1])
  //  console.log(category)

   const [filterProducts ,setfilterProducts] = useState(products)

   const productgetcategory = async () => {
    try {
      const  {data} = await axios.get(`./products/category/${category}`)
     setfilterProducts(data)
    } catch (error) {
    console.log(error);
    
    }
   }

   useEffect(()=>{
    if(category.length > 0) productgetcategory();
   },[category])

console.log(filterProducts);


  return products ? (
    <>
      <Navbar />
      <div className=" w-[85%] h-full flex gap-10 flex-wrap p-10">
        {filterProducts && filterProducts.map((p, i) => (
          <Link key={i}
            to={`/Details/${p.id}`}
            className="w-[17vw] h-[45vh] p-3 rounded border-2 border-zinc-300 flex flex-col items-center ">
              <div className="flex justify-between flex-col h-[100%] items-center">
            <img
              className="w-[65%] hover:scale-110 bg-contain bg-no-repeat bg-center "
              src={p.image}
              alt=""
            />
            <h1 className="mt-5 text-lg font-semibold hover:text-blue-300 ">
              {p.title}
            </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
