import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  connectWallet,
  disconnectWallet,
} from "../../store/actions/walletAction";

const routes = [
  {
    path: "/",
    name: "Home",
    protected: false,
  },
  {
    path: "/profile",
    name: "Profile",
    protected: false,
  },
  {
    path: "/start-surfing",
    name: "Start Surfing",
    protected: true,
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const { isPackageBought } = useSelector((state) => state.packages);
  const { isWalletConnected } = useSelector((state) => state.wallet);

  const connectToWallet = () => {
    dispatch(connectWallet());
  };
  const disconnectFromWallet = () => {
    dispatch(disconnectWallet());
  };

  return (
    <>
      <nav className=" bg-white shadow-lg">
        <div className="container">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center gap-12">
              <NavLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={43}
                  height={44}
                  viewBox="0 0 43 44"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                    fill="#667EEA"
                  />
                </svg>
              </NavLink>
              <div className="flex items-center gap-6">
                {routes.map((route, index) => {
                  return (
                    <div key={index} className="">
                      <NavLink
                        exact
                        to={route.path}
                        className={`text-base text-gray-700 font-medium ${
                          route.protected === true &&
                          !isPackageBought &&
                          "hidden"
                        }`}
                        activeClassName="text-primary text-gray-800 font-semibold"
                      >
                        {route.name}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>

            {isWalletConnected ? (
              <button
                onClick={disconnectFromWallet}
                type="button"
                className="button-danger"
              >
                Disconnect Wallet
              </button>
            ) : (
              <button
                onClick={connectToWallet}
                type="button"
                className="button"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
