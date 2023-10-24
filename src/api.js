const express = require("express");
const serverless = require("serverless-http");

// Create an instance of the Express app
const app = express();

// Create a router to handle routes
const router = express.Router();

const productos = [
    {
      "id": "c82077a6-2512-4a3f-9e33-743dfd26bcd2",
      "name": "Vonda Holloway",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "aute",
        "cillum",
        "excepteur",
        "velit",
        "culpa",
        "cillum",
        "commodo",
        "cupidatat"
      ]
    },
    {
      "id": "d787841a-36f0-40a4-81e0-93a42f619007",
      "name": "Angelia Flores",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "elit",
        "fugiat",
        "aliqua",
        "occaecat",
        "tempor",
        "nostrud",
        "elit",
        "do",
        "ipsum"
      ]
    },
    {
      "id": "3bdb7bd0-a8d6-4c5e-9aa5-85681838ce96",
      "name": "Carter Mccall",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "irure",
        "veniam",
        "culpa",
        "commodo",
        "sit"
      ]
    },
    {
      "id": "13f7b28d-0134-4d91-87ac-3d05a7569c9b",
      "name": "Ladonna Carroll",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "elit",
        "in",
        "elit",
        "dolore",
        "ea",
        "anim",
        "consequat",
        "nostrud",
        "nulla"
      ]
    },
    {
      "id": "40e29f79-d261-4fbf-8f2e-eb438026f538",
      "name": "Savannah Butler",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "ad",
        "nostrud",
        "fugiat",
        "culpa",
        "labore",
        "elit",
        "dolor",
        "exercitation"
      ]
    },
    {
      "id": "a188fecc-2ffd-4e8a-b37a-d5e49319594d",
      "name": "Carmen Hutchinson",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "amet",
        "deserunt",
        "dolore",
        "velit",
        "excepteur"
      ]
    },
    {
      "id": "d2587f48-97ec-43ac-aa37-1d97b066b8f5",
      "name": "Paige Browning",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "nisi",
        "anim",
        "excepteur",
        "velit",
        "dolore",
        "officia",
        "ut",
        "ad",
        "qui"
      ]
    },
    {
      "id": "7dc19a11-83d7-432c-8a6d-3afba8f9de80",
      "name": "Adams Osborn",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "fugiat",
        "minim",
        "ipsum",
        "voluptate",
        "quis",
        "deserunt"
      ]
    },
    {
      "id": "b85d2e2d-3b81-40e8-b537-6ec380f9e489",
      "name": "Bettie Terrell",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "in",
        "consequat",
        "est",
        "elit",
        "labore",
        "ut",
        "enim"
      ]
    },
    {
      "id": "fc5e3a6a-044f-4c63-ac24-f5f9fdef87a8",
      "name": "Elisabeth Pruitt",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "ad",
        "labore",
        "velit",
        "sint",
        "veniam",
        "nisi",
        "ad"
      ]
    },
    {
      "id": "01913e82-d494-4969-b744-63aded113c38",
      "name": "Foley Bartlett",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "deserunt",
        "laboris",
        "officia",
        "ipsum",
        "enim",
        "esse",
        "est",
        "proident",
        "aliqua"
      ]
    },
    {
      "id": "dde195b1-ffc8-452c-b882-376cf8d64cf8",
      "name": "Murphy Contreras",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "mollit",
        "esse",
        "ullamco",
        "sint",
        "minim",
        "non"
      ]
    },
    {
      "id": "f33578cb-861a-438b-ae28-f8bb6a9666a6",
      "name": "Jaclyn Fischer",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "adipisicing",
        "minim",
        "aliqua",
        "deserunt",
        "incididunt",
        "ad",
        "occaecat",
        "incididunt",
        "deserunt"
      ]
    },
    {
      "id": "7b89659d-bb68-42f5-b7ff-5fa25f43838b",
      "name": "Beatriz Bridges",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "adipisicing",
        "est",
        "in",
        "consectetur",
        "eiusmod"
      ]
    },
    {
      "id": "142c6e9c-fd78-4dfb-ab90-50d40e9dd02b",
      "name": "Lana Norton",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "exercitation",
        "anim",
        "nisi",
        "excepteur",
        "ipsum",
        "commodo",
        "sit",
        "consequat",
        "cillum"
      ]
    },
    {
      "id": "ba9b1b07-0003-4067-bfbf-6b9601e6261f",
      "name": "Natasha Ruiz",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "Lorem",
        "nostrud",
        "ea",
        "proident",
        "tempor",
        "anim",
        "nostrud"
      ]
    },
    {
      "id": "cb3856a3-afba-4f7f-b697-a0a0a60de52a",
      "name": "Celina Weber",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "sunt",
        "non",
        "culpa",
        "irure",
        "nisi"
      ]
    },
    {
      "id": "a029c9e3-9438-46cd-bcb1-8f9535692f58",
      "name": "Valarie Sweet",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "ipsum",
        "eu",
        "do",
        "pariatur",
        "cupidatat",
        "do",
        "eu"
      ]
    },
    {
      "id": "299d40c3-9f50-45ca-9af9-836247d7eb9a",
      "name": "Britney Wilkerson",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "velit",
        "excepteur",
        "proident",
        "dolor",
        "qui",
        "consequat",
        "ad",
        "laboris"
      ]
    },
    {
      "id": "ae5eb0eb-93ec-4407-8ba7-3a2de56ef78c",
      "name": "Bowen Levy",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "ullamco",
        "irure",
        "dolore",
        "sit",
        "deserunt",
        "duis"
      ]
    },
    {
      "id": "ee43d8c8-5530-4f40-9211-46e0e7ce3fe7",
      "name": "Barron Little",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "deserunt",
        "commodo",
        "elit",
        "Lorem",
        "magna",
        "nostrud",
        "aliquip",
        "anim",
        "aliquip"
      ]
    },
    {
      "id": "e82aef37-30b0-4d1a-84b0-5e896b32fb52",
      "name": "Cabrera Horn",
      "urlBrand": "https://picsum.photos/400",
      "ingredientes": [
        "consequat",
        "exercitation",
        "eiusmod",
        "anim",
        "Lorem",
        "reprehenderit",
        "tempor",
        "officia",
        "irure"
      ]
    }
  ]

const tablaNutruicional = {
  "porciones_por_empaque": 1,
  "calorias": 98,
  "grasa_total": "Og",
  "grasas_trans": "Og",
  "grasas_saturadas": "Og",
  "carbohidratos": "24g",
  "fibra_dietetica": "4g",
  "azucares": "17g",
  "sodio": "Og",
  "potasio": "60mg",
  "calcio": "24mg",
  "hierro": "1mg",
  "proteinas": "Og",
  "calorias_de_grasa": "0",
  "valores_diarios": {
    "grasa_total": "0%",
    "grasas_trans": "0%",
    "grasas_saturadas": "0%",
    "carbohidratos": "8%",
    "fibra_dietetica": "15%",
    "azucares": "0%",
    "sodio": "2%",
    "potasio": "2%",
    "calcio": "2%",
    "hierro": "2%"
  }
}

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/productos", (req, res) => {
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    
    const start = Math.min(productos.length - 1, offset);
    const end = Math.min(productos.length, offset + limit);

    const productList = productos.slice(start, end);
    res.status(200).json(productList.map(item => ({...item, tablaNutruicional})));
  });

  router.get("/producto/:id", (req, res) => {
    const { id } = req.params;
    
    res.status(200).json(productos.find( producto => producto.id === id));
  });

  router.post("/producto", (req, res) => {
    res.status(200).json({ id: '3933a6b6-a4f3-424b-9383-329d6bd065a3' });
  });

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);