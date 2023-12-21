# server-productos

### Start

```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm run build
npm run start
```
or

```bash
npm run debug
```

---
### Url
Local: http://localhost:9000/.netlify/functions

Deploy: https://main--server-productos.netlify.app/.netlify/functions

### Endpoints

**Test**   
---
url: /api

método: GET

**Listar productos por pagina**
---

url: /api/productos?offset=0&limit=5

método: GET

**Listar productos por nombre**
---
> [!NOTE]  
> Casesensitive.

url: /api/productos/by?name=Norton

método: GET

**Producto por id**
---

url: /api/producto/fc5e3a6a-044f-4c63-ac24-f5f9fdef87a8

método: GET

**Crear nuevo producto**
---



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

**Listar fabricantes y nombres de los productos**
---

url: /api/list?fabricante=in

método: GET

params: 
  - **name**: lista de nombres de productos
  - **fabricante**: lista de los fabricantes

**Listar las unidades de medida**
---

url: /api/units

método: GET


**Mensaje al chatbot**
---

url: /api/foods/bot_anwser

método: POST

body:
```json
  {
    "message": "Hola"
  }

```

