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


## Creat DataBase


> create table CropTypes (
	id serial PRIMARY KEY,
	name VARCHAR(50) not null,
	description TEXT
)

> create table CornProduts (
	id serial primary key,
	crop_type_id INT,
	harvest_date DATE,
	quantity INT,
	foreign key (crop_type_id) references CropTypes(id)
)

> create table Buyers (
	id serial primary key,
	email text,
	name text
)

> create table Sales (
	id serial  primary key,
	corn_product_id INT,
	sale_date Date,
	buyer_id INT,
	quantity_sold INT,
	foreign key (buyer_id) references Buyers(id)
)

 # populate database

> Insert crop types
INSERT INTO CropTypes (name, description) VALUES
('Sweet Corn', 'Tender and sugary variety commonly eaten as a vegetable.'),
('Field Corn', 'Used primarily for livestock feed and industrial products.'),
('Popcorn', 'A special type of corn that pops when heated.');

> Insert corn products
INSERT INTO CornProduts (crop_type_id, harvest_date, quantity) VALUES
(1, '2024-08-15', 500),
(1, '2024-09-01', 300),
(2, '2024-07-20', 1000),
(2, '2024-07-25', 750),
(3, '2024-06-30', 400),
(3, '2024-07-10', 350);

> Insert buyers
INSERT INTO Buyers (email, name) VALUES
('john.doe@example.com', 'John Doe'),
('jane.smith@example.com', 'Jane Smith'),
('michael.jordan@example.com', 'Michael Jordan'),
('sara.connor@example.com', 'Sara Connor'),
('tony.stark@example.com', 'Tony Stark');

> Insert sales
INSERT INTO Sales (corn_product_id, sale_date, buyer_id, quantity_sold) VALUES
(1, '2024-09-10', 1, 200),
(2, '2024-09-12', 2, 150),
(3, '2024-08-05', 3, 500),
(5, '2024-07-01', 4, 300),
(6, '2024-07-15', 5, 250);

> select * from CornProducts;
> select * from Buyers;
> select * from CropTypes;
> select * from Sales;

> SELECT "id", "email", "name" FROM Buyers AS "Buyers";
> ALTER TABLE buyers ADD COLUMN role TEXT;
> ALTER TABLE cornproduts RENAME TO cornProduct;
> ALTER TABLE cornproduct RENAME TO cornProducts;


👤 **Widzmarc Jean Nesly Phelle**

- GitHub: [@widzthedvloper](https://github.com/widzthedvloper)
- LinkedIn: [@widzthedvloper](https://www.linkedin.com/in/widzmarc-jean-nesly-phelle-252a26129/)

### Show your support

Give a ⭐️ if you like this project!

## License

MIT License
