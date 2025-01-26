import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Auth } from "@/components/auth/Auth";
import { Dashboard } from "@/pages/Dashboard.jsx";
import { Reports } from "@/pages/Reports";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Administration } from "@/pages/Administration.jsx";
import { routes } from "@/lib/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.SIGN_IN} element={ <Auth/> }/>
        <Route path={routes.DASHBOARDS} element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path={routes.REPORTS} element={
          <ProtectedRoute>
              <Reports/>
          </ProtectedRoute>
        }/>
        <Route path={routes.ADMINISTRATION} element={
          <ProtectedRoute>
            <Administration/>
          </ProtectedRoute>
        }/>
        <Route path="*" element={<Navigate to={routes.DASHBOARDS} replace />} />
      </Routes>
    </Router>
  )
}
