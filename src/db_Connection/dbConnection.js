import mysql from "mysql2";

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'school_admin',
  password: 'Plugs@1234',
  database: 'school_management'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    // throw err;  // In case of critical error, exit the process
  }
  console.log('MySQL connected...');
});

export default db.promise();  // Use promise-based API
