import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import * as styles from '~/scss/main.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('header-hero__wrap')}>
                <Header />
                <Hero />
            </div>
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
