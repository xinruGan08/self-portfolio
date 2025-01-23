import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';


export default function Footer(){
   return (
    <footer>
        <small>
            © 2025 Xin Ru Gan. Last updated: January 16, 2025.
            <div className="contact">
                <a href="https://github.com/xinruGan08" className='contact-icon' target="_blank">
                    <AiFillGithub/>
                </a>
                <a href="mailto:xrgan04@example.com" className='contact-icon' target="_blank">
                    <AiOutlineMail/>
                </a>
                <a href="https://www.linkedin.com/in/xin-ru-gan-18a5a0311/" className='contact-icon' target="_blank">
                    <FaLinkedin/>
                </a>
            </div>
        </small>
    </footer>
   )
}