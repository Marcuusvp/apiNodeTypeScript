import { Router } from 'express';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (req, res)=> {
  return res.send('Olá Dev!');
});

router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);

export { router };