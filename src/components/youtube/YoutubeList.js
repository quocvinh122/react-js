import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.image}
          title={item.title}
          author={item.author}
          className={index === 1 ? "abc" : ""}
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
