import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TransferUniverse from './components/TransferUniverse';
import Advertising from './components/Advertising';
import Partnership from './components/Partnership';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <TransferUniverse />
        <Advertising />
        <Partnership />
        <DownloadApp />
      </main>

      <Footer />

      <div className="site-noise" />
    </>
  );
}