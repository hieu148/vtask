import './style.css'
import facebookLogo from '../../../../../asset/img/facebook.png'
import twitterLogo from '../../../../../asset/img/twitter.png'
import tiktokLogo from '../../../../../asset/img/tik-tok.png'
import phonecallLogo from '../../../../../asset/img/phone-call.png'

function LoginFooter(){
    return (
        <div className="footer-container">
            <div className="content">
                <h2> Easy Tasking Management </h2>
            </div>
            <div className="social">
                <img src={facebookLogo} alt=""/>
                <img src={twitterLogo} alt=""/>
                <img src={tiktokLogo} alt=""/>
            </div>
            <div className="phonecall">
                <img src={phonecallLogo} alt=""/>
                <h2> 027.1284.123 </h2>
            </div>
        </div>
    )
}

export default LoginFooter