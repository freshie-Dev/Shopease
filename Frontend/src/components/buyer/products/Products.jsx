import React, { useEffect } from "react";
import { useProductContext } from "../../../context/product-context/ProductContextProvider";
import ProductCard from "./ProductCard";
import { GridLoader } from "react-spinners";
import styled from "styled-components";
import ProductsSection from "./ProductsSection";
import FilterSection from "./FilterSection";
import useFilterContext from "../../../context/filter-context/FilterContext";

const Products = () => {
  const { fetchAllProducts, productState } = useProductContext();
  

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <LocalStyles>
      <div className="main   text-[#d9a470]">

        <div className="h-[87vh] w-[350px] p-2 items  md:block hidden">
          <FilterSection/>
        </div>


        <ProductsSection/>
        
      </div>
    </LocalStyles>
  );
};

export default Products;

const LocalStyles = styled.div`
  .main {
    /* display: flex; */
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
