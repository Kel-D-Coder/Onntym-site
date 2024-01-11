import React from 'react';
import '../styles/Meals.css';
import { Link } from 'react-router-dom';
import pic from '../imgs/drinks.jpg'
// import { mannaPalace } from '../Data/Cafeteria1Data/MannaPalace';

function MannaPalace() {
  return (
    <React.Fragment>
      <header>Pastries</header>
      <div className="Meals_container">
            <React.Fragment>
              <div className="Meal_details">
                <img src={pic} alt="" className="Meal-img" />
                <div className="unavailable">Not available</div>
                <h3 className="Meal_name">rice</h3>
                <h3 className="Meal_price">$3,000</h3>
                <Link>Add To Cart</Link>
              </div>
            </React.Fragment>
      </div>
      <header>Swallow</header>
      <div className="Meals_container">
            <React.Fragment>
              <div className="Meal_details">
                <img src={pic} alt="" className="Meal-img" />
                <div className="unavailable">Not available</div>
                <h3 className="Meal_name">rice</h3>
                <h3 className="Meal_price">$3,000</h3>
                <Link>Add To Cart</Link>
              </div>
            </React.Fragment>
      </div>
      <header>Protein</header>
      <div className="Meals_container">
            <React.Fragment>
              <div className="Meal_details">
                <img src={pic} alt="" className="Meal-img" />
                <div className="unavailable">Not available</div>
                <h3 className="Meal_name">rice</h3>
                <h3 className="Meal_price">$3,000</h3>
                <Link>Add To Cart</Link>
              </div>
            </React.Fragment>
      </div>
      <header>Pack</header>
      <div className="Meals_container">
            <React.Fragment>
              <div className="Meal_details">
                <img src={pic} alt="" className="Meal-img" />
                <div className="unavailable">Not available</div>
                <h3 className="Meal_name">rice</h3>
                <h3 className="Meal_price">$3,000</h3>
                <Link>Add To Cart</Link>
              </div>
            </React.Fragment>
      </div>
      <header>Drinks</header>
      <div className="Meals_container">
            <React.Fragment>
              <div className="Meal_details">
                <img src={pic} alt="" className="Meal-img" />
                <div className="unavailable">Not available</div>
                <h3 className="Meal_name">rice</h3>
                <h3 className="Meal_price">$3,000</h3>
                <Link>Add To Cart</Link>
              </div>
            </React.Fragment>
      </div>
      <header>Food</header>
      <div className="Meals_container">
            <React.Fragment>
              <div className="Meal_details">
                <img src={pic} alt="" className="Meal-img" />
                <div className="unavailable">Not available</div>
                <h3 className="Meal_name">rice</h3>
                <h3 className="Meal_price">$3,000</h3>
                <Link>Add To Cart</Link>
              </div>
            </React.Fragment>
      </div>
      <header>Soups</header>
      <div className="Meals_container">
            <React.Fragment>
              <div className="Meal_details">
                <img src={pic} alt="" className="Meal-img" />
                <div className="unavailable">Not available</div>
                <h3 className="Meal_name">rice</h3>
                <h3 className="Meal_price">$3,000</h3>
                <Link>Add To Cart</Link>
              </div>
            </React.Fragment>
      </div>
    </React.Fragment>
  );
}

export default MannaPalace;
