
export default function Stats({stats}) {
  return (
    <section className="flex justify-between bg-slate-200 p-4">
      <Stat number={stats.numberOfCharacters} label="Characters"/>
      <Stat number={stats.numberOfWOrds} label="Words" />
      <Stat number={stats.facebookCharactersLeft} label="Facebook"/>
      <Stat number={stats.linkedinCharactersLeft} label="Linkedin"/>
    </section>
  )
}

function Stat({number, label}){
  return <section className="bg-slate-300 w-full h-full text-black m-1 p-4 rounded-md
          flex flex-col items-center gap-2" >
            <span className="text-2xl font-medium">{number}</span>
            <h2>{label}</h2>
        </section>
}