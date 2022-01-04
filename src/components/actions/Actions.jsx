import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  startStream,
  pauseStream,
  resumeStream,
  cancelStream,
} from "../../store/actions/packagesAction";

const Actions = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.packages);

  const start = () => {
    dispatch(startStream());
  };
  const pause = () => {
    dispatch(pauseStream());
  };
  const resume = () => {
    dispatch(resumeStream());
  };
  const cancel = () => {
    dispatch(cancelStream());
  };
  return (
    <>
      <div className="fixed bottom-6 right-6 bg-white p-6 shadow-lg border">
        <div className="flex flex-col gap-y-4">
          <div className="">
            <h5 className="text-center text-base text-gray-900 font-medium">
              {status ? (
                status
              ) : (
                <div className="">
                  Click{" "}
                  <span className="text-lg font-bold text-green-900">
                    Start
                  </span>{" "}
                  to start stream
                </div>
              )}
            </h5>
          </div>
          <div className="flex items-center gap-x-3">
            <button
              type="button"
              onClick={start}
              className="flex items-center gap-x-2 px-3 py-2 rounded-md bg-gray-200 text-gray-800 text-base font-semibold hover:bg-gray-300"
              disabled={status !== null}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Start</span>
            </button>

            {status === "paused" ? (
              <>
                <button
                  type="button"
                  onClick={resume}
                  className="flex items-center gap-x-2 px-3 py-2 rounded-md bg-gray-200 text-gray-800 text-base font-semibold hover:bg-gray-300"
                  disabled={status === null || status === "cancelled"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Resume</span>
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={pause}
                className="flex items-center gap-x-2 px-3 py-2 rounded-md bg-gray-200 text-gray-800 text-base font-semibold hover:bg-gray-300"
                disabled={status === null || status === "cancelled"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Pause</span>
              </button>
            )}

            <button
              type="button"
              onClick={cancel}
              className="flex items-center gap-x-2 px-3 py-2 rounded-md bg-gray-200 text-gray-800 text-base font-semibold hover:bg-gray-300"
              disabled={status === null}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actions;
