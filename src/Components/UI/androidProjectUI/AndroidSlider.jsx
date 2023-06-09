import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function AndroidSlider({ images }) {
  var settings = {
    // dots: true,
    // className: "",
    // lazyLoad: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="android-slide-container">
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index} className="android-slide-img">
              <img src={image.img} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default AndroidSlider;
