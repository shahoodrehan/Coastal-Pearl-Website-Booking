import apiEndpoints from "@/constant/apiEndpoint";
import api from "@/utils/api";
import { useFormik } from "formik";
import BookingSchema from "@/schemas/BookingSchema";

const extraFacilitiesList = [
  { extraFacilitiesId: 1, facilityName: "Horse Riding" },
  { extraFacilitiesId: 2, facilityName: "Dinner" },
  { extraFacilitiesId: 3, facilityName: "Jet Ski" },
  { extraFacilitiesId: 4, facilityName: "Camel Riding" },
  { extraFacilitiesId: 5, facilityName: "Transportation" },
  { extraFacilitiesId: 6, facilityName: "PhotoShoot" },
  { extraFacilitiesId: 7, facilityName: "Decoration" },
  { extraFacilitiesId: 8, facilityName: "Water Sports" },
];

interface BookingFormValues {
  userEmail: string;
  userName: string;
  contactNo: string;
  startTime: string;
  endTime: string;
  noOfGuests: number;
  floorPreference: number;
  extraFacilitiesID: number[];
}

const BookingForm = () => {
  const formik = useFormik<BookingFormValues>({
    initialValues: {
      userEmail: "",
      userName: "",
      contactNo: "",
      startTime: "",
      endTime: "",
      noOfGuests: 0,
      floorPreference: 0,
      extraFacilitiesID: [],
    },
    validationSchema: BookingSchema,

    onSubmit: async (values: BookingFormValues) => {
      try {
        const payload = {
          userEmail: values.userEmail,
          userName: values.userName,
          contactNo: values.contactNo,
          startTime: values.startTime,
          endTime: values.endTime,
          noOfGuests: values.noOfGuests,
          floorPreference: Number(values.floorPreference),
          extraFacilitiesID: values.extraFacilitiesID,
        };
        const response = await api.post(apiEndpoints.BOOKING_REQUEST, payload);
        console.log("Booking Response:", response);

        if (response.success) {
          alert("Booking Successful");
        } else {
          alert("Booking Failed");
        }
      } catch (error) {
        console.error("Availability check failed:", error);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-xl mx-auto bg-white p-6 rounded-xl space-y-4 mt-30"
      autoComplete="off"
    >
      {/* EMAIL */}
      <div className="flex flex-col">
        <label className="font-medium">Email Address*</label>

        <input
          type="email"
          name="userEmail"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userEmail}
          className="border rounded-lg p-2"
        />

        {formik.touched.userEmail && formik.errors.userEmail && (
          <p className="text-red-500 text-sm">{formik.errors.userEmail}</p>
        )}
      </div>

      {/* USERNAME */}
      <div className="flex flex-col">
        <label className="font-medium">User Name</label>

        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          className="border rounded-lg p-2"
        />

        {formik.touched.userName && formik.errors.userName && (
          <p className="text-red-500 text-sm">{formik.errors.userName}</p>
        )}
      </div>

      {/* CONTACT NO */}
      <div className="flex flex-col">
        <label className="font-medium">Phone Number*</label>

        <input
          type="text"
          name="contactNo"
          placeholder="+92 300 1234567"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactNo}
          className="border rounded-lg p-2"
        />

        {formik.touched.contactNo && formik.errors.contactNo && (
          <p className="text-red-500 text-sm">{formik.errors.contactNo}</p>
        )}
      </div>

      {/* START TIME */}
      <div className="flex flex-col">
        <label className="font-medium">Start Time</label>

        <input
          type="datetime-local"
          name="startTime"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startTime}
          className="border rounded-lg p-2"
        />

        {formik.touched.startTime && formik.errors.startTime && (
          <p className="text-red-500 text-sm">{formik.errors.startTime}</p>
        )}
      </div>

      {/* END TIME */}
      <div className="flex flex-col">
        <label className="font-medium">End Time</label>

        <input
          type="datetime-local"
          name="endTime"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.endTime}
          className="border rounded-lg p-2"
        />

        {formik.touched.endTime && formik.errors.endTime && (
          <p className="text-red-500 text-sm">{formik.errors.endTime}</p>
        )}
      </div>

      {/* NO OF GUESTS */}
      <div className="flex flex-col">
        <label className="font-medium">Number of Guests</label>

        <input
          type="number"
          name="noOfGuests"
          placeholder="0"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.noOfGuests}
          className="border rounded-lg p-2"
        />

        {formik.touched.noOfGuests && formik.errors.noOfGuests && (
          <p className="text-red-500 text-sm">{formik.errors.noOfGuests}</p>
        )}
      </div>

      {/* FLOOR PREFERENCE */}
      <div className="flex flex-col">
        <label className="font-medium">Floor Preference</label>

        <select
          name="floorPreference"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.floorPreference}
          className="border rounded-lg p-2"
        >
          <option value="1">Ground Floor</option>
          <option value="2">First Floor</option>
          <option value="3">Second Floor</option>
          <option value="4">Complete Resort</option>
        </select>

        {formik.touched.floorPreference && formik.errors.floorPreference && (
          <p className="text-red-500 text-sm">
            {formik.errors.floorPreference}
          </p>
        )}
      </div>

      {/* EXTRA FACILITIES CHECKBOXES */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Extra Facilities</label>

        <div className="flex flex-col gap-2">
          {extraFacilitiesList.map((facility) => (
            <label
              key={facility.extraFacilitiesId}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                value={facility.extraFacilitiesId}
                checked={formik.values.extraFacilitiesID.includes(
                  facility.extraFacilitiesId
                )}
                onChange={(e) => {
                  const id = Number(e.target.value);
                  const selected = formik.values.extraFacilitiesID;

                  formik.setFieldValue(
                    "extraFacilitiesID",
                    selected.includes(id)
                      ? selected.filter((v) => v !== id)
                      : [...selected, id]
                  );
                }}
                onBlur={formik.handleBlur}
              />
              {facility.facilityName}
            </label>
          ))}
        </div>

        {formik.touched.extraFacilitiesID &&
          formik.errors.extraFacilitiesID && (
            <p className="text-red-500 text-sm">
              {formik.errors.extraFacilitiesID}
            </p>
          )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
      >
        Submit Booking
      </button>
    </form>
  );
};

export default BookingForm;
