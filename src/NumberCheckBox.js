import "./NumberCheckBox.css"
function NumberCheckBox(props){
  
    return(
    <div className="NumberCheckBox">
        <button  onClick={()=>
            props.setItems(props.number)
        }
        >{props.number}</button>
    </div>
    )
    
}

export default NumberCheckBox;

