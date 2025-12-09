import * as Yup from "yup";

const BookingSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  userName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("User name is required"),

  contactNo: Yup.string()
    .matches(/^\+92\d{10}$/, "Phone must be like +92XXXXXXXXXX")
    .required("Phone number is required"),

  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string()
    .required("End time is required")
    .test("is-after-start", "End time must be later than start time", function (value) {
      return new Date(value!) > new Date(this.parent.startTime);
    }),

  noOfGuests: Yup.number()
    .min(1, "At least 1 guest required")
    .required("Number of guests is required"),

  floorPreference: Yup.number()
    .min(1)
    .required("Floor preference is required"),

  extraFacilitiesID: Yup.array().of(Yup.number()),
});

export default BookingSchema;