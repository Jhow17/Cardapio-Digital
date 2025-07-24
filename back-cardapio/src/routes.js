import express from "express";
import BarracaController from "./controllers/barracasController.js";

const router = express.Router()



router.post('/cadastro', BarracaController.createBarraca)
router.get('/todas', BarracaController.getBarracas)
router.delete('/deletar/:id', BarracaController.deleteBarraca)
router.post('/populate', BarracaController.populateBarracas)
export default router 