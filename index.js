/*
    Сайт разработчиков – https://discord.com/developers/applications
*/

const RPC = require("discord-rpc")
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        'pid': process.pid,
        'activity': {
            'details': '<text>', // Описание (показывается справа под названием приложения)
            'assets': {
                'large_image': '<image_key>', // Ключ большой картинки. Можно поставить на сайте разработчиков в приложении во вкладке Rich Presence – Assets.
                'large_text': '<text>', // Текст при наведении на картинку
                'small_image': '<image_key>', // Ключ маленькой картинки. Можно поставить на сайте разработчиков в приложении во вкладке Rich Presence – Assets.
                'small_text': '<text>' // Текст при наведении на картинку
            },
            'buttons': [
                {
                    'label': '<text>', // Название первой кнопки
                    'url': '<url>' // Ссылка при нажатии (работает только с пк и только у других пользователей)
                },{
                    'label': '<text>', // Название второй кнопки
                    'url': '<url>' // Ссылка при нажатии (работает только с пк и только у других пользователей)
                }
            ]
        }
    });
});

client.login({ 'clientId': '<client_id>' }).catch(() => process.exit()); // ID приложения на сайте разработчиков.