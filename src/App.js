import PageNotFound from "./pages/_404";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<PageNotFound />} />
        <Route path="/add" element={<PageNotFound />} />
        <Route path="/search" element={<PageNotFound />} />
        <Route path="/detail/:id" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
