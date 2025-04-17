// src/App.jsx
import Header  from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
      <main className="text-center mt-10 text-2xl font-bold text-blue-600">
        Hello, React Dev
      </main>
      <Footer/>
    </>
  );
}

export default App;
