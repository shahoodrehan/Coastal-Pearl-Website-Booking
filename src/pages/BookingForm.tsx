import apiEndpoints from "@/constant/apiEndpoint";
import api from "@/utils/api";
import { useFormik } from "formik";
import BookingSchema from "@/schemas/BookingSchema";
import { useRouter } from "next/router";
import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";

import { GetServerSideProps } from "next";
import { toast } from "sonner";
import SuccessModal from "@/components/modal/successModal";
import { useState, useEffect } from "react";

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
  index: number;
}
const floorLabels: Record<number, string> = {
  1: "Ground Floor",
  2: "First Floor",
  3: "Terrace",
  4: "Complete Resort",
};
const maxGuestByFloor: Record<number, number> = {
  1: 160, // GroundFloor
  2: 70, // FirstFloor
  3: 100, // Terrace
  4: 350, // Complete
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allowBooking = ctx.req.cookies.allowBooking;

  if (!allowBooking) {
    return {
      redirect: {
        destination: "/?error=check-availability",
        permanent: false,
      },
    };
  }

  return { props: {} };
};


const BookingForm = () => {
  const router = useRouter();
  const now = new Date();
  const minDateTime = now.toISOString().slice(0, 16);
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Alternative | null>(null);
  const [successModalOpen, setSuccessModalOpen] = useState<{
    userEmail: string;
    userName: string;
    contactNo: string;
    startTime: string;
    endTime: string;
  } | null>(null);

  const { isAvailable, message, alternatives, startDate, endDate } = router.query;
  const parsedAlternatives: Alternative[] = alternatives
    ? JSON.parse(alternatives as string)
    : [];
  function convertToInputDateTime(value: string): string {
    // Example: "01/14/2026 06:00 PM" (MM/DD/YYYY format from API)
    const [datePart, timePart, meridian] = value.split(/[\s:]+/);

    // FIX: API uses MM/DD/YYYY, not DD/MM/YYYY
    const [month, day, year] = datePart.split("/");  // ← Swapped order!

    const hour = parseInt(timePart, 10);
    const minute = value.split(/[\s:]+/)[2];

    let hour24 = hour;

    if (meridian.toUpperCase() === "PM" && hour < 12) hour24 += 12;
    if (meridian.toUpperCase() === "AM" && hour === 12) hour24 = 0;

    const hourStr = String(hour24).padStart(2, "0");
    const monthStr = month.padStart(2, "0");
    const dayStr = day.padStart(2, "0");

    return `${year}-${monthStr}-${dayStr}T${hourStr}:${minute}`;
  }


  const formik = useFormik<BookingFormValues>({
    initialValues: {
      userEmail: "",
      userName: "",
      contactNo: "",
      startTime: isAvailable === "true" ? startDate as string : "",
      endTime: isAvailable === "true" ? endDate as string : "",
      noOfGuests: 0,
      floorPreference: 0,
      extraFacilitiesID: [],
    },
    validationSchema: BookingSchema,

    onSubmit: async (values: BookingFormValues) => {
      try {
        if (loading) return;
        setLoading(true);
        const payload = {
          userEmail: values.userEmail,
          userName: values.userName,
          contactNo: "+92" + values.contactNo,
          startTime: values.startTime,
          endTime: values.endTime,
          noOfGuests: values.noOfGuests,
          floorPreference: Number(values.floorPreference),
          extraFacilitiesID: values.extraFacilitiesID,
        };
        const response = await api.post(apiEndpoints.BOOKING_REQUEST, payload);
        console.log("Booking Response:", response);

        if (response.success) {
          setSuccessModalOpen({
            userEmail: values.userEmail,
            userName: values.userName,
            contactNo: values.contactNo,
            startTime: formatDateForUser(values.startTime),
            endTime: formatDateForUser(values.endTime),
          });
          setLoading(false);
        } else {
          setLoading(false);
          toast.error("Booking Failed");
        }
      } catch (error) {
        setLoading(false);
        console.error("Availability check failed:", error);
      }
    },
  }); console.log("Selected slot:", selectedSlot)


  // Initialize form with query params when available
  useEffect(() => {
    if (isAvailable === "true" && startDate && endDate) {
      formik.setFieldValue("startTime", startDate as string);
      formik.setFieldValue("endTime", endDate as string);
    }
  }, [isAvailable, startDate, endDate]);

  // Handle alternative slot selection
  const handleSlotSelect = (index: number, slot: Alternative) => {
    if (isAvailable === "true" && selectedSlot?.index === index) {
      setSelectedSlot(null)
      formik.setFieldValue("startTime", startDate as string);
      formik.setFieldValue("endTime", endDate as string);
      formik.setFieldValue("floorPreference", 0);
      return;
    } else {
      setSelectedSlot({ ...slot, start: convertToInputDateTime(slot.start), end: convertToInputDateTime(slot.end), index });
      formik.setFieldValue("startTime", convertToInputDateTime(slot.start));
      formik.setFieldValue("endTime", convertToInputDateTime(slot.end));
      formik.setFieldValue("floorPreference", slot.floor);
    }
  };

  function formatDateForUser(dateString: string) {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  // Determine if date inputs should be disabled
  const areDateInputsDisabled = true

  return (
    <>
      {successModalOpen && (
        <SuccessModal
          isOpen={successModalOpen !== null}
          onClose={() => router.push("/")}
          title="Booking Successful!"
          bookingDetails={[
            { label: "Email", value: successModalOpen?.userEmail },
            { label: "Name", value: successModalOpen?.userName },
            { label: "Contact", value: successModalOpen?.contactNo },
            { label: "Start Time", value: successModalOpen?.startTime },
            { label: "End Time", value: successModalOpen?.endTime },
          ]}
          buttonText="Done"
        />
      )}
      <Hero
        title="Plan Your Visit"
        subtitle="View available timings and book"
        backgroundImage="/images/home-hero.jpg"
        position=""
      ></Hero>
      {isAvailable !== undefined && (
        <Section title="Availability Result" bgColor="bg-beige">
          <div
            className="
    w-full
    max-w-[1400px]
    mx-auto
    mb-10
    sm-mb-2
    p-8
    rounded-3xl
    bg-white/70
    backdrop-blur-xl
    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
    border border-white/40
    animate-fade-in
  "
          >
            {/* STATUS */}
            <div className="flex items-center justify-between mb-6 p-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="text-sm font-semibold px-4 py-2 rounded-full bg-blue-100 text-blue-800 ">
                Status
              </span>

              <span
                className={`
      text-sm font-semibold px-4 py-2 rounded-full shadow-sm
      ${isAvailable === "true"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
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

                <>
                  <h2 className={`text-lg font-semibold text-[#0A3D62] ${isAvailable !== "true" ? "mb-4" : "mb-8"}`}>
                    Alternative Slots
                  </h2>
                  {isAvailable !== "true" && <p className="text-sm text-gray-600 mb-6">
                    Other booking slots are also available — check them out!
                  </p>}
                </>


                {/* Grid for 3 slots per row */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
                  {parsedAlternatives.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleSlotSelect(index, item)}
                      className={`
            p-4
            bg-white
            border-2
            shadow-sm
            hover:shadow-lg
            transition-all duration-200
            rounded-xl
            cursor-pointer
            ${selectedSlot?.index === index
                          ? "border-[#0a3d62] bg-blue-50 ring-2 ring-[#0a3d62]"
                          : "border-[#f5efe7] hover:border-[#0a3d62]"
                        }
          `}
                    >
                      {/* Selection indicator */}
                      {selectedSlot?.index === index && (
                        <div className="flex justify-end mb-2">
                          <div className="bg-[#0a3d62] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Selected
                          </div>
                        </div>
                      )}

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
                          {floorLabels[item.floor] || "Unknown Floor"}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* START */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                            Start
                          </p>
                          <div className="space-y-1">
                            <span className="text-sm font-medium text-[#0a3d62] block">
                              {new Date(item.start).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="text-sm text-gray-600">
                              {new Date(item.start).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              })}
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
        </Section>
      )}
      <div className="py-10">
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
                Email Address <span className="text-red-500">*</span>
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
              <label className="block text-[#0A3D62] mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
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
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contactNo"
                placeholder="03001234567"
                maxLength={10}
                onChange={(e) => {
                  formik.setFieldValue("contactNo", e.target.value.replace(/[^0-9]/g, ""));
                }}
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
              <label className="block text-[#0A3D62] mb-2">
                Start Time <span className="text-red-500">*</span>
                {areDateInputsDisabled && (
                  <span className="text-xs text-gray-500 ml-2">
                    (Auto-filled from {isAvailable === "true" && !selectedSlot ? "availability check" : "selected slot"})
                  </span>
                )}
              </label>
              <input
                type="datetime-local"
                name="startTime"
                min={minDateTime}
                max={formik.values.endTime || undefined}
                onClick={(e) => !areDateInputsDisabled && (e.target as HTMLInputElement).showPicker?.()}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={selectedSlot ? selectedSlot.start : formik.values.startTime}
                disabled={areDateInputsDisabled || selectedSlot !== null}
                className={`w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none ${areDateInputsDisabled ? "opacity-60 cursor-not-allowed" : ""
                  }`}
              />
              {formik.touched.startTime && formik.errors.startTime && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.startTime}
                </p>
              )}
            </div>

            {/* END TIME */}
            <div>
              <label className="block text-[#0A3D62] mb-2">
                End Time <span className="text-red-500">*</span>
                {areDateInputsDisabled && (
                  <span className="text-xs text-gray-500 ml-2">
                    (Auto-filled from {isAvailable === "true" && !selectedSlot ? "availability check" : "selected slot"})
                  </span>
                )}
              </label>
              <input
                type="datetime-local"
                name="endTime"
                min={formik.values.startTime || undefined}
                onClick={(e) => !areDateInputsDisabled && (e.target as HTMLInputElement).showPicker?.()}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={selectedSlot ? selectedSlot.end : formik.values.endTime}
                disabled={areDateInputsDisabled || selectedSlot !== null}
                className={`w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none ${areDateInputsDisabled ? "opacity-60 cursor-not-allowed" : ""
                  }`}
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
                Number of Guests <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="noOfGuests"
                placeholder="0"
                min={1}
                max={maxGuestByFloor[formik.values.floorPreference] ?? 0}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value >= 1) {
                    formik.handleChange(e);
                  } else if (e.target.value === "") {
                    formik.handleChange(e);
                  }
                }}
                onKeyDown={(e) => {
                  if (["-", "+", "e", "E"].includes(e.key)) e.preventDefault();
                }}
                onBlur={formik.handleBlur}
                value={formik.values.noOfGuests}
                className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none no-spinner"
              />
              {formik.touched.noOfGuests && formik.errors.noOfGuests && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.noOfGuests}
                </p>
              )}
            </div>

            {/* FLOOR PREFERENCE */}
            <div className="mb-5">
              <label className="block text-[#0A3D62] font-semibold mb-2">
                Floor Preference <span className="text-red-500">*</span>

              </label>
              <div className="relative">
                <select
                  name="floorPreference"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.floorPreference}
                  className={`
        w-full
        appearance-none
        px-4
        py-3
        bg-[#F5EFE7]
        rounded-xl
        border-2
        border-transparent
        focus:border-[#0A3D62]
        outline-none
        cursor-pointer
        hover:border-[#0A3D62]
        transition
        duration-200
        ${selectedSlot !== null ? "opacity-60 cursor-not-allowed" : ""}
      `}
                >
                  <option value="0" disabled>
                    Select Floor
                  </option>
                  <option value="1">Ground Floor</option>
                  <option value="2">First Floor</option>
                  <option value="3">Second Floor</option>
                  <option value="4">Complete Resort</option>
                </select>

                {/* Dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {formik.touched.floorPreference &&
                formik.errors.floorPreference && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.floorPreference}
                  </p>
                )}
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
                disabled={loading}
                className="w-1/2 py-3 bg-[#0A3D62] text-white rounded-xl 
                   hover:bg-[#D1C1A7] hover:text-[#0A3D62] transition-all duration-300 shadow-md
                   disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;