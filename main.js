'use strict';

const fastify = require('fastify');

const app = fastify();

const superDuperFunction = () => ({ hello: 'world' });
app.decorate('superDuperFunction', superDuperFunction);

app.register(require('./plugin.js'));

app.listen({ port: 3001 });
