import { useState } from "react"
import Warning from "./Warning";

export default function TextArea({text, setText}) {

    const [warningText, setWarningText] = useState("")
    
    const hundleChange = (e)=>{
        let newText = e.target.value;

        if(newText.includes("<script>")){
          setWarningText("No script tag allowed!")
            newText = newText.replace("<script>", "")
        }
        else if(newText.includes("<HTML>")){
          setWarningText("No HTML tag allowed!")
            newText = newText.replace("<HTML>", "")
        }
        else{
          setWarningText("")
        }
        setText(newText)
        
    }

  return (
    <div className="bg-slate-300">
        <textarea className="w-full min-h-[30vh] bg-slate-300 p-4" 
                onChange={hundleChange}
                placeholder="Enter Your Text"
                spellCheck="false"
                value={text}
                
        ></textarea>
        {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  )
}
