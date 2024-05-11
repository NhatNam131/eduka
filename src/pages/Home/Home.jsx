import classNames from 'classnames/bind';

import * as styles from '~/scss/main.scss';
import {
    AmazonLogoIcon,
    ArrowRightIcon,
    CategoryArtIcon,
    CategoryChemistryIcon,
    CategoryDesignIcon,
    CategoryFoodIcon,
    CategoryLanguageIcon,
    CategoryMathIcon,
    CategoryMedicalIcon,
    CategoryTechnologiIcon,
    ContactDecorIcon,
    ContactDecorLargeIcon,
    ContactDecorSmallIcon,
    DecorEventsIcon,
    EventsBookIcon,
    EventsFireIcon,
    EventsLocationIcon,
    EventsRocketIcon,
    EventsTimeIcon,
    EventsWritingIcon,
    FeedbackArrowLeftIcon,
    FeedbackArrowRightIcon,
    FeedbackDecorFirstIcon,
    FeedbackDecorSecondIcon,
    FeedbackDecorThirdIcon,
    FeedbackLogoIcon,
    FeedbackStarIcon,
    GoogleLogoIcon,
    GustoLogoIcon,
    HubspotLogoIcon,
    LessonsIcon,
    PricesIcon,
    QuotesIcon,
    SlackLogoIcon,
    StarIcon,
    TimeIcon,
    UserIcon,
    WhitebookIcon,
} from '~/components/Icons';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <>
            {/* ================= Company ================= */}
            <div className={cx('company')}>
                <div className={cx('company__inner')}>
                    <GoogleLogoIcon className={cx('company__logo')} />
                    <SlackLogoIcon className={cx('company__logo')} />
                    <AmazonLogoIcon className={cx('company__logo')} />
                    <HubspotLogoIcon className={cx('company__logo')} />
                    <GustoLogoIcon className={cx('company__logo')} />
                </div>
            </div>

            {/* ================= Courses ================= */}
            <section className={cx('courses')}>
                <div className="container">
                    <div className={cx('courses__inner')}>
                        <span className={cx('home__title--small')}>Our Courses</span>
                        <h1 className={cx('home__title--large')}>Browse Our Best Courses</h1>

                        <section className={cx('home__list')}>
                            {/* ========= Item 1 ========= */}
                            <article className={cx('courses__item')}>
                                <div className={cx('courses__item-thumb')}>
                                    <img
                                        src={images.imageFirstItem}
                                        alt="Image item"
                                        className={cx('courses__item-image')}
                                    />
                                </div>
                                <h2 className={cx('courses__item-title')}>Teach Your Kids Math In The Simple Way</h2>
                                <div className={cx('courses__item-bottom')}>
                                    <div className={cx('courses__item-bottom-wrap')}>
                                        <LessonsIcon />
                                        <span className={cx('courses__item-bottom-quantity')}>42 Lessons</span>
                                    </div>
                                    <div className={cx('courses__item-bottom-wrap')}>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </div>
                            </article>

                            {/* ========= Item 2 ========= */}
                            <article className={cx('courses__item')}>
                                <div className={cx('courses__item-thumb')}>
                                    <img
                                        src={images.imageSecondItem}
                                        alt="Image item"
                                        className={cx('courses__item-image')}
                                    />
                                </div>
                                <h2 className={cx('courses__item-title')}>Learn Coding in the most Easiest Way</h2>
                                <div className={cx('courses__item-bottom')}>
                                    <div className={cx('courses__item-bottom-wrap')}>
                                        <LessonsIcon />
                                        <span className={cx('courses__item-bottom-quantity')}>22 Lessons</span>
                                    </div>
                                    <div className={cx('courses__item-bottom-wrap')}>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </div>
                            </article>

                            {/* ========= Item 3 ========= */}
                            <article className={cx('courses__item')}>
                                <div className={cx('courses__item-thumb')}>
                                    <img
                                        src={images.imageThirdItem}
                                        alt="Image item"
                                        className={cx('courses__item-image')}
                                    />
                                </div>
                                <h2 className={cx('courses__item-title')}>Learn Geography with Fun & Exciting Way</h2>
                                <div className={cx('courses__item-bottom')}>
                                    <div className={cx('courses__item-bottom-wrap')}>
                                        <LessonsIcon />
                                        <span className={cx('courses__item-bottom-quantity')}>24 Lessons</span>
                                    </div>
                                    <div className={cx('courses__item-bottom-wrap')}>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </div>
                            </article>

                            {/* ========= Item 4 ========= */}
                            <article className={cx('courses__item')}>
                                <div className={cx('courses__item-thumb')}>
                                    <img
                                        src={images.imageFourthItem}
                                        alt="Image item"
                                        className={cx('courses__item-image')}
                                    />
                                </div>
                                <h2 className={cx('courses__item-title')}>Kid’s English Native Spoken & Grammer </h2>
                                <div className={cx('courses__item-bottom')}>
                                    <div className={cx('courses__item-bottom-wrap')}>
                                        <LessonsIcon />
                                        <span className={cx('courses__item-bottom-quantity')}>15 Lessons</span>
                                    </div>
                                    <div className={cx('courses__item-bottom-wrap')}>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </div>
                            </article>
                        </section>

                        <Button primary rounded className={cx('courses__btn')}>
                            Load More
                            <ArrowRightIcon />
                        </Button>
                    </div>
                </div>
            </section>

            {/* ================= Why Choose Us ================= */}
            <section className={cx('choice')}>
                <div className={cx('container')}>
                    <div className={cx('choice__inner')}>
                        <span className={cx('home__title--small')}>Why Choose Us</span>
                        <h1 className={cx('home__title--large')}>A Choice That Makes The Differece</h1>

                        <section className={cx('home__list')}>
                            {/* ========= Item 1 ========= */}
                            <article className={cx('choice__item')}>
                                <div className={cx('choice__item-thumb')}>
                                    <UserIcon />
                                </div>
                                <h2 className={cx('choice__item-title')}>One-by one Teaching</h2>
                                <p className="choice__item-desc">
                                    All of our special education experts have a degree in special education
                                </p>
                            </article>

                            {/* ========= Item 1 ========= */}
                            <article className={cx('choice__item')}>
                                <div className={cx('choice__item-thumb')}>
                                    <TimeIcon />
                                </div>
                                <h2 className={cx('choice__item-title')}>24/7 Tutor Availablity</h2>
                                <p className="choice__item-desc">
                                    All of our special education experts have a degree in special education
                                </p>
                            </article>

                            {/* ========= Item 1 ========= */}
                            <article className={cx('choice__item')}>
                                <div className={cx('choice__item-thumb')}>
                                    <WhitebookIcon />
                                </div>
                                <h2 className={cx('choice__item-title')}>Interactive Whitebook</h2>
                                <p className="choice__item-desc">
                                    All of our special education experts have a degree in special education
                                </p>
                            </article>

                            {/* ========= Item 1 ========= */}
                            <article className={cx('choice__item')}>
                                <div className={cx('choice__item-thumb')}>
                                    <PricesIcon />
                                </div>
                                <h2 className={cx('choice__item-title')}>Affordable Prices</h2>
                                <p className="choice__item-desc">
                                    All of our special education experts have a degree in special education
                                </p>
                            </article>
                        </section>
                    </div>
                </div>
            </section>

            {/* ================= Latest News ================= */}
            <section className={cx('news')}>
                <div className={cx('container')}>
                    <div className={cx('news__inner')}>
                        <span className={cx('home__title--small')}>Latest News</span>
                        <h1 className={cx('home__title--large')}>Education news all over the world</h1>
                        <div className={cx('news__filter')}>
                            <Button rounded className={cx('news__filter-btn news__filter-btn--current')}>
                                All
                            </Button>
                            <Button rounded className={cx('news__filter-btn')}>
                                Art
                            </Button>
                            <Button rounded className={cx('news__filter-btn')}>
                                Business
                            </Button>
                            <Button rounded className={cx('news__filter-btn')}>
                                Career
                            </Button>
                        </div>
                        <div className={cx('news__list')}>
                            {/* ========= Item 1 ========= */}
                            <article className={cx('news__item')}>
                                <Link to="#!">
                                    <img src={images.newsFirstItem} alt="Image item" className={cx('news__image')} />
                                </Link>
                                <div className={cx('news__top')}>
                                    <span className={cx('news__type')}>Business</span>
                                    <time className={cx('news__time')}>October 29, 2122</time>
                                </div>
                                <Link to="#!">
                                    <h2 className={cx('news__title')}>Take Your Career to the Next Level Future </h2>
                                </Link>
                                <div className={cx('news__author')}>
                                    <img
                                        src={images.avatarFirstItem}
                                        alt="Avatar"
                                        className={cx('news__author-avatar')}
                                    />
                                    <span className={cx('news__author-name')}>Michael Dam</span>
                                    <span className={cx('news__author-text')}>Author</span>
                                </div>
                            </article>

                            {/* ========= Item 2 ========= */}
                            <article className={cx('news__item')}>
                                <Link to="#!">
                                    <img src={images.newsSecondItem} alt="Image item" className={cx('news__image')} />
                                </Link>
                                <div className={cx('news__top')}>
                                    <span className={cx('news__type')}>Business</span>
                                    <time className={cx('news__time')}>October 29, 2122</time>
                                </div>
                                <Link to="#!">
                                    <h2 className={cx('news__title')}>Take Your Career to the Next Level Future </h2>
                                </Link>
                                <div className={cx('news__author')}>
                                    <img
                                        src={images.avatarSecondItem}
                                        alt="Avatar"
                                        className={cx('news__author-avatar')}
                                    />
                                    <span className={cx('news__author-name')}>Vicky Hladynest</span>
                                    <span className={cx('news__author-text')}>Author</span>
                                </div>
                            </article>

                            {/* ========= Item 3 ========= */}
                            <article className={cx('news__item')}>
                                <Link to="#!">
                                    <img src={images.newsThirdItem} alt="Image item" className={cx('news__image')} />
                                </Link>
                                <div className={cx('news__top')}>
                                    <span className={cx('news__type')}>Business</span>
                                    <time className={cx('news__time')}>October 29, 2122</time>
                                </div>
                                <Link to="#!">
                                    <h2 className={cx('news__title')}>Take Your Career to the Next Level Future </h2>
                                </Link>
                                <div className={cx('news__author')}>
                                    <img
                                        src={images.avatarThirdItem}
                                        alt="Avatar"
                                        className={cx('news__author-avatar')}
                                    />
                                    <span className={cx('news__author-name')}>Nicolas Horn</span>
                                    <span className={cx('news__author-text')}>Author</span>
                                </div>
                            </article>
                        </div>
                        <Button primary rounded className={cx('news__btn')}>
                            Browse all News
                            <ArrowRightIcon />
                        </Button>
                    </div>
                </div>
            </section>

            {/* ================= Events ================= */}
            <section className={cx('events')}>
                <div className={cx('container')}>
                    <div className={cx('events__inner')}>
                        <span className={cx('home__title--small')}>Shedule Of Event</span>
                        <h1 className={cx('home__title--large')}>Upcoming Events</h1>
                        <p className={cx('home__desc')}>
                            Whether it is a live or recorded course you want to create, Airschool is the short and easy
                            answer. With Airschool
                        </p>
                        <div className={cx('events__list')}>
                            <DecorEventsIcon className={cx('events__decor')} />
                            {/* Item 1 */}
                            <Link to="#!">
                                <article className={cx('events__item')}>
                                    <img
                                        src={images.eventsFirstItem}
                                        alt="Image item"
                                        className={cx('events__image')}
                                    />
                                    <div className={cx('events__contents')}>
                                        <div className={cx('events__top')}>
                                            <EventsFireIcon />
                                            <span className={cx('events__date')}>15 April</span>
                                        </div>
                                        <h3 className={cx('events__title')}>Education Autumn Tour 2022</h3>
                                        <div className={cx('events__bottom')}>
                                            <div className={cx('events__bottom-wrap')}>
                                                <EventsTimeIcon />
                                                <time className={cx('events__bottom-text')}>07.00-05.00</time>
                                            </div>
                                            <div className={cx('events__bottom-wrap')}>
                                                <EventsLocationIcon />
                                                <time className={cx('events__bottom-text')}>Berlin, Germany</time>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>

                            {/* Item 2 */}
                            <Link to="#!">
                                <article className={cx('events__item')}>
                                    <img
                                        src={images.eventsSecondItem}
                                        alt="Image item"
                                        className={cx('events__image')}
                                    />
                                    <div className={cx('events__contents')}>
                                        <div className={cx('events__top')}>
                                            <EventsRocketIcon />
                                            <span className={cx('events__date')}>25 October</span>
                                        </div>
                                        <h3 className={cx('events__title')}>Education Autumn Tour 2022</h3>
                                        <div className={cx('events__bottom')}>
                                            <div className={cx('events__bottom-wrap')}>
                                                <EventsTimeIcon />
                                                <time className={cx('events__bottom-text')}>07.00-05.00</time>
                                            </div>
                                            <div className={cx('events__bottom-wrap')}>
                                                <EventsLocationIcon />
                                                <time className={cx('events__bottom-text')}>Berlin, Germany</time>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>

                            {/* Item 3 */}
                            <Link to="#!">
                                <article className={cx('events__item')}>
                                    <img
                                        src={images.eventsThirdItem}
                                        alt="Image item"
                                        className={cx('events__image')}
                                    />
                                    <div className={cx('events__contents')}>
                                        <div className={cx('events__top')}>
                                            <EventsBookIcon />
                                            <span className={cx('events__date')}>05 May</span>
                                        </div>
                                        <h3 className={cx('events__title')}>Education Autumn Tour 2022</h3>
                                        <div className={cx('events__bottom')}>
                                            <div className={cx('events__bottom-wrap')}>
                                                <EventsTimeIcon />
                                                <time className={cx('events__bottom-text')}>07.00-05.00</time>
                                            </div>
                                            <div className={cx('events__bottom-wrap')}>
                                                <EventsLocationIcon />
                                                <time className={cx('events__bottom-text')}>Berlin, Germany</time>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>

                            {/* Item 4 */}
                            <Link to="#!">
                                <article className={cx('events__item')}>
                                    <img src={images.eventsFourItem} alt="Image item" className={cx('events__image')} />
                                    <div className={cx('events__contents')}>
                                        <div className={cx('events__top')}>
                                            <EventsWritingIcon />
                                            <span className={cx('events__date')}>18 August</span>
                                        </div>
                                        <h3 className={cx('events__title')}>Education Autumn Tour 2022</h3>
                                        <div className={cx('events__bottom')}>
                                            <div className={cx('events__bottom-wrap')}>
                                                <EventsTimeIcon />
                                                <time className={cx('events__bottom-text')}>07.00-05.00</time>
                                            </div>
                                            <div className={cx('events__bottom-wrap')}>
                                                <EventsLocationIcon />
                                                <time className={cx('events__bottom-text')}>Berlin, Germany</time>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </div>
                        <Button primary rounded className={cx('events__btn')}>
                            More Event
                            <ArrowRightIcon />
                        </Button>
                    </div>
                </div>
            </section>

            {/* ================= Category ================= */}
            <section className={cx('category')}>
                <div className={cx('container')}>
                    <div className={cx('category__inner')}>
                        <span className={cx('home__title--small')}>Popular Category</span>
                        <h1 className={cx('home__title--large')}>Featured Topics by Category</h1>
                        <div className={cx('category__list')}>
                            {/* Item 1 */}
                            <Link to="#!">
                                <section className={cx('category__item')}>
                                    <CategoryDesignIcon />
                                    <h2 className={cx('category__title')}>Design</h2>
                                </section>
                            </Link>
                            {/* Item 2 */}
                            <Link to="#!">
                                <section className={cx('category__item')}>
                                    <CategoryChemistryIcon />
                                    <h2 className={cx('category__title')}>Chemistry</h2>
                                </section>
                            </Link>
                            {/* Item 3 */}
                            <Link to="#!">
                                <section className={cx('category__item')}>
                                    <CategoryTechnologiIcon />
                                    <h2 className={cx('category__title')}>Technology</h2>
                                </section>
                            </Link>
                            {/* Item 4 */}
                            <Link to="#!">
                                <section className={cx('category__item')}>
                                    <CategoryMedicalIcon />
                                    <h2 className={cx('category__title')}>Medical</h2>
                                </section>
                            </Link>
                            {/* Item 5 */}
                            <Link to="#!">
                                <section className={cx('category__item')}>
                                    <CategoryMathIcon />
                                    <h2 className={cx('category__title')}>Mathematics</h2>
                                </section>
                            </Link>
                            {/* Item 6 */}
                            <Link to="#!">
                                <section className={cx('category__item')}>
                                    <CategoryFoodIcon />
                                    <h2 className={cx('category__title')}>Food & Recipe</h2>
                                </section>
                            </Link>
                            {/* Item 7 */}
                            <Link to="#!">
                                <section className={cx('category__item')}>
                                    <CategoryLanguageIcon />
                                    <h2 className={cx('category__title')}>Language</h2>
                                </section>
                            </Link>
                            {/* Item 7 */}
                            <Link to="#!">
                                <section className={cx('category__item')}>
                                    <CategoryArtIcon />
                                    <h2 className={cx('category__title')}>Art & Block</h2>
                                </section>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= Feedback ================= */}
            <section className={cx('feedback')}>
                <div className={cx('container')}>
                    <div className={cx('feedback__inner')}>
                        <span className={cx('home__title--small')}>Student Feedback</span>
                        <h1 className={cx('home__title--large')}>What People Say</h1>
                        <div className={cx('feedback__list')}>
                            {/* Feedback media */}
                            <figure className={cx('feedback__media')}>
                                <div className={cx('feedback__media-wrap')}>
                                    <div className={cx('feedback__media-thumb')}>
                                        <img
                                            src={images.feedbackFirstItem}
                                            alt="Avatar"
                                            className={cx('feedback__image')}
                                        />
                                        <img
                                            src={images.feedbackSecondItem}
                                            alt="Avatar"
                                            className={cx('feedback__image')}
                                        />
                                        <img
                                            src={images.feedbackThirdItem}
                                            alt="Avatar"
                                            className={cx('feedback__image')}
                                        />
                                    </div>
                                </div>
                                <div className={cx('feedback__arrow feedback__arrow--left')}>
                                    <FeedbackArrowLeftIcon />
                                </div>
                                <div className={cx('feedback__arrow feedback__arrow--right')}>
                                    <FeedbackArrowRightIcon />
                                </div>
                                <FeedbackDecorFirstIcon className={cx('feedback__decor')} />
                                <FeedbackDecorSecondIcon className={cx('feedback__decor')} />
                                <FeedbackDecorThirdIcon className={cx('feedback__decor')} />
                            </figure>

                            {/* Feedback content */}
                            <div className={cx('feedback__content')}>
                                <QuotesIcon />
                                <div className={cx('feedback__start')}>
                                    <FeedbackStarIcon />
                                    <FeedbackStarIcon />
                                    <FeedbackStarIcon />
                                    <FeedbackStarIcon />
                                    <FeedbackStarIcon />
                                </div>
                                <blockquote className={cx('feedback__text')}>
                                    Our experienced team will provide you with practical and professional training in a
                                    safe and friendly environment. Join us on a spring break adventure through the world
                                    of Higher Education.
                                </blockquote>
                                <div className={cx('feedback__bottom')}>
                                    <div className={cx('feedback__bottom-info')}>
                                        <h2 className={cx('feedback__bottom-name')}>Miles, Esther</h2>
                                        <span className={cx('feedback__bottom-career')}>Designer</span>
                                    </div>
                                    <FeedbackLogoIcon />
                                </div>
                            </div>
                        </div>
                        <div className={cx('feedback__data')}>
                            <div className={cx('feedback__data-item')}>
                                <span className={cx('feedback__data-number')}>360+</span>
                                <h3 className={cx('feedback__data-title')}>Hours Of Learning</h3>
                            </div>
                            <div className={cx('feedback__data-item')}>
                                <span className={cx('feedback__data-number')}>1200+</span>
                                <h3 className={cx('feedback__data-title')}>Enrolled Learners</h3>
                            </div>
                            <div className={cx('feedback__data-item')}>
                                <span className={cx('feedback__data-number')}>650+</span>
                                <h3 className={cx('feedback__data-title')}>Online Instructors</h3>
                            </div>
                            <div className={cx('feedback__data-item')}>
                                <span className={cx('feedback__data-number')}>100%</span>
                                <h3 className={cx('feedback__data-title')}>Satisfaction rate</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= Contact ================= */}
            <section className={cx('contact')}>
                <div className={cx('container')}>
                    <div className={cx('contact__inner')}>
                        <div className={cx('contact__content')}>
                            <span className={cx('home__title--small')}>Contact US</span>
                            <h1 className={cx('home__title--large')}>Ready to get started?</h1>
                            <p className={cx('contact__desc')}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form. There are many variations of passages of Lorem Ipsum
                                available.
                            </p>
                            <Button primary rounded className={cx('contact__btn')}>
                                Get in Touch
                            </Button>
                        </div>

                        <figure className={cx('contact__media')}>
                            <div className={cx('contact__media-wrap')}>
                                <img src={images.contactMedia} alt="Image" className={cx('contact__image')} />
                                <div className={cx('contact__circle')}></div>
                                <ContactDecorIcon className={cx('contact__decor')} />
                                <ContactDecorSmallIcon className={cx('contact__decor')} />
                                <ContactDecorLargeIcon className={cx('contact__decor')} />
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
