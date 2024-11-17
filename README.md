# Portfolio rukko.pro

This project is a personal portfolio website designed to showcase my experience, projects, and studies. It is built with a modern architecture using **Payload CMS**, **Astro.js**, **MongoDB**, and **NGINX** for efficient and secure deployment.

## Features

- **Payload CMS**:
  - Manages all the information displayed on the portfolio (Experience, Projects, Studies).
  - Receives and stores messages sent through the contact form.
  - Integrated with MongoDB for persistent storage.

- **Astro.js + React**:
  - SSR frontend with responsive design.
  - Communicates with the CMS using GraphQL.

- **MongoDB**:
  - Database for storing data managed by the CMS.

- **NGINX**:
  - Acts as a gateway managing two domains:
    - `${domain}`: Redirects to the frontend.
    - `admin.${domain}`: Redirects to the CMS admin panel.
  - Optimized configuration for SSL certificates.

- **Quick Deployment**:
  - Uses a `compose.yaml` file for easy setup of the entire system.

---

## Requirements

Before you begin, make sure you have:

1. **Docker** and **Docker Compose** installed.
2. SSL certificates placed in `network/certificates/` folder.
3. **Docker image repository**:
   - A Docker image repository is required for the deployment.
   - Alternatively, remove the `image` option from the `cms` and `client` services in the `docker-compose.yaml` file to configure the services without pre-built images.

---

## Environment Variables

```bash
DB_ADMIN_NAME=
DB_ADMIN_PASSWORD=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=

DB_PORT=
CMS_SECRET=
CMS_PORT=

APP_DOMAIN=

REGISRTY=
CERTIFICATES_FOLDER=
```

# Deployment

1. **Clone the repository:**
```bash
git clone https://github.com/Ru-kko/portfolio
cd portfolio
```

2. **Configure environment variables:** Create a .env file based on the variables provided above.

3. **Start the system:**
```bash
docker compose --env-file=.env.loaction up -d
```

4. **Access the system:**
    - Frontend: https://${domain}
    - CMS Admin: https://admin.${domain}