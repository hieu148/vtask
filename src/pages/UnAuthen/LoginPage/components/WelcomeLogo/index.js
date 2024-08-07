import welcomeLogo from '../../../../../asset/img/welcome-logo.png'
import './style.css'

function WelcomeLogo(){
    return(
        <div className={"welcome-logo-container"}>
            <img src={welcomeLogo} alt=""/>
        </div>
    )
}

export default WelcomeLogo