import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';


const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.static("public"));

// Cargar datos de tacos
const recetaJSON = `
{
    "tacos": [
      {
        "id": "0001",
        "tipo": "taco",
        "nombre": "Taco de Cochinita Pibil",
        "precio": 25.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Cochinita",
            "preparacion": "Pibil (horneado en hoja de plátano)"
          },
          "salsa": {
            "nombre": "Habanero",
            "pico": "Alto"
          },
          "acompañamientos": [
            {
              "nombre": "Cebolla morada",
              "cantidad": "1 cucharada",
              "ingredientes": ["Cebolla morada", "Vinagre", "Naranja agria", "Sal"]
            },
            {
              "nombre": "Chile habanero encurtido",
              "cantidad": "1 cucharadita",
              "ingredientes": ["Chile habanero", "Cebolla", "Zanahoria", "Vinagre"]
            }
          ]
        }
      },
      {
        "id": "0002",
        "tipo": "taco",
        "nombre": "Taco de Relleno Negro",
        "precio": 28.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Pavo",
            "preparacion": "En recado negro"
          },
          "salsa": {
            "nombre": "Xnipec",
            "pico": "Muy alto"
          },
          "acompañamientos": [
            {
              "nombre": "Huevo cocido",
              "cantidad": "1/2 unidad",
              "ingredientes": ["Huevo", "Sal"]
            },
            {
              "nombre": "Tortilla frita",
              "cantidad": "1 unidad",
              "ingredientes": ["Tortilla de maíz", "Aceite"]
            }
          ]
        }
      },
      {
        "id": "0003",
        "tipo": "taco",
        "nombre": "Taco de Panucho",
        "precio": 22.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Pollo",
            "preparacion": "Desmenuzado"
          },
          "salsa": {
            "nombre": "Tomate",
            "pico": "Bajo"
          },
          "acompañamientos": [
            {
              "nombre": "Frijol refrito",
              "cantidad": "2 cucharadas",
              "ingredientes": ["Frijol negro", "Cebolla", "Ajo", "Manteca"]
            },
            {
              "nombre": "Lechuga",
              "cantidad": "1/4 taza",
              "ingredientes": ["Lechuga", "Vinagre", "Sal"]
            }
          ]
        }
      },
      {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Taco de Salbute",
        "precio": 23.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Pescado",
            "preparacion": "Empanizado"
          },
          "salsa": {
            "nombre": "Aguacate",
            "pico": "Bajo"
          },
          "acompañamientos": [
            {
              "nombre": "Repollo",
              "cantidad": "1/4 taza",
              "ingredientes": ["Repollo", "Limón", "Sal"]
            },
            {
              "nombre": "Zanahoria",
              "cantidad": "2 cucharadas",
              "ingredientes": ["Zanahoria", "Vinagre", "Sal"]
            }
          ]
        }
      }
    ]
  }
`;
const recetasTacos = JSON.parse(recetaJSON);

// Endpoint 1: Obtener todos los tacos o filtrar por query (?proteina=xxx)
app.get('/api/tacos', (req, res) => {
    const { proteina } = req.query;
    if (proteina) {
        const tacoFiltrado = recetasTacos.tacos.find(taco => 
            taco.ingredientes.proteina.nombre.toLowerCase() === proteina.toLowerCase()
        );
        res.json(tacoFiltrado || { error: "Taco no encontrado" });
    } else {
        res.json(recetasTacos);
    }
});

// Endpoint 2: Ruta dinámica para recetas (/receta/pollo, /receta/puerco, etc.)
app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetasTacos.tacos.find(r => 
        r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase()
    );
    res.json(elegirTaco || { error: "Receta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});