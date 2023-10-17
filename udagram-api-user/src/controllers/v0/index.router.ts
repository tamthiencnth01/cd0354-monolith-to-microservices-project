import {Router, Request, Response} from 'express';
import {UserRouter} from './users/routes/user.router';

const router: Router = Router();
// ThienNLNT
router.use('/users', UserRouter);
// ThienNLNT
router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});
// ThienNLNT
export const IndexRouter: Router = router;
