import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import Router from './components/Router';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Router />
    </div>
  )
}

export default App
