import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRowSlick.module.css";
import Film from "../Film/Film";
import FilmFlip from "../Film/FilmFlip";
import { SET_FILM_DANG_CHIEU } from "../../redux/action/types/QuanLyPhimType";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
        color: "black",
        backgroundColor: "gray",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{
        ...style,
        display: "block",
        color: "black",
        backgroundColor: "gray",
      }}
      onClick={onClick}
    />
  );
}

export default class MultipleRows extends Component {
  renderFilms = () => {
    return this.props.arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          {/* <Film phim={item} />; */}
          <FilmFlip item={item}/>
        </div>
      );
    });
  };
  render() {
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
         <button type="button" class="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100" onClick={() => {
             const action = {type: SET_FILM_DANG_CHIEU}
             
         }}>PHIM ĐANG CHIẾU</button>
         <button type="button" class="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100">PHIM SẤP CHIẾU</button>

          <Slider {...settings}>
            {this.renderFilms()}
            {this.renderFilms()}
            {this.renderFilms()}
            {this.renderFilms()}
            {this.renderFilms()}
            {this.renderFilms()}
            {this.renderFilms()}
            {this.renderFilms()}
            {this.renderFilms()}
            
            

            {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div> */}
          </Slider>
        </div>
      
    );
  }
}
