import { navItems } from './header';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-gray py-12">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                    <div>
                        <img src="/logo.svg" alt="Little Lemon" className="w-full xs:w-1/2 sm:w-full" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-green font-display">Website</h3>
                        <ul className="mt-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-2xl text-green font-display">Contact Us</h3>
                        <p className="mt-4">
                            123 Main St<br />
                            Chicago, IL 60601
                        </p>
                        <a href="tel:123-456-7890">123-456-7890</a>
                        <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
                    </div>
                    <div>
                        <h3 className="text-2xl text-green font-display">Follow Us</h3>
                        <ul className="mt-4">
                            <li>
                                <a href="https://facebook.com">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="ihttps://nstagram.com">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com">
                                    X
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;