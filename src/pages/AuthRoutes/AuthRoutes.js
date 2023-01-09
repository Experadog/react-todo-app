import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import * as AuthPages from "../../apps/Auth"
import NotFound from "../../components/NotFound/NotFound";


function AuthRoutes() {
  const token = false;
  const navigate = useNavigate();

  if(token) return navigate("/");

  return(
    <div>
      <Routes>
        <Route path="/register" element={<AuthPages.Register />} />
        <Route path="/login" element={<AuthPages.Login />} />
        <Route path="/404" element={<NotFound location="auth" />} />

        <Route path="*" element={<Navigate to={"/auth/404"}/>} />
      </Routes>
    </div>
  )
}

export default AuthRoutes;