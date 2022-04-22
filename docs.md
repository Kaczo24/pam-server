Windows 10 Home 21H1 19043.1526 64-bitowy

Intel(R) Core(TM) i5-8600K CPU @ 3.60GHz

16 GB RAM

Node.js v14.16.1
### Modules:
    bcrypt - ^5.0.1
    body-parser - ^1.19.0
    cookie-paser - ^1.4.5
    cors - ^2.8.5
    dotenv - ^10.0.0
    express - ^4.17.1
    jsonwebtoken - ^8.5.1
    nodemon - ^2.0.13
    path - ^0.12.7

### .env file:
    PORT - server port
    PATH - server hosting address
    PORT_U= unsecure server port
    PATH_U= unsecure server hosting address
    TOKEN_SECRET - 512 bit random number in hex

### ssl generation:
    cd ssl 
    openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -keyout server.key -out server.crt
    cd ..

### Database - JSON file:
    {
        users - Array: [
            {
                username - TEXT,
                password - TEXT
            }
        ] 
    }

### Endpoints:
    /api
        /account
            /login
                POST {username: TEXT (the username), password: TEXT (password)}; response codes: 401(Unauthorized), 200(OK); response body: JSON {error: TEXT (error content), success: TEXT (jsonwebtoken)}
            /register
                POST {username: TEXT (the username), password: TEXT (password)}; response codes: 401(Conflict), 200(OK); response body: JSON {error: TEXT (error content), success: TEXT (confirmation)}
            /verifyLogin
                POST {authorization: TEXT (token)};  response body: TEXT ("no token" | "invalid token" | "success")
