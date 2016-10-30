module.exports = {
    ext: {
        name: 'Клиент для Яндекс.Почта',
        description: 'Удобный клиент для Яндекс.Почта, множество настроек, не требует авторизации через расширение.'
    },
    notification: {
        unread: {
            title: 'У вас есть непрочитанные письма',
            message: 'Непрочитанных писем: $1'
        },
        notAuth: {
            title: 'Вы не авторизованы',
            message: 'Пожалуйста, войдите в свой Яндекс аккаунт'
        }
    },
    popup: {
        title: 'Яндекс.Почта',
        compose: 'Написать',
        actions: {
            open: 'Открыть',
            read: 'Прочитано',
            spam: 'Спам',
            remove: 'Удалить'
        },
        emptyList: 'У вас нет непрочитанных писем',
        loadingError: 'Не удалось загрузить письма... Попробуйте позже',
        months: [
            'Января',
            'Февраля',
            'Марта',
            'Апреля',
            'Мая',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
            'Декабря'
        ]
    },
    settings: {
        newMessageNotification: {
            label: 'Показывать уведомление при получении нового письма',
            options: [
                'отключено',
                'только текстовое',
                'текстовое и звуковое'
            ]
        },
        unreadMessagesNotification: {
            label: 'Показывать текстовое уведомление при наличие непрочитанных писем',
            options: [
                'отключено',
                'каждые 5 мин',
                'каждые 15 мин',
                'каждые 30 мин'
            ]
        },
        unreadMessagesSound: {
            label: 'Проигрывать звуковое уведомление при наличие непрочитанных писем',
            description: 'В соответствие с интервалом выбраным выше'
        },
        notAuthNotification: {
            label: 'Показывать уведомления если вы не авторизованы',
            description: 'Каждые 5 мин',
            options: [
                'отключено',
                'только текстовое',
                'текстовое и звуковое'
            ]
        }
    }
};
