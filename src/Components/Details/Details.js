import React from "react";
import "./Details.css";
import image1 from "../../assets/row/ss2.png";
import image2 from "../../assets/row/ss3.png";
import image3 from "../../assets/row/ss4.png";
import image4 from "../../assets/row/ss5.png";
import image5 from "../../assets/cards/cd2.jpg";
import image6 from "../../assets/cards/cd6.jpg";
import image7 from "../../assets/cards/cd4.jpg";
import image8 from "../../assets/cards/cd7.jpg";
import src1 from "../../assets/row/scr1.jpg";
import src2 from "../../assets/row/scr3.jpg";
import src3 from "../../assets/row/src4.jpg";
import src4 from "../../assets/row/src5.jpg";
import src5 from "../../assets/row/scr10.jpg";
import src6 from "../../assets/row/src6.jpg";
import src7  from "../../assets/row/scr7.jpg";
import src8  from "../../assets/row/scr8.jpg";

// import ImageCarousel from "../Carousel/ImageCarousel";

const Details = () => {
  // const images = [image1,image2,image3,image4,image5,image6,image7,image8];
  return (
    <div>
      <div className="line-sec">
        <div className="line"></div>
      </div>
      {/* <div className="row-images">
        <motion.div
          className="row1"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img src={image1} alt="" />
        </motion.div>
        <motion.div
          className="row1"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img src={image2} alt="" />
        </motion.div>
        <motion.div
          className="row1"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img src={image3} alt="" />
        </motion.div>
        <motion.div
          className="row1"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img src={image4} alt="" />
        </motion.div>
      </div> */}
      {/* <div className="row-images">
        <ImageCarousel images={images} />
      </div> */}
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={image1} alt="" />
          </div>
          <div className="slide">
            <img src={image2} alt="" />
          </div>
          <div className="slide">
            <img src={image3} alt="" />
          </div>
          <div className="slide">
            <img src={image4} alt="" />
          </div>
          <div className="slide">
            <img src={image5} alt="" />
          </div>
          <div className="slide">
            <img src={image6} alt="" />
          </div>
          <div className="slide">
            <img src={image7} alt="" />
          </div>
          <div className="slide">
            <img src={image8} alt="" />
          </div>
          <div className="slide">
            <img src={src1} alt="" />
          </div>
          <div className="slide">
            <img src={src2} alt="" />
          </div>
          <div className="slide">
            <img src={src3} alt="" />
          </div>
          <div className="slide">
            <img src={src4} alt="" />
          </div>
          <div className="slide">
            <img src={src5} alt="" />
          </div>
          <div className="slide">
            <img src={src6} alt="" />
          </div>
          <div className="slide">
            <img src={src7} alt="" />
          </div>
          <div className="slide">
            <img src={src8} alt="" />
          </div>
        </div>
      </div>
      <div className="para-1">
        <div className="p-1">
          <h1>Meenakshi Scraps</h1>
          <p>
            Purchasing Metal Scraps: Iron, Steel, Copper, Brass, Electronics,
            Computer/Laptop Scraps, and Cable Wire Scraps.
          </p>
        </div>
      </div>
      <div className="line-sec">
        <div className="line"></div>
      </div>
      <div className="para-2">
        <div className="p-2">
          <p>
            lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Beatae hic atque
            error soluta, voluptate praesentium debitis consectetur dolore qui
            quo, ducimus ea obcaecati! Veniam, iure dolorum expedita deleniti
            nemo sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis totam vel suscipit rerum id perspiciatis explicabo, ullam
            quasi repellat vitae.
          </p>
        </div>
      </div>
      <div className="para-3">
        <div className="p-3">
          <h1>Meenakshi Scraps</h1>
          <p>
            We purchase a wide variety of scrap materials from factories and
            industries, including iron, steel, brass, copper, and aluminum. We
            are your trusted scrap buyers.
          </p>
        </div>
      </div>
      <div className="line-sec">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Details;
