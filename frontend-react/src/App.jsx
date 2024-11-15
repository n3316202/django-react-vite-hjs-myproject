import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { LoginProvider } from "./context/LoginContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />
      <Outlet />
      {/*⭐️ URL에 따라 변경되는 부분 ⭐️ */}
      <Footer></Footer>
    </div>
  );
}

export default App;
