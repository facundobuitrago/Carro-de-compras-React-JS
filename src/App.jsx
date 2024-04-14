import Header from './components/Header'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header />
      <NavBar />
      <Carousel />
      <ItemListContainer mensaje={"Aprovechá el 20% OFF + 3 cuotas sin interés en todo nuestro catálogo "} />
      <Footer />

    </>
  )
}

export default App
