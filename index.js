const express = require('express');
const { connectDB } = require('./db/db.config')
const { taqveemRouter } = require('./routers/taqveem.router')
require('dotenv').config();
const cors = require('cors')

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const duaRouter = require('./routers/dua.router')


const app = express();
app.use(express.json())
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.options('*', cors());
connectDB()

const PORT = process.env.PORT || 4001
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Taqveem API',
      version: '1.0.0',
      description: 'Ramazon taqvimi malumotlarini boshqarish API',
    },
    servers: [
      { url: 'https://taqveem-with-swagger-production.up.railway.app', description: 'Server online' },
    ],
  },
  apis: ['./routers/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req,res) => {
	res.status(200).send(`<h1>Server is running</h1>`)
})

app.use('/api',taqveemRouter)
app.use('/api',duaRouter)

app.listen(PORT, () => {
	console.log(`> Server is running on ${PORT}`)
})