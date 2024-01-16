import React from "react";
import { GeneralData } from "../Data/EveningVendorsData/VendorsData";
import { Link } from "react-router-dom";
import '../styles/Meals.css'
import Footer from "../components/Footer";

function General() {
    return (
        <React.Fragment>
            <header>General</header>
            <div className="Meals_container">
                {GeneralData.map((General, i) => {
                    const {name, image, price, status} = General
                    return(
                <div className="Meal_details" key={i}>
                    <div className="img-overLay">
                    <img src={image} alt="" className="Meal-img" />
                    <div className={status}>{status}</div>
                    </div>
                    <h3 className="Meal_name">{name}</h3>
                    <h3 className="Meal_price">₦ {price}</h3>
                    <Link>Order Now</Link>
                </div>
                )
                })}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default General