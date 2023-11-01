import { Router, Request, Response } from "express";

const router = Router()

router.get("/testes", (req:Request, res:Response) => {
 return res.json({ nome: 'Kayo'})
})

export { router }