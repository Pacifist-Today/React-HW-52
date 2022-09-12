import React from "react";
import Slide from "./Slide";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            slider: [
                {
                    isActive: true,
                    alt: "first",
                    url: "https://images4.alphacoders.com/587/thumb-1920-587508.png"
                },
                {
                    isActive: false,
                    alt: "second",
                    url: "https://lvgames.info/wp-content/uploads//2022/08/3463456-cyberpunk-2077.jpg"
                },
                {
                    isActive: false,
                    alt: "third",
                    url: "https://i.playground.ru/p/b2_CLDeqK4GuZoNYJl8P5Q.jpeg"
                }
            ],
        }
    }

    changeHandler = ({target}) => {
        const data = [...this.state.slider]
        let counter = this.state.counter
        data[counter].isActive = !data[counter].isActive

        if (target.name === 'right') counter = (counter + 1) % data.length
        else if (target.name === 'left' && counter === 0) counter = data.length - 1
        else if (target.name === 'left') counter = (counter - 1) % data.length

        data[counter].isActive = !data[counter].isActive

        this.setState({
            counter: counter,
            slider: data
        })
    }

    render() {
        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.state.slider.map((value, index) => {
                        return <Slide key={index} isActive={value.isActive} alt={value.alt} url={value.url}/>
                        })
                    }
                </div>
                <button
                    className="carousel-control-prev"
                    name="left"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    onClick={this.changeHandler}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    name="right"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                    onClick={this.changeHandler}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default Carousel