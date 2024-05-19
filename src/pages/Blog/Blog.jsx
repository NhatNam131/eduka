import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import { ArrowRightIcon, IntroduceDecorFirstIcon, IntroduceDecorSecondIcon } from '~/components/Icons';

import * as styles from '~/scss/main.scss';

const cx = classNames.bind(styles);

function BlogPage() {
    return (
        <section className={cx('blog')}>
            <div className={cx('container')}>
                <div className={cx('blog__cover')}>
                    <div className={cx('container')}>
                        <h1 className={cx('blog__heading')}>Blog</h1>
                        <IntroduceDecorFirstIcon className={cx('blog__decor')} />
                        <IntroduceDecorSecondIcon className={cx('blog__decor')} />
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('col-8')}>
                        <section className={cx('blog__content-left')}>
                            <div className={cx('blog__header')}>
                                <div className={cx('blog__filter')}>
                                    <Button className={cx('blog__filter-btn text blog__filter-btn--current')}>
                                        All
                                    </Button>
                                    <Button className={cx('blog__filter-btn text')}>Business</Button>
                                    <Button className={cx('blog__filter-btn text')}>Education</Button>
                                    <Button className={cx('blog__filter-btn text')}>Learning</Button>
                                    <Button className={cx('blog__filter-btn text')}>Design</Button>
                                </div>

                                <input type="text" className={cx('blog__search')} placeholder="Search" />
                            </div>

                            <div className={cx('blog__list')}>
                                {/* Item 1 */}
                                <article className={cx('blog__item')}>
                                    <div className={cx('blog__item-content')}>
                                        <Link to="/blog-detail">
                                            <h2 className={cx('blog__title')}>
                                                The great challenge of global learning
                                            </h2>
                                        </Link>
                                        <p className={cx('blog__desc')}>
                                            With worldwide courses training and development programs in different
                                            approaches to online marketing are becoming available.
                                        </p>
                                        <div className={cx('blog__bottom')}>
                                            <div className={cx('blog__bottom-wrap')}>
                                                <span className={cx('blog__bottom-text')}>26 Aug 2022</span>
                                                <div className={cx('blog__bottom-circle')}></div>
                                                <span className={cx('blog__bottom-text')}>5 min red</span>
                                                <div className={cx('blog__bottom-circle')}></div>
                                                <span className={cx('blog__bottom-text blog__bottom-text--last')}>
                                                    Education
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <img src={images.blogImageFirst} alt="Image blog" className={cx('blog__image')} />
                                </article>

                                {/* Item 2 */}
                                <article className={cx('blog__item')}>
                                    <div className={cx('blog__item-content')}>
                                        <Link to="/blog-detail">
                                            <h2 className={cx('blog__title')}>
                                                How to building a career in data science
                                            </h2>
                                        </Link>
                                        <p className={cx('blog__desc')}>
                                            With worldwide courses training and development programs in different
                                            approaches to online marketing are becoming available.
                                        </p>
                                        <div className={cx('blog__bottom')}>
                                            <div className={cx('blog__bottom-wrap')}>
                                                <span className={cx('blog__bottom-text')}>26 Aug 2022</span>
                                                <div className={cx('blog__bottom-circle')}></div>
                                                <span className={cx('blog__bottom-text')}>5 min red</span>
                                                <div className={cx('blog__bottom-circle')}></div>
                                                <span className={cx('blog__bottom-text blog__bottom-text--last')}>
                                                    Education
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <img src={images.blogImageSecond} alt="Image blog" className={cx('blog__image')} />
                                </article>

                                {/* Item 3 */}
                                <article className={cx('blog__item')}>
                                    <div className={cx('blog__item-content')}>
                                        <Link to="/blog-detail">
                                            <h2 className={cx('blog__title')}>
                                                We highlighting strategies for student success
                                            </h2>
                                        </Link>
                                        <p className={cx('blog__desc')}>
                                            With worldwide courses training and development programs in different
                                            approaches to online marketing are becoming available.
                                        </p>
                                        <div className={cx('blog__bottom')}>
                                            <div className={cx('blog__bottom-wrap')}>
                                                <span className={cx('blog__bottom-text')}>26 Aug 2022</span>
                                                <div className={cx('blog__bottom-circle')}></div>
                                                <span className={cx('blog__bottom-text')}>5 min red</span>
                                                <div className={cx('blog__bottom-circle')}></div>
                                                <span className={cx('blog__bottom-text blog__bottom-text--last')}>
                                                    Education
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <img src={images.blogImageThird} alt="Image blog" className={cx('blog__image')} />
                                </article>

                                {/* Item 4 */}
                                <article className={cx('blog__item')}>
                                    <div className={cx('blog__item-content')}>
                                        <Link to="/blog-detail">
                                            <h2 className={cx('blog__title')}>
                                                Find right learning way to your course online
                                            </h2>
                                        </Link>
                                        <p className={cx('blog__desc')}>
                                            With worldwide courses training and development programs in different
                                            approaches to online marketing are becoming available.
                                        </p>
                                        <div className={cx('blog__bottom')}>
                                            <div className={cx('blog__bottom-wrap')}>
                                                <span className={cx('blog__bottom-text')}>26 Aug 2022</span>
                                                <div className={cx('blog__bottom-circle')}></div>
                                                <span className={cx('blog__bottom-text')}>5 min red</span>
                                                <div className={cx('blog__bottom-circle')}></div>
                                                <span className={cx('blog__bottom-text blog__bottom-text--last')}>
                                                    Education
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <img src={images.blogImageFourth} alt="Image blog" className={cx('blog__image')} />
                                </article>
                            </div>

                            <div className={cx('blog__next-page')}>
                                <Button primary className={cx('blog__next-page--btn blog__next-page--number')}>
                                    1
                                </Button>
                                <Button gray className={cx('blog__next-page--btn blog__next-page--more')}>
                                    ...
                                </Button>
                                <Button gray className={cx('blog__next-page--next')}>
                                    Next <ArrowRightIcon />
                                </Button>
                            </div>
                        </section>
                    </div>

                    <div className={cx('col-4')}>
                        <section className={cx('blog__content-right')}>
                            <h2 className={cx('blog__content-right-title')}>Popular Articles</h2>
                            <div className={cx('blog__popular-list')}>
                                {/* Item 1 */}
                                <article className={cx('blog__popular-item')}>
                                    <h3 className={cx('blog__popular-title')}>
                                        The great challenge of global learning
                                    </h3>
                                    <div className={cx('blog__popular-bottom')}>
                                        <span className={cx('blog__popular-date')}>26 Aug 2022</span>
                                        <div className={cx('blog__bottom-circle')}></div>
                                        <time className={cx('blog__popular-time')}>5 min red</time>
                                    </div>
                                </article>

                                {/* Item 2 */}
                                <article className={cx('blog__popular-item')}>
                                    <h3 className={cx('blog__popular-title')}>
                                        The great challenge of global learning
                                    </h3>
                                    <div className={cx('blog__popular-bottom')}>
                                        <span className={cx('blog__popular-date')}>26 Aug 2022</span>
                                        <div className={cx('blog__bottom-circle')}></div>
                                        <time className={cx('blog__popular-time')}>5 min red</time>
                                    </div>
                                </article>

                                {/* Item 3 */}
                                <article className={cx('blog__popular-item')}>
                                    <h3 className={cx('blog__popular-title')}>
                                        The great challenge of global learning
                                    </h3>
                                    <div className={cx('blog__popular-bottom')}>
                                        <span className={cx('blog__popular-date')}>26 Aug 2022</span>
                                        <div className={cx('blog__bottom-circle')}></div>
                                        <time className={cx('blog__popular-time')}>5 min red</time>
                                    </div>
                                </article>
                            </div>
                            <section className={cx('blog__subscribe')}>
                                <h2 className={cx('blog__content-right-title')}>Subscribe to our Blog</h2>
                                <p className={cx('blog__subscribe-desc')}>Get the latest news to your email</p>
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className={cx('blog__subscribe-input')}
                                />
                                <Button primary rounded className={cx('blog__subscribe-btn')}>
                                    Subscribe
                                </Button>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPage;
