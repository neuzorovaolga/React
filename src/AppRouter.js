import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/*" element={<Navigate to="/main" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
