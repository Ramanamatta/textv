import React,{useState} from 'react'


export default function TextForm(props) {
    const handelUpClick=()=>{
      setText(text.toUpperCase());
      props.showAlert("Converted to UpperCase",'success');
        

    }
    const handelLoClick=()=>{
        setText(text.toLowerCase());
      props.showAlert("Converted to LowerCase",'success');

          
  
      }
    const handelClear=()=>{
        setText("");
      props.showAlert("Text Cleared",'success');

    }

    const handelCopyText=()=>{
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard",'success');

    }
    const handelRemoveSpave=()=>{
        let newtxt=text.split(/[ ]+/) ;
        setText(newtxt.join(" "));
      props.showAlert("ExtraSpaces Removed",'success');

    }
    const handelOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("Enter the text here....");
  return (
    <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='light'?"white":'#020e1a' ,color: props.mode==='light'?'black':'white'}} onChange={handelOnChange} value={text} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-3'onClick={handelUpClick}>change to upperCase</button>
            <button className='btn btn-primary mx-1 my-3'onClick={handelLoClick}>change to LowerCase</button>
            <button className='btn btn-primary mx-1 my-3'onClick={handelClear}>clear text</button>
            <button className='btn btn-primary mx-1 my-3'onClick={handelCopyText}>copy text</button>
            <button className='btn btn-primary mx-1 my-3'onClick={handelRemoveSpave}>Remove Extra Sapes</button>
        </div>
        <div className='conatainer my-3 mx-3' style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text Summery</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the some to text to preview"}</p>
        </div>
    </>
  )
}
