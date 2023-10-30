import { Helmet } from "react-helmet";
import NavBar from "../component/NavBar";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar></NavBar>
      {children}
    </div>
  );
};

export default Layout;
