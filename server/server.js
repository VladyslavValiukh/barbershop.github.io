const path = require('path');
const express = require('express');
const app = express();
const pug = require('pug');
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
});

app.get('/', (req, res) => {
  res.send(
pug.renderFile(
      path.resolve(__dirname, '../pug/index.pug')
  )
);
});
app.get('/about', (req, res) => {
  res.send(
pug.renderFile(
      path.resolve(__dirname, '../pug/about.pug')
  )
);
});
app.get('/gallery', (req, res) => {
  res.send(
pug.renderFile(
      path.resolve(__dirname, '../pug/gallery.pug')
  )
);
});
app.get('/contacts', (req, res) => {
  res.send(
pug.renderFile(
      path.resolve(__dirname, '../pug/contacts.pug')
  )
);
});
app.get('/prices', (req, res) => {
  res.send(
pug.renderFile(
      path.resolve(__dirname, '../pug/prices.pug')
  )
);
});
app.use('/scss', express.static(path.resolve(__dirname, '../scss')));
app.use('/img', express.static(path.resolve(__dirname, '../img')));
app.use('/js', express.static(path.resolve(__dirname, '../js')));
app.use(function(req, res) {
  res.send(404, "Page Not Found Sorry");
});
