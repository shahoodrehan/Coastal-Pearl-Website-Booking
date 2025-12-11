const apiEndpoints = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,

  CHECK_AVAILABILITY: "/api/User/CheckAvailability",
  BOOKING_REQUEST: "/api/User/BookingRequest",
  EXTRA_FACILITIES: "api/User/GetExtraFacilities",

  ADMIN_LOGIN: "/loginAdmin",
  FETCH_BOOKINGS: "api/User/GetBookings",

  UPDATE_BOOKING_STATUS: "api/User/UpdateBookingStatus",
};

export default apiEndpoints;
