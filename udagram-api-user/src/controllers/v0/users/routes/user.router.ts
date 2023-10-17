import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';
// ThienNLNT
const router: Router = Router();
// ThienNLNT
router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const item = await User.findByPk(id);
  res.send(item);
});
// ThienNLNT
export const UserRouter: Router = router;
