# Event Mosaic

**Event Mosaic** convierte uno a tres referentes culturales en un programa de evento trazable. Está diseñado para el **Qloo Agentic Hackathon**: identifica entidades con Qloo, solicita sus afinidades y asigna resultados a momentos del programa.

## Estado

- Flujo local terminado y probado con respuestas simuladas.
- Repositorio público creado; pendiente de desplegar con una clave oficial de Qloo.
- No se presenta como demo funcional hasta verificar la integración real.
- No pide ni guarda datos personales: solo referentes culturales elegidos por quien lo usa.

## Integración con Qloo

La función usa `GET /search` y `GET /v2/insights` en `https://hackathon.api.qloo.com` con el encabezado `X-Api-Key`. La clave se toma solo de `QLOO_API_KEY` en el entorno del servidor. No se transmite al navegador ni se guarda en el repositorio.

## Ejecutar pruebas

```powershell
node --test
```

## Despliegue sin gasto

1. Importar este repositorio en un proveedor con funciones de servidor y plan gratuito, sin método de pago.
2. Añadir `QLOO_API_KEY` únicamente como secreto del proveedor.
3. Comprobar una consulta real antes de presentar la URL de demo.

## Límite

El premio es competitivo y no está garantizado. La integración real necesita una clave oficial y una comprobación en producción.
