import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProgressRing } from "./ProgressRing";
import {
  startStream,
  pauseStream,
  resumeStream,
  cancelStream,
} from "../../store/actions/packagesAction";

const Actions = () => {
  const dispatch = useDispatch();
  const { boughtPackage, status } = useSelector((state) => state.packages);

  const [spentTime, setSpentTime] = useState(0);

  useEffect(() => {
    if (status === "streaming") {
      const interval = setInterval(() => {
        setSpentTime((spentTime) => spentTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (status === "paused") {
      setSpentTime(spentTime);
    }
  }, [status, spentTime]);

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
          <div className="mx-auto">
            <ProgressRing
              percent={
                status === "cancelled"
                  ? 100
                  : (spentTime / boughtPackage.time_in_seconds) * 100
              }
              size={80}
              lineWidth={8}
              progressColor={status === "cancelled" ? "#ED584F" : "#59A0D2"}
              trackColor="#DBE2FB"
            >
              <p
                className="font-semibold text-xs text-blue leading-5"
                style={{ marginBottom: "0", fontSize: "0.875rem" }}
              >
                {Number.parseFloat(
                  (spentTime / boughtPackage.time_in_seconds) * 100,
                ).toFixed(0)}{" "}
                %
              </p>
            </ProgressRing>
            <h5 className="text-center text-base text-gray-900 font-medium capitalize mt-1">
              {status ? (
                status
              ) : (
                <div className="">
                  Click <span className="font-bold text-green-900">Start</span>{" "}
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
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
