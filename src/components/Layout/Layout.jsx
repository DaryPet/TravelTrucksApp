import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Loader from "../Loader/Loader.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
