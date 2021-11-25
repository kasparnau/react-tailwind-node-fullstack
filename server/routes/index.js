export const setupApiRoutes = async (app) => {
  app.get("/api/version", function (req, res) {
    res.send("v1");
  });
};
