import React, {PropTypes} from 'react';
import i18n from 'shared/utils/i18n';
import HoverMenu from '../hover-menu';

import styles from './item.less';

const Item = ({
    index,
    id,
    from,
    subject,
    firstline,
    date,
    onActionClick
}) => (
    <div className={styles.component} style={{transform: `translate3d(0, ${index * 100}%, 0)`}}>
        <div className={styles.contentContainer}>
            <p>
                <span className={styles.from}>{from}</span>
                <span className={styles.date}>{i18n.date(date)}</span>
            </p>
            <p className={styles.subject}>{subject}</p>
            <p className={styles.content}>{firstline}</p>
        </div>

        <HoverMenu id={id} onClick={onActionClick}/>
    </div>
);

Item.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    firstline: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onActionClick: PropTypes.func.isRequired
};

export default Item;
