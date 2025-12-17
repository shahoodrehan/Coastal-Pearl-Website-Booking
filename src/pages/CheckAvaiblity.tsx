"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import apiEndpoints from "@/constant/apiEndpoint";
import api from "@/utils/api";

type AvailabilityFormValues = {
  startTime: string;
  endTime: string;
  numberOfGuests: number;
};

// const handleAvailability = async (values: AvailabilityFormValues) => {

//   try {
//     const payload = {
//     StartTime: values.startTime,
//     EndTime: values.endTime,
//     NumberOfGuests: values.numberOfGuests,
//   }
//     const response = await api.post(apiEndpoints.CHECK_AVAILABILITY, payload)
//     if(response.success){
//       alert("Available")
//     }
//   } catch (error) {
//     console.error("Availability check failed:", error)
//   }

// }

export default function AvailabilityCheckForm() {
  const formik = useFormik<AvailabilityFormValues>({
    initialValues: {
      startTime: "",
      endTime: "",
      numberOfGuests: 1,
    },

    validationSchema: Yup.object({
      startTime: Yup.string().required("Start time is required"),
      endTime: Yup.string().required("End time is required"),
      numberOfGuests: Yup.number()
        .min(1, "Minimum 1 guest required")
        .required("Guest count required"),
    }),

    onSubmit: async (values: AvailabilityFormValues) => {
      try {
        const payload = {
          startTime: values.startTime,
          endTime: values.endTime,
          numberOfGuests: values.numberOfGuests,
        };

        const response = await api.post(
          apiEndpoints.CHECK_AVAILABILITY,
          payload
        );
        console.log("API Response:", response);
        if (response.success) {
          alert("Slot found!");
        } else {
          alert("Slot not found! Suggested alternatives:\n");
        }
      } catch (error) {
        console.error("Availability check failed:", error);
        alert("Something went wrong!");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-xl space-y-6 mt-26"
    >
      {/* Start DateTime */}
      <div>
        <label className="block text-[#0A3D62] mb-2">
          Start Date & Time <span className="text-red-500">*</span>
        </label>
        <input
          name="startTime"
          value={formik.values.startTime}
          onChange={formik.handleChange}
          className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
        />
      </div>

      {/* End DateTime */}
      <div>
        <label className="block text-[#0A3D62] mb-2">
          End Date & Time <span className="text-red-500">*</span>
        </label>
        <input
          name="endTime"
          value={formik.values.endTime}
          onChange={formik.handleChange}
          className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
        />
      </div>

      {/* Number of Guests */}
      <div>
        <label className="block text-[#0A3D62] mb-2">
          Number of Guests <span className="text-red-500">*</span>
        </label>
        <input
          name="numberOfGuests"
          placeholder="Enter number of guests"
          value={formik.values.numberOfGuests}
          onChange={formik.handleChange}
          className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
        />
      </div>

      {/* FIXED ERROR AREA (no layout shift) */}
      {Object.keys(formik.errors).length > 0 && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-600">
          <ul className="list-disc pl-5 space-y-1">
            {Object.values(formik.errors).map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-[#0A3D62] text-white rounded-xl hover:bg-[#D1C1A7] hover:text-[#0A3D62] transition-all duration-300 shadow-md"
      >
        Check Availability
      </button>
    </form>
  );
}
