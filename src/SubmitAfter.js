import "./SubmitAfter.css";
import IlustrationImg from "./images/illustration-thank-you.svg";
function SubmitAfter (props){
    
    return(
        <div className="SubmitAfter">
                <img src={IlustrationImg} alt="logo"/>
                <div className="selectResult"> 
                    <p>You selected {props.items} out of 5</p>
                </div>
                    <h2>Thank you!</h2>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                
        </div>
    )  
}

export default SubmitAfter;