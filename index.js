const express = require('express');
const bodyParser = require('body-parser');
const helper = require("./src/lib/helper");
const config = require('./config/config');
const app = express();
const port = config.server.port;
app.use(bodyParser.json());

//Register routes
helper
    .fileList('./src/routes')
    .forEach(filePath => require(`./${filePath.toString()}`)(app));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = {
  app: app
}