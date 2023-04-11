const express = require('express')
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // здесь можно указать домен, который имеет разрешение на доступ, вместо звездочки
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))