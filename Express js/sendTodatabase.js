var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'Localhost',
  user: 'root',
  password: '',
  database: 'demo123'
})

connection.connect()

connection.query('SELECT * FROM userData WHERE emailId ="bhuprahdsan20@gmail.com"', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()