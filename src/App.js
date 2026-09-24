import "./styles/variables.scss";
import "./styles/app.scss";

import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Articles from "./components/ArticlePanel/Articles.js";
import Router from "./Router.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <>

    <div className="wrapper">
      <div className="nav-wrapper">
        <Navbar />
      </div>

      <div className="container-wrapper">
        <div className="header-wrapper">
          <Header />
        </div>

        <div className="main-layout">
          <main className="content">
            <Router />
          </main>
          <aside className="article-bar">
            <Articles />
          </aside>
        </div>

        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </div>

    </>
  );
}

export default App;