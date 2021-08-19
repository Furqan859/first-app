import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
class CarouselSlides extends  Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
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
                        src="https://www.fotomega.pl/galerie/h/hp-laptop-15s-eq1028nw_15043.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Furqan's Laptop</h3>
                        <p>Made by Furqan.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.fotomega.pl/galerie/h/hp-laptop-15s-eq1028nw_15043.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Furqan's Laptop</h3>
                        <p>Made by Furqan.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselSlides