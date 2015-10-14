import Express from 'express';
import path from 'path';

const app = new Express();

const port = process.env.PORT || 3000;

const PUBLIC_PATH = path.resolve(__dirname, '../../public');
const PATH_STYLES = path.resolve(__dirname, '../../public/stylesheets');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/stylesheets', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(port);
