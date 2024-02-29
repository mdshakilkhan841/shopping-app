"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import useProductsStore from "@/store/productsStore";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all-categories");
  const products = useProductsStore((state) => state.products);
  const { setProducts } = useProductsStore();

  const getCategories = async () => {
    await axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getProducts = async (url) => {
    console.log("🚀 ~ getProducts ~ url:", url);
    await axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-wrap gap-3 justify-between">
      <button
        className={`${
          currentCategory === "all-categories"
            ? "border-blue-400 bg-blue-100"
            : "border-gray-400 bg-white"
        } hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow`}
        onClick={() => {
          setCurrentCategory("all-categories");
          getProducts(`https://fakestoreapi.com/products`);
        }}
      >
        All Categories
      </button>

      {categories.map((item, index) => (
        <button
          key={index}
          className={`${
            currentCategory === item
              ? "border-blue-400 bg-blue-100"
              : "border-gray-400 bg-white"
          } hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow`}
          onClick={() => {
            setCurrentCategory(item);
            getProducts(`https://fakestoreapi.com/products/category/${item}`);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
