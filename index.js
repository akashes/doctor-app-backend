const jsonServer=require('json-server')

const doctorServer=jsonServer.create()
const middleware =jsonServer.defaults()
const router=jsonServer.router('db.json')

doctorServer.use(middleware)
doctorServer.use(router)
doctorServer.listen(8000,()=>{
    console.log('server started and listening in the port 8000');
})