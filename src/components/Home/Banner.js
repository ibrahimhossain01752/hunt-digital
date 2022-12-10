import React from 'react';
import bg from '../../assets/images/BG (2).png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
           
            <div class="carousel slide mb-5" data-bs-ride="carousel" id="carouselExampleCaptions">
      <div class="carousel-inner">
        <div class="carousel-item active bg-1">
          <div class="carousel-caption">
          <h1 class="beauti-title"><span class="colec1">A burning </span> <span class="colec">passion for excellence .</span></h1>
          <p>Our Technology is designed by experienced designers</p>
            </div>
        </div>
        <div class="carousel-item bg-2">
          <div class="carousel-caption">
          <h1 class="beauti-title"><span class="colec1">A burning </span> <span class="colec">passion for excellence .</span></h1>
          <p>Our Technology is designed by experienced designers</p>
          </div>
        </div>
        <div class="carousel-item bg-3">
          <div class="carousel-caption">
          <h1 class="beauti-title"><span class="colec1">A burning </span> <span class="colec">passion for excellence .</span></h1>
          <p>Our Technology is designed by experienced designers</p>
          </div>
        </div>
      </div> 
      <div class="carousel-indicators">
        <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid ng_on" src={bg}/></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src={bg}/></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src={bg}/></button>
      </div>
    </div>
        </div>
    );
};

export default Banner;