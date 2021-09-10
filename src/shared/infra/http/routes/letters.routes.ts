import { Router } from 'express';

import { CreateLetterController } from '@modules/letters/useCases/createLetter/CreateLetterController';
import { ListLettersController } from '@modules/letters/useCases/listLetter/ListLetterController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const lettersRoutes = Router();

const createLetterController = new CreateLetterController();
const listLettersController = new ListLettersController();

lettersRoutes.post('/', ensureAuthenticated, createLetterController.handle);
lettersRoutes.get('/', listLettersController.handle);

export { lettersRoutes };
