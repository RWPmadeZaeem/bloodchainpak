import Navbar from './components/navbar'
import Hero from './components/hero';
import VideoSection from './components/videoSection';
import InfoSection from './components/infoSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoSection />
      <InfoSection />
    </div>
  );
}
