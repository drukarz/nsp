'use strict';

const Hapi = require('@hapi/hapi');
const Bcrypt = require('bcrypt');
const H2o2 = require('@hapi/h2o2');

const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath:'np-web-server.logs',
        timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    },

log = SimpleNodeLogger.createSimpleLogger( opts );

const users = {
    user: {
        username: 'user',
        password: '$2b$10$1zZOoo/ImbAERWmgsmghiu2ksyYA2xCvowJlMZW8OwcpIAycp6Mje',   // '#!@1_padd_'
        name: 'Krzysztof Krupka'
    }
};

const validate = async (request, username, password) => {

    const user = users[username];

    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = await Bcrypt.compare(password, user.password);

   /* Bcrypt.hash(password, 10, (err, hash) => {
        console.log(hash);
    })*/

    const credentials = { id: user.id, name: user.name };
    return { isValid, credentials };
};

const init = async () => {

    const server = Hapi.server({
        port: 3010,
        host: '46.41.139.63',
        routes: {
            cors: true
        }
    });

    log.setLevel('info');

    await server.register(require('@hapi/basic'));
    await server.register(H2o2);

    server.auth.strategy('simple', 'basic', { validate });

    server.route({
        method: 'GET',
        path: '/login',
        options: {
            auth: 'simple'
        },
        handler: function (request, h) {
            log.info('GET /login');
            return 'welcome';
        }
    });


    await server.start();
    log.info('Server running on ', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    log.error(err);
    process.exit(1);
});

init();





