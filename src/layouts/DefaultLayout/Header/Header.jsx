import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import * as styles from '~/scss/main.scss';
import images from '~/assets/icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('header__inner')}>
                    {/* Logo */}
                    <img src={images.logo} alt="Eduka" />
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
                        <Button to="/signin" className={cx('btn text header__btn')}>
                            Sign In
                        </Button>
                        <Button to="/signup" className={cx('btn primary rounded header__btn')}>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
