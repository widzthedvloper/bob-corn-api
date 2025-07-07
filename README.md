# bob-corn-api

This is an Express api to buy corn!

### Prerequisites

- React
- NodeJS
- Docker
- posgrest
- redis

### Usage

1. This api need both posgrest and redis to work and you will need to create an app from google cloud to use oAuth.
2. Assume you are familliar with docker and have it install, you can run the following two commands.
`docker run --name some-redis -d -p 6379:6379 redis`
`docker run --name <Container_name> -p 5432:5432 -e POSTGRES_PASSWORD=<your_password> -d postgres`

2. Clone the repository by using the `git clone git@github.com:widzthedvloper/bob-corn-api.git` command in your terminal
3. `cd` into the cloned repository
4. Run `npm install or npm i`
5. In your system install mkcert and run `mkcert localhost` move both files in the root folder of the project
6. you need to create .env file in the root of the project
7. Open the codebase using any code editor of your choice,
8. run the application by typing `npm watch` and hit enter.


## .env file

### database
HOST=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_ENGINE=
DB_PORT=

### server
SERVER_PORT=

### oAuth gogle
CLIENT_ID=
CLIENT_SECRET=

### cookie key
COOKIE_KEY_1=
COOKIE_KEY_2=

### redis url
REDIS_URL=


## Contributing

This project is for educational purposes.

👤 **Widzmarc Jean Nesly Phelle**

- GitHub: [@widzthedvloper](https://github.com/widzthedvloper)
- LinkedIn: [@widzthedvloper](https://www.linkedin.com/in/widzmarc-jean-nesly-phelle-252a26129/)

### Show your support

Give a ⭐️ if you like this project!

## License

MIT License
