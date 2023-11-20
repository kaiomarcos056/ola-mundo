import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SobreMim from './paginas/SobreMim';
import Banana from './componentes/Banana';
import Inicio from './paginas/Inicio';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Postagem from 'paginas/Postagem';
import NaoEncontrada from 'paginas/NaoEncontrada';
import ScrollToTop from 'componentes/ScrollToTop';
//import Menu from './componentes/Menu';


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Banana />
      <Routes>

        <Route path="/" element={ <PaginaPadrao /> }>
          <Route path="/" element={ <Inicio /> } />
          <Route path="/sobremim" element={ <SobreMim /> } />
        </Route>

        <Route path="posts/:id/*" element={<Postagem/>} />
        <Route path="*" element={<NaoEncontrada/>} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
