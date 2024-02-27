"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all-categories");
  console.log("🚀 ~ Categories ~ currentCategory:", currentCategory);

  const getProduct = async () => {
    await axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex justify-between">
      <button
        className={`${
          currentCategory === "all-categories"
            ? "border-blue-400 bg-blue-100"
            : "border-gray-400 bg-white"
        } hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow`}
        onClick={() => setCurrentCategory("all-categories")}
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
          onClick={() => setCurrentCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
