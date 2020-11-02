const express = require('express');
const cors = require('cors');


const server = express();


server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/arquivo', require('./routes/arquivo'));


const PORT = 3001;
const HOST = "0.0.0.0";


server.listen(PORT, HOST, () => {
    console.log(`API dos arquivos, porta ${PORT}`);
});