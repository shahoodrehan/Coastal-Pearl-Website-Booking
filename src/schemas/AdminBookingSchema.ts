import * as Yup from "yup";

const AdminBookingSchema = Yup.object().shape({
  floorPrice: Yup.number()
    .min(0, "Floor price cannot be negative")
    .required("Floor price is required"),
  facilities: Yup.array().of(
    Yup.object().shape({
      noOfGuests: Yup.number()
        .min(1, "At least 1 guest required")
        .required("Guests are required"),
      price: Yup.number()
        .min(1, "Price cannot be less than 1")
        .required("Price is required"),
      total: Yup.number(),
      facilityName: Yup.string(),
      extraFacilitiesId: Yup.number(),
    })
  ),
});

export default AdminBookingSchema;
