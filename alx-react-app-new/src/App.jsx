import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Dagmawi" age={24} bio="Loves building front-end apps and traveling." />
      <Footer />
    </div>
  );
}

export default App;
