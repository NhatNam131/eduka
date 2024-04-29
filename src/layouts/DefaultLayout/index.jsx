import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from './Header';
import Footer from './Footer';
import * as styles from '~/scss/main.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
