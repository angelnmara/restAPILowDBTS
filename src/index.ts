import app from './app'
import { createConecction } from './db'

createConecction()
app.listen(app.get('port'))
console.log('Server listening on port 3000 ')