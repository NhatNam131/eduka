import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import * as styles from '~/scss/main.scss';
import logo from '~/assets/logo';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('header__inner')}>
                    {/* Logo */}
                    <a href="/">
                        <img src={logo.logo} alt="Eduka" />
                    </a>
                    {/* Navbar */}
                    <nav className={cx('navbar')}>
                        <ul className="navbar__list">
                            <li className="navbar__item navbar__item--current">
                                <Link to="/" className={cx('navbar__link')}>
                                    Home
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/about" className={cx('navbar__link')}>
                                    About
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/courses" className={cx('navbar__link')}>
                                    Courses
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/blog" className={cx('navbar__link')}>
                                    Blog
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/contact" className={cx('navbar__link')}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Button */}
                    <div className={cx('header__cta')}>
                        <Button to="/signin" text>
                            Sign In
                        </Button>
                        <Button to="/signup" primary rounded>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
