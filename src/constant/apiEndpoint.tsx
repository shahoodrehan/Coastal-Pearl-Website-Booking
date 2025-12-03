const apiEndpoints = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,

  CHECK_AVAILABILITY: '/api/User/CheckAvailability',
  BOOKING_REQUEST: '/api/User/BookingRequest',
  EXTRA_FACILITIES: 'api/User/GetExtraFacilities',
};

export default apiEndpoints;