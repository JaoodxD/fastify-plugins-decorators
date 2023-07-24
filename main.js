'use strict';

const fastify = require('fastify');

const app = fastify();
app.register(require('./plugin.js'));

app.listen({ port: 3001 });
