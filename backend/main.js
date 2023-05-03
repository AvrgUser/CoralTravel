const express = require('express');
const app = express();
const path = require('path')
const dbconnector = require('./db-connection/db.connector')
app.set('view engine', 'ejs');

// Указываем папку, в которой находятся статические файлы сайта (html, css, js и т.д.)
app.use(express.static(path.resolve(__dirname, '..')+'/dist/coral-travel'));

// Обработка GET-запроса на главную страницу
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..')+'/dist/coral-travel/index.html');
});

app.get('/cities',(req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end(dbconnector.getCitiesList())
});

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000');
});