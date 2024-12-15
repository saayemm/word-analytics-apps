import Stats from "./Stats";
import TextArea from "./TextArea";


export default function Container() {
  return (
    <main className="flex justify-between w-full">
        <TextArea/>
        <Stats/>
    </main>
  )
}
