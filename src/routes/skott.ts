import express, { Router } from "express";
import { join } from "path";

const router: Router = Router();
const options: Object = { root: join(__dirname, '../../skott') };

router.use(express.static(join(__dirname, '../../skott')));

// TODOD: Update when more pages are added
router.get('/', (_, res) => {
    res.sendFile('index.html', options);
});

export { router as skottRouter };
