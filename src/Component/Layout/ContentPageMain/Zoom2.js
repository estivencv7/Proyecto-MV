// import React from 'react'
// import cama from '../../../Images/cama1.jpg'
// export const Zoom2 = () => {


//   const ver = (e) => {
//     console.log("hola")

//     let x, y, x1, x2, y1, y2;
//     let fact = 800 / 400;
//     let opp = 100;

//     console.log(opp + opp)

//     if (e != null) {
//       e = window.event
//       x = e.clientX;
//       console.log(e.clientX)
//       y = e.clientY;
//       console.log("hola", x1 = -opp + (x) * fact)
//       x1 = -opp + (x) * fact;
//       y1 = -opp + (y) * fact;
//       x2 = +opp + (x) * fact;
//       y2 = +opp + (y) * fact;

//       // document.images.big.style.display = 'line';
//       // document.images.big.style.letf = (x) = (1 - fact);
//       // document.images.big.style.top = (y) = (1 - fact);
//       // document.images.big.style.clip = "rect(" + y1 + "px," + x2 + "px," + y2 + "px," + x1 + "px)";
//       // document.getElementById('big').style.display = 'line'
//       // document.getElementById('big').style.left = (x) * (1 - fact);
//       // document.getElementById('big').style.top = (x) * (1 - fact);
//       // document.getElementById('big').style.clipPath = "react(" + y1 + "px," + x2 + "px," + y2 + "px," + x1 + "px)";
//       document.images.namedItem('big').style.display = 'line';
//       document.images.namedItem('big').style.left=(x) * (1 - fact);
//       document.images.namedItem('big').style.top=(x) * (1 - fact);
//       document.images.namedItem('big').style.clipPath="rect("+y1+"px"+x2+"px,"+y2+"px,"+x1+"px)";


//     }


//   }

//   return (
//     <div onMouseMove={ver}>
//       <img className='img2' src={cama} id='big'  width='800' ></img>
//       <img className='img1' src={cama} width='400'  ></img>
//     </div>
//   )
// }

