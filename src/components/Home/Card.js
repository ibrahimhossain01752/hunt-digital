import React from 'react';
import card1 from '../../assets/images/image 8.png';
import card2 from '../../assets/images/image 9.png';
import card3 from '../../assets/images/image 10.png';
import card4 from '../../assets/images/image 11.png';
import card5 from '../../assets/images/image 12.png';
import card6 from '../../assets/images/image 13.png';

import './Card.css';

const Card = () => {
    return (
        <div class="card_bg">
          <h2>Trending</h2>
          <div class="container">
          <div class="card-group">
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card1} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h6 class="card-title mx-start head_one">Kia</h6>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-half star"></i><i class="bi bi-star-fill star_one"></i></p>
    </div>
    
  </div>
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card2} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h6 class="card-title head_two">Toyato Minivan</h6>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i></p>
    </div>
    
  </div>
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card3} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title head_thr">Hyundai Venue</h5>
       <i class="bi bi-currency-rupee ruppe"></i>
       <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star_one"></i><i class="bi bi-star-fill star_one"></i><i class="bi bi-star-fill star_one"></i></p>
    </div>
    
  </div>
</div>
<div class="card-group">
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card4} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title head_four">Kia Electric </h5>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-half star"></i><i class="bi bi-star-fill star_one"></i></p>
    </div>
   
  </div>
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card5} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title head_five">Maruti swift</h5>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i></p>
    </div>
   
  </div>
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card6} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title head_six">Hyundai Rav4</h5>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting "><span class=""><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star_one"></i><i class="bi bi-star-fill star_one"></i><i class="bi bi-star-fill star_one"></i><i class="bi bi-star-fill star_one"></i></span></p>
    </div>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default Card;