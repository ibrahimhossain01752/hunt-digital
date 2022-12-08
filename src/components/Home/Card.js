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
    <img src={card1} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    
  </div>
  <div class="card">
    <img src={card2} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    
  </div>
  <div class="card">
    <img src={card3} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src={card4} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
   
  </div>
  <div class="card">
    <img src={card5} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
   
  </div>
  <div class="card">
    <img src={card6} class="card-img-top car_one mx-auto" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default Card;