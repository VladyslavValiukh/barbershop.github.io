const path = require('path');
const express = require('express');
const app = express();
const pug = require('pug');
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
});

<<<<<<< HEAD
var pages = ['main','gallery','contacts','prices','about']

for( var i = 0 ; i < pages.length;i++){
app.get(`/${pages[i]}`,function(req,res){
  res.send(pug.renderFile(path.resolve(__dirname,`../pug/${req.url}.pug`)))
});}

=======
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
>>>>>>> 305d8e4cb137575420e4d9e4c26c60dcae440177
app.use('/scss', express.static(path.resolve(__dirname, '../scss')));
app.use('/img', express.static(path.resolve(__dirname, '../img')));
app.use('/js', express.static(path.resolve(__dirname, '../js')));
app.use(function(req, res) {
  res.send(404, "Page Not Found Sorry");
});
