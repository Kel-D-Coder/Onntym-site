import agent1 from "../imgs/agent1.jpg"
import agent2 from "../imgs/agent2.jpg"

export const Agents = () => {
    return (
        <div className="agents">
            <div className="agent_one">
                <img src={agent1} alt="" />
            </div>
            <div className="agent_two_container">
                <div className="agent_two">
                    <img src={agent2} alt="" />
                </div>
                <div className="text" data-aos="fade-up" data-aos-delay="500">
                    <span className='about'>About</span>
                    <h2>Onntym Delivery</h2>
                    <p className="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde quisquam porro tempora sed ratione ipsam voluptatem architecto. Omnis totam ratione voluptate voluptatibus atque earum voluptas labore ullam aliquid architecto aut voluptatem mollitia, odio, nisi possimus quaerat nemo. Sed ipsum laboriosam non architecto nam blanditiis quam tempora modi veniam consequatur.
                    </p>
                    <span className="opening_time">Mon - Fri (<b>10 AM - 8PM</b>) </span>
                </div>
            </div>
        </div>
    )
}