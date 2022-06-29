const { Pool } = require("pg");
// const dbConfig = require("../config/dbConfig");

const InvitesRsvp = new Pool({
  user: "postgres",
  database: "invites",
  password: "newpassword",
  port: 5432,
  host: "localhost",
});

// module.exports = {};
// const getClient = async () => {
//   const client = await InvitesRsvp.connect();
//   return client;
// };
InvitesRsvp.connect();
module.exports = {
  InvitesRsvp,
};
