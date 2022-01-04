import { useSelector } from "react-redux";

const StartSurfingPage = () => {
  /* const data = {
    url: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj3nMWMl5b1AhXAyzgGHZJCAaEQPAgI",
  };
  var url = data.url + "&output=embed";
  window.location.replace(url); */

  const { status } = useSelector((state) => state.packages);

  const videos = [
    "https://www.youtube.com/embed/s0dMTAQM4cw",
    "https://www.youtube.com/embed/69a2WlAhVh8",
    "https://www.youtube.com/embed/RNVh_HMX2IY",
    "https://www.youtube.com/embed/4OiXfDdbtnM",
  ];

  return (
    <>
      <div className="container">
        {status === null ? (
          <h1 className="mt-10 text-center text-3xl font-bold max-w-2xl mx-auto">
            Click at the Start button at bottom right corner of the page and
            start surfing
          </h1>
        ) : status === "paused" ? (
          <h1 className="mt-10 text-center text-3xl font-bold max-w-2xl mx-auto">
            Click at the Resume button at bottom right corner of the page and
            resume surfing
          </h1>
        ) : (
          <div className="grid grid-cols-3 gap-10 my-16">
            {videos.map((video, index) => {
              return (
                <div key={index} className=" aspect-[16/12]">
                  <iframe
                    width="100%"
                    height=""
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default StartSurfingPage;
