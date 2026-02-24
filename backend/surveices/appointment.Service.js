

// export const createAppointmentService = async (data) => {
//   const { name, phone, service, date, time, message } = data;

//   // const query = `
//   //   INSERT INTO appointments (name, phone, service, date, time, message)
//   //   VALUES ($1,$2,$3,$4,$5,$6)
//   //   RETURNING *
//   // `;

//   const values = [name, phone, service, date, time, message];

//   const result = await pool.query(query, values);
//   return result.rows[0];
// };

// // export const getAppointmentsService = async () => {
// //   const result = await pool.query(
// //     "SELECT * FROM appointments ORDER BY created_at DESC"
// //   );
// //   return result.rows;
// // };