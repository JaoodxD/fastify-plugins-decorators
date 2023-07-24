'use strict';

const fastify = require('fastify');

const app = fastify();

app.get('/', () => 'Hello world');
app.listen({ port: 3001 });
