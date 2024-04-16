import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { connectWithWebSocket } from "./utils/wssConnection";
const DashboardPage = lazy(() => import("./pages/dashboardPage"));
const LoginPage = lazy(() => import("./pages/loginPage"));
import { Loader } from "./components/Loader";

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
