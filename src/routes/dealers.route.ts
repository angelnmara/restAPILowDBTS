import { Router } from "express";
import { getDealers, newDealer, getDealerById, deleteDealerById, updateDealerById, getCountDealers } from "../controllers/dealers.controller";

const router = Router()

router.get('/dealers', getDealers)
router.get('/dealer/:id', getDealerById)
router.post('/dealer', newDealer)
router.put('/dealer/:id', updateDealerById)
router.delete('/dealer/:id', deleteDealerById)
router.get('/dealers-count', getCountDealers)


export default router