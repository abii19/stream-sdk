import React from "react";
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const { boughtPackage } = useSelector((state) => state.packages);
  return (
    <>
      {Object.keys(boughtPackage).length > 0 ? (
        <div className="mt-10 bg-white shadow-lg p-4 rounded-lg flex flex-col gap-y-8">
          <h4 className="text-lg text-gray-700 font-semibold">
            {boughtPackage.name}
          </h4>
          <div className="flex items-center justify-between gap-x-4">
            <h5 className="text-base text-gray-700 font-light">
              Unlimited Surfe
            </h5>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between gap-x-2">
              <div className="text-lg font-semibold text-gray-700">
                {boughtPackage.price} SOL
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
                <span>{boughtPackage.time_in_hrs} hrs</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="mt-10 text-center text-3xl font-bold">
          Buy Package and Start surfing
        </h1>
      )}
    </>
  );
};

export default ProfilePage;
