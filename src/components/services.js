import http from "./http-common";

// import React from 'react'

class InvitationsData {
  getAll() {
    return http.get("/invites");
  }
}
export default new InvitationsData();
