const router = require("express").Router();
const albumRoutes = require("./album-routes");
const genreRoutes = require("./genre-routes.js");
const resultRoutes = require("./result-routes.js");
const userRoutes = require("./user-routes.js")

router.use("/album", albumRoutes);
router.use("/genre", genreRoutes);
router.use("/result", resultRoutes);
router.use("/user", userRoutes);

module.exports = router;
