import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import DynamicTitle from "./DynamicTitle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-gray-200 dark:bg-black text-black dark:text-white">
        <DynamicTitle />
        <Navbar />
        <Outlet />
        <Toaster position="bottom-right" />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
