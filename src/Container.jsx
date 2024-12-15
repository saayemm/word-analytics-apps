import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";


export default function Container() {

  const [text, setText] = useState("")

  const stats = {
    numberOfWOrds: text.split(/\s/).filter((word)=> word !=="").length,
    numberOfCharacters: text.length,
    facebookCharactersLeft: 2200-text.length,
    linkedinCharactersLeft:  3000-text.length,
  }

  return (
    <main className="flex flex-col justify-between w-full max-w-[1024px] m-auto -mt-8 rounded-md overflow-hidden">
        <TextArea text={text} setText={setText}/>
        <Stats stats={stats}/>
    </main>
  )
}
