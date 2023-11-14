// App.jsx
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
} from "../assets";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const MultiCarousel = () => {
  const [items, setItems] = useState([
    { name: "Than cám Indo đóng bao", image: carousel1 },
    { name: "Than cám 7 Quảng Ninh", image: carousel2 },
    { name: "Than cục Úc", image: carousel3 },
    { name: "Than cục xô mỏ Hà Lầm", image: carousel4 },
    { name: "Than cám Indo nâu gar 3600", image: carousel5 },
    { name: "Than cám Indo gar 4200", image: carousel6 },
    { name: "Than cám Indo gar 5500 0-30mm", image: carousel7 },
    { name: "Than cục Úc", image: carousel8 },
  ]);

  // const addItem = () => {
  //   const nextItem = {
  //     name: `Product ${items.length + 1}`,
  //     image: `https://example.com/product-${items.length + 1}.jpg`,
  //   };
  //   setItems([...items, nextItem]);
  // };

  return (
    <div className="bg-white">
      <div className="p-6 text-blue">
        <Carousel
          enableAutoPlay
          itemsToScroll={1}
          autoPlaySpeed={1000}
          breakPoints={breakPoints}
          className="text-blue"
        >
          {items.map((item) => (
            <div key={item.name}>
              <img src={item.image} alt={item.name} className="w-64 h-52" />
              <h2 className="text-center my-2  text-blue-500 text-base font-VNProRegu">
                {item.name}
              </h2>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MultiCarousel;
