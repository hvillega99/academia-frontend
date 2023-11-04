import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfesoresPage from './pages/ProfesoresPage';
import MateriasPage from './pages/MateriasPage';
import MateriaFormPage from './pages/MateriaFormPage';
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation';
import ProfesorFormPage from './pages/ProfesorFormPage';
import AulasPage from './pages/AulasPage';
import AulaFormPage from './pages/AulaFormPage';

function App(){
  return (
    <BrowserRouter>
    <Navigation />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profesores" element={<ProfesoresPage />} />
          <Route path="/profesores/add" element={<ProfesorFormPage />} />
          <Route path="/profesores/:id" element={<ProfesorFormPage />} />
          <Route path="/materias" element={<MateriasPage />} />
          <Route path="/materias/add" element={<MateriaFormPage />} />
          <Route path="/materias/:id" element={<MateriaFormPage />} />
          <Route path="/aulas" element={<AulasPage />} />
          <Route path="/aulas/add" element={<AulaFormPage />} />
          <Route path="/aulas/:id" element={<AulaFormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;