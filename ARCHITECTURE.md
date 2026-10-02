# Arquitectura

El navegador solo envía referentes culturales y categoría a `GET /api/recommend`.
La función de servidor guarda la clave Qloo exclusivamente como variable de entorno,
llama a `/search` para resolver cada referente y a `/v2/insights` para obtener afinidad.
Después entrega una planificación determinista y una traza legible. No registra nombres,
correos, IP ni la clave.

## Protección de errores

- Sin clave: devuelve 503 y un mensaje que explica que la demo aún no está configurada.
- Entrada vacía: devuelve 400.
- Fallo remoto: devuelve 502 sin revelar cabeceras ni secretos.
- Solo acepta GET y limita los referentes a tres mediante `parseRequest`.
