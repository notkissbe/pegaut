import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./pages/layout";


export default function App() {
  /* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}