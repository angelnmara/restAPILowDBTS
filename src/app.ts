import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import taskRoutes from './routes/tasks.route'
import dealerRoutes from './routes/dealers.route'

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(taskRoutes)
app.use(dealerRoutes)

export default app