import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { lettersRoutes } from './letters.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/letters', lettersRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
