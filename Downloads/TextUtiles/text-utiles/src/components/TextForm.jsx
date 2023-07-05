import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]= useState("")
    const handleUpperCaseClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    //  console.log("Uppercase ")
    }
    const handleLowerCaseClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearTextClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Your Text is cleared","success")
    }
    const handleCopyTextClick=()=>{
         let newText=document.getElementById("myTextArea")
         newText.select();
         navigator.clipboard.writeText(newText.value);
         props.showAlert("Copied to clipboard!","success")
 }
   const handleRemoveExtraSpacesClick=()=>{
         let newText=text.split(/[ ]+/);
         setText(newText.join(" "));
         props.showAlert("Extra spaces removed!","success")
 }
    const handleOnChange=(e)=>{
        // console.log("Uppercase1 ")
        setText(e.target.value)
    }
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-3'>{props.heading}</h1>
   <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myTextArea" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}  rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleClearTextClick}>Clear Text</button>
  <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleCopyTextClick}>Copy Text</button>
  <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
  </div>
  <div className='container my-4' style={{color:props.mode==='dark'?'white':'#042743'}}> 
    <h2>Text Summary</h2>
       <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
       <p>Minutes read <i><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b></i></p>
       <h3>Preview</h3>
  <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  
 </>
  )
}
