import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className=" py-5 px-5 bg-black text-white">
      <header>
        <NavBar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
