import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <MainPage />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
