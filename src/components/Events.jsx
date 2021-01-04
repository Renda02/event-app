import React from "react";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
import IoLocationOutline from 'react-icons/io';
import BiTimeFive from "react-icons/bi";
import MdDateRange from "react-icons/md";

function Events() {
  return (
    <div className="container">
      <div className="item-list">
        <div className="item">
          <div className="img">
            <img src="" alt="hot-air ballon" />
          </div>
          <div className="content">
            <div className="heading">
              <div>
                <h2>Buness</h2>
                <span><BiTimeFive/>: 4pm</span>
                <span><MdDateRange/>:12/01/2020</span>
                <span><IoLocationOutline/>: Pretoria</span>
                <ul>
                <li><FaRegStar/></li>
                <li><FaRegStar/></li>
                <li><FaRegStar/></li>  
                <li><FaRegStar/></li>
                <li><FaRegStarHalf/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
