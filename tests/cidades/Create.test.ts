import { StatusCodes } from 'http-status-codes';
import { testeServer } from '../jest.setup';

describe('Cidades - Create', () => {
  it('Criar registros',async () => {
    const res1 = await testeServer.post('/cidades').send({
      nome: 'Caixas do Sul'
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  
  it('Tenta criar registro com nome muito curto', async () => {
    const res1 = await testeServer.post('/cidades').send({
      nome: 'Ca'
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
});