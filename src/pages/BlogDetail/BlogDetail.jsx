import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import {
    FacebookIcon,
    IntroduceDecorFirstIcon,
    IntroduceDecorSecondIcon,
    LinkedInIcon,
    ReplyIcon,
    TwitterIcon,
} from '~/components/Icons';

import * as styles from '~/scss/main.scss';

const cx = classNames.bind(styles);

function BlogDetailPage() {
    return (
        <section className={cx('blog')}>
            <div className={cx('container')}>
                <div className={cx('blog__cover')}>
                    <div className={cx('container')}>
                        <h1 className={cx('blog__heading')}>The great challenge of global learning</h1>
                        <IntroduceDecorFirstIcon className={cx('blog__decor')} />
                        <IntroduceDecorSecondIcon className={cx('blog__decor')} />
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('col-7')}>
                        <section className={cx('blog-detail__left')}>
                            <div className={cx('blog-detail__infomation')}>
                                <div className={cx('blog-detail__infomation-left')}>
                                    <img
                                        src={images.avatarFirstItem}
                                        alt="Avatar"
                                        className={cx('blog-detail__infomation-avatar')}
                                    />
                                    <div className={cx('blog-detail__infomation-wrap')}>
                                        <span className={cx('blog-detail__infomation-name')}>Joseph</span>
                                        <div className={cx('blog-detail__infomation-horizontal')}>
                                            <span className={cx('blog-detail__infomation-date')}>August 17, 2022</span>
                                            <div className={cx('blog-detail__infomation-circle')}></div>
                                            <time className={cx('blog-detail__infomation-time')}>7 min Read</time>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('blog-detail__infomation-right')}>
                                    <div className={cx('blog-detail__infomation-horizontal')}>
                                        <Link to="#!" className={cx('blog-detail__social')}>
                                            <FacebookIcon className={cx('blog-detail__social-icon')} />
                                        </Link>
                                        <Link to="#!" className={cx('blog-detail__social')}>
                                            <TwitterIcon className={cx('blog-detail__social-icon')} />
                                        </Link>
                                        <Link to="#!" className={cx('blog-detail__social')}>
                                            <LinkedInIcon className={cx('blog-detail__social-icon')} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <img src={images.blogDetailImage} alt="Image blog" className={cx('blog-detail__image')} />
                            <section className={cx('blog-detail__content')}>
                                <p className={cx('blog-detail__paragraph')}>
                                    ith worldwide course’s training and development programs in different approaches to
                                    online marketing are becoming available. One of these new proach in many course.
                                </p>
                                <p className={cx('blog-detail__paragraph')}>
                                    Digital performance marketing. Keep reading to a learn all about performance
                                    marketing, from how it works for how it compares to digital marketing. Plus, get a
                                    insight into the benefits and risks of performance marketing and how it can affects
                                    your company’s long-term success and profitability. Performance marketing is an
                                    approach to digital marketing or advertising where businesses only pay when a
                                    specific result occurs.
                                </p>
                                <p className={cx('blog-detail__paragraph')}>
                                    Keep reading to a learn all about performance marketing, from how it works for how
                                    it compares to digital marketing. Plus, get a insight into the benefits and risks of
                                    performance marketing and how it can affects your company’s long-term success and
                                    profitability. Performance marketing is an approach to digital marketing or
                                    advertising where businesses only pay when a specific result occurs.
                                </p>

                                <h2 className={cx('blog-detail__title')}>Conclusion</h2>
                                <p className={cx('blog-detail__paragraph')}>
                                    Et qui et quae et maxime assumenda. Suscipit voluptatum in fugiat. A sapiente
                                    eveniet doloremque asperiores numquam voluptatem. Beatae illo commodi. Sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </section>
                            <section className={cx('blog-detail__comment')}>
                                <h2 className={cx('blog-detail__comment-title')}>
                                    3 Replies to “Get the information about teacher certification”
                                </h2>
                                <div className={cx('blog-detail__comment-list')}>
                                    {/* Item 1 */}
                                    <div className={cx('blog-detail__comment-item')}>
                                        <img
                                            src={images.avatarSecondItem}
                                            alt="Avatar"
                                            className={cx('blog-detail__comment-avatar')}
                                        />
                                        <div className={cx('blog-detail__comment-info')}>
                                            <div className={cx('blog-detail__comment-header')}>
                                                by
                                                <strong className={cx('blog-detail__comment-bold')}>Lwish Koe /</strong>
                                                <time> 1 year ago</time>
                                            </div>
                                            <p className={cx('blog-detail__comment-content')}>
                                                Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt
                                            </p>
                                            <Button className={cx('blog-detail__comment-reply')}>
                                                <ReplyIcon />
                                                Reply
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className={cx('blog-detail__comment-item')}>
                                        <img
                                            src={images.avatarThirdItem}
                                            alt="Avatar"
                                            className={cx('blog-detail__comment-avatar')}
                                        />
                                        <div className={cx('blog-detail__comment-info')}>
                                            <div className={cx('blog-detail__comment-header')}>
                                                by
                                                <strong className={cx('blog-detail__comment-bold')}>Lwish Koe /</strong>
                                                <time> 1 year ago</time>
                                            </div>
                                            <p className={cx('blog-detail__comment-content')}>
                                                Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt
                                            </p>
                                            <Button className={cx('blog-detail__comment-reply')}>
                                                <ReplyIcon />
                                                Reply
                                            </Button>

                                            <div
                                                className={cx(
                                                    'blog-detail__comment-item blog-detail__comment-item--reply',
                                                )}
                                            >
                                                <img
                                                    src={images.avatarSecondItem}
                                                    alt="Avatar"
                                                    className={cx('blog-detail__comment-avatar')}
                                                />
                                                <div className={cx('blog-detail__comment-info')}>
                                                    <div className={cx('blog-detail__comment-header')}>
                                                        by
                                                        <strong className={cx('blog-detail__comment-bold')}>
                                                            Lwish Koe /
                                                        </strong>
                                                        <time> 1 year ago</time>
                                                    </div>
                                                    <p className={cx('blog-detail__comment-content')}>
                                                        Beatae illo commodi. Sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt
                                                    </p>
                                                    <Button className={cx('blog-detail__comment-reply')}>
                                                        <ReplyIcon />
                                                        Reply
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className={cx('blog-detail__reply')}>
                                <h2 className={cx('blog-detail__reply-title')}>Leave a Reply</h2>
                                <p className={cx('blog-detail__reply-desc')}>
                                    Your email address will not be published. Required fields are marked *
                                </p>
                                <textarea
                                    placeholder="Enter your comment here..."
                                    className={cx('blog-detail__reply-comment')}
                                />
                                <div className={cx('blog-detail__reply-info')}>
                                    <input type="text" placeholder="Name" className={cx('blog-detail__reply-input')} />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={cx('blog-detail__reply-input')}
                                    />
                                    <input
                                        type="website"
                                        placeholder="Website"
                                        className={cx('blog-detail__reply-input')}
                                    />
                                </div>
                                <label className={cx('blog-detail__reply-checkbox')}>
                                    <input type="checkbox" />
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                                <Button primary className={cx('blog-detail__reply-btn')}>
                                    Post Comment
                                </Button>
                            </section>
                        </section>
                    </div>

                    <div className={cx('col-5')}>
                        <section className={cx('blog-detail__right')}>
                            <h2 className={cx('blog-detail__right-title--large')}>Resent Courses</h2>
                            <div className={cx('blog-detail__right-overflow')}>
                                <div className={cx('blog-detail__right-wrap')}>
                                    {/* List 1 */}
                                    <section className={cx('blog-detail__right-list')}>
                                        <div className={cx('blog-detail__right-separate')}>
                                            <div className={cx('blog-detail__right-separate--first')}></div>
                                        </div>

                                        {/* Item 1 */}
                                        <div className={cx('blog-detail__right-item')}>
                                            <Link to="#!" className={cx('blog-detail__right-thumb')}>
                                                <img
                                                    src={images.blogImageFirst}
                                                    alt="Image item"
                                                    className={cx('blog-detail__right-image')}
                                                />
                                            </Link>
                                            <div className={cx('blog-detail__right-content')}>
                                                <Link to="#!">
                                                    <h3 className={cx('blog-detail__right-title--small')}>
                                                        Learn Geography with Fun & Exciting Way
                                                    </h3>
                                                </Link>
                                                <div className={cx('blog-detail__right-prices')}>
                                                    <span
                                                        className={cx(
                                                            'blog-detail__right-price blog-detail__right-price--sales',
                                                        )}
                                                    >
                                                        $45.00
                                                    </span>
                                                    <span className={cx('blog-detail__right-price')}>$40.00</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Item 2 */}
                                        <div className={cx('blog-detail__right-item')}>
                                            <Link to="#!" className={cx('blog-detail__right-thumb')}>
                                                <img
                                                    src={images.blogImageSecond}
                                                    alt="Image item"
                                                    className={cx('blog-detail__right-image')}
                                                />
                                            </Link>
                                            <div className={cx('blog-detail__right-content')}>
                                                <Link to="#!">
                                                    <h3 className={cx('blog-detail__right-title--small')}>
                                                        Learn Geography with Fun & Exciting Way
                                                    </h3>
                                                </Link>
                                                <div className={cx('blog-detail__right-prices')}>
                                                    <span
                                                        className={cx(
                                                            'blog-detail__right-price blog-detail__right-price--sales',
                                                        )}
                                                    >
                                                        $45.00
                                                    </span>
                                                    <span className={cx('blog-detail__right-price')}>$40.00</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Item 3 */}
                                        <div className={cx('blog-detail__right-item')}>
                                            <Link to="#!" className={cx('blog-detail__right-thumb')}>
                                                <img
                                                    src={images.blogImageThird}
                                                    alt="Image item"
                                                    className={cx('blog-detail__right-image')}
                                                />
                                            </Link>
                                            <div className={cx('blog-detail__right-content')}>
                                                <Link to="#!">
                                                    <h3 className={cx('blog-detail__right-title--small')}>
                                                        Learn Geography with Fun & Exciting Way
                                                    </h3>
                                                </Link>
                                                <div className={cx('blog-detail__right-prices')}>
                                                    <span
                                                        className={cx(
                                                            'blog-detail__right-price blog-detail__right-price--sales',
                                                        )}
                                                    >
                                                        $45.00
                                                    </span>
                                                    <span className={cx('blog-detail__right-price')}>$40.00</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Item 4 */}
                                        <div className={cx('blog-detail__right-item')}>
                                            <Link to="#!" className={cx('blog-detail__right-thumb')}>
                                                <img
                                                    src={images.blogImageFourth}
                                                    alt="Image item"
                                                    className={cx('blog-detail__right-image')}
                                                />
                                            </Link>
                                            <div className={cx('blog-detail__right-content')}>
                                                <Link to="#!">
                                                    <h3 className={cx('blog-detail__right-title--small')}>
                                                        Learn Geography with Fun & Exciting Way
                                                    </h3>
                                                </Link>
                                                <div className={cx('blog-detail__right-prices')}>
                                                    <span
                                                        className={cx(
                                                            'blog-detail__right-price blog-detail__right-price--sales',
                                                        )}
                                                    >
                                                        $45.00
                                                    </span>
                                                    <span className={cx('blog-detail__right-price')}>$40.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <h2 className={cx('blog-detail__right-title--large')}>Categories</h2>
                            <div className={cx('blog-detail__right-overflow')}>
                                <div className={cx('blog-detail__right-wrap')}>
                                    {/* List 1 */}
                                    <section className={cx('blog-detail__right-list')}>
                                        <div className={cx('blog-detail__right-separate')}>
                                            <div className={cx('blog-detail__categories-separate--first')}></div>
                                        </div>
                                        <ul className={cx('blog-detail__categories')}>
                                            <li className={cx('blog-detail__categories-item')}>
                                                <Link to="#!" className={cx('blog-detail__categories-link')}>
                                                    <div className={cx('blog-detail__categories-circle')}></div>
                                                    Education
                                                    <span className={cx('blog-detail__categories-number')}>(7)</span>
                                                </Link>
                                            </li>

                                            <li className={cx('blog-detail__categories-item')}>
                                                <Link to="#!" className={cx('blog-detail__categories-link')}>
                                                    <div className={cx('blog-detail__categories-circle')}></div>
                                                    Learning
                                                    <span className={cx('blog-detail__categories-number')}>(5)</span>
                                                </Link>
                                            </li>

                                            <li className={cx('blog-detail__categories-item')}>
                                                <Link to="#!" className={cx('blog-detail__categories-link')}>
                                                    <div className={cx('blog-detail__categories-circle')}></div>
                                                    UX Design
                                                    <span className={cx('blog-detail__categories-number')}>(4)</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogDetailPage;
