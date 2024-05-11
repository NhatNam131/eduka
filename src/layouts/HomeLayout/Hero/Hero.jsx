import classNames from 'classnames/bind';

import * as styles from '~/scss/main.scss';
import Button from '~/components/Button';
import { ArrowRightIcon, PlayIcon, MentorIcon, HeroCoursesIcon, BackgroundHeroMedia } from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Hero() {
    return (
        <section className={cx('hero')}>
            <div className={cx('hero__inner')}>
                <article className={cx('hero__content')}>
                    <div className={cx('hero__header')}>
                        <span className={cx('hero__header-sale')}>50% OFF</span>
                        <span className={cx('hero__header-title')}>Learn From Today</span>
                    </div>
                    <h1 className={cx('hero__title')}>
                        Best <strong className={cx('hero__title--strong')}>Learning</strong> Platform For Everyone
                    </h1>
                    <p className={cx('hero__desc')}>
                        Send your email marketing campaign quickly and easily. Trusted by developers, designers and
                        marketers for time-savings, scalability and price.
                    </p>
                    <div className={cx('hero__cta')}>
                        <Button primary rounded className={cx('hero__btn-explore')}>
                            Explore Courses
                            <ArrowRightIcon />
                        </Button>

                        <Button outline className={cx('hero__btn-play')}>
                            <PlayIcon />
                        </Button>
                    </div>
                </article>

                <figure className={cx('hero__media')}>
                    <div className={cx('hero__media-position hero__circle hero__circle-first')}></div>
                    <div className={cx('hero__media-position hero__circle hero__circle-second')}></div>
                    <div className={cx('hero__media-position hero__circle hero__circle-third')}></div>
                    <div className={cx('hero__media-position hero__circle hero__circle-fourth')}></div>
                    <img src={images.heroMedia} alt="Media" className={cx('hero__media-position hero__media-image')} />
                    <div className={cx('hero__media-position hero__mentors')}>
                        <div className={cx('hero__mentors-circle')}>
                            <MentorIcon />
                        </div>
                        <div className={cx('hero__mentors-content')}>
                            <span className={cx('hero__mentors-number')}>100+</span>
                            <span className={cx('hero__mentors-title')}>Expert Mentors</span>
                        </div>
                    </div>
                    <div className={cx('hero__media-position hero__courses')}>
                        <div className={cx('hero__courses-circle')}>
                            <HeroCoursesIcon />
                        </div>
                        <div className={cx('hero__courses-content')}>
                            <span className={cx('hero__courses-number')}>1K+</span>
                            <span className={cx('hero__courses-title')}>Courses</span>
                        </div>
                    </div>
                    <img src={images.heroDecor} alt="Decor" className={cx('hero__media-position hero__media-decor')} />
                    <BackgroundHeroMedia className={cx('hero__media-background')} />
                </figure>
            </div>
        </section>
    );
}

export default Hero;
