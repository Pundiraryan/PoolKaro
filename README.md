
# PoolKaro

PoolKaro is a web application to facilitate residents of Kurukshetra to pool taxi's for their visits
 


## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: Auth0



## Getting Started

### Prerequisites


Before you begin, ensure you have the following installed :
- Node.js
- npm
- MongoDB

### Installation
Clone the repository :

```bash
git clone https://github.com/your-username/kurukshetra-taxi-pooling.git
```

Go to the project directory :

```bash
cd kurukshetra-taxi-pooling
```

Set up environment variables :

Create a .env file in the backend directory and add the following values :
```bash
DB=<your-database-connection-string>
PORT=<your-desired-port>
```
Create a .env file in the frontend directory and add the following value :

```bash
REACT_APP_BACKEND_URL=<your-backend-url>
```

Install dependencies :

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd ../frontend
npm install
```



##   Running the Application : 

Start the backend server :

```bash
cd backend
npm run dev
```

Start the frontend application :

```bash
cd ../frontend
npm start
``` 
## Authentication

Set up Auth0 for authentication by following the official Auth0 documentation. Ensure you have the required configuration in place in the frontend for seamless user authentication.
## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
