import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import RouteEffects from "./components/layout/RouteEffects";
import HomePage from "./features/home/HomePage";
import NotFoundPage from "./features/NotFoundPage";
import { legacyRedirects, routes } from "./siteMap";

// Home loads immediately; every other page is fetched only when visited.
const CapaCaseStudy = lazy(() => import("./features/work/CapaCaseStudy"));
const SaccoCaseStudy = lazy(() => import("./features/work/SaccoCaseStudy"));
const MpesaCaseStudy = lazy(() => import("./features/work/MpesaCaseStudy"));
const AboutPage = lazy(() => import("./features/about/AboutPage"));
const AcademicLayout = lazy(() => import("./features/academic/AcademicLayout"));
const AcademicOverview = lazy(() => import("./features/academic/AcademicOverview"));
const GroupProduction = lazy(() => import("./features/academic/GroupProduction"));
const PersonalReflection = lazy(() => import("./features/academic/PersonalReflection"));

/** Maps every address to a page. Paths come from siteMap.ts. */
export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.capa} element={<CapaCaseStudy />} />
          <Route path={routes.sacco} element={<SaccoCaseStudy />} />
          <Route path={routes.mpesa} element={<MpesaCaseStudy />} />
          <Route path={routes.about} element={<AboutPage />} />
          {legacyRedirects.map(({ from, to }) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Academic projects have their own themed shell and sub-navigation. */}
        <Route
          path={routes.academic}
          element={
            <Suspense fallback={<div id="main-content" />}>
              <AcademicLayout />
            </Suspense>
          }
        >
          <Route index element={<AcademicOverview />} />
          <Route path={routes.groupProduction} element={<GroupProduction />} />
          <Route path={routes.personalReflection} element={<PersonalReflection />} />
        </Route>
      </Routes>
    </>
  );
}
