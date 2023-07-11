import { BrowserRouter, Routes, Route } from "react-router-dom"
import NarBar from "./Components/NavBar"
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import ItemDetailConteiner from "./Components/ItemDetailContainer/ItemDetailContainer";
import "./App.css"

function App() {
    return(
        <div className="App">
            <BrowserRouter>
                <NarBar/>
                 <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailConteiner/>}/>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )   
    
}


export default App