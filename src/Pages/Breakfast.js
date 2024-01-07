import React from 'react';
import food from '../imgs/variety3.jpg';
import '../styles/Breakfast.css';
import { Link } from 'react-router-dom';

function Breakfast() {
  return (
    <div className="Breakfast_container">
      <div className="Breakfast_details">
        <img src={food} alt="" className="breakfast-img" />
        <h3 className="Breakfast_name">White rice with stew</h3>
        <h3 className="Breakfast_price">$3,000</h3>
        <Link>Order Now</Link>
      </div>
      <div className="Breakfast_details">
        <img src={food} alt="" className="breakfast-img" />
        <h3 className="Breakfast_name">White rice with stew</h3>
        <h3 className="Breakfast_price">$3,000</h3>
        <Link>Order Now</Link>
      </div>
      <div className="Breakfast_details">
        <img src={food} alt="" className="breakfast-img" />
        <h3 className="Breakfast_name">White rice with stew</h3>
        <h3 className="Breakfast_price">$3,000</h3>
        <Link>Order Now</Link>
      </div>
      <div className="Breakfast_details">
        <img src={food} alt="" className="breakfast-img" />
        <h3 className="Breakfast_name">White rice with stew</h3>
        <h3 className="Breakfast_price">$3,000</h3>
        <Link>Order Now</Link>
      </div>
      <div className="Breakfast_details">
        <img src={food} alt="" className="breakfast-img" />
        <h3 className="Breakfast_name">White rice with stew</h3>
        <h3 className="Breakfast_price">$3,000</h3>
        <Link>Order Now</Link>
      </div>
      <div className="Breakfast_details">
        <img src={food} alt="" className="breakfast-img" />
        <h3 className="Breakfast_name">White rice with stew</h3>
        <h3 className="Breakfast_price">$3,000</h3>
        <Link>Order Now</Link>
      </div>
    </div>
  );
}

export default Breakfast;