import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyPackage } from "../../store/actions/packagesAction";

const packages = [
  {
    name: "15 Minute Surfe",
    price: 0.001,
    time_in_hrs: 0.25,
    time_in_seconds: 900,
  },
  {
    name: "1 Hour Surfe",
    price: 0.003,
    time_in_hrs: 1,
    time_in_seconds: 3600,
  },
  {
    name: "1 Day Surfe",
    price: 0.01,
    time_in_hrs: 24,
    time_in_seconds: 86400,
  },
];

const SurfeSection = () => {
  const dispatch = useDispatch();
  const { boughtPackage } = useSelector((state) => state.packages);

  console.log(boughtPackage);

  return (
    <>
      <div className="bg-gray-50 py-24">
        <div className="container">
          <h1 className="text-center text-3xl text-gray-800 font-semibold mb-12">
            Surfe Now
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {packages.map((pack, index) => {
              return (
                <div
                  key={index}
                  className="bg-white shadow-lg p-4 rounded-lg flex flex-col gap-y-8"
                >
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {pack.name}
                  </h4>
                  <div className="flex items-center justify-between gap-x-4">
                    <h5 className="text-base text-gray-700 font-light">
                      Unlimited Surfe
                    </h5>
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <div className="flex justify-between gap-x-2">
                      <div className="text-lg font-semibold text-gray-700">
                        {pack.price} SOL
                      </div>
                      <div className="flex items-center gap-x-2 text-base text-gray-700 font-light">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{pack.time_in_hrs} hrs</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`py-3 rounded-full transition text-white ${
                        boughtPackage.name === pack.name
                          ? "bg-green-700 hover:bg-green-800"
                          : "bg-indigo-700 hover:bg-indigo-800 "
                      }`}
                      onClick={() => dispatch(buyPackage(pack))}
                      disabled={boughtPackage.name === pack.name}
                    >
                      {boughtPackage.name === pack.name ? "Buyed" : "Buy Now"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SurfeSection;
