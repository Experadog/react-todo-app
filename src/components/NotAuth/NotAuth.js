import { useNavigate } from "react-router-dom";
import "./index.scss"

function NotAuth() {
  const navigate = useNavigate();
  
  return (
    <div className="notAuth_container">
      <div className="notAuth_container_card">
        <img src="https://i.pinimg.com/originals/fb/ed/b2/fbedb25b550829b8b4c4984b45992b39.gif" 
        alt="Sad smile" />
        <p>
          Oops, You are not authorized!
        </p>
        <button onClick={() => navigate("/auth/login")}>
          Go Smile
        </button>
      </div>
    </div>
  )
}

export default NotAuth;
