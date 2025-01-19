
const Header = () => {
    return (
        <header className="container flex items-center justify-between py-5">
            <img src="/logo.svg" alt="logo" />
            <nav className="hidden md:block">
                <ul className="flex justify-center gap-6 font-semibold">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;