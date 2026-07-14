import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppsSection } from './components/AppsSection';
import { ValueProps } from './components/ValueProps';
import { EcosystemHero } from './components/EcosystemHero';
import { Outcomes } from './components/Outcomes';
import { TrustStats } from './components/TrustStats';
import { Footer } from './components/Footer';
import './App.css';

/** Landing page — section order is the page's narrative, top to bottom. */
export default function App() {
  return (
    <div className="app-page">
      <Header />
      <main className="main-content">
        <Hero />
        <AppsSection />
        <ValueProps />
        <EcosystemHero />
        <Outcomes />
        <TrustStats />
      </main>
      <Footer />
    </div>
  );
}
