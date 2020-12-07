import * as express from 'express';
import fetch from 'node-fetch'


const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});


export default router;