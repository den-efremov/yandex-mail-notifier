import styles from './list.less';

import React, {PropTypes} from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import i18n from 'utils/i18n';
import Spinner from '../spinner';
import Item from './item';

function renderCurrentState(component) {
    return <div className={styles.centerContainer}>{component}</div>;
}

const List = ({
    items,
    loading,
    error,
    onActionClick
}) => {
    if (loading) {
        return renderCurrentState(<Spinner/>);
    }
    if (error || !items.length) {
        return renderCurrentState(i18n.text(`popup.${error ? 'loadingError' : 'emptyList'}`));
    }

    const messages = items.map(item => (
        <Item
            key={item.id}
            onActionClick={onActionClick}
            {...item}
        />
    ));

    return (
        <TransitionGroup
            component="div"
            className={styles.content}
            transitionName={{
                leave: styles.disappearLeave,
                leaveActive: styles.disappearLeaveActive
            }}
            transitionLeaveTimeout={500}
            transitionEnter={false}
        >
            {messages}
        </TransitionGroup>
    );
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    onActionClick: PropTypes.func.isRequired
};

export default List;