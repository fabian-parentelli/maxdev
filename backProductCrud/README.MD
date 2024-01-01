# API de Productos

### POST (Agregar un producto) - localhost:8080/api/product

**Requiered:** Todos los campos son obligatorios. Si no se proporcionan, devuelve un error.
```
{
    "title": "Mate",
    "price": "200",
    "file": "(Aquí va la imagen)"
}
```
**Response:**
```
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
```

### Get (Obtener todos los productos) - localhost:8080/api/product

**Response:** Mostrar productos con status true.
```
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
```

### Get (Obtener productos por su Id) - localhost:8080/api/product/6592e1539011a1d67c585e75

**Requiered:** Requiere un Id por parametro.

**Response:** 
```
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
```

### PUT (Modificar cualquier campo incluso files) - localhost:8080/api/product/6592e1539011a1d67c585e75

**Required:** (No es nceesario todos los campos, pero debe de llegar con este name el que si va a ser modificado)
```
{
    title: 'Mate'
    price: '200'
    file: (Acá va la img)
}
```
**Response:**
```
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
```

## DELETE (Elimina un producto) - localhost:8080/api/product/6592e1539011a1d67c585e75

**Requiered:** Requiere un Id por parametro.

**Response:** Esto en realidad no elimina el producto cambia el status a false.
```
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
```