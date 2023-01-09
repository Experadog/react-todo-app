import { useNavigate } from "react-router-dom";
import "./index.scss"

function NotFound({location}) {
  const navigate = useNavigate();


  return (
    <div className="notFound_container">
      <div className="notFound_container_card">
        <h1>404</h1>
        <p>Oops, This page is not found!</p>
        <button onClick={() => navigate(location === "auth" ?  "/auth/login" : "/")}>Go back</button>
      </div>
    </div>
  )
}

export default NotFound;