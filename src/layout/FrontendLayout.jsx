import { Outlet, Link } from "react-router-dom";

const FrontendLayout = () => {
  return (
    <div>
      <header>
        <nav className="container mt-4">
          <div className="d-flex justify-content-between align-items-center">

            <div className="nav">
              <Link to="/" className="nav-link fs-3 fw-bold">
                首頁
              </Link>
            </div>

            <div className="nav">
              <Link to="/product" className="nav-link fs-4 mx-3">
                產品頁面
              </Link>
              <Link to="/cart" className="nav-link fs-4">
                購物車頁面
              </Link>
            </div>

          </div>
        </nav>
      </header>

      <main className="container my-5">
        <Outlet />
      </main>

      <footer className="mt-5 text-center">
        <p>© Copyright  2026</p>
      </footer>
    </div>
  );
};

export default FrontendLayout;