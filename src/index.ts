import app from './app'

const PORT = app.get("port");
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}/items/`);
});