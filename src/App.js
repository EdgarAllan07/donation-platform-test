import './App.css';
import Payment from './components/payment';

function App() {
  return (
<div className="App">
<header className="header">
        <h1>Donation Platform</h1>
      </header>
      <main className="container">
        <div className="donation-form ">
          <h2>Make a Donation</h2>
            <Payment></Payment>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Plataforma de Donaciones</p>
      </footer>
    </div>
  );
}

export default App;
