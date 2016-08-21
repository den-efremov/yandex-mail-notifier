import styles from './item.less';

import React, {PropTypes} from 'react';
import i18n from 'utils/i18n';
import HoverMenu from '../hover-menu';

const Item = ({
    id,
    from,
    subject,
    firstline,
    date,
    onActionClick
}) => (
    <div> {/* for collapsing the element should not have padding, this's why we need this container */}
        <div className={styles.component}>
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
    </div>
);

Item.propTypes = {
    id: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    firstline: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onActionClick: PropTypes.func.isRequired
};

export default Item;
