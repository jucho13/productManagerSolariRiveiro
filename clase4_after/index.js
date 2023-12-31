const ProductManager = require("./productManager.js");
let productManager = new ProductManager();
console.log(productManager);

let persistirProduct = async () => {
    let product1 = await productManager.createProduct('Cafe', 'Cafe tostado Juan Valdez', 2000, "http://cafe.png", "CA45CO", 35,0);
    let product2 = await productManager.createProduct('Yerba','Playadito',900,'http://playadito.png','AE423',300,0);
    let product3 = await productManager.createProduct('Leche','La serenisima',250,'http://serenisima.png','AE423',250,0);
    let product4 = await productManager.createProduct('Manteca','La serenisima',350,'http://serenisima2.png','AE24423',200,0);
    let product5 = await productManager.createProduct('Pan','Bimbo',220,'http://bimbo.png','AAA213',230,0);
    let product6 = await productManager.createProduct('Yogurt','La serenisima',550,'http://serenisima3.png','AE4753',140,0);
    
    let products = await productManager.productList();
    console.log(`Productos encontrados en Product Manager: ${products.length}`);
    console.log(products);
    let getProductsbyID=await productManager.getProductsbyID(5);
    await productManager.updateProduct('Manteca','Lactear',300,'http://ser.png','AE2423',150,3);
    await productManager.deleteProduct(2);
};
persistirProduct();
