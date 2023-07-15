 import React from "react";

 import img1 from "../img/download.png";
  import img2 from "../img/pic1.png";
  import img3 from "../img/pic2.png";
  import img4 from "../img/pic3.png";

 const Header3 = ()=>{
    return(
        <>
         <div className="clients">
          <p className="cont5">What our Clients says about us</p> 
          <div className="message">                  
            <svg className="arrow1" xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41" fill="none">
            <path d="M24.3911 35.5758L9.31527 20.5L24.3911 5.39125L19.7499 0.75L-0.000144958 20.5L19.7499 40.25L24.3911 35.5758Z" fill="black"/>
            </svg>

            <div className="ellipse">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                <img className="pic" src={img2} alt="img" />
                <div className="triangle">
              <img src={img1} alt="img"/>
                <h3 className="name">Alisa</h3>
                </div>
                <h3 className="founder">Founder,XOXO</h3>
                </div> 
                

                <div className="ellipse">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                <img className="pic" src={img3} alt="img" />
                <div className="triangle">
              <img src={img1} alt="img"/>
              <h3 className="name">Michel</h3>
                </div>
                <h3 className="founder">Manager,QWERTY</h3>
                </div> 

                <div className="ellipse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                <img className="pic" src={img4} alt="img" />
                <div className="triangle">
              <img src={img1} alt="img"/>
              <h3 className="name"> cooper</h3>
                </div>
                <h3 className="founder">HR Director, Meta</h3>
                </div> 
                <svg className="arrow2" xmlns="http://www.w3.org/2000/svg" width="26" height="41" viewBox="0 0 26 41" fill="none">
                <path d="M0.941895 35.5758L16.0177 20.5L0.941895 5.39125L5.58315 0.75L25.3332 20.5L5.58315 40.25L0.941895 35.5758Z" fill="black"/>
                </svg>
                </div>  
         </div>
        </>
    )
 }

 export default Header3;