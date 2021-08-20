import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
class CarouselSlides extends  Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-80"
                        src="https://www.fotomega.pl/galerie/h/hp-laptop-15s-eq1028nw_15043.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Furqan's Laptop</h3>
                        <p>Made by Furqan.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.vox-cdn.com/thumbor/PHD1luBqi0Tc8dVplhHEkwYvjRA=/0x0:2040x1150/1820x1024/filters:focal(857x412:1183x738):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68490964/Best_Phone_Grid_2021_2.5.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Furqan's Mobiles</h3>
                        <p>Made by Furqan.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn2.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2020/12/best_phone_camera_uk_2020_smartphones_iphone_12_pro_max.jpg?itok=4NHx2RXm"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <h3>Furqan's Mobiles</h3>
                        <p>Made by Furqan.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselSlides