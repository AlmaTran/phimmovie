import React,{useEffect} from "react";
import { Carousel } from "antd";
import {useDispatch, useSelector,} from 'react-redux'
import axios from 'axios'
import { DOMAIN } from "../../../../util/Setting/config";
import { SET_CAROUSEL } from "../../../../redux/action/types/CarouselType";
import "./HomeCarousel.css";
import { getCarouselAction } from "../../../../redux/action/CarouselActions";


export default function HomeCarousel() {

  const {arrImg} = useSelector(state=>state.CarouselReducer)

  const dispatch = useDispatch();

  //sẽ tự kích hoạt khi component load
  // useEffect(async()=> {
  //     try {
  //       const result = await axios({
  //             url:  `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
  //             method: 'GET'
  //          });

  //          //Đưa lên reducer
  //          console.log('result',result);

  //          dispatch({
  //             type:SET_CAROUSEL,
  //             arrImg : result.data.content
  //          })


  //     } catch(errors){
  //       console.log('errors', errors)
  //     }

  //     // axios({})
  // },[])

  useEffect( () => {

      // const action = getCarouselAction();

      dispatch(getCarouselAction());
      
  },[])


  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  const renderImg = () => {
    return arrImg.map((item,index) => {
      return  <div  key={index}>
      <div  style={{...contentStyle,backgroundImage:`url(${item.hinhAnh})`}}>
        {/* <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} /> */}
      </div>
    </div>
    }) 
  }

  return (
    
    <Carousel effect="fade">
      {renderImg()}
    
    </Carousel>
  );
}
