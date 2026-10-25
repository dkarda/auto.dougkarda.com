import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DetailingHub from './pages/detailing/DetailingHub';
import FullKit from './pages/detailing/FullKit';
import CarpetCleaning from './pages/detailing/CarpetCleaning';
import SeatCleaning from './pages/detailing/SeatCleaning';
import DashTrim from './pages/detailing/DashTrim';
import ExteriorCleaning from './pages/detailing/ExteriorCleaning';
import TiresCleaning from './pages/detailing/TiresCleaning';
import RepairHub from './pages/repair/RepairHub';
import WhenToDiy from './pages/repair/WhenToDiy';
import MaintenanceHub from './pages/maintenance/MaintenanceHub';
import OilChanges from './pages/maintenance/OilChanges';
import ResourcesHub from './pages/resources/ResourcesHub';
import MyLexus from './pages/resources/MyLexus';
import InsuranceHub from './pages/insurance/InsuranceHub';
import LicenseHub from './pages/license/LicenseHub';
import Registration from './pages/license/Registration';
import TitleAndPlates from './pages/license/TitleAndPlates';
import NotFound from './pages/NotFound';
import { site } from './lib/site';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = site.name;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailing" element={<DetailingHub />} />
          <Route path="/detailing/full-kit" element={<FullKit />} />
          <Route path="/detailing/carpet-cleaning" element={<CarpetCleaning />} />
          <Route path="/detailing/seat-cleaning" element={<SeatCleaning />} />
          <Route path="/detailing/dash-trim" element={<DashTrim />} />
          <Route path="/detailing/exterior" element={<ExteriorCleaning />} />
          <Route path="/detailing/tires" element={<TiresCleaning />} />
          <Route path="/repair" element={<RepairHub />} />
          <Route path="/repair/when-to-diy" element={<WhenToDiy />} />
          <Route path="/maintenance" element={<MaintenanceHub />} />
          <Route path="/maintenance/oil-changes" element={<OilChanges />} />
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/resources/my-lexus" element={<MyLexus />} />
          <Route path="/insurance" element={<InsuranceHub />} />
          <Route path="/license" element={<LicenseHub />} />
          <Route path="/license/registration" element={<Registration />} />
          <Route path="/license/title-and-plates" element={<TitleAndPlates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
