  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  const reino = require('../routes/reino');
  app.use(reino);

  const filoRoutes = require('../routes/filo');
  app.use(filoRoutes);

  const classeRoutes = require('../routes/classe');
  app.use(classeRoutes);

  const ordemRoutes = require('../routes/ordem');
  app.use(ordemRoutes);

  const familiaRoutes = require('../routes/familia');
  app.use(familiaRoutes);

  const generoRoutes = require('../routes/genero');
  app.use(generoRoutes);

  const especieRoutes = require('../routes/especie');
  app.use(especieRoutes);

  const faunaRoutes = require('../routes/fauna');
  app.use(faunaRoutes);

  const museuEntomoRoutes = require('../routes/museu_entomo');
  app.use(museuEntomoRoutes);

  const aviFaunaRoutes = require('../routes/avi_fauna');
  app.use(aviFaunaRoutes);

  const floraRoutes = require('../routes/flora');
  app.use(floraRoutes);

  const inventarioRoutes = require('../routes/inventario');
  app.use(inventarioRoutes);

  const plantasDaninhasRoutes = require('../routes/plantasDaninhas');
  app.use(plantasDaninhasRoutes);

  const plantasMedicinaisRoutes = require('../routes/plantasMedicinais');
  app.use(plantasMedicinaisRoutes);

  const relogioMedicinalRoutes = require('../routes/relogioMedicinal');
  app.use(relogioMedicinalRoutes);

  const pancsRoutes = require('../routes/pancs');
  app.use(pancsRoutes);

  const userRoutes = require('../routes/users.js');
  app.use(userRoutes);

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
  });