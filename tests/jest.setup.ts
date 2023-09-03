import supertest from 'supertest';
import {server} from '../src/server/Server';

export const testeServer = supertest(server);

testeServer.get('/cidades/1');