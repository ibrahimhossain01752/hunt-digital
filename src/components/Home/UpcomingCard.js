import React from 'react';
import card8 from '../../assets/images/image 8 (1).png';
import card9 from '../../assets/images/image 9 (1).png';
import card10 from '../../assets/images/image 10 (1).png';
import card11 from '../../assets/images/image 11 (1).png';
import card12 from '../../assets/images/image 12 (1).png';
import card13 from '../../assets/images/image 13 (1).png';

const UpcomingCard = () => {
    return (
        <div class="card_bg">
          <h2>Upcoming</h2>
          <div class="container">
          <div class="card-group">
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card8} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h6 class="card-title mx-start head_one">Kia</h6>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-half star"></i><i class="bi bi-star-fill star_one"></i></p>
    </div>
    
  </div>
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card9} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h6 class="card-title head_two">Toyato Minivan</h6>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i></p>
    </div>
    
  </div>
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card10} class="card-img-top car_one mx-auto" alt="..."/>
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
    <img src={card11} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title head_four">Kia Electric </h5>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-half star"></i><i class="bi bi-star-fill star_one"></i></p>
    </div>
   
  </div>
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card12} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title head_five">Maruti swift</h5>
      <i class="bi bi-currency-rupee ruppe"></i>
      <p class="ratting"><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i></p>
    </div>
   
  </div>
  <div class="card">
  <i class="bi bi-heart-fill icon_one"></i>
    <img src={card13} class="card-img-top car_one mx-auto" alt="..."/>
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

export default UpcomingCard;