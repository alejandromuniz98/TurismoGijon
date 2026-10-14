import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import { analytics } from "./components/firebase";
import { logEvent } from "firebase/analytics";
import "./App.css";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const QueVerHub = React.lazy(() => import("./pages/QueVerHub"));
const PlayasHub = React.lazy(() => import("./pages/PlayasHub"));
const RestaurantesHub = React.lazy(() => import("./pages/RestaurantesHub"));
const GuiasHub = React.lazy(() => import("./pages/GuiasHub"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const RutasPage = React.lazy(() => import("./pages/RutasPage"));
const MapPage = React.lazy(() => import("./pages/MapPage"));
const ArticlePage = React.lazy(() => import("./pages/ArticlePage"));
const PoliticaPrivacidadPage = React.lazy(() => import("./pages/PoliticaPrivacidadPage"));
const PoliticaCookiesPage = React.lazy(() => import("./pages/PoliticaCookiesPage"));
const AvisoLegalPage = React.lazy(() => import("./pages/AvisoLegalPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

/** Remonta ArticlePage al cambiar el slug (evita quedarse en el artículo anterior). */
function ArticleRoute() {
  const { slug } = useParams();
  return <ArticlePage key={slug} />;
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function PageLoader() {
  return (
    <div className="app-page-loader" role="status">
      Cargando…
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page_path: location.pathname });
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/que-ver-gijon" element={<QueVerHub />} />
          <Route path="/playas-gijon" element={<PlayasHub />} />
          <Route path="/restaurantes-gijon" element={<RestaurantesHub />} />
          <Route path="/guias" element={<GuiasHub />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/rutas-en-gijon" element={<RutasPage />} />
          <Route path="/mapa-turistico-gijon" element={<MapPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
          <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/:slug" element={<ArticleRoute />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App app-shell">
          <AppRoutes />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
