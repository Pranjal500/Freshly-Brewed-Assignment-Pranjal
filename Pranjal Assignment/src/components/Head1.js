import React from "react";
import logo1 from "../img/blue rocket.png"



const Header1 = ()=>{
   return(
      <>
      <div className="head1">
       <div className="img1"> <img src={logo1} alt="logo" className="rocket"/>    </div>
       <p className="cont1">Grow Faster Together</p>
       <p className="cont2">Find a mentor or Lead the path for someone It’s a win win!</p>

       <input className="findbtn" type="button" value={"Find a Mentor"}/>
       <input className="becomebtn" type="button" value={"Become a Mentor"}/>
      
      </div>
      
      
      
      </>
   )

}

export default Header1;