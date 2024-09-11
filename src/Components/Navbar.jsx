import React, { useContext } from "react";
import { ProductContext } from "../utils/Contex";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [products] = useContext(ProductContext);

  let disticnt_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  disticnt_category = [...new Set(disticnt_category)];

  let color = () =>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
  }
  

  return (
    <nav className="bg-zinc-200 w-[17vw] h-[250%] flex flex-col items-center justify-start pt-5 ">
      <div>
        <button className="border-2 border-blue-300 px-2 py-1 rounded">
          Add New Product
        </button>
      </div>
      <hr className="w-[80%] my-2 " />
        <h1 className="text-xl font-semibold mb-2">Category Filter</h1>
         <div className="w-[80%] mb-2">
           {disticnt_category.map((c,i)=>(
            <Link key={i} 
             to={`/?category=${c}`}
            className="flex items-center mb-3">
            <span style={{backgroundColor:color()}} className="rounded-full mr-1 w-[13px] h-[13px] "></span>{" "}
            {c}
            </Link>
           ))}
        </div>
      
    </nav>
  );
};

export default Navbar;
