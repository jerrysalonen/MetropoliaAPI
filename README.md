# INFO BANK
Metropolia AMK Avoimet rajapinnat -projekti - Santeri Tenhunen & Jerry Salonen

## Projektin käynnistys
Node.js tulee olla asennettuna.

Aja kansiossa `InfoBankBackEnd` komennot:
- `npm i`
- `node index.js`

ja

Aja kansiossa `infoReact` komennot:
- `npm i`
- `npm start`

## Yleistä
Tarkoituksena on pitää yllä tietopankkia, jossa on erilaisia kortteja. Dataa pääsee lisäämään helposti käyttöliittymän kautta tai validilla tokenilla vaikkapa Postmanilla. Vain admin-käyttäjät voivat lisätä dataa.

Datan voi myös hakea JSON-muodossa tokenin kanssa. Token on ns. vierailijatoken, jolla ei ole oikeuksia muuhun, kuin tiedon hakemiseen. Tokenin saa kirjautumalla palveluun.

### Token

Kun tokenia käyttää, tulee se lisätä pyyntöjen Authorization -headeriin muodossa 'bearer sinun-token-tahan'.

## Endpoints

### /api/login - POST

Sisäänkirjautuminen.

- Parametrit: username, password
- Palauttaa: token, username, admin (true/false)

```json
{
  "username": [STRING],
  "password": [STRING]
}
```

Käytetään myös sisäänkirjautumiseen palveluun.

### /api/users - POST

Käyttäjän luonti.

- Parametrit: username, password
- Palauttaa: username, admin (true/false), id

```json
{
  "username": [STRING],
  "password": [STRING]
}
```

###/api/infos - GET ja POST

Infopankin käsittely. Vaatii vähintään visitor -tokenin headerissa. Ohje ylhäällä.

GET:

- Palauttaa kaikki pankissa olevat infokortit. Yksittäisen infokortin kentät ovat: title, category, text, id

POST:

- Lisää kortin infopankkiin.
- Parametrit: title, category, text

```json
{
  "title": [STRING],
  "category": [STRING],
  "text": [STRING],
  "boolean": [STRING],
  "pic": [BOOLEAN]
}
```

### /api/infos/<id> - DELETE

Poistaa yksittäisen infokortin. Vaatii admin -tokenin headerissa. Ohje ylhäällä.