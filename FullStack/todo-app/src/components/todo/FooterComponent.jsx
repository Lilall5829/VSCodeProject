import { AuthContext } from "./security/AuthContext";
import { useContext } from "react";
export default function FooterComponent() {
  const authContext = useContext(AuthContext);

  return (
    <footer className="footer">
      <div className="container">&copy;Lila 2023</div>
    </footer>
  );
}
