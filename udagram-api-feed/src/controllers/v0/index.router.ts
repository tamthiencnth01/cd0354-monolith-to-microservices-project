import {Router, Request, Response} from 'express';
import {FeedRouter} from './feed/routes/feed.router';

const router: Router = Router();
// ThienNLNT
router.use('/feed', FeedRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});
// ThienNLNT
export const IndexRouter: Router = router;
