use(process.env.DB_NAME)

db.createUser({
  user: process.env.DB_USERNAME,
  pwd: process.env.DB_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGO_INITDB_DATABASE,
    },
  ],
});
