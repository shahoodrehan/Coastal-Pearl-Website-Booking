import apiEndpoints from "@/constant/apiEndpoint";
import api from "@/utils/api";
import { useFormik } from "formik";
import BookingSchema from "@/schemas/BookingSchema";
import { useRouter } from "next/router";
import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";

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
interface Alternative {
  floor: number;
  start: string;
  end: string;
}

const BookingForm = () => {
  const router = useRouter();
  const { isAvailable, message, alternatives } = router.query;
  const parsedAlternatives: Alternative[] = alternatives
    ? JSON.parse(alternatives as string)
    : [];
  const formik = useFormik<BookingFormValues>({
    initialValues: {
      userEmail: "",
      userName: "",
      contactNo: "",
      startTime: "",
      endTime: "",
      noOfGuests: 0,
      floorPreference: 1,
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
    <>
      <Hero
        title="Plan Your Visit"
        subtitle="View available timings and book"
        backgroundImage="/images/home-hero.jpg"
      ></Hero>
      <Section title="Availability Result" bgColor="bg-beige">
        {isAvailable !== undefined && (
          <div
            className="
      w-full mb-10 p-8
      rounded-3xl
      bg-white/70
      backdrop-blur-xl
      shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      border border-white/40
      animate-fade-in
    "
          >
            {/* STATUS */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-medium text-gray-700">Status</span>

              <span
                className={`
          text-sm font-semibold px-4 py-2 rounded-full shadow-sm
          ${
            isAvailable === "true"
              ? "bg-green-200/70 text-green-900 border border-green-300"
              : "bg-red-200/70 text-red-900 border border-red-300"
          }
        `}
              >
                {isAvailable === "true" ? "Available" : "Not Available"}
              </span>
            </div>

            {/* ALTERNATIVES */}
            {parsedAlternatives.length > 0 && (
              <div className="mt-8">
                {/* Show heading ONLY when not available */}
                {isAvailable !== "true" && (
                  <h2 className="text-lg font-semibold text-[#0A3D62] mb-3">
                    Alternative Slots
                  </h2>
                )}

                <div className="grid gap-6">
                  {parsedAlternatives.map((item, index) => (
                    <div
                      key={index}
                      className="
    p-4
    bg-white
    border border-[#f5efe7]
    shadow-sm
    hover:shadow-md
    transition-all duration-200
  "
                    >
                      {/* HEADER - Centered */}
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-10 h-10 rounded-md bg-[#0a3d62] flex items-center justify-center mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#fff"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 21h18M3 10h18M12 3v18"
                            />
                          </svg>
                        </div>
                        <p className="text-lg font-semibold text-[#0a3d62]">
                          Floor {item.floor}
                        </p>
                      </div>

                      {/* CONTENT - Left aligned in two columns */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* START */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                            Start
                          </p>
                          <div className="space-y-1">
                            <span className="text-sm font-medium text-[#0a3d62] block">
                              {new Date(item.start).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </span>
                            <span className="text-sm text-gray-600">
                              {new Date(item.start).toLocaleTimeString(
                                "en-US",
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}
                            </span>
                          </div>
                        </div>

                        {/* END */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                            End
                          </p>
                          <div className="space-y-1">
                            <span className="text-sm font-medium text-[#0a3d62] block">
                              {new Date(item.end).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="text-sm text-gray-600">
                              {new Date(item.end).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Section>
      <Section>
        <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* HEADING SECTION */}
          <div
            className="w-full px-6 py-16 text-center text-white"
            style={{
              backgroundImage: "url('/images/home-bottom.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "oklab(34.8753% -0.0333405 -0.075107 / 0.7)",
              backgroundBlendMode: "overlay",
            }}
          >
            <h2 className="text-2xl !text-(--text-light) font-bold drop-shadow-lg">
              Booking Form
            </h2>
          </div>

          {/* FORM SECTION */}
          <form
            onSubmit={formik.handleSubmit}
            className="w-full p-6 space-y-6"
            autoComplete="off"
          >
            {/* EMAIL */}
            <div>
              <label className="block text-[#0A3D62] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userEmail}
                className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
              />
              {formik.touched.userEmail && formik.errors.userEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.userEmail}
                </p>
              )}
            </div>

            {/* USERNAME */}
            <div>
              <label className="block text-[#0A3D62] mb-2">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
              />
              {formik.touched.userName && formik.errors.userName && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.userName}
                </p>
              )}
            </div>

            {/* CONTACT NO */}
            <div>
              <label className="block text-[#0A3D62] mb-2">
                Phone Number *
              </label>
              <input
                type="text"
                name="contactNo"
                placeholder="+92 300 1234567"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactNo}
                className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
              />
              {formik.touched.contactNo && formik.errors.contactNo && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.contactNo}
                </p>
              )}
            </div>

            {/* START TIME */}
            <div>
              <label className="block text-[#0A3D62] mb-2">Start Time *</label>
              <input
                type="datetime-local"
                name="startTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startTime}
                className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
              />
              {formik.touched.startTime && formik.errors.startTime && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.startTime}
                </p>
              )}
            </div>

            {/* END TIME */}
            <div>
              <label className="block text-[#0A3D62] mb-2">End Time *</label>
              <input
                type="datetime-local"
                name="endTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endTime}
                className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
              />
              {formik.touched.endTime && formik.errors.endTime && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.endTime}
                </p>
              )}
            </div>

            {/* NUMBER OF GUESTS */}
            <div>
              <label className="block text-[#0A3D62] mb-2">
                Number of Guests *
              </label>
              <input
                type="number"
                name="noOfGuests"
                placeholder="0"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.noOfGuests}
                className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
              />
              {formik.touched.noOfGuests && formik.errors.noOfGuests && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.noOfGuests}
                </p>
              )}
            </div>

            {/* FLOOR PREFERENCE */}
            <div>
              <label className="block text-[#0A3D62] mb-2">
                Floor Preference
              </label>
              <select
                name="floorPreference"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.floorPreference}
                className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
              >
                <option value="1">Ground Floor</option>
                <option value="2">First Floor</option>
                <option value="3">Second Floor</option>
                <option value="4">Complete Resort</option>
              </select>
            </div>

            {/* EXTRA FACILITIES (2-COLUMN GRID) */}
            <div>
              <label className="block text-[#0A3D62] mb-2 font-semibold">
                Extra Facilities
              </label>

              <div className="grid grid-cols-2 gap-3 bg-[#F5EFE7] p-4 rounded-xl">
                {extraFacilitiesList.map((facility) => (
                  <label
                    key={facility.extraFacilitiesId}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      name="extraFacilitiesID"
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
                    />
                    {facility.facilityName}
                  </label>
                ))}
              </div>
            </div>

            {/* BUTTONS — CANCEL + SUBMIT */}
            <div className="flex justify-between items-center gap-4 mt-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="w-1/2 py-3 bg-(--bg-beige) text-[#0A3D62] rounded-xl 
                   hover:bg-(--bg-beige2) transition-all duration-300 shadow-md"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-1/2 py-3 bg-[#0A3D62] text-white rounded-xl 
                   hover:bg-[#D1C1A7] hover:text-[#0A3D62] transition-all duration-300 shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default BookingForm;
