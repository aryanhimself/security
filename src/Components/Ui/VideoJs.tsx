"use client";

import React from "react";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const VideoJs = ({ src }: { src: string }) => {
  return <ReactPlayer height={"100%"} width={"100%"} controls url={src} />;
};

export default VideoJs;
