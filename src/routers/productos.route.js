import { Router } from "express"
import { getAllProductos, getOneProductos, saveProducto } from "../controllers/productos.controller.js"

const router = Router()

// Tener las rutas necesarias para generar nuestro CRUD

router.get("/productos/getall", getAllProductos)
router.get("/productos/getone/:id", getOneProductos)
router.post("/productos/save", saveProducto)

export default router