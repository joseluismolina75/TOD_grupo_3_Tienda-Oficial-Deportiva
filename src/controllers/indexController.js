const fs = require('fs')
const path= require('path')
const products=JSON.parse(fs.readFileSync(path.join (__dirname, '../data/products.json'),'utf-8'))


const controller = {
  getHome: (req, res) => {
    // Lógica del controlador para la página de inicio
    //res.render('index'); // Renderiza la plantilla 'index.ejs' en la carpeta 'views'
    const inDiscount = products.filter(product => product.discount > 0 )
		const visited = products.filter(product => product.category === "visited" )
    res.render('index', {inDiscount, visited})
  }
};


module.exports = controller;
