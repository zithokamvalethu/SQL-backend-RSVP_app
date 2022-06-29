var express = require("express");
var app = express();
var cors = require("cors");
const { InvitesRsvp } = require("./models/db");
// const
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// default route

app.get("/invites", async (req, res) => {
  InvitesRsvp.query(`Select * from rsvpInvites `, (error, result) => {
    if (!error) {
      res.send(result.rows);
    }
  });
  InvitesRsvp.end;
});

app.get("/get-invites/:id", async (req, res) => {
  let query = InvitesRsvp.query(
    `Select * from rsvpInvites where id=${req.params.id}`,
    (err, result) => {
      if (!query) {
        res.send(result.rows);
      }
    }
  );
  InvitesRsvp.end;
});

app.post("/add-invites", async (req, res) => {
  try {
    const invites = req.body;
    let insertQuery = `insert into rsvpInvites( INVITE_NAME, INVITE_SURNAME,CUISINES,TIME,ATTENDANCE) 
                         values($1, $2, $3, $4,$5)`;

    await InvitesRsvp.query(insertQuery, [
      invites.INVITE_NAME,
      invites.INVITE_SURNAME,
      invites.CUISINES,
      invites.TIME,
      invites.ATTENDANCE,
    ]);
    res.send(invites);
  } catch (err) {
    res.send(invites);
  }
  InvitesRsvp.end;
});

app.put("/edit-invites/:id", async (req, res) => {
  let invites = req.body.id;
  let updateQuery = `update rsvpInvites
                       set
                       CUISINES = '${invites.CUISINES}';
                       TIME = '${invites.TIME}';
    ATTENDANCE = ${invites.ATTENDANCE}`;

  InvitesRsvp.query(updateQuery, (err, result) => {
    if (!err) {
      res.send(invites);
    } else {
      console.log(invites);
    }
  });
  InvitesRsvp.end;
});

app.delete("/delete-invites/:id", async (req, res) => {
  let insertQuery = `delete from users where id=${req.params.id}`;

  InvitesRsvp.query(insertQuery, (err, result) => {
    if (!err) {
      res.send(insertQuery);
    } else {
      console.log(insertQuery);
    }
  });
  InvitesRsvp.end;
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
module.exports = app;
