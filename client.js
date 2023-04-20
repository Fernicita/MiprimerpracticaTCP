const net = require('net');
const client = new net.Socket();
client.connect(3000,'127.0.0.1', ()=>{
    console.log("---conexion tcp exitosa wuuu----");
});

client.on('close',()=>{
    console.log("Conexion terminada k tite");
});

client.on('data', (data)=>{
    console.log(`INFO: ${data}`);
})
