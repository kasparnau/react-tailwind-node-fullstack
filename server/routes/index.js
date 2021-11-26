export const setupApiRoutes = async (fastify) => {
  fastify.get("/api/version", async function (request, reply) {
    reply.send("v1");
  });
};
