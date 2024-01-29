import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListClientesComponents from "./components/ListClientesComponents";
import AddClientComponent from "./components/AddClientComponent";



function App() {
 

  return (
    <div>
    <BrowserRouter>
    <HeaderComponent />
     <div children='container'>
     <Routes>
      <Route></Route>
      <Route exact path="/" element={  <ListClientesComponents />}></Route>
      <Route path="/clientes" element={  <ListClientesComponents />}></Route>
      <Route path="/add-cliente" element={<AddClientComponent/>}></Route>
      <Route path="/edit-cliente/:id" element={<AddClientComponent/>}></Route>


     </Routes>
     </div>
      {/* <FooterComponent /> */}
    </BrowserRouter>
     

    </div>
  );
}

export default App;
