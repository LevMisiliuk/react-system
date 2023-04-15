const express = require('express')
const userRouter = require('./routes/user.routes')
const instagramApiUrl = 'https://api.instagram.com';
const axios = require('axios').default;

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // здесь можно указать домен, который имеет разрешение на доступ, вместо звездочки
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// обработчик запросов к прокси-серверу
app.post('/api/instagram', async (req, res) => {
  try {
    // получаем данные из запроса
    const { endpoint, params } = req.body;
    // создаем URL для запроса к Instagram API
    const url = `${instagramApiUrl}/${endpoint}`;
    // выполняем запрос к Instagram API с использованием переданных параметров
    const response = await axios.post(url, params);
    // добавляем заголовок Access-Control-Allow-Origin к ответу
    res.header('Access-Control-Allow-Origin', '*');
    // отправляем ответ обратно клиенту
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))