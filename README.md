# SIRA – Sistema Inteligente de Reservas y Agendas

**SIRA** es una plataforma web para la gestión interna de reservas, citas y agendas. Diseñada para equipos con diferentes roles (como administradores y empleados), permite a los clientes reservar sin necesidad de registrarse, enfocándose en la simplicidad, rapidez y control interno.

## 🚀 Características

- Gestión de agendas, horarios y disponibilidad por usuario
- Roles de usuario: administrador y empleado
- Reservas sin necesidad de registro para el cliente
- Interfaz simple, rápida y enfocada en productividad
- Pensado para uso interno en negocios, clínicas, talleres, etc.

### Cronograma General del Proyecto – SIRA (25 junio – 25 julio)

<details>
<summary>Fase 1 – Diseño y Fundamentos (25 junio – 4 julio)</summary>

```
-Definición de requerimientos funcionales y técnicos.
- Diseño UX/UI (wireframes y flujo de usuario).
- Modelado de base de datos.
- Setup del entorno:
  - Frontend (React + Tailwind)
  - Backend (Node.js + Express)
  - Base de datos (PostgreSQL)
- Autenticación con roles: administrador y empleado.

```

</details>

<details>
<summary>Fase 2 – Funcionalidad Principal (5 julio – 14 julio)</summary>

```
- Módulo de agendas: horarios y disponibilidad por usuario.
- Sistema de reservas sin login para clientes.
- Validaciones y lógica para evitar conflictos.
- Panel de control para empleados y administradores.
- Notificaciones o confirmaciones por email (opcional).

```

</details>

<details>
<summary>Fase 3 – Integración, Pruebas y Deploy (15 julio – 25 julio)</summary>

```
- Refinamiento de la interfaz.
- Pruebas unitarias y de integración.
- Medidas de seguridad (validación, XSS, sanitización).
- Documentación técnica y manual de usuario.
- Deploy:
  - Backend: Vercel
  - Frontend: Vercel
  - DB: Supabase

```

</details>

> Stack Tecnológico

- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Base de Datos:** PostgreSQL
- **Auth:** JWT
- **Testing:** Jest
- **Deploy:** Vercel, Supabase
