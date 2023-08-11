import express from "express";
import * as athletes from "../controllers/athletes.controller";

const athletesRouter = express.Router();

athletesRouter.get("/:id?", async (req, res, next) => {
  try {
    const {id} = req.params;
    let data;
    if (id) {
        data = await athletes.findOne(id);
    } else {
        data = await athletes.findAll();
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
});

athletesRouter.post("/", async (req, res, next) => {
    try{
        let athletesDTO = req.body;
        let data = await athletes.addOne(athletesDTO);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

athletesRouter.put("/:id", async (req, res, next) => {
    try{
        let { id } = req.params;
        let athletesDTO = req.body;
        let data = await athletes.updateOne(id, athletesDTO);
        res.json(data);
    } catch (err) {
    next(err);
    }
});

athletesRouter.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data = await athletes.removeOne(id);        
        res.json(data);
    } catch (err) {
        next(err);
    }
});

export default athletesRouter;