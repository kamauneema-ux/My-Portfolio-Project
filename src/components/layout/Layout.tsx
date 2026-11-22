import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

/** Frame for the professional portfolio: skip link, header, page, footer. */
export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        {/* Shown while a lazily loaded page is fetched over the network. */}
        <Suspense
          fallback={<p className="wrap page-loading">Loading&hellip;</p>}
        >
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
