var express = require('express');

const PUBLIC_DIR = 'public';
const PORT_APP = 3000;

const app = express();

app.use(express.static(PUBLIC_DIR));
app.listen(PORT_APP, function () {
    console.log('Express server running on port ' + PORT_APP);
});