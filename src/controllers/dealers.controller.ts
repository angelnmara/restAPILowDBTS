import { Handler } from "express";
import { getConnection } from "../db";
import { nanoid } from "nanoid";

export const getDealers: Handler = (req, res) => {
    const data = getConnection().get('dealers').value()
    return res.json(data)
}

export const newDealer: Handler = (req, res) => {
    const {
        name,
        addres,
        year
    } = req.body
    const newDealer = {
        id: nanoid(),
        name,
        addres,
        year
    }
    try {
        getConnection().get('dealers').push(newDealer).write()
        res.json(newDealer)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getDealerById: Handler = (req, res) => {
    const data = getConnection().get('dealers').find({ id: req.params.id }).value()
    if (!data) return res.status(404).send('Not found')
    res.json(data)
}

export const deleteDealerById: Handler = (req, res) => {
    const data = getConnection().get('dealers').find({ id: req.params.id }).value()
    if (!data) return res.status(404).send('Not found')
    const deletedDealer = getConnection().get('dealers').remove({ id: req.params.id }).write()
    res.json(deletedDealer)
}

export const updateDealerById: Handler = (req, res) =>{
    const data = getConnection().get('dealers').find({ id: req.params.id }).value()
    if (!data) return res.status(404).send('Not found')
    const updateDealer = getConnection().get('dealers').find({id:req.params.id}).assign(req.body).write()
    res.json(updateDealer) 
}

export const getCountDealers: Handler = (req, res) =>{
    const data = getConnection().get('dealers').value()
    res.json({countDealers:data.length})
}
