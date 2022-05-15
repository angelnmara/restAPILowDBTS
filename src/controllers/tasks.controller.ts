import { Handler } from 'express'
import { getConnection } from '../db'
import { nanoid } from 'nanoid'

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get('tasks').value()
    return res.json(data)
}

export const creteTask: Handler = (req, res) => {
    const { name, description } = req.body
    const newTask = {
        name,
        description,
        id: nanoid()
    }

    try {
        getConnection().get('tasks').push(newTask).write()
        res.json(newTask)
    }
    catch (error) {
        res.status(500).send(error)
    }

}

export const getTaskById: Handler = (req, res) => {
    console.log(req.params.id)
    const data = getConnection().get('tasks').find({ id: req.params.id }).value()
    if (!data) return res.status(404).json({ msg: 'Task not found' })
    res.json(data)
}

export const deleteTaskById: Handler = (req, res) => {
    console.log(req.params.id)
    const data = getConnection().get('tasks').find({ id: req.params.id }).value()
    if (!data) return res.status(404).json({ msg: 'Task not found' })
    const deletedTask = getConnection().get('tasks').remove({ id: req.params.id }).write();
    res.json(deletedTask)
}

export const updateTaskById: Handler = (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    const data = getConnection().get('tasks').find({ id: req.params.id }).value()
    if (!data) return res.status(404).json({ msg: 'Task not found' })
    const updatedTask = getConnection().get('tasks').find({ id: req.params.id }).assign(req.body).write()
    res.json(updatedTask)
}

export const countTasks: Handler = (req, res) => {
    console.log('cuenta')
    const data = getConnection().get('tasks').value()
    console.log(data.length)
    res.json({ countTask: data.length })
}