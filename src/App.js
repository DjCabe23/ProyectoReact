import NarBar from "./Components/NavBar"
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import ItemCount from './Components/Itemcount/ItemCount'

function App() {
    return(
        <div className="App">
            <NarBar/>
            <ItemListContainer greeting ={'Bienvenidos'}/>
            <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log('cantidad agrgada', quantity)}/>
        </div>
    )   
    
}


export default App