import SiteFooter from "./components/site/footer/SiteFooter";
import SiteNavbar from "./components/site/navbar/SiteNavbar";
import { RouteModel } from "./models/route.model";
import ChangePassword from "./pages/account/ChangePassword";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import CompleteRegistration from "./pages/account/CompleteRegistration";
import Logout from "./pages/account/Logout";
import { Route, Routes, useLocation } from "react-router-dom";
import Logo from "./components/Logo";

const accountRoutes: RouteModel[] = [
  { element: <Login />, path: "/account/login" },
  { element: <Register />, path: "/account/register" },
  { element: <ChangePassword />, path: "/account/change-password" },
  { element: <CompleteRegistration />, path: "/account/complete-registration" },
  { element: <Logout />, path: "/account/logout" },
];

function App() {
  const location = useLocation();

  if (location.pathname.includes("account")) {
    return (
      <div className="account-main-wrapper">
        <div>
          <Logo />
        </div>
        <Routes>
          {accountRoutes.map((aRoute) => {
            return (
              <Route
                path={aRoute.path}
                key={aRoute.path}
                element={aRoute.element}
              />
            );
          })}
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="site-main-wrapper">
        <div className="site-navbar-area">
          <SiteNavbar />
        </div>
        <div className="site-main-area">Main</div>
        <div className="site-footer-area">
          <SiteFooter />
        </div>
      </div>
    );
  }
}

export default App;
