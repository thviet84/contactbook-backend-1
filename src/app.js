const express = require('express'); 
const cors = require('cors');
const contactController = require('./controllers/contact.controller');

const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application.' });
});

app. route('/api/contacts')
    .get(contactController.findAll) 
    .post(contactController.create) 
    .delete(contactController.deleteAll);

app. route('/api/contacts/favorite').get(contactController.findAllFavorite);

app. route('/api/contacts/:id')
    .get(contactController.findone) 
    .put(contactController.update) 
    .delete(contactController. delete);

module.exports = app;

