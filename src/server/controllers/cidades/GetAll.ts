import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    filter: yup.string(),
    limit: yup.number().moreThan(0),
    page: yup.number().moreThan(0),
  })),
}));

export const getAll = async(req: Request<{}, {}, {}, IQueryProps>, res: Response) => {  
  console.log(req.query);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};