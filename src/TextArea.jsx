import { useState } from "react"

export default function TextArea() {

    const [text, setText] = useState("")

  return (
    <div>
        <textarea className="w-[800px] bg-slate-300" 
                onChange={(e)=>{
                    const newText = e.target.value;
                    setText(newText)
                }}
                placeholder="Enter Your Text"
                spellCheck="false"
                value={text}
                
        ></textarea>
    </div>
  )
}
