const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

const pathApi = '/api/v1/'

app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
app.use( cors() );

//ROUTES
const amenityRoutes = require('./routes/amenity.routes');
const categoryRoutes = require('./routes/category.routes');
const changeRoutes = require('./routes/change.routes');
const clientRoutes = require('./routes/client.routes');
const employeeRoutes = require('./routes/employee.routes');
const extraRoutes = require('./routes/extra.routes');
const invoiceRoutes = require('./routes/invoice.routes');
const photoRoutes = require('./routes/photo.routes');
const reservationRoutes = require('./routes/reservation.routes');
const reservationHasAmenityRoutes = require('./routes/reservation_has_amenity.routes');
const roomRoutes = require('./routes/room.routes');
const surveyRoutes = require('./routes/survey.routes');

//USE ROUTES
app.use( pathApi, amenityRoutes );
app.use( pathApi, categoryRoutes );
app.use( pathApi, changeRoutes );
app.use( pathApi, clientRoutes );
app.use( pathApi, employeeRoutes );
app.use( pathApi, extraRoutes );
app.use( pathApi, invoiceRoutes );
app.use( pathApi, photoRoutes );
app.use( pathApi, reservationRoutes );
app.use( pathApi, reservationHasAmenityRoutes );
app.use( pathApi, roomRoutes );
app.use( pathApi, surveyRoutes );

app.listen(process.env.PORT, () => {
  console.log(`Server UP corriendo en http://localhost:${process.env.PORT}`);
});
