import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import { itemsMenu } from '../data/itemsMenu';

function Home() {



return (
    <>
        <Header
            titulo="Tienda de Experiencias"
            descripcion="Descubre experiencias únicas diseñadas para despertar tus sentidos."
            itemsMenu={itemsMenu}
        />

        <Body />

        <Footer foot="2026 Tienda de Experiencias" />
    </>
);

}

export default Home;