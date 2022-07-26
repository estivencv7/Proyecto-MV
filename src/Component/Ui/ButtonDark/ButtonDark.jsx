import React from 'react'
// import './ButtonDark.css'

export const ButtonDark = () => {
    const darkMode = () => {
      console.log("hola")
        const btnNocturno = document.querySelector("#nocturno");
        document.getElementById("container_Main").classList.toggle("dark");
        document.getElementById("subHeader").remove.className();
        document.getElementById("subHeader").classList.add("hola")
        btnNocturno.classList.toggle("active");
      }
  return (
    <div class="divDark">
      <input type="checkbox"  style={{position:"fixed",margin: "6px 0px 0px 21px"}} id="toggle"  onClick={darkMode}/>
      <label for="toggle" className="button"></label>  
    </div>
    
  )
}
