const app = require("./app");

const PORT = process.env.PORT || 3666

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});