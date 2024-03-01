import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./App";
import { SearchPage } from "./pages/SearchPage";
import { LandingPage } from "./pages/LandingPage";
import { BeerInfoPage } from "./pages/BeerInfoPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<LandingPage />} index />
      <Route element={<SearchPage />} path="search" />
      <Route element={<BeerInfoPage />} path="beer-info/:beerId" />
    </Route>
  )
);
