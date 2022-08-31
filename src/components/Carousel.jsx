import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }

    render() {
        const increment = (e) => {
            this.setState(state => ({
                counter: state.counter + 1
            }))
        const carouselSelector = document.querySelector('.carousel-inner').children

        if (this.state.counter + 1 !== carouselSelector.length) {
            carouselSelector[this.state.counter].className = "carousel-item"
            carouselSelector[this.state.counter + 1].className = "carousel-item active"
        }
        if (this.state.counter + 1 === carouselSelector.length) {
            carouselSelector[this.state.counter].className = "carousel-item"
            carouselSelector[0].className = "carousel-item active"
            this.setState(state => ({
                counter: 0
            }))
        }
        }

        const decrement = () => {
            this.setState(state => ({
                counter: state.counter - 1
            }))
        const carouselSelector = document.querySelector('.carousel-inner').children

        if (this.state.counter !== 0) {
            carouselSelector[this.state.counter].className = "carousel-item"
            carouselSelector[this.state.counter - 1].className = "carousel-item active"
        }
        if (this.state.counter - 1 === -1) {
            carouselSelector[this.state.counter].className = "carousel-item"
            carouselSelector[carouselSelector.length - 1].className = "carousel-item active"
            this.setState(state => ({
                counter: carouselSelector.length - 1
            }))
        }
        }

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img alt="first" className="d-block w-100" src="https://stroyboom.lg.ua/wp-content/uploads/2019/11/%D0%9A%D0%93-%D0%A8%D0%9F-%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%B3%D1%80%D0%B5%D1%81-400%D1%85400-%D1%81%D0%B2-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-03-160%D0%BC2-%D0%BF%D0%B0%D1%87%D0%BA%D0%B0-1-%D0%B9-%D1%81%D0%BE%D1%80%D1%82-7680%D0%BC2-300x300.jpg"/>
                    </div>
                    <div className="carousel-item">
                        <img alt="second" className="d-block w-100" src="https://stroyboom.lg.ua/wp-content/uploads/2021/10/%D0%9A%D0%B5%D1%80%D0%B0%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%82-%D0%90%D1%80%D0%BA%D0%BE%D1%81-300x300.jpg"/>
                    </div>
                    <div className="carousel-item">
                        <img alt="third" className="d-block w-100" src="https://stroyboom.lg.ua/wp-content/uploads/2021/10/%D0%9A%D0%B5%D1%80%D0%B0%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%82-%D0%90%D0%BB%D1%8C%D0%B1%D1%83%D1%81-%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%BE-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-1-300x300.jpg"/>
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" onClick={decrement}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={increment}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default Carousel