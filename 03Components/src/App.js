import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

export default function App() {
  const username = "Kodego";
  return (
    <>
      <Header />
      <h1 className="active">{username}</h1>
      <Footer />
    </>
  );
}
