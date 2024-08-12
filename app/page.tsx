"use client";
import RiddaraPage from "./RiddaraPage";
import ResponsiveImage from "./ResponsiveImage";
import Riddara from "../public/riddara-white.png";
import Image from "next/image";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Logo} from "@/components/icons";
export default function Home() {
  return (


        <div className="mainContainerAgmc">
    
       
          {/* Section holds first view point area */}
          
         <div className="">
         
         <ResponsiveImage 
          srcMobile="/aee1-mobile.jpg"
          srcSmallTablet="/aee1-small-tablet.jpg"
          srcTabletPortrait="/aee1-tablet-portrait.jpg"
          srcTabletLandscape="/aee1-tablet-landscape.jpg"
          srcSmallDesktop="/aee1-small-desktop.jpg"
          srcLargeDesktop="/aee1-large-desktop.jpg"
          alt="Riddara"
          width={3840} // Adjust these values based on your image requirements
          height={2160} // Adjust these values based on your image requirements
          >
           
          
          
          </ResponsiveImage>
                             <div className="innerDiv ">
                                      <div className="logoWrapper" >
                                           <Image src={Riddara} alt="Riddara" className="imageInsideLogo"></Image>
                                           
                                      </div>
                                      <div  className="floor-1-title"><h1>An intelligent EV brand focusing on the outdoor ecosystem</h1></div>
                                   {/** */} 
                                   <div className="buttonWrapper">
                                      <button className="button">
                                        <span className="button-text">Explore more</span>
                                        <div className="arrow-icon"></div>
                                      </button>
                                    </div>

                    </div> 
          </div>
      
          {/* Caution Lot of experimentations in above piece of code  */}


          <section className="two-columns">
              <div className="column">
                
                 
                 <ResponsiveImage 
                        srcMobile="/f90a-mobile.jpg"
                        srcSmallTablet="/f90a-small-tablet.jpg"
                        srcTabletPortrait="/f90a-tablet-portrait.jpg"
                        srcTabletLandscape="/f90a-tablet-landscape.jpg"
                        srcSmallDesktop="/f90a-small-desktop.jpg"
                        srcLargeDesktop="/f90a-large-desktop.jpg"
                        alt="Riddara in the Mountains"
                        width={1600} // Adjust these values based on your image requirements
                        height={2132} // Adjust these values based on your image requirements
                   >
                 
                 
                 </ResponsiveImage>
              </div>
              <div className="column">
                        <div  className="formcontainer">
                                      <div  className="page-clue_form-title">
                                                Register your interest with RIDDARA for a chance to win 5 exclusive test drive spots (for 2 people each)</div>
                                                <div  className="page-clue_form-subtitle">Meet RIDDARA experts and Famous Car Guru and KOLS this October</div>
                                                <ul  className="page-clue_form-subtitle-detail">
                                                        <li  className="page-clue_form-subtitle-detail-content">
                                                          <span  className="marker"></span>Registration period: July 25 - August 24, 2024 </li>
                                                        <li  className="page-clue_form-subtitle-detail-content">
                                                          <span  className="marker"></span>Announcement of winners: September 1, 2024 via the Facebook Official Page "RIDDARA THAILAND"</li>
                                                </ul>
                                                
                                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">


                                                  
                                                <div className="form-one-column-grid">
                                                    <div className="form-grid-item">
                                                       <Input isRequired type="text" label="First Name" placeholder="Enter your First Name" />
                                                    </div>
                                                    <div className="form-grid-item">
                                                       <Input isRequired type="text" label="Last Name" placeholder="Enter your Last Name" />
                                                    </div>
                                                    <div className="form-grid-item">
                                                       <Input isRequired type="number" label="Phone Number" placeholder="Enter Phone Number" />
                                                    </div>
                                                    <div className="form-grid-item">
                                                    <Input isRequired type="number" label="Phone Number" placeholder="Enter Phone Number" />
                                                    </div>
                                                    <div className="form-grid-item">
                                                    <Input isRequired type="number" label="Verification Code" placeholder="Enter Verification Code" />
                                                    </div>

                                                    <div className="form-grid-item">
                                                    <Input isRequired type="email" label="Email" placeholder="Enter Your Email" />
                                                    </div>
                                                    <div className="form-grid-item center-horizontal" style={{justifyContent:"center"}}>
                                                    <Button  variant="shadow">
                                                                        I am Super Excited !
                                                     </Button>  

                                                    </div>
                                                </div>
                                                   
                                               
                                               
                                                
                                                
                                               
                                                </div>
                                                
                                       </div>
                                                         





                          </div>
             </section>
           
             <section className="tempsectioncta">
                                <div className="temp-full-width-container">
                                                <div className="temp-content">
                                                  

                                                 
                                                
                                                  <ResponsiveImage 
                                                                srcMobile="/0148-mobile.jpg"
                                                                srcSmallTablet="/0148-small-tablet.jpg"
                                                                srcTabletPortrait="/0148-tablet-portrait.jpg"
                                                                srcTabletLandscape="/0148-tablet-landscape.jpg"
                                                                srcSmallDesktop="/0148-small-desktop.jpg"
                                                                srcLargeDesktop="/0148-large-desktop.jpg"
                                                                alt="Riddara in the Mountains"
                                                                width={750} // Adjust these values based on your image requirements
                                                                height={1460} // Adjust these values based on your image requirements
                                                          >
                 
                                                
                                                
                                                  </ResponsiveImage>
                                                  <div className="wrapperEmail">
                                                            <div className="">
                                                              <div className="">Become our distributor!</div>
                                                              <div className="">Register to apply or inquire for more information at the email address below. </div>
                                                              <div className="">riddara.th.business@geely.com</div>
                                                              <div className="buttonWrapper ">
                                                                    <button className="button">
                                                                      <span className="button-text">Click</span>
                                                                      <div className="arrow-icon"></div>
                                                                    </button>
                                                                  </div>
                                                            </div>
                                                  </div>




                                                </div>
                                </div>


             </section>

            <section>
            <div className="footer-wrapper">
                      <div className="footer-content">
                          <div className="footer-two-columns">
                              <div className="footer-column" style={{backgroundColor: "rgba(64, 76, 60)"}}>
                                  <Logo />
                              </div>
                              <div className="footer-column" style={{backgroundColor: "rgba(64, 76, 60)"}}>
                                <div className="two-columns">
                                     <div className="column" style={{backgroundColor: "rgba(64, 76, 60)",fontSize:"clamp(0.75rem, 2vw, 1.5rem)"}}>Privacy Policy</div>
                                     <div className="column" style={{backgroundColor: "rgba(64, 76, 60)",fontSize:"clamp(0.75rem, 2vw, 1.5rem)"}}>Contact Us</div>


                                </div>
                              </div>
                          </div>
                      </div>
              </div>
  

            </section>



          </div>
  );
}
