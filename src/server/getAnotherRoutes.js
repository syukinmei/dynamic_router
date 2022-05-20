const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const hostname = '127.0.0.1'
const port = 5001

const anotherRoutes = [
    { id: 1, title: '老板页 员工权限', path: '/jurisdiction', name: 'jurisdiction', component: 'MyJurisdiction' },
    { id: 2, title: '老板页 员工薪资', path: '/compensation', name: 'compensation', component: 'MyCompensation' },
    { id: 3, title: '老板页 员工调休', path: '/daysOff', name: 'daysOff', component: 'MyDaysOff' }
]

app.use(express.json())

app.get('/anotherRoutes', (req, res) => {
    res.status(200).json(anotherRoutes)
})

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})
