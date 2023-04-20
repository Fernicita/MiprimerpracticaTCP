const net =require ('net');
const server=net.createServer(con=>{
    con.write("He recibido una conexion");
    console.log("------conexion------");
    con.pipe(con);
//empuja lo que estoy escribiendo sobre la misma conexión se hace una conexión de dos vías
});
server.listen(3000, '127.0.0.1');
