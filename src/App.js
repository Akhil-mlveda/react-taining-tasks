import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./react-dom-component/Admin";
import { AuthProvider } from "./react-dom-component/auth";
import { Home } from "./react-dom-component/Home";
// import { About } from "./react-dom-component/About";
import { Navbar } from "./react-dom-component/Navbar";
import { OrderSummary } from "./react-dom-component/OrderSummary";
import { NoMatch } from "./react-dom-component/NoMatch";
import { Products } from "./react-dom-component/Products";
import { FeaturedProducts } from "./react-dom-component/FeaturedProducts";
import { NewProducts } from "./react-dom-component/NewProducts";
import { Users } from "./react-dom-component/Users";
import { UserDetails } from "./react-dom-component/UserDetails";
import { Profile } from "./react-dom-component/Profile";
import { Login } from "./react-dom-component/Login";
import { RequireAuth } from "./react-dom-component/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));
// lazy is function and it's arguments is also take function

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          {/* Dynamic route segments      over here userId is string */}
          {/* react router is more specific then the other mach */}
          {/* <Route path="users/:userId" element={<UserDetails />} /> */}
          <Route path=":userId" element={<UserDetails />} />
          <Route path="users/admin" element={<Admin />} />
          {/* <Route path="users/2" element={<UserDetails />} /> */}
          {/* <Route path="users/3" element={<UserDetails />} /> */}
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

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
// // }
// import React from "react";

// import Link from "./components/Link";

// const Header = () => {
//   return (
//     <div className="ui secondary pointing menu">
//       <Link href="/" className="item">
//         Accordion
//       </Link>
//       <Link href="/color-select" className="item">
//         Color Select
//       </Link>
//       <Link href="/translate" className="item">
//         Translate
//       </Link>
//       <Link href="/search" className="item">
//         Wiki Search
//       </Link>
//       <Link href="/all" className="item">
//         All Widgets
//       </Link>
//     </div>
//   );
// };

// export default Header;

// // import React from "react";
// // import Home from "./components/Home.jsx"
// // import About from "./components/About.jsx"

// // import Header from "./components/Header";
// // import Route from "./components/Route";

// // // eslint-disable-next-line import/no-anonymous-default-export
// // const App = () => {
// //   return (
// //     <div className="ui container">
// //       <Header />
// //       <Route path="/">
// //         <Home />
// //       </Route>
// //       <Route path="/about">
// //         <About />
// //       </Route>

// //     </div>
// //   );
// // };

// // export default App;
