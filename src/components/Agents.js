import agent1 from "../imgs/agent1.jpg";
import agent2 from "../imgs/agent2.jpg";
import Counter from "./Counter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Agents = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="agents">
        <div className="agent_one">
          <img src={agent1} alt="" />
        </div>
        <div className="agent_two_container">
          <div className="agent_two">
            <img src={agent2} alt="" />
          </div>
          <div className="text" data-aos="fade-up" data-aos-delay="500">
            <span className="about">About</span>
            <h2>Onntym Delivery</h2>
            <p className="description">
              At Onntym , we’re more than just a delivery service; we’re a
              promise of reliability, speed, and convenience, our mission has
              always been to connect students with the goods they need, right at
              their doorstep. 1) Swift Deliveries: With our state-of-the-art
              tracking system and efficient logistics, we ensure your package
              reaches you in the shortest time possible. 2) Safety: We prioritize
              the safety of our customers and employees. Our delivery personnel
              undergo proper clarification to ensure secure handling and timely
              deliveries. 3) Customer-Centric Approach: Our dedicated support
              team is always at your service, ready to assist and address any
              queries or concerns.
            </p>
            <span className="opening_time">
              Mon - Fri (<b>10 AM - 8PM</b>){" "}
            </span>
          </div>
        </div>
      </div>
      <h2 className="delivery_text" data-aos="fade-up" data-aos-delay="1000">
        We are a Delivery service that serves over <Counter /> students in
        Redeemers university
      </h2>
    </>
  );
};
