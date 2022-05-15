import { Router } from 'express'
import { getTasks, creteTask, getTaskById, deleteTaskById, updateTaskById, countTasks } from '../controllers/tasks.controller'

const router = Router()

router.get('/tasks', getTasks)
router.get('/task/:id', getTaskById)
router.post('/task', creteTask)
router.put('/task/:id', updateTaskById)
router.delete('/task/:id', deleteTaskById)
router.get('/tasks-count', countTasks)

export default router