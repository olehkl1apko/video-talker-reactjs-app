import { useEffect, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { connectWithWebSocket } from "./utils/wssConnection";
const DashboardPage = lazy(() => import("./pages/dashboardPage"));
const LoginPage = lazy(() => import("./pages/loginPage"));

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
