import React from 'react';
import s from './Navbar.module.css';
console.log(s);
// let s = {
//   'nav' : 'Navbar_nav__81LPn',
//   'item' : 'Navbar_item__-Ij-u',
//   'active' : 'Baksndakdn_active'
  
// }
let c1 = "item";
let c2 = "active";

let classes = c1 + " " + c2;
let classesNew = `${s.item} ${s.active}`;




const Navbar = () => {
    return  <nav className={s.nav}>
    <div className={s.item}>
      <a>Profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a>Messages</a>
    </div>
    <div className={s.item}>
      <a>News</a>
    </div>
    <div className={s.item}>
      <a>Music</a>
    </div>
    <div className={s.item}>
      <a>Settings</a>
    </div>
  </nav>
}
export default Navbar;