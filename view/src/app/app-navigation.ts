export const navigation = [
    {
        text: 'Home',
        path: '/home',
        icon: 'home'
    }, {
        text: 'Extenso',
        icon: 'money',
        items: [{
            text: 'Guaraní',
            path: 'pages/guarani'
        }, {
            text: 'Real',
            path: 'pages/real'
        }
    ]
    }, {
        text: 'Examples',
        icon: 'folder',
        items: [{
            text: 'Profile',
            path: '/profile'
        }, {
            text: 'Display Data',
            path: '/display-data'
        }]
    }];
