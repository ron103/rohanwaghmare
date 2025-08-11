import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import i1 from "../../components/logos/read.jpg";
import i2 from "../../components/logos/gym1.jpg";
import i3 from "../../components/logos/sooccer.jpg";
import i4 from "../../components/logos/ny.jpeg";
import i5 from "../../components/logos/bike.JPG";


function Extracurricular() {

  useEffect(()=>{
  let items=document.querySelectorAll('.slider .list .item');
  let next=document.getElementById('next');
  let prev=document.getElementById('prev');
  let thumbnails=document.querySelectorAll('.thumbnail .item');

  let countItem=items.length;
  let itemActive=0;
  next.onclick=function(){
    itemActive=itemActive+1;
    if(itemActive>=countItem){
      itemActive=0;
    }
    showSlider();
}
prev.onclick=function(){
    itemActive=itemActive-1;
    if(itemActive<0){
      itemActive=countItem-1;
    }
    showSlider();
}
let refreshInterval=setInterval(()=>{
  next.click();
}, 5000)

function showSlider(){
  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  if (itemActiveOld && thumbnailActiveOld) {
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
  }

  // Add null checks before accessing properties of items and thumbnails
  if (items[itemActive] && thumbnails[itemActive]) {
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
  }

  clearInterval(refreshInterval);
  refreshInterval=setInterval(()=>{
    next.click();
  }, 5000)


}

thumbnails.forEach((thumbnail,index)=>{
  thumbnail.addEventListener('click',()=>{
    itemActive=index;
    showSlider();
  })
})
},[]);

  return (
    <section id="extracurricular">
    <div>
        <SectionTitle title='Extracurricular'/>
        <div className="font-sem-bold text-fourth font-mono mb-10">
        Things I like to do when I'm not coding:
      </div>
    <div className="slider">
      <div className="list">
        <div className="item active">
          <img src={i1} alt='img'/>

          <div className="content">
            <p style={{fontSize:'20px', color:"white" }}>Reading</p>
          </div>
          </div>
          <div className="item">
          <img src={i2} alt='img'/>
          <div className="content">
            <p style={{fontSize:'20px', color:"white" }}>Weightlifting</p>
          </div>
          </div>
          <div className="item">
          <img src={i3} alt='img'/>
          <div className="content">
            <p style={{fontSize:'20px', color:"white" }}>State Level Soccer player</p>
          </div>
          </div>
          <div className="item">
          <img src={i4} alt='img'/>
          <div className="content">
            <p style={{fontSize:'20px', color:"white" }}>Travel Fanatic</p>
          </div>
          </div>
          <div className="item">
          <img src={i5} alt='img'/>
          <div className="content">
            <p style={{fontSize:'20px', color:"white" }}>Motorcycle Enthusiast</p>
          </div>
          </div>
        </div>
        <div className="arrows">
          <button id="prev"><i className="ri-arrow-left-s-fill"></i></button>
          <button id="next"><i className="ri-arrow-right-s-fill"></i></button>
        </div>
        <div className="thumbnail">
          <div className="item active">
          <img src = {i1} alt='img'></img>
          <div className="content text-white text-center text-sm text-bold">
            Reading
          </div>
          </div>
          <div className="item">
          <img src = {i2} alt='img'></img>
          <div className="content text-white text-center text-sm text-bold">
            Gym
          </div>
          </div>
          <div className="item">
          <img src = {i3} alt='img'></img>
          <div className="content text-white text-center text-sm text-bold">
            Soccer
          </div>
          </div>
          <div className="item">
          <img src = {i4} alt='img'></img>
          <div className="content text-white text-center text-sm text-bold">
            Travelling
          </div>
          </div>
          <div className="item">
          <img src = {i5} alt='img'></img>
          <div className="content text-white text-center text-sm text-bold">
            Motorcycle
          </div>
          </div>
        </div>
        </div>
      </div>
      </section>
  )
}
export default Extracurricular;
