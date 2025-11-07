import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/Products";

function Product() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

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

  const average = 0;
  const total = 0;

  const Row = ({ label }) => (
    <div className="grid grid-cols-[64px_1fr_84px] items-center gap-4">
      <span className="text-gray-800">{label}</span>
      <div className="h-3 w-full rounded-full bg-yellow-400" />
      <span className="text-gray-700 text-sm">0 reviews</span>
    </div>
  );

  return (
    <main className="bg-stone-100 min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm tracking-widest text-gray-700 hover:text-black"
        >
          ← BACK TO PRODUCTS
        </button> */}

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
      <section className="mx-auto max-w-6xl p-4 sm:p-6">
        {/* TOP: REVIEWS OVERVIEW CARD */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl tracking-[0.15em]">
              REVIEWS OVERVIEW
            </h2>
            <button className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-900">
              ADD REVIEW
            </button>
          </div>

          <div className="border-t border-gray-200" />

          <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-[220px_1fr]">
            {/* LEFT BOX (avg + stars + count) */}
            <div className="flex flex-col items-center justify-center sm:border-r sm:pr-6">
              <div className="text-5xl font-semibold text-gray-800">
                {average}
              </div>

              {/* star placeholders exactly like screenshot */}
              <div className="mt-3 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
                  </svg>
                ))}
              </div>

              <div className="mt-2 text-sm text-gray-600">{total} Ratings</div>
            </div>

            {/* RIGHT: 5 bars with labels and “0 reviews” */}
            <div className="space-y-5 sm:pl-2">
              <Row label="5 stars" />
              <Row label="4 stars" />
              <Row label="3 stars" />
              <Row label="2 stars" />
              <Row label="1 stars" />
            </div>
          </div>
        </div>

        {/* BOTTOM: ALL REVIEWS CARD */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="p-5 sm:p-6">
            <h3 className="text-xl sm:text-2xl tracking-[0.15em]">
              ALL REVIEWS
            </h3>
          </div>
          <div className="border-t border-gray-200" />
          <div className="h-40 sm:h-60" />
        </div>
      </section>
    </main>
  );
}

export default Product;
