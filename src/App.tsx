import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import ShopByCategories from './pages/ShopByCategories'
import MedicalSpecialties from './pages/MedicalSpecialties'
import ProductGrid from './pages/ProductGrid'
import WomenCare from './pages/WomenCare'
import Navbar from './component/header/Navbar'
import WhatsAppBanner from './component/WhatsAppBanner'
import PharmacyProductGrid from './pages/PharmacyProductGrid'
import HealthConditions from './outers/HealthConditions'
import StatsComponent from './outers/StatsComponent'



function App() {
    return (
    <>
    <Header/>
    <Navbar/>
    <StatsComponent/>
    <WhatsAppBanner/>
    <HealthConditions/>
    <PharmacyProductGrid/>
    <WomenCare/>
    <ProductGrid/>
    <MedicalSpecialties/>
    <ShopByCategories/> 
    <Footer/>
    </>
  )
}

export default App
