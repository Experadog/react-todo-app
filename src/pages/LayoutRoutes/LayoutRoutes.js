import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import * as LayoutPages from "../../apps/Layout"
import NotAuth from "../../components/NotAuth/NotAuth";
import NotFound from "../../components/NotFound/NotFound";


function LayoutRoutes() {

  const token = false;
  
  if(!token) return <NotAuth />

  return (
    <div>
      <Routes>
        <Route index element={<LayoutPages.Main />} />
        <Route path="/404" element={<NotFound location="layout" />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </div>
  )
}

export default LayoutRoutes;
