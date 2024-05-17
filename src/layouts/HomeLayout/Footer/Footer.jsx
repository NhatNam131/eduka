import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo';
import Button from '~/components/Button';
import { FooterDecorFirstIcon, FooterDecorSecondIcon } from '~/components/Icons';
import * as styles from '~/scss/main.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer__inner')}>
                <section className={cx('footer__subscribe')}>
                    <h1 className={cx('footer__title')}>Subscribe Newsletters</h1>
                    <p className={cx('footer__desc')}>Enter your email address to register to our newsletter</p>
                    <form action="GET" className={cx('footer__subscribe-form')}>
                        <div className={cx('footer__subscribe-wrap')}>
                            <input
                                type="email"
                                className={cx('footer__subscribe-input')}
                                id="footer-subscribe-email"
                                placeholder="Your email"
                            />
                            <Button primary className={cx('footer__subscribe-btn')}>
                                Sign up
                            </Button>
                        </div>
                    </form>
                    <FooterDecorFirstIcon className={cx('footer__subscribe-decor')} />
                    <FooterDecorSecondIcon className={cx('footer__subscribe-decor')} />
                </section>

                <section className={cx('footer__content')}>
                    {/* Content left */}
                    <div className={cx('footer__content-left')}>
                        <img src={logo.logo} alt="Eduka" />
                        <p className={cx('footer__content-desc')}>
                            Join our newsletter to stay up to date on features and releases.
                        </p>
                        <form action="POST" className={cx('footer__content-form')}>
                            <div className={cx('footer__content-wrap')}>
                                <input
                                    type="email"
                                    className={cx('footer__content-input')}
                                    id="footer-content-email"
                                    placeholder="Enter your email"
                                />
                                <Button primary className={cx('footer__content-btn')}>
                                    Subscribe
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Content right */}
                    <div className={cx('footer__content-right')}>
                        {/* Column 1 */}
                        <div className={cx('footer__column')}>
                            <h2 className={cx('footer__column-title')}>Pages</h2>
                            <ul className={cx('footer__list')}>
                                <li className={cx('footer__item')}>
                                    <Link to="/" className={cx('footer__link')}>
                                        Home
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="/about" className={cx('footer__link')}>
                                        About
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="/contact" className={cx('footer__link')}>
                                        Contact
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="/blog" className={cx('footer__link')}>
                                        Blog
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="/courses" className={cx('footer__link')}>
                                        Courses
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className={cx('footer__column')}>
                            <h2 className={cx('footer__column-title')}>CMS Pages</h2>
                            <ul className={cx('footer__list')}>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Blog Post
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Blog Categories
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Courses Single
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Courses categories
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Product Page
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Product Categories
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className={cx('footer__column')}>
                            <h2 className={cx('footer__column-title')}>Account Pages</h2>
                            <ul className={cx('footer__list')}>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Login
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Sign up
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Forget Password
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Reset Password
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Email Confirmation
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className={cx('footer__column')}>
                            <h2 className={cx('footer__column-title')}>Utility Pages</h2>
                            <ul className={cx('footer__list')}>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Licenses
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        404
                                    </Link>
                                </li>
                                <li className={cx('footer__item')}>
                                    <Link to="#!" className={cx('footer__link')}>
                                        Password
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Footer;
