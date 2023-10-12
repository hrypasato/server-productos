# server-productos

Base url: https://main--server-productos.netlify.app/.netlify/functions

### Endpoints

**Test**   

url: /api

método: GET

**Listar productos por pagina**

url: /api/productos?offset=0&limit=5

método: GET

**Producto por id**

url: /api/producto/fc5e3a6a-044f-4c63-ac24-f5f9fdef87a8

método: GET

**Crear nuevo producto**

url: /api/producto

método: POST

body:
```json
  {
    "fabricante": "Marketoid",
    "nombre": "Pearson",
    "pesoNeto": 500,
    "unidades": "ml",
    "porciones": 2,
    "urlBrand": "http://placehold.it/32x32",
    "urlTablaNutricional": "http://placehold.it/32x32",
    "urlIngredientes": "http://placehold.it/32x32"
  }

```