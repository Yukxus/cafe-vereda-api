# Documentación de API - Café de Vereda

## Base URL
```
http://localhost:3001
```

## Headers Requeridos
```json
{
  "Content-Type": "application/json"
}
```

## Endpoints

### Menú

#### Obtener todas las categorías
```
GET /menu/categorias
```

#### Obtener todos los productos
```
GET /menu/productos
```

#### Obtener productos por categoría
```
GET /menu/productos/:categoriaId
```

#### Crear nuevo producto
```
POST /menu/productos
Body:
{
  "nombre": "Café Expreso",
  "descripcion": "Café de especialidad",
  "precio": 2.50,
  "categoria_id": 1,
  "imagen_url": "https://...",
  "disponible": true
}
```

#### Actualizar producto
```
PUT /menu/productos/:id
Body:
{
  "nombre": "Nuevo nombre",
  "precio": 3.00,
  "disponible": true
}
```

#### Eliminar producto
```
DELETE /menu/productos/:id
```

### Reservas

#### Obtener todas las reservas
```
GET /reservas
```

#### Obtener reserva por ID
```
GET /reservas/:id
```

#### Obtener reservas por usuario
```
GET /reservas/usuario/:usuarioId
```

#### Obtener reservas por fecha
```
GET /reservas/fecha/:fecha
Ejemplo: GET /reservas/fecha/2025-11-20
```

#### Crear nueva reserva
```
POST /reservas
Body:
{
  "usuario_id": "550e8400-e29b-41d4-a716-446655440000",
  "fecha": "2025-11-20",
  "hora": "14:30",
  "cantidad_personas": 4,
  "notas": "Mesa cerca de la ventana",
  "estado": "pendiente"
}
```

#### Actualizar reserva
```
PUT /reservas/:id
Body:
{
  "estado": "confirmada",
  "hora": "15:00"
}
```

#### Cancelar reserva
```
DELETE /reservas/:id
```

### Pedidos

#### Obtener todos los pedidos
```
GET /pedidos
```

#### Obtener pedido por ID
```
GET /pedidos/:id
```

#### Obtener pedidos por usuario
```
GET /pedidos/usuario/:usuarioId
```

#### Crear nuevo pedido
```
POST /pedidos
Body:
{
  "usuario_id": "550e8400-e29b-41d4-a716-446655440000",
  "estado": "pendiente",
  "total": 25.50
}
```

#### Actualizar estado de pedido
```
PUT /pedidos/:id
Body:
{
  "estado": "completado"
}
```

#### Cancelar pedido
```
DELETE /pedidos/:id
```

## Códigos de Estado

- `200` - Éxito
- `201` - Creado
- `400` - Solicitud inválida
- `404` - No encontrado
- `500` - Error del servidor

## Ejemplo de Uso con cURL

```bash
# Obtener productos
curl -X GET http://localhost:3001/menu/productos

# Crear reserva
curl -X POST http://localhost:3001/reservas \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": "550e8400-e29b-41d4-a716-446655440000",
    "fecha": "2025-11-20",
    "hora": "14:30",
    "cantidad_personas": 2,
    "notas": ""
  }'
```

## Variables de Entorno

```
SUPABASE_URL=https://dphffthrmlzmmdbukhiv.supabase.co
SUPABASE_ANON_KEY=tu_clave_aqui
SUPABASE_SERVICE_KEY=tu_service_key_aqui
PORT=3001
```

