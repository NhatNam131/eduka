import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import * as styles from '~/scss/main.scss';
import {
    FacebookIcon,
    InstagramIcon,
    IntroduceDecorFirstIcon,
    IntroduceDecorSecondIcon,
    LinkedInIcon,
    TwitterIcon,
} from '~/components/Icons';
import images from '~/assets/images';
import Partners from '~/components/Partners';

const cx = classNames.bind(styles);

function AboutPage() {
    return (
        <div className={cx('about')}>
            {/* ================ Introduce ================ */}
            <section className={cx('introduce')}>
                {/* Introduce First */}
                <div className={cx('introduce__first')}>
                    <div className={cx('container')}>
                        <span className={cx('introduce__title--small')}>About us</span>
                        <h1 className={cx('introduce__title--large')}>
                            5 years of helping student to potential and indepth understanding of the course.
                        </h1>
                        <p className={cx('introduce__first-desc')}>
                            5 years ago, we opened our doors to help students gain admission to the college of their
                            dreams. Over that time, we have shaped the way people get into college so they can learn and
                            grow from the experience.
                        </p>
                        <IntroduceDecorFirstIcon className={cx('introduce__decor')} />
                        <IntroduceDecorSecondIcon className={cx('introduce__decor')} />
                    </div>
                </div>

                {/* Introduce Second */}
                <div className={cx('introduce__second')}>
                    <div className={cx('container')}>
                        <div className={cx('introduce__inner')}>
                            <h2 className={cx('introduce__title--medium')}>
                                Educa is a multidisciplinary education platform
                            </h2>
                            <div className={cx('introduce__second-content')}>
                                <p className={cx('introduce__second-desc')}>
                                    5 years ago, we opened our doors to help students gain admission to the college of
                                    their dreams. Over that time, we have shaped the way people get into college so they
                                    can learn.
                                </p>
                                <div className={cx('introduce__data')}>
                                    <div className={cx('introduce__data-wrap')}>
                                        <span className={cx('introduce__number')}>2008</span>
                                        <span className={cx('introduce__category')}>Founded</span>
                                    </div>
                                    <div className={cx('introduce__data-wrap')}>
                                        <span className={cx('introduce__number')}>40+</span>
                                        <span className={cx('introduce__category')}>Courses Created</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================ Goal ================ */}
            <section className={cx('goal')}>
                <div className={cx('container')}>
                    <div className={cx('goal__inner')}>
                        <span className={cx('about__title--small')}>Our Goal</span>
                        <h2 className={cx('about__title--large')}>Achieve Your Goals With us</h2>
                        <p className={cx('about__desc')}>
                            World-class training and development programs developed by top teachers. Build skills with
                            courses, certificates, and degrees online from world-class.
                        </p>
                        <figure className={cx('goal__list')}>
                            <div className={cx('goal__item')}>
                                <img src={images.goalImageFirst} alt="Image" className={cx('goal__image')} />
                            </div>
                            <div className={cx('goal__item')}>
                                <img src={images.goalImageSecond} alt="Image" className={cx('goal__image')} />
                            </div>
                            <div className={cx('goal__item')}>
                                <img src={images.goalImageThird} alt="Image" className={cx('goal__image')} />
                            </div>
                            <div className={cx('goal__item')}>
                                <img src={images.goalImageFourth} alt="Image" className={cx('goal__image')} />
                            </div>
                            <div className={cx('goal__item')}>
                                <img src={images.goalImageFifth} alt="Image" className={cx('goal__image')} />
                            </div>
                            <div className={cx('goal__item')}>
                                <img src={images.goalImageSixth} alt="Image" className={cx('goal__image')} />
                            </div>
                        </figure>
                    </div>
                </div>
            </section>

            {/* ================ Teacher ================ */}
            <section className={cx('teacher')}>
                <div className={cx('container')}>
                    <div className={cx('teacher__inner')}>
                        <span className={cx('about__title--small')}>Our Teacher</span>
                        <h2 className={cx('about__title--large')}>Discover our professional mentors</h2>
                        <p className={cx('about__desc')}>
                            Choose from hundreds of courses from specialist organizations
                        </p>
                        <section className={cx('teacher__list')}>
                            {/* Item 1 */}
                            <div className={cx('teacher__item')}>
                                <img
                                    src={images.teacherImageFirst}
                                    alt="Teacher Portrait"
                                    className={cx('teacher__image')}
                                />
                                <span className={cx('teacher__name')}>Josh Knight</span>
                                <p className={cx('teacher__desc')}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <div className={cx('teacher__social')}>
                                    <Link to="#!">
                                        <FacebookIcon />
                                    </Link>
                                    <Link to="#!">
                                        <TwitterIcon />
                                    </Link>
                                    <Link to="#!">
                                        <InstagramIcon />
                                    </Link>
                                    <Link to="#!">
                                        <LinkedInIcon />
                                    </Link>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className={cx('teacher__item')}>
                                <img
                                    src={images.teacherImageSecond}
                                    alt="Teacher Portrait"
                                    className={cx('teacher__image')}
                                />
                                <span className={cx('teacher__name')}>Koray Ikumus</span>
                                <p className={cx('teacher__desc')}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <div className={cx('teacher__social')}>
                                    <Link to="#!">
                                        <FacebookIcon />
                                    </Link>
                                    <Link to="#!">
                                        <TwitterIcon />
                                    </Link>
                                    <Link to="#!">
                                        <InstagramIcon />
                                    </Link>
                                    <Link to="#!">
                                        <LinkedInIcon />
                                    </Link>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className={cx('teacher__item')}>
                                <img
                                    src={images.teacherImageThird}
                                    alt="Teacher Portrait"
                                    className={cx('teacher__image')}
                                />
                                <span className={cx('teacher__name')}>Noah Pierre</span>
                                <p className={cx('teacher__desc')}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <div className={cx('teacher__social')}>
                                    <Link to="#!">
                                        <FacebookIcon />
                                    </Link>
                                    <Link to="#!">
                                        <TwitterIcon />
                                    </Link>
                                    <Link to="#!">
                                        <InstagramIcon />
                                    </Link>
                                    <Link to="#!">
                                        <LinkedInIcon />
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            {/* ================ Partners ================ */}
            <section className={cx('partner')}>
                <div className={cx('container')}>
                    <div className={cx('partner__inner')}>
                        <span className={cx('about__title--small')}>Our Partners</span>
                        <h2 className={cx('about__title--large')}>Trusted by great partners</h2>
                        <p className={cx('about__desc')}>We Co-operation leading universities & companies</p>
                        <div className={cx('partner__logo')}>
                            <Partners />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
