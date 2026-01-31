# Test Monorepo

A modern monorepo containing backend and frontend applications.

## Structure

```
.
├── backend/          # Spring Boot 4.1.0 WebFlux application (Java 21, Kotlin)
├── frontend/         # Nx React application (TypeScript, RxJS, Redux Epic, PrimeReact)
└── docker-compose.yml # PostgreSQL database
```

## Backend

- **Framework**: Spring Boot 4.1.0
- **Language**: Kotlin
- **Runtime**: Java 21
- **Reactive**: WebFlux
- **Database**: PostgreSQL

### Running Backend

```bash
cd backend
./gradlew bootRun
```

## Frontend

- **Framework**: React with Nx
- **Language**: TypeScript
- **State Management**: Redux with Redux-Observable (Epic)
- **Routing**: React Router
- **UI Library**: PrimeReact
- **Reactive**: RxJS

### Running Frontend

```bash
cd frontend
npm start
```

## Database

PostgreSQL is configured via Docker Compose.

```bash
docker-compose up -d
```

## Development

1. Start PostgreSQL: `docker-compose up -d`
2. Start backend: `cd backend && ./gradlew bootRun`
3. Start frontend: `cd frontend && npm start`
