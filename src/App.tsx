
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TransferUniverse from './components/TransferUniverse';
import Advertising from './components/Advertising';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Présentation et téléchargement EasyTop */}
        <Hero />

        {/* Achat d'unités, pass Internet et pass appel */}
        <Services />

        {/* Recrutement des cabinistes EasyTop Agent */}
        <TransferUniverse />

        {/* EasyTop Ads — partenariat publicitaire */}
        <Advertising />
      </main>

      <Footer />

      <div className="site-noise" />
    </>
  );
}
