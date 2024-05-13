import classNames from 'classnames/bind';

import * as styles from '~/scss/main.scss';
import images from '~/assets/images';
import { LessonsIcon, StarIcon } from '../Icons';

const cx = classNames.bind(styles);

function CoursesList() {
    return (
        <section className={cx('courses__list')}>
            {/* ========= Item 1 ========= */}
            <article className={cx('courses__item')}>
                <div className={cx('courses__item-thumb')}>
                    <img src={images.imageFirstItem} alt="Image item" className={cx('courses__item-image')} />
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
                    <img src={images.imageSecondItem} alt="Image item" className={cx('courses__item-image')} />
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
                    <img src={images.imageThirdItem} alt="Image item" className={cx('courses__item-image')} />
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
                    <img src={images.imageFourthItem} alt="Image item" className={cx('courses__item-image')} />
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
    );
}

export default CoursesList;
