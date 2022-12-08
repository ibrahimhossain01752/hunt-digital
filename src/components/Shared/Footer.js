import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class=" my-5 footer p-5">
      
        <div
                class="text-center text-lg-start text-dark bg_1">
         
          <section
                   class="d-flex justify-content-between p-4 text-white bg_2">
            
            <div class="me-5">
              <span class="ft_title">Want to Explore  more?   💪</span>
            </div>
           
            <div>
             <button class="btn">Download Free App</button>
            </div>
           
          </section>
        
      
          <section class="">
            <div class="container text-center text-md-start mt-5">
           
              <div class="row mt-3">
               
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  
                  <h6 class="text-uppercase fw-bold">About Rareblocks</h6>
                  
                  <p class="fo_para mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
                  </p>
                  <div>
        <a href="" class="text-white me-4">
        <i class="bi bi-twitter color_dark"></i>
        </a>
        <a href="" class="text-white me-4">
        <i class="bi bi-facebook color_dark"></i>
        </a>
        <a href="" class="text-white me-4">
        <i class="bi bi-instagram color_dark"></i>
        </a>
        <a href="" class="text-white me-4">
        <i class="bi bi-github color_dark"></i>
        </a>
        
      </div>
                </div>
                
      
              
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  
                  <h6 class="text-uppercase fw-bold">Company</h6>
                  
                  <p>
                    <p href="#!" class="text-dark">About</p>
                  </p>
                  <p>
                    <p href="#!" class="text-dark">Features</p>
                  </p>
                  <p>
                    <p href="#!" class="text-dark">Works</p>
                  </p>
                  <p>
                    <p href="#!" class="text-dark">Career</p>
                  </p>
                </div>
               
               
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  
                  <h6 class="text-uppercase fw-bold">Help</h6>
                  
                  <p>
                    <p href="#!" class="text-dark">Customer Support</p>
                  </p>
                  <p>
                    <p href="#!" class="text-dark">Delivery Details</p>
                  </p>
                  <p>
                    <p href="#!" class="text-dark">Terms & Conditions</p>
                  </p>
                  <p>
                    <p href="#!" class="text-dark">Privacy Policy</p>
                  </p>
                </div>
               
                
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
                
                  <h6 class="text-uppercase fw-bold">Resources</h6>
                  
                  <p>Free eBooks</p>
                  <p>Development Tutorial</p>
                  <p>How to - Blog</p>
                  <p>Youtube Playlist</p>
                </div>
              
              </div>
             
            </div>
          </section>
         
      
         
         
        </div>
       
      </div>
    );
};

export default Footer;