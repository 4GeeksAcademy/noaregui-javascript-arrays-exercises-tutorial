//Objeto {}
let contact = {
    //  propiedad/key: "valor"
        fullName: "John Doe",
        phone: "123-123-2134",
        email: "test@nowhere.com"
    }
    //El bucle in sirve para recorrer la posición
    for (let key in contact) {
        // Your code here
        //Imprimir la propiedad console.log(key);
        //Imprimir el valor conctact[key];
         console.log(key + " : " + contact[key])
    }
    