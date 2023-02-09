// Importeer express uit de node_modules map
import express from 'express'

const url = 'https://whois.fdnd.nl/api/v1/member/zenit-araya'
const data = await fetch(url).then((response) => response.json())
console.log(data)

// Maak een nieuwe express app aan
const app = express()

app.get('/', function (req, res) {
  res.render('index', data)
})
// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})





