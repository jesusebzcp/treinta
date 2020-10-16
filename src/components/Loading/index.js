import React from "react";
import Lottie from "react-lottie";
import animation from "../../../public/static/img/loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="contLoading">
      <img src="/static/img/logo.png" />
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
