import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
