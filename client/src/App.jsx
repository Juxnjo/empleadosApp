import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/list" element={<ListPage/>} />
        <Route path="/form" element={<FormPage/>} />
        <Route path="/form/:id" element={<h1>ActualizarFormulario</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App