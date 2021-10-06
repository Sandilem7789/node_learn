import "./SideDrawer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
  // Here we are going to dynamically set the style
  // for the side drawer

  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className='sidedrawer__links' onClick={click}>
        <li>
          <Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
					<span>
						Cart <span className="sidedrawer__cartbadge">0</span>
					</span>
					</Link>
        </li>
        <li>
					<Link to="/">
						Shop
					</Link>
				</li>
      </ul>
    </div>
  );
};

export default SideDrawer;
