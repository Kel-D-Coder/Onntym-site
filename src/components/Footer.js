import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { FaSnapchat, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa6'

export const Footer = () => {
    return (
        <>
            <section class="footer">
                <div class="social">
                    <Link href="#"> <FaInstagram /> </Link>
                    <Link href="#"> <FaSnapchat /> </Link>
                    <Link href="#"> <FaTwitter /> </Link>
                    <Link href="#"> <FaFacebook /> </Link>
                </div>

                <ul class="list">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Terms</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                </ul>

                <p class="copyright">Kelvin D Coder &copy; 2022</p>
            </section>
        </>
    )
}