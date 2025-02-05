// import { useState } from 'react'
import "./styles/App.css";

import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
