import React from 'react'
import '../../styles/Meals.css';
import { Link } from 'react-router-dom';
import { Pastries, Swallows, Soups, Drinks, Proteins, Foods, Packages, } from '../../Data/Cafeteria1Data/NationalKitchen';

function NationalKitchen() {
  return (
    <React.Fragment>
      <header>Pastries</header>
      <div className="Meals_container">
              {Pastries.map((pastry, i) => {
                const {name, image, price, status} = pastry
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
      <header>Swallow</header>
      <div className="Meals_container">
              {Swallows.map((Swallow, i) => {
                const {name, image, price, status} = Swallow
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
      <header>Soup</header>
      <div className="Meals_container">
              {Soups.map((soup, i) => {
                const {name, image, price, status} = soup
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
      <header>Drinks</header>
      <div className="Meals_container">
              {Drinks.map((Drink, i) => {
                const {name, image, price, status} = Drink
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
      <header>Proteins</header>
      <div className="Meals_container">
              {Proteins.map((Protein, i) => {
                const {name, image, price, status} = Protein
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
      <header>Food</header>
      <div className="Meals_container">
              {Foods.map((Food, i) => {
                const {name, image, price, status} = Food
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
      <header>Packages</header>
      <div className="Meals_container">
              {Packages.map((Package, i) => {
                const {name, image, price, status} = Package
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
    </React.Fragment>
  )
}

export default NationalKitchen
