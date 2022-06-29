
CREATE TABLE rsvpInvites (
	INVITE_NAME  CHAR(255) NOT NULL, 
    INVITE_SURNAME CHAR(255), 
    CUISINES TEXT [] NOT NULL , 
	TIME NUMERIC, 
	ATTENDANCE BOOLEAN
    );

     INSERT INTO rsvpInvites VALUES ('Amanda', 'Zitho', 'Pasta', '1', 'true');
     INSERT INTO rsvpInvites VALUES ('Amandla', 'Mazibuko', 'Pasta', '0', 'false');
     INSERT INTO rsvpInvites VALUES ('Ayanda', 'Langa', 'Pasta', '0', 'false');
     INSERT INTO rsvpInvites VALUES ('Koketso', 'Finger', 'Pasta', '1', 'true');
