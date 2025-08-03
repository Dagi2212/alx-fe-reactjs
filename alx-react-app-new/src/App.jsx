import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Dagmawi" age={21} bio="Loves building front-end apps and traveling." />
      <Counter />
      <Footer />
    </div>
    
  );
}

export default App;
