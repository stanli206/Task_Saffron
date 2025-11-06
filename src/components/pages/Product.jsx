import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/Products";

function Product() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // use state if available, else find by id (works even after refresh)
  const product = state || products.find((p) => p._id === id) || null;

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-gray-700">Product not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 rounded bg-black px-4 py-2 text"
        >
          Go Home
        </button>
      </div>
    );
  }

  const { name, price, weight, image, flipimage, fullProduct } = product;

  return (
    <main className="bg-stone-100 min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm tracking-widest text-gray-700 hover:text-black"
        >
          ← BACK TO PRODUCTS
        </button>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-md bg-white shadow">
              <img
                src={image}
                alt={name}
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={image} className="h-32 w-full object-cover rounded" />
              <img
                src={flipimage}
                className="h-32 w-full object-cover rounded"
              />
            </div>
          </div>

          {/* details */}
          <div>
            <h1 className="text-2xl md:text-3xl tracking-[0.16em] text-gray-900">
              {name}
            </h1>
            <p className="mt-2 text-lg text-gray-800">
              ₹{price}{" "}
              <span className="text-sm text-gray-600">/ {weight}g</span>
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              {fullProduct?.description}
            </p>
            <p className="mt-2 text-gray-600">{fullProduct?.content}</p>

            {fullProduct?.variants?.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold tracking-widest text-gray-700">
                  VARIANTS
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {fullProduct.variants.map((v, i) => (
                    <span
                      key={i}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {v.weight}g – ₹{v.price}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex gap-3">
              <button className="rounded-full bg-black text-white px-6 py-3 text-sm tracking-widest hover:bg-gray-900">
                ADD TO CART
              </button>
              <button className="rounded-full border px-6 py-3 text-sm tracking-widest">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
