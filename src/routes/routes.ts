import { Router, Request, Response } from "express";
import Controller from "../controllers/controller";

export class Routes {
  router: Router;
  constructor() {
    this.router = Router();

    this.router.get("/contactos", (req: Request, res: Response) => {
      Controller.getContactos(req, res);
    });
    this.router.get("/contactos/:idContacto", (req: Request, res: Response) => {
      Controller.findContacto(req, res);
    });
    this.router.post("/contactos", (req: Request, res: Response) => {
      Controller.postContacto(req, res);
    });
    this.router.put("/contactos/:idContacto", (req: Request, res: Response) => {
      Controller.putContacto(req, res);
    });
    this.router.delete("/contactos/:idContacto", (req: Request, res: Response) => {
      Controller.deleteContacto(req, res);
    });
  }
}