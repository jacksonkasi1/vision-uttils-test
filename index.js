import moment from "moment";

const i = { completed_booking_date: "2025-01-03T21:13:28.038Z" }; // Example date

// Convert date for mobile app display (without UTC conversion)
const mobile_app_out = moment(i?.completed_booking_date || "").format("DD MMM YYYY");
console.log("Mobile App Output (Without UTC):", mobile_app_out);

// ----------------------

// Sample array of booking objects
let bookings = [
  {
    id: 55427,
    booking_ref_number: "6055457100",
    completed_booking_date: "2025-01-03T21:13:28.038Z",
    incentive_amount: 150,
    driver_incentive_verified: false,
  },
  // More objects can be added here if needed.
];

// Backend conversion: Overwrite the date field with a preformatted value using UTC.
// This ensures consistency in date formatting across different environments.
bookings = bookings.map((booking) => {
  return {
    ...booking,
    completed_booking_date: moment
      .utc(booking.completed_booking_date)
      .format("DD MMM YYYY"),
  };
});

// Mobile app date formatting logic
// Since the backend already formats the date as "DD MMM YYYY", we ensure consistent parsing.
bookings.forEach((booking) => {
  const mobileDisplay = moment(
    booking.completed_booking_date,
    "DD MMM YYYY"
  ).format("DD MMM YYYY");

  console.log("Mobile App Output (After UTC Conversion):", mobileDisplay); // Expected output: "03 Jan 2025"
});
