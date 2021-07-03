import React, { useContext } from "react";
import { API_CONTEXT } from "../../context";
import ImageItem from "../ImageItem";
const Images = () => {
  const { images } = useContext(API_CONTEXT);

  return (
    <>
      <main className="flex flex-wrap w-full pr-4 pt-8 pb-8 content-between justify-center h-full">
        { images.length !== 0 ? (
            
          images.map((image) => <ImageItem key={image.id} image={image} />)
        ) : (
          <div className="text-gray-500 flex flex-col items-start justify-center"><p>No results found..</p></div>
        )}
      </main>
    </>
  );
};

export default Images;
