

class producto{
    constructor(){
        this.product=[];
    }

    static id=0;

    addProduct(name,description,price,thumbnail,code,stock){
        let sumador=0;
        for (let i=0; i < this.product.length; i++)
        {
            if (this.product[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                sumador++;
                break;
            }      
        }
        if (sumador === 0){
            producto.id++;
            this.product.push({name,description,price,thumbnail,code,stock,id:producto.id});
        }
    }
    getProduct(){
        return this.product;
    }
    getProductById(id){
        if(!this.product.find((prod)=> prod.id === id)){
            console.log("NOT FOUND");
        }
        else
        {
            return(this.product.find((prod)=> prod.id === id));
        }
    }
}

const productos= new producto;

// agrego productos
productos.addProduct('Bullpadel 200','Paleta Padel','200','img.com','0',22);
productos.addProduct('Bullpadel 400','Paleta Padel','150','img12.com','14',11);
productos.addProduct('Bullpadel 412','Paleta Padel','131','img12.com','14',12);

// veo mis productos
console.log(productos.getProduct());

// busco productos filtrados por id
productos.getProductById(4);
productos.getProductById(2);