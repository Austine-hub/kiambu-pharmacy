// src/App.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global layout components
import Header from "./component/header/Header";
import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";

// Always-visible homepage sections (core)
import WhatsAppBanner from "./component/WhatsAppBanner";
import StatsComponent from "./outers/StatsComponent";
import ShopByCategories from "./pages/ShopByCategories";
import ProductGrid from "./pages/ProductGrid";
import PharmacyProductGrid from "./pages/PharmacyProductGrid";

// Lazy-loaded sections for better performance
const MCHSection = lazy(() => import("./sections/MCH"));
const LaboratorySection = lazy(() => import("./sections/Lab"));
const RadiologySection = lazy(() => import("./sections/Radiology"));
const GeneralConsultation = lazy(() => import("./sections/GeneralConsultation"));
const ReproductiveHealth = lazy(() => import("./sections/Obgyn"));
const VCTSection = lazy(() => import("./sections/Vct"));
const DrugsWrapper = lazy(() => import("./drugs/DrugsWrapper"));
const ProductsPage = lazy(() => import("./products/ProductsPage"));
const ContactForm = lazy(() => import("./products/ContactForm"));
const Pro2 = lazy(() => import("./top/Pro2"));
const AboutUs = lazy(() => import("./top/AboutUs"));

/**
 * App Component — Clean, Modern, Mobile-First, and Accessible
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
        {/* Global Header */}
        <Header />
        <Navbar />

        {/* Main Content */}
        <main
          id="main-content"
          className="flex-grow"
          role="main"
          aria-label="Main site content"
        >
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[50vh] text-gray-600">
                <span className="animate-pulse">Loading content...</span>
              </div>
            }
          >
            <Routes>
              {/* ✅ Home Page */}
              <Route
                path="/"
                element={
                  <div className="space-y-10 px-4 sm:px-6 lg:px-12 py-8">
                    <WhatsAppBanner />
                    <ProductGrid />
                    <ShopByCategories />
                    <StatsComponent />
                    <PharmacyProductGrid />
                  </div>
                }
              />

              {/* ✅ Healthcare Services Routes */}
              <Route path="/mother-child" element={<MCHSection />} />
              <Route path="/lab" element={<LaboratorySection />} />
              <Route path="/radiology" element={<RadiologySection />} />
              <Route path="/consult" element={<GeneralConsultation />} />
              <Route path="/obgyn" element={<ReproductiveHealth />} />
              <Route path="/vct" element={<VCTSection />} />

              {/* ✅ E-commerce & Info Pages */}
              <Route path="/buy-medicines" element={<DrugsWrapper />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product-grid" element={<PharmacyProductGrid />} />
              <Route path="/grid" element={<Pro2 />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<ContactForm />} />

              {/* ✅ 404 Fallback */}
              <Route
                path="*"
                element={
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      404 – Page Not Found
                    </h1>
                    <p className="text-gray-600">
                      The page you’re looking for doesn’t exist.
                    </p>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

