## REST API USER, PRODUCTS, CATEGORY

**Adalah sebuah rest api yang digunakan untuk crud data user products dan category**

Flow database programs

**1. Eksport file sql (file db/week.13) ke mysql**

**2. install node modules and bcrypct**
```
npm install
```
**3. copy env example to .env**
```
isi user mysql dan password mysql 
```

## Usage 

Base URL : http://localhost:2000

### Method GET

**Endpoint**

| Endpoint  | Description |
| ------------- | ------------- |
| /users  | Getting all data users  |
| /users/:id  | Getting user data by ID  |
| /products | Getting all data products |
| /inv | Getting Transaction data |

### Method Post

**Endpoint**

| Endpoint  | Description |
| ------------- | ------------- |
| /users  | Register new Users  |
| /products | Add new products |
| /inv | Add new Invoice |

### Method Update

**Endpoint**

| Endpoint  | Description |
| ------------- | ------------- |
| /users  | Update users  |
| /products | Update products |

### Method Delete

**Endpoint**

| Endpoint  | Description |
| ------------- | ------------- |
| /users  | Delete users  |
| /products | Delete products |

