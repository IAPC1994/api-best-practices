const express = require("express");
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const bodyParser = require("body-parser");
// const apicache = require("apicache");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger")

const app = express();
// const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("<h2>It's working!</h2>")
// });

app.use(bodyParser.json());
// app.use(cache("2 minutes"));
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${ PORT }`);
    V1SwaggerDocs(app, PORT);
});