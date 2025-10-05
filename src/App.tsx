import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global layout components
import Header from "./component/header/Header";
import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";

// Always-visible homepage sections
import ShopByCategories from "./pages/ShopByCategories";
import ProductGrid from "./pages/ProductGrid";
import WhatsAppBanner from "./component/WhatsAppBanner";
import PharmacyProductGrid from "./pages/PharmacyProductGrid";
import StatsComponent from "./outers/StatsComponent";

// Optional future imports (keep commented for now)
// import MedicalSpecialties from "./pages/MedicalSpecialties";
// import TeamSection from "./components/TeamSection";
// import WomenCare from "./pages/WomenCare";
// import HealthConditions from "./outers/HealthConditions";
// import Products from "./products/Products";

/**
 * Accessible, Mobile-First, Modern App
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        {/* Header and Navbar - persistent across pages */}
        <Header />
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* ✅ Home route */}
            <Route
              path="/"
              element={
                <div className="space-y-8 px-4 sm:px-6 lg:px-12 py-6">                  
                  <WhatsAppBanner />
                  <ProductGrid />
                  <ShopByCategories />
                  <StatsComponent />
                  <PharmacyProductGrid />
                </div>
              }
            />

            {/* ✅ Individual pages (future-ready) */}
            {/* <Route path="/specialties" element={<MedicalSpecialties />} /> */}
            {/* <Route path="/team" element={<TeamSection />} /> */}
            {/* <Route path="/women" element={<WomenCare />} /> */}
            {/* <Route path="/health-conditions" element={<HealthConditions />} /> */}
            {/* <Route path="/products" element={<Products />} /> */}

            {/* ✅ Direct access routes */}
            <Route path="/grid" element={<ProductGrid />} />
            <Route path="/product-grid" element={<PharmacyProductGrid />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
