"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import ProductCardSkeleton from "../loader/ProductCardSkeleton";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return loading ? (
    <ProductCardSkeleton />
  ) : (
    <div className="grid grid-cols-4 gap-3">
      {products.map((item) => (
        <div key={item.id}>
          <div className="shadow-lg">
            <Link href={`/products/${item.id}`}>
              <div className="block relative h-28 mt-3 overflow-hidden">
                <Image
                  height={100}
                  width={100}
                  src={item.image}
                  alt="e-commerce"
                  className="object-contain object-center w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3 className="text-gray-500 text-xs hover:font-semibold uppercase tracking-widest title-font">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 title-font text-m font-medium hover:font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {item.title}
                </h2>
              </div>
            </Link>
            <div className="px-3 pb-3">
              <div className="flex items-center space-x-2">
                {item.rating && item.rating.rate ? (
                  <>
                    <p>{item.rating.rate}</p>
                    <ReactStars
                      value={item.rating.rate}
                      count={5}
                      size={20}
                      edit={false}
                      isHalf={true}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      activeColor={"#398e3c"}
                    />
                    <p>({item.rating.count})</p>
                  </>
                ) : (
                  <ReactStars value={0} count={5} size={18} edit={false} />
                )}
              </div>
              <div className="flex items-center justify-between">
                <p className="">
                  <span className="font-semibold">$ </span>
                  {item.price}
                </p>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => handleAddCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
