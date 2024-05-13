import classNames from 'classnames/bind';

import * as styles from '~/scss/main.scss';
import { GoogleLogoIcon, SlackLogoIcon, AmazonLogoIcon, HubspotLogoIcon, GustoLogoIcon } from '../Icons';

const cx = classNames.bind(styles);

function Partners() {
    return (
        <div className={cx('partners')}>
            <div className={cx('partners__inner')}>
                <GoogleLogoIcon className={cx('partners__logo')} />
                <SlackLogoIcon className={cx('partners__logo')} />
                <AmazonLogoIcon className={cx('partners__logo')} />
                <HubspotLogoIcon className={cx('partners__logo')} />
                <GustoLogoIcon className={cx('partners__logo')} />
            </div>
        </div>
    );
}

export default Partners;
