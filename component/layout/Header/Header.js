import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";    

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;

// import React from 'react'
// import './Header.css';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PersonIcon from '@material-ui/icons/Person';
// import SearchIcon from '@material-ui/icons/Search';
// // import Search from "./component/Product/Search";
// const Header = ({user}) => {
//     return (
//         <>
//             <nav>
//                 <a href="/" className="logo">
//                     <span>T</span>he
//                     <span>D</span>ecorate
//                 </a>
//                 <ul>
//                     <li className="input">
//                         {/* <input className="search" to="/search" placeholder="Search..."></input> */}
//                         <a href="/search"><SearchIcon/></a>
//                         {/* <Search/> */}
//                     </li>
//                     {/* <li><a href="/">home</a></li> */}
//                     <li><a href="/products">Products</a></li>
//                     {/* <li><a href="#">home</a></li>
//                     <li><a href="#">New</a></li> */}
//                     {/* <li><a href="/cart"><ShoppingCartIcon/></a></li> */}
//                     <li><a href="/login"><PersonIcon/></a></li>
                    
//                 </ul>
//             </nav>
//         </>    
//     )
// }

// export default Header
