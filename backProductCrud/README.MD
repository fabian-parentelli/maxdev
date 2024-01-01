# API de Productos

## POST (Agregar un producto) - localhost:8080/api/product

**Requiere:** Todos los campos son obligatorios. Si no se proporcionan, devuelve un error.

```json
{
    "title": "Mate",
    "price": "200",
    "file": "(Aquí va la imagen)"
}
response: 
{
    "data": {
        "status": "success",
        "result": [
            {
                "_id": "6592e1539011a1d67c585e75",
                "title": "maxdev",
                "price": "200",
                "imgName": "logo.png",
                "path": "E:\\desarrollo-web\\MaxDev\\web\\backProductCrud\\src\\document\\1704120995481-logo.png",
                "status": true,
                "__v": 0
            }
        ]
    }
}

*** Get (Obtener todos los productos) - localhost:8080/api/product
{
    "data": {
        "status": "success",                     // La idea es mostrar los productos si su status es true.
        "result": [
            {
                "_id": "6592e1539011a1d67c585e75",
                "title": "maxdev",
                "price": "200",
                "imgName": "logo.png",
                "path": "E:\\desarrollo-web\\MaxDev\\web\\backProductCrud\\src\\document\\1704120995481-logo.png",
                "status": true,
                "__v": 0
            }
        ]
    }
}

*** Get (Obtener productos por su Id) - localhost:8080/api/product/6592e1539011a1d67c585e75
{
    "data": {
        "status": "success",
        "result": {
            "_id": "6592e1539011a1d67c585e75",
            "title": "maxdev",
            "price": "200",
            "imgName": "logo.png",
            "path": "E:\\desarrollo-web\\MaxDev\\web\\backProductCrud\\src\\document\\1704120995481-logo.png",
            "status": true,
            "__v": 0
        }
    }
}

*** PUT (Modificar cualquier campo incluso files) - localhost:8080/api/product/6592e1539011a1d67c585e75
Required: (No es nceesario todos los campos, pero debe de llegar con este name el que si va a ser modificado)
{
    title: 'Mate'
    price: '200'
    file: (Acá va la img)
}
Response:
{
    "data": {
        "status": "success",
        "result": {
            "_id": "6592e1539011a1d67c585e75",
            "title": "maxdev",
            "price": "500",
            "imgName": "logo.png",
            "path": "E:\\desarrollo-web\\MaxDev\\web\\backProductCrud\\src\\document\\1704120995481-logo.png",
            "status": true,
            "__v": 0
        }
    }
}

*** DELETE (Elimina un producto) - localhost:8080/api/product/6592e1539011a1d67c585e75
Esto en realidad no elimina el producto cambia el status a false.
{
    "data": {
        "status": "success",
        "result": {
            "_id": "6592e1539011a1d67c585e75",
            "title": "maxdev",
            "price": "500",
            "imgName": "logo.png",
            "path": "E:\\desarrollo-web\\MaxDev\\web\\backProductCrud\\src\\document\\1704124755270-logo.png",
            "status": false,
            "__v": 0
        }
    }
}