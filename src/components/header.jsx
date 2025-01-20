import { Link } from "react-router-dom";

export const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Menu', link: '/' },
    { name: 'Reservations', link: '/reservations' },
    { name: 'Order Online', link: '/' },
    { name: 'Login', link: '/' },
];

const Header = () => {
    return (
        <header className="container flex items-center justify-between py-5">
            <img src="/logo.svg" alt="logo" />
            <nav className="hidden md:block">
                <ul className="flex justify-center gap-6 font-semibold">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;