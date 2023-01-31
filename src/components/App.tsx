import '../assets/WestwoodSans-Regular.ttf';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Intro from '../pages/Intro';
import Page404 from '../pages/Page404';
import Problem1 from '../pages/Problem1';
import Problem2 from '../pages/Problem2';
import Problem3 from '../pages/Problem3';
import Problem4 from '../pages/Problem4';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/problem1" element={<Problem1 />} />
          <Route path="/problem2" element={<Problem2 />} />
          <Route path="/problem3" element={<Problem3 />} />
          <Route path="/problem4" element={<Problem4 />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
