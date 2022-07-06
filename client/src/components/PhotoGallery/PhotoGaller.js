import Slider from "react-slick";
import "./PhotoGallery.css"
const PhotoGallery = () => {
    let settings = {
        className: "slider variable-width",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                },
            },
        ],
    };

    const importAll = (r) => {
        return r.keys().map(r);
    };

    const images1 = importAll(
        require.context(
            "../../Images/photo-gallery",
            false,
            /\.(png|jpe?g|svg|jfif|JPE?G)$/
        )
    );

    return (
        <div className="w-100 m-lg-auto color-blue-cyan " id="photo-gallery">
            <div
                
                className=""
            ></div>
            <div
                
               
                className="f-bold f-2 mb-4 mx-4"
            >
                Photo Gallery
            </div>
            <div >
                <Slider {...settings}>
                    {images1.map((image, index) => {
                      console.log(image);
                        return (
                            <div
                                className="d-flex justify-content-center align-items-center"
                                key={index}
                            >
                                <div className="slider-img-div">
                                    <img
                                        className="h-100"
                                        src={image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default PhotoGallery;
