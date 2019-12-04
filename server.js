const path = require ('path');
const express = require ('express');
const app = express();
const port = 6543;


const pathToStaticFiles = path.join(__dirname, "page");

app.use(express.static(pathToStaticFiles));
const indexHTML = path.join (__dirname, 'page', 'ul_6.html')

app.get('/', function(req,res){
    res.sendFile(indexHTML)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//const pathToHtml = path.join(__dirname, 'page/index.html');
