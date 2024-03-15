import "./Main.css";
import StarIcon from "./images/icon-star.svg"
function Main(){
    return (
    <div className="main">
        <div className="star-icon">
            <img src={StarIcon}/>
        </div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    </div>
        
    )
}

export default Main;