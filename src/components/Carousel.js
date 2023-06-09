import React from "react";
import Slider from "react-slick";
import product from "../helpers/db.json";
import { Card, Col, Text } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="text-center m-10 text-4xl font-bold italic uppercase text-gray-800 sm:text-5xl sm:tracking-tight lg:text-5xl">
        <p>🍎Our healthy products🍎</p>
      </div>

      <div>
        <Slider {...settings}>
          {product.list.map((item, index) => (
            <div key={index}>
              <Card>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text h4 color="black">
                      {item.title}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Image
                  objectFit="cover"
                  width="100%"
                  height={180}
                  src={"https://nextui.org" + item.img}
                  alt={item.title}
                />
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
