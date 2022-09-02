import PageNotFound from "./pages/_404";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./pages";
import SearchPage from "./pages/search";
import DetailPageWrapper from "./pages/detail";
import AddPage from "./pages/add";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:id" element={<DetailPageWrapper />} />
      </Routes>
    </>
  );
}

export default App;
