import Navbar from './components/navbar'
import Hero from './components/hero';
import VideoSection from './components/videoSection';
import InfoSection from './components/infoSection';
import ImpactSection from './components/impactSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoSection />
      <InfoSection />
      <ImpactSection />
    </div>
  );
}
