import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnterPhrase from './EnterPhrase';
import GuessPhrase from './GuessPhrase';
import Win from './Win';
import Lose from './Lose';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EnterPhrase />} />
        <Route exact path="/guess" element={<GuessPhrase />} />
        <Route exact path="/win" element={<Win />} />
        <Route exact path="/lose" element={<Lose />} />
      </Routes>
    </Router>
  );
}

export default App;
