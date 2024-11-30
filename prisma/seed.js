const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Crear un usuario de ejemplo
  await prisma.user.create({
    data: {
      id: "user1", // Si es requerido explícitamente, proporciona un ID único
      name: "Edgar Sánchez",
      username: "edgarsanchez01", // Asegúrate de que este username sea único
      email: "edgar.sanchez8999@gmail.com",
      settings: {
        create: {
          officialNews: true, // Esto es necesario por la relación con settings
        },
      },
    },
  });

  console.log("Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
