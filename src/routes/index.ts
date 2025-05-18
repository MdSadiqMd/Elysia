import { Elysia } from 'elysia';

const routes = new Elysia({ prefix: '/api' })
    .get('/', () => 'Get Posts')
    .get('/id', () => 'Get Post by id')
    .post('/', () => 'Create Post')
    .put('/id', () => 'Update Post by id')
    .delete('/id', () => 'Delete Post by id');

export default routes;
