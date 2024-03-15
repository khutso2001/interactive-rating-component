import "./SubmitButton.css";
function SubmitButton(props){

    return(
        <div className="SubmitButton">
            <button onClick={()=>
               props.setIsSubmitted(true)
            }
            >SUBMIT</button>
        </div>
    )
   
}

export default SubmitButton;