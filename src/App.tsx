import Header from './components/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Stack from './sections/Stack/Stack';
import Building from './sections/Building/Building';
import Contact from './sections/Contact/Contact';
import Highlights from './sections/Highlights/Highlights';
import Learning from './sections/Learning/Learning';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Highlights />
        <Stack />
        <Building />
        <Learning />
        <Contact />
      </main>
    </div>
  );
}

export default App;