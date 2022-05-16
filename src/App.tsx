import SiteFooter from "./components/site/footer/SiteFooter";
import SiteNavbar from "./components/site/navbar/SiteNavbar";
function App() {
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

export default App;
