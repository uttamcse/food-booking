const { createRouter } = require("../utils/routerHelper");
const HttpMethods = require("../utils/httpMethods");
const { createReservation } = require("../controllers/reserveController");

const routes = [
  {
    method: HttpMethods.POST,
    path: "/reserve",
    handlers: [createReservation],
  },
 
];

const router = createRouter(routes);

module.exports = router;