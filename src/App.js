import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import components
import Home from './pages/Home';
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<NotFound /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
