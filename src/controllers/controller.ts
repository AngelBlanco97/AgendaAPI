import { Request, Response } from "express";
import Agenda from "../models/agenda";

class Controller {
    public async getContactos(req: Request, res: Response) {
        const contacto = await Agenda.find();
        if (contacto) {
            return res.status(200).json(contacto);
        }
        return res.status(404).json({ res: "contacto no encontrado" });
    }
    public async findContacto(req: Request, res: Response) {
        const contacto = await Agenda.findOne({ _id: req.params.idContacto });
        if (contacto) {
            return res.status(200).json(contacto);
        }
        return res.status(404).json({ res: "contacto no encontrado" });
    }
    public async postContacto(req: Request, res: Response) {
        const contacto = new Agenda(req.body);

        if (contacto) {
            await contacto.save();
            return res.status(201).json(contacto);
        }
        return res.status(404).json({ res: "No se pudo añadir el contacto" });
    }
    public async putContacto(req: Request, res: Response) {
        const change = req.body;
    
        const updateContacto = await Agenda.updateOne({ _id: req.params.idContacto }, change);
        if (updateContacto) {
          return res.status(200).json(updateContacto);
        }
    
        return res.status(404).json({ Error: "Error al modificar el contacto" });
      }
      public async deleteContacto(req: Request, res: Response) {
        const contacto = await Agenda.deleteOne({ _id: req.params.idTask });
        if (contacto) {
          return res.status(200).json({ res: "Contacto eliminado" });
        }
    
        return res.status(404).json({ res: "No se pudo eliminar el contacto" });
      }
}


export default new Controller();
