# Wilayah Nusantara API
Wilayah Nusantara is an open source API that provides access to Indonesian province, regencies, districts, and villages data. This API allows developers to fetch specific location information for their applications or projects. Note that this project is still currently under construction, and the current data is accurate only up to 2019. 

For full documentation visit https://docs.wilayah-nusantara.id

## API Installation
To run the API in your local machine, follow these steps:
Clone the repository to your machine and install the needed dependencies. We use `pnpm` to manage our packages, so please make sure it is installed in your local machine.
```
git clone https://github.com/theodevoid/wilayah-nusantara.git

cd wilayah-nusantara

pnpm install
```
Start up a docker container running MySQL. A `docker-compose` file is provided to make this easier.
```
// inside apps/api

docker compose up
```
Run migrations
Linux or Mac
```
pnpm mikro-orm migration:up
```

For windows, we need to use `cross-env`. The script has also been provided.
```
pnpm cross:mikro-orm migration:up
```
Import data from the `/data` folder to your database. We recommend using a GUI like MySQL Workbench, or DBeaver to make this easier.
Run the API
Linux or Mac
```
// for development
pnpm dev

// for production
pnpm build
pnpm start:prod
```
Windows
```
pnpm cross:dev
```

## Contribution
We welcome contributions from the open source community. To contribute to the Wilayah Nusantara API, please follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the codebase remains clean and follows best practices.
4. Don't forget to create migrations if there are any database changes.
5. Submit a pull request describing your changes and explaining the rationale behind them.

## Roadmap
- [ ] Update to latest data
- [ ] Include postal code
- [ ] Include latitude and longitude
