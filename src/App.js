import logo from './logo.svg';
import './App.css';
import AvailityRegistrationForm from './components/AvailityRegistrationForm';

function App() {
  

  return (
    <div className="container">
      <main>
      <div className="py-5 text-center">
        <h2>Availity Provider Registration</h2>
        <p className="lead">Welcome to the Availity Provider Registration Portal.
        Please provide your information below so we can expeite your application to join the Availity provider network.</p>
      </div>
      <div>
        <AvailityRegistrationForm />
        
      </div>
      </main>
  </div>
  );
}

export default App;
