import React, { useState } from "react"
function App() {
  const[color,setColor]=useState("Olive");
return (
  <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2">
    <div className=" flex flex-wrap justify-center shadow-lg  gap-3 rounded-3xl px-3 py-2  bg-white " >
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg  "  onClick={()=> setColor("red")} style={{backgroundColor:"red"}}>Red</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg   " onClick={()=> setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg   " onClick={()=> setColor("green")} style={{backgroundColor:"green"}}>Green</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg   " onClick={()=> setColor("grey")} style={{backgroundColor:"grey"}}>Grey</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg   " onClick={()=> setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg  " onClick={()=> setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button> 
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg  "  onClick={()=> setColor("DodgerBlue")} style={{backgroundColor:"DodgerBlue"}}>DodgerBlue</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg   " onClick={()=> setColor("Violet")} style={{backgroundColor:"Violet"}}>Voilet</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg   " onClick={()=> setColor("antiquewhite")} style={{backgroundColor:"antiquewhite"}}>antiquewhite</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg   " onClick={()=> setColor("Cyan")} style={{backgroundColor:"Cyan"}}>Cyan</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg   " onClick={()=> setColor("Fuchsia")} style={{backgroundColor:"Fuchsia"}}>Fuchsia</button>
<button className="px-4 py-1 rounded-full text-white outline-none shadow-lg  " onClick={()=> setColor("lime")} style={{backgroundColor:"lime"}}>lime</button>

</div>

</div>

  </div>
  )
}

export default App;
