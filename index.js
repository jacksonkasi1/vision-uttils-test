import moment from "moment";

const i = { completed_booking_date: "2025-01-03T21:13:28.038Z" }; // Example date
console.log(moment(i?.completed_booking_date || "").format("DD MMM YYYY"));

// Test with an empty value
const j = {};
console.log(moment(j?.completed_booking_date || "").format("DD MMM YYYY"));

// -------------

// Sample array of booking objects
let bookings = [
  {
    id: 55427,
    booking_ref_number: "6055457100",
    completed_booking_date: "2025-01-03T21:13:28.038Z",
    incentive_amount: 150,
    driver_incentive_verified: false,
  },
  // Add more objects if needed.
];

// Backend conversion: Overwrite the date field with a preformatted value using UTC.
// This produces a string like "03 Jan 2025".
bookings = bookings.map((booking) => {
  return {
    ...booking,
    completed_booking_date: moment
      .utc(booking.completed_booking_date)
      .format("DD MMM YYYY"),
  };
});

// Simulate the mobile app formatting logic.
// Instead of just calling moment(), we provide the expected format so Moment knows how to parse it.
bookings.forEach((booking) => {
  // Specify the format when parsing to avoid deprecation warnings.
  const mobileDisplay = moment(
    booking.completed_booking_date,
    "DD MMM YYYY"
  ).format("DD MMM YYYY");
  console.log("Mobile App Display:", mobileDisplay); // Expected output: "03 Jan 2025"
});
