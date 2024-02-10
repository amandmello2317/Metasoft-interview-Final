import {
  BrowserRouter,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import './App.css';
import FeedBack from './Components/FeedBAck/FeedBack';
import ViewFeedback from './Components/ViewFeedBack/ViewFeedback';

// Toastify for notification

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedBack />} />
          <Route path="/table" element={<ViewFeedback />} />
        </Routes>

        <ToastContainer
          theme='dark'
        />
      </BrowserRouter>

      {/*  */}
    </div>
  );
}

export default App;
