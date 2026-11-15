
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TransferUniverse from './components/TransferUniverse';
import Advertising from './components/Advertising';
import Footer from './components/Footer';

import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  // Page : Conditions d'utilisation
  if (pathname === '/conditions-utilisation') {
    return (
      <>
        <TermsOfUse />
        <Footer />
      </>
    );
  }

  // Page : Politique de confidentialité
  if (pathname === '/politique-confidentialite') {
    return (
      <>
        <PrivacyPolicy />
        <Footer />
      </>
    );
  }

  // Page d'accueil
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <TransferUniverse />
        <Advertising />
      </main>

      <Footer />

      <div className="site-noise" />
    </>
  );
}
