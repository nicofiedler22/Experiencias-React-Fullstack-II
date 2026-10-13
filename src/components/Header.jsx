import { Link } from 'react-router-dom';

function Header({ titulo, descripcion, itemsMenu }) {

    return (
        <header id="encabezado">

            <h1>{titulo}</h1>

            <p>{descripcion}</p>

            <nav id="menu-principal">
                <ul>

                    {itemsMenu.map((item) => (
                        <li key={item.href}>
                            <Link to={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>

        </header>
    );
}

export default Header;