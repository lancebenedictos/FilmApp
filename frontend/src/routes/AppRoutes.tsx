import useLocoScroll from "@/hooks/useSmoothScroll";
import MainLayout from "@/layouts/MainLayout";
import LandingPage from "@/pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  useLocoScroll(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <LandingPage />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
