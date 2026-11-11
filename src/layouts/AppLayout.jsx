import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AppLayout;
