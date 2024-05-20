import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./pages/layout";
import Landing from "./pages/landing";
import Feladas from "./pages/feladas";
import Megtekint from "./pages/megtekint";
import { useState } from "react";


export default function App() {
  /* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          */
          const [filter, setFilter] = useState("");
          window.addEventListener('storage', ()=>{
            setFilter(JSON.parse(localStorage.getItem('SortBy')!))
        })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing term={filter}/>}></Route>
          <Route path="feladas" element={<Feladas />}></Route>
          <Route path="megtekint/:id" element={<Megtekint />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}