import Header from './header/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import data from './data.json';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="card-container">
        {data.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
