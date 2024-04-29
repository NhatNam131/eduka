import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as styles from '~/scss/main.scss';

const cx = classNames.bind(styles);

function Button({ text, primary, rounded, outline, to, href, onClick, rightIcon, children, className, ...passProps }) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('btn', {
        [className]: className,
        text,
        primary,
        rounded,
        outline,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    text: PropTypes.bool,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
