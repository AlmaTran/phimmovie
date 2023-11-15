import { Fragment } from "react"
// import { Route } from "react-router-dom";
import { Route } from "react-router";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
import Footer from "./Layout/Footer/Footer";


export const HomeTemplate = (props) => {

    const { Component, ...restProps } = props;


    return <Route {...restProps} render={(propsRoute) => {

        return <Fragment>
            <Header {...propsRoute}/>
            <HomeCarousel {...propsRoute}/>


            <Component {...propsRoute} />


            <hr className="mt-5"/>
            <Footer/>

        </Fragment>

    }} />


}