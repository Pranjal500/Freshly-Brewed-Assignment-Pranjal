 import React from "react";
 import img1 from "../img/image 2.png";
 import img2 from "../img/Rectangle 10.png";
 import img3 from "../img/Rectangle 11.png";
//  import img6 from "../img/13.png";
//  import img7 from "../img/Rectangle 16.png";
//  import img8 from "../img/Rectangle 15 (5).png";
//  import img9 from "../img/Rectangle 15 (4).png";
//  import img10 from "../img/Rectangle 15 (1).png";





 const Header2 = ()=>{
    return(
        <>
       
         <div className="head2">

            <p className="cont3">Find the expertises from </p>

            <div className="company">
               <img src={img1} alt="img"/>
               <img src={img2} alt="img"/>
               <img src={img3} alt="img"/>

              
            </div>
            <p className="cont4">Make your career growth in</p>

            <div className="career">
            <p className="title">UX/UI Design</p>
            <p className="title">Product Management</p>
            <p className="title">Marketing</p>
            <p className="title">Data Science</p>
            <p className="title">Teaching</p>
             
            {/* <p className="title">UI</p>
              <img src={img6} alt="img"  />
              

              <p className="title">UI</p>
              <img src={img7} alt="img"  />

              <p className="title">UI</p>
              <img src={img8} alt="img"  />

              <p className="title">UI</p> 
              <img src={img9} alt="img"  />

              <p className="title">UI</p> 
              <img src={img10} alt="img"  />  */}

             

            </div>
         </div>

        </>
    )
 }

 export default Header2;