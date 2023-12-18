import LandingImg from '../imgs/landing-pic2.jpg'
import '../styles/Home.css'

export const Home = () => {
    return (
        <div className='landing_container'>
            <img src={LandingImg} alt="" className='landing-img' />
            <div className="landing_text">
                <span className='landing_text_1'>AWVIX</span>
                <h1 className='landing_text_2'>NUTRITIOUS & TASTY</h1>
            </div>
            <hr />
        </div>
    )
}