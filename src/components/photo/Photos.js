import React, { useEffect, useState } from "react";
import axios from "axios";
const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      // handle success
      //   console.log(response);
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
const Photos = () => {
  // useEffect( callback, [depencencies])
  // useEffect(function callback(){
  //     // side-effects
  // },[]);
  const [randomPhotos, setRandomPhotos] = useState([]);
  // console.log("outside");
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMorePhotos = () => {
    getRandomPhotos(nextPage).then((images) => {
        const newPhotos = [...randomPhotos, ...images];
        setRandomPhotos(newPhotos);
        setNextPage(nextPage + 1);
      });
  };
  useEffect(() => {
    // document.title = 'welcome to useEffect';
    // console.log("inside")
    handleLoadMorePhotos();
  }, []);
  return (
    <div>
      <div className="grid gap-5 grid-cols-4 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={`${item.id}${index}`} className="p-3 bg-white shadow-md rounded-lg">
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button onClick={handleLoadMorePhotos} className="inline-block px-8 py-4 bg-purple-600 text-white">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
