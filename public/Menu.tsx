import { useState } from "react"

export default function Menu() {

    const [menu, setMenu] = useState([
        {
            "id": 1,
            "code": "PU-AYO-001",
            "name": "Pupusa de Ayote",
            "type": "pupusa",
            "category": "tradicional",
            "price": 1.5,
            "description": "Pupusa de Ayote acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 2,
            "code": "PU-LOR-002",
            "name": "Pupusa de Loroco",
            "type": "pupusa",
            "category": "tradicional",
            "price": 1.5,
            "description": "Pupusa de Loroco acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 3,
            "code": "PU-MOR-003",
            "name": "Pupusa de Mora",
            "type": "pupusa",
            "category": "especial",
            "price": 1.5,
            "description": "Pupusa de Mora acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 4,
            "code": "PU-ESP-004",
            "name": "Pupusa de Espinaca",
            "type": "pupusa",
            "category": "especial",
            "price": 1.5,
            "description": "Pupusa de Espinaca acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 5,
            "code": "PU-JAL-005",
            "name": "Pupusa de Jalapeño",
            "type": "pupusa",
            "category": "especial",
            "price": 1.75,
            "description": "Pupusa de Jalapeño acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 6,
            "code": "PU-POL-006",
            "name": "Pupusa de Pollo",
            "type": "pupusa",
            "category": "especial",
            "price": 2,
            "description": "Pupusa de Pollo acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 7,
            "code": "PU-RES-007",
            "name": "Pupusa de Res",
            "type": "pupusa",
            "category": "especial",
            "price": 2,
            "description": "Pupusa de Res acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 8,
            "code": "PU-CHO-008",
            "name": "Pupusa de Chorizo",
            "type": "pupusa",
            "category": "especial",
            "price": 2,
            "description": "Pupusa de Chorizo acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 9,
            "code": "PU-HON-009",
            "name": "Pupusa de Hongos",
            "type": "pupusa",
            "category": "especial",
            "price": 2,
            "description": "Pupusa de Hongos acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 10,
            "code": "PU-CAM-010",
            "name": "Pupusa de Camarón",
            "type": "pupusa",
            "category": "especial",
            "price": 2,
            "description": "Pupusa de Camarón lo mejor del mar acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 11,
            "code": "PU-LOC-011",
            "name": "Pupusa Loca",
            "type": "pupusa",
            "category": "especial",
            "price": 6,
            "description": "Pupusa Loca una explosion de sabores acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 12,
            "code": "PU-REV-012",
            "name": "Pupusa Revuelta",
            "type": "pupusa",
            "category": "tradicional",
            "price": 1.5,
            "description": "Pupusa Revuelta acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 13,
            "code": "PU-FRI-013",
            "name": "Pupusa de Frijol",
            "type": "pupusa",
            "category": "tradicional",
            "price": 1,
            "description": "Pupusa de Frijol acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 14,
            "code": "PU-QUE-014",
            "name": "Pupusa de Queso",
            "type": "pupusa",
            "category": "tradicional",
            "price": 1.5,
            "description": "Pupusa de Queso acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 15,
            "code": "PU-FCQ-015",
            "name": "Pupusa de Frijol con Queso",
            "type": "pupusa",
            "category": "tradicional",
            "price": 1.25,
            "description": "Pupusa de Frijol con Queso acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 16,
            "code": "PU-CHI-016",
            "name": "Pupusa de Chicharrón",
            "type": "pupusa",
            "category": "tradicional",
            "price": 2,
            "description": "Pupusa de Chicharrón acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 17,
            "code": "PU-CHI-QUE-017",
            "name": "Pupusa de Chicharrón con Queso",
            "type": "pupusa",
            "category": "tradicional",
            "price": 1.5,
            "description": "Pupusa de Chicharrón con Queso acompañada de curtido y salsa.",
            "image": "/hero-2.png"
        },
        {
            "id": 18,
            "code": "TA-ELO-018",
            "name": "Tamales de Elote",
            "type": "tamal",
            "category": "tradicional",
            "price": 1.25,
            "description": "Tamales de Elote tradicionales. Se sirven calientes.",
            "image": "/tamales-elote.png"
        },
        {
            "id": 19,
            "code": "TA-POL-019",
            "name": "Tamales de Pollo",
            "type": "tamal",
            "category": "tradicional",
            "price": 1.5,
            "description": "Tamales de Pollo tradicionales. Se sirven calientes.",
            "image": "/tamales-pollo.png"
        },
        {
            "id": 20,
            "code": "TA-PIS-020",
            "name": "Tamales Pisques",
            "type": "tamal",
            "category": "tradicional",
            "price": 1.25,
            "description": "Tamales Pisques tradicionales. Se sirven calientes.",
            "image": "/tamales-pisques.png"
        },
        {
            "id": 21,
            "code": "SA-DE-POLLO-021",
            "name": "Sandwich de Pollo",
            "type": "sandwich",
            "category": "comida",
            "price": 2.25,
            "description": "Sandwich de Pollo preparado al momento.",
            "image": "/images/menu/SA-DE-POLLO-021.png"
        },
        {
            "id": 22,
            "code": "SA-DE-JAM-022",
            "name": "Sandwich de Jamon",
            "type": "sandwich",
            "category": "comida",
            "price": 2,
            "description": "Sandwich de Jamon preparado al momento.",
            "image": "/images/menu/SA-DE-JAM-022.png"
        },
        {
            "id": 23,
            "code": "CA-CAF-023",
            "name": "Café 8 Onzas",
            "type": "bebida",
            "category": "café",
            "price": 1.5,
            "description": "Café 8 Onzas.",
            "image": "/cafe.png"
        },
        {
            "id": 24,
            "code": "CA-CAF-024",
            "name": "Café 12 Onzas",
            "type": "bebida",
            "category": "café",
            "price": 1.75,
            "description": "Café 12 Onzas.",
            "image": "/cafe.png"
        },
        {
            "id": 25,
            "code": "CA-CAF-025",
            "name": "Café de 16 Onzas",
            "type": "bebida",
            "category": "café",
            "price": 2,
            "description": "Café de 16 Onzas.",
            "image": "/cafe.png"
        },
        {
            "id": 26,
            "code": "CH-CHO-026",
            "name": "Chocolate 8 Onzas",
            "type": "bebida",
            "category": "chocolate",
            "price": 1.75,
            "description": "Chocolate 8 Onzas.",
            "image": "/chocolate.png"
        },
        {
            "id": 27,
            "code": "LE-LEC-027",
            "name": "Leche 8 Onzas",
            "type": "bebida",
            "category": "lácteo",
            "price": 1.75,
            "description": "Leche 8 Onzas.",
            "image": "/leche.png"
        },
        {
            "id": 28,
            "code": "SD-COC-028",
            "name": "Coca Lata 12 Onzas",
            "type": "bebida",
            "category": "gaseosa",
            "price": 2,
            "description": "Coca Lata 12 Onzas.",
            "image": "/cocacola.png"
        },
        {
            "id": 29,
            "code": "SD-COL-029",
            "name": "Cola Champán 12 Onzas",
            "type": "bebida",
            "category": "gaseosa",
            "price": 2,
            "description": "Cola Champán 12 Onzas.",
            "image": "/kolashanpan.png"
        },
        {
            "id": 30,
            "code": "SD-FAN-030",
            "name": "Fanta Lata 12 Onzas",
            "type": "bebida",
            "category": "gaseosa",
            "price": 2,
            "description": "Fanta Lata 12 Onzas.",
            "image": "/fanta.png"
        },
        {
            "id": 31,
            "code": "SD-FRE-031",
            "name": "Fresa Lata 8 Onzas",
            "type": "bebida",
            "category": "gaseosa",
            "price": 2,
            "description": "Fresa Lata 8 Onzas.",
            "image": "/fresa.png"
        },
        {
            "id": 32,
            "code": "SD-SPR-032",
            "name": "Sprite Lata 12 Onzas",
            "type": "bebida",
            "category": "gaseosa",
            "price": 2,
            "description": "Sprite Lata 12 Onzas.",
            "image": "/sprite.png"
        },
        {
            "id": 33,
            "code": "SD-UVA-033",
            "name": "Uva Lata 500ml",
            "type": "bebida",
            "category": "gaseosa",
            "price": 2,
            "description": "Uva Lata 500ml.",
            "image": "/uva.png"
        },
        {
            "id": 34,
            "code": "SD-MIN-034",
            "name": "Agua Mineral",
            "type": "bebida",
            "category": "gaseosa",
            "price": 2,
            "description": "Agua Mineral.",
            "image": "/aguam.png"
        },
        {
            "id": 35,
            "code": "JG-NAR-035",
            "name": "Jugo de Mandarina 500ml",
            "type": "bebida",
            "category": "jugo",
            "price": 2,
            "description": "Jugo de Mandarina 500ml.",
            "image": "/jugo-mandarina.png"
        },
        {
            "id": 36,
            "code": "JG-MAN-036",
            "name": "Jugo Naranja 500ml",
            "type": "bebida",
            "category": "jugo",
            "price": 2,
            "description": "Jugo Naranja 500ml.",
            "image": "/jugo-naranja.png"
        },
        {
            "id": 37,
            "code": "TE-DUR-037",
            "name": "Té de Durazno 500ml",
            "type": "bebida",
            "category": "té",
            "price": 2,
            "description": "Té de Durazno 500ml.",
            "image": "/te-durazno.png"
        },
        {
            "id": 38,
            "code": "TE-FRA-038",
            "name": "Té de Frambuesa 500ml",
            "type": "bebida",
            "category": "té",
            "price": 2,
            "description": "Té de Frambuesa 500ml.",
            "image": "/te-frambuesa.png"
        },
        {
            "id": 39,
            "code": "TE-LIM-039",
            "name": "Té de Limón 500ml",
            "type": "bebida",
            "category": "té",
            "price": 2,
            "description": "Té de Limón 500ml.",
            "image": "/te-limon.png"
        },
        {
            "id": 40,
            "code": "AG-AGU-040",
            "name": "Botella con Agua 600 Ml",
            "type": "bebida",
            "category": "agua",
            "price": 1.5,
            "description": "Botella con Agua 600 Ml.",
            "image": "/agua.png"
        },
        {
            "id": 41,
            "code": "FR-JAM-041",
            "name": "Frescos Naturales de Jamaica 12 Onzas",
            "type": "bebida",
            "category": "fresco",
            "price": 2.25,
            "description": "Frescos Naturales de Jamaica 12 Onzas natural.",
            "image": "/jamaica.png"
        },
        {
            "id": 42,
            "code": "FR-ORC-042",
            "name": "Frescos Naturales de Orchata 16 Onzas",
            "type": "bebida",
            "category": "fresco",
            "price": 2.75,
            "description": "Frescos Naturales de Orchata 16 Onzas natural.",
            "image": "/orchata.png"
        },
        {
            "id": 43,
            "code": "LI-DE-ESP-043",
            "name": "Espinaca con Manzana",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Espinaca con Manzana natural, preparado al momento.",
            "image": "/espinaca-manzana.png"
        },
        {
            "id": 44,
            "code": "LI-DE-ESP-PIÑ-044",
            "name": "Espinaca con Piña",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Espinaca con Piña natural, preparado al momento.",
            "image": "/espinaca-pinia.png"
        },
        {
            "id": 45,
            "code": "LI-PEP-LIM-045",
            "name": "Pepino con Limón",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Pepino con Limón natural, preparado al momento.",
            "image": "/pepino-limon.png"
        },
        {
            "id": 46,
            "code": "LI-PEP-PIÑ-046",
            "name": "Pepino y Piña",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Pepino y Piña natural, preparado al momento.",
            "image": "/pepino-pinia.png"
        },
        {
            "id": 47,
            "code": "LI-API-MAN-047",
            "name": "Apio y Manzana Verde",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Apio y Manzana Verde natural, preparado al momento.",
            "image": "/apio-manzana.png"
        },
        {
            "id": 48,
            "code": "LI-API-PIÑ-048",
            "name": "Apio y Piña",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Apio y Piña natural, preparado al momento.",
            "image": "/apio-pinia.png"
        },
        {
            "id": 49,
            "code": "LI-LEC-MAN-049",
            "name": "Lechuga con Manzana",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Lechuga con Manzana natural, preparado al momento.",
            "image": "/images/menu/LI-LEC-MAN-049.png"
        },
        {
            "id": 50,
            "code": "LI-PIÑ-GEN-050",
            "name": "Piña Jengibre y Agua",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Piña Jengibre y Agua natural, preparado al momento.",
            "image": "/images/menu/LI-PIÑ-GEN-050.png"
        },
        {
            "id": 51,
            "code": "LI-PAP-LIM-051",
            "name": "Papaya Limón",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Papaya Limón natural, preparado al momento.",
            "image": "/images/menu/LI-PAP-LIM-051.png"
        },
        {
            "id": 52,
            "code": "LI-TOR-NAR-052",
            "name": "Toronja y Naranja",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Toronja y Naranja natural, preparado al momento.",
            "image": "/images/menu/LI-TOR-NAR-052.png"
        },
        {
            "id": 53,
            "code": "LI-BAN-LEC-053",
            "name": "Banano con Leche",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Banano con Leche natural, preparado al momento.",
            "image": "/images/menu/LI-BAN-LEC-053.png"
        },
        {
            "id": 54,
            "code": "LI-FRE-LEC-054",
            "name": "Fresa con Leche",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Fresa con Leche natural, preparado al momento.",
            "image": "/images/menu/LI-FRE-LEC-054.png"
        },
        {
            "id": 55,
            "code": "LI-GAL-ORE-055",
            "name": "Galleta Oreo",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Galleta Oreo natural, preparado al momento.",
            "image": "/images/menu/LI-GAL-ORE-055.png"
        },
        {
            "id": 56,
            "code": "LI-CAF-LEC-056",
            "name": "Café con Leche",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Café con Leche natural, preparado al momento.",
            "image": "/images/menu/LI-CAF-LEC-056.png"
        },
        {
            "id": 57,
            "code": "LI-AVE-BAN-057",
            "name": "Avena y Banano",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Avena y Banano natural, preparado al momento.",
            "image": "/images/menu/LI-AVE-BAN-057.png"
        },
        {
            "id": 58,
            "code": "LI-AVE-MAN-058",
            "name": "Avena y Manzana",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Avena y Manzana natural, preparado al momento.",
            "image": "/images/menu/LI-AVE-MAN-058.png"
        },
        {
            "id": 59,
            "code": "LI-ZAN-NAR-059",
            "name": "Zanahoria con Naranja",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Zanahoria con Naranja natural, preparado al momento.",
            "image": "/images/menu/LI-ZAN-NAR-059.png"
        },
        {
            "id": 60,
            "code": "LI-REM-CON-NAR-060",
            "name": "Remolacha con Naranja",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Remolacha con Naranja natural, preparado al momento.",
            "image": "/images/menu/LI-REM-CON-NAR-060.png"
        },
        {
            "id": 61,
            "code": "LI-TOM-API-061",
            "name": "Tomate con Apio",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Tomate con Apio natural, preparado al momento.",
            "image": "/images/menu/LI-TOM-API-061.png"
        },
        {
            "id": 62,
            "code": "LI-CAF-CON-HUE-062",
            "name": "Café con Huevo",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Café con Huevo natural, preparado al momento.",
            "image": "/images/menu/LI-CAF-CON-HUE-062.png"
        },
        {
            "id": 63,
            "code": "LI-NAR-CON-ARA-063",
            "name": "Naranja con Arándanos",
            "type": "bebida",
            "category": "licuado",
            "price": 3.5,
            "description": "Naranja con Arándanos natural, preparado al momento.",
            "image": "/images/menu/LI-NAR-CON-ARA-063.png"
        }
    ]);

    return (
        <section className="flex flex-col p-4 py-6">
            <h2 className="text-4xl font-bold ">Nuestra variedad de <strong className="text-[#ee943a]">Pupusas</strong></h2>

            <strong className="text-2xl">Tradicionales</strong>

            <div className="flex overflow-x-auto gap-4">
                {menu.filter((item) => item.category === "tradicional" && item.type === "pupusa").map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>

            <strong className="text-2xl">Especiales</strong>

            <div className="flex overflow-x-auto gap-4">
                {menu.filter((item) => item.category === "especial" && item.type === "pupusa").map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>

            <strong className="text-2xl">Tamales</strong>

            <div className="flex overflow-x-auto gap-4">
                {menu.filter((item) => item.type === "tamal").map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>

            <strong className="text-2xl">Bebidas</strong>

            <div className="flex f overflow-x-auto gap-4">
                {menu.filter((item) => item.type === "bebida").map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

function MenuItem({ item }: { item: any }) {
    return (
        <div className="shrink-0 flex flex-col items-center justify-center p-4 rounded bg-[#f9eff1] max-w-48">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
        </div>
    )
}
