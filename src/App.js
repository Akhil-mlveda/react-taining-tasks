// import { Routes, Route } from "react-router-dom";
// import { Home } from "./react-dom-component/Home";
// import { About } from "./react-dom-component/About";
// import { Navbar } from "./react-dom-component/Navbar";
// import { OrderSummary } from "./react-dom-component/OrderSummary";
// import { NoMatch } from "./react-dom-component/NoMatch";
// import { Products } from "./react-dom-component/Products";
// import { FeaturedProducts } from "./react-dom-component/FeaturedProducts";
// import { NewProducts } from "./react-dom-component/NewProducts";
// import { Users } from "./react-dom-component/Users";
// import { UserDetails } from "./react-dom-component/UserDetails";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="order-summary" element={<OrderSummary />} />
//         <Route path="products" element={<Products />}>
//           <Route index element={<FeaturedProducts />} />
//           <Route path="featured" element={<FeaturedProducts />} />
//           <Route path="new" element={<NewProducts />} />
//         </Route>
//         <Route path="users" element={<Users />} />
//         <Route path="users/:userId" element={<UserDetails />} />
//         {/* <Route path="users/2" element={<UserDetails />} /> */}
//         {/* <Route path="users/3" element={<UserDetails />} /> */}

//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </>
//   );
// }
















// export default App;

// import React, { useState } from "react"

// import Accordion from "./components/Accordion"

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion />
//   }
// }

// export default () => {
//   return <div className="ui container">{showAccordion()}</div>
// }

// import React from "react"

// import ColorSelect from "./components/ColorSelect"
// import Translate from "./components/Translate"
// import Accordion from "./components/Accordion"
// import Search from "./components/Search"

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion />
//   }
// }

// const showColorSelect = () => {
//   if (window.location.pathname === "/color-select") {
//     return <ColorSelect />
//   }
// }

// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />
//   }
// }

// const showSearch = () => {
//   if (window.location.pathname === "/search") {
//     return <Search />
//   }
// }

// // eslint-disable-next-line import/no-anonymous-default-export
// export default () => {
//   return (
//     <div className="ui container">
//       {showAccordion()}
//       {showColorSelect()}
//       {showTranslate()}
//       {showSearch()}
//     </div>
//   )
// }
import React from "react";

import Link from "./components/Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/color-select" className="item">
        Color Select
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
      <Link href="/search" className="item">
        Wiki Search
      </Link>
      <Link href="/all" className="item">
        All Widgets
      </Link>
    </div>
  );
};

export default Header;