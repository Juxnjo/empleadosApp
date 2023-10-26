import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/list" element={<h1>Lista</h1>} />
        <Route path="/form" element={<h1>Formulario</h1>} />
        <Route path="/form/:id" element={<h1>ActualizarFormulario</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App