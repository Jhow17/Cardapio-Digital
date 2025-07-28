import express from "express";
import BarracaController from "./controllers/barracasController.js";
import ComidaController from "./controllers/comidaController.js";
const router = express.Router()
import multer from "multer";

// criando o storage
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/cadastro', BarracaController.createBarraca)
router.get('/todas', BarracaController.getBarracas)
router.delete('/deletar/:id', BarracaController.deleteBarraca)
router.post('/populate', BarracaController.populateBarracas)
router.get('/cardapio/:id', ComidaController.getCardapio)
router.post('/comida', ComidaController.createComida)

router.post('/cardapio/:id',  upload.single('cardapioCsv'),ComidaController.createCardapio)

export default router 