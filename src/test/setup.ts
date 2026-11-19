// Shared set-up for every test file.
import "@testing-library/jest-dom/vitest";
import { cleanup, configure } from "@testing-library/react";
import { afterEach } from "vitest";

// Without Vitest globals, Testing Library cannot unmount between tests on its own.
afterEach(() => cleanup());

// Lazily loaded pages are compiled on first import in tests, so allow them time to appear.
configure({ asyncUtilTimeout: 5000 });

// jsdom does not implement scrolling; route changes call these.
window.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};
