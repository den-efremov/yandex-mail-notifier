import openTab from 'shared/utils/tab';
import userSubscribe from '../redux/subscribers/user';
import messagesSubscribe from '../redux/subscribers/messages';

const popup = chrome.browserAction;

function setState(enabled, badge) {
    // enable or disable popup button (onClick works only if no popup set)
    if (enabled) {
        popup.setPopup({popup: 'pages/popup.html'});
        // popup.enable();
    }
    else {
        popup.setPopup({popup: ''});
        // TODO: change icon instead of disabling otherwise onClick doesn't work
        // popup.disable();
    }

    // set badge
    popup.setBadgeText({text: (badge || '').toString()});
    popup.setBadgeBackgroundColor({color: '#3d5afe'});
}

export default function () {
    popup.onClicked.addListener(openTab);

    userSubscribe('login', ({messages}) => setState(true, messages.unreadCount));
    userSubscribe('logout', ({messages}) => setState(false, messages.unreadCount));

    messagesSubscribe(state => setState(state.user.authorized, state.messages.unreadCount));
}
