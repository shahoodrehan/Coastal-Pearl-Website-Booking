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

const handleAvailability = async (values: AvailabilityFormValues) => {
  
  try {
    const payload = {
    StartTime: values.startTime,
    EndTime: values.endTime,
    NumberOfGuests: values.numberOfGuests,
  }
    const response = await api.post(apiEndpoints.CHECK_AVAILABILITY, payload)
    if(response.success){
      alert("Available")
    }
  } catch (error) {
    console.error("Availability check failed:", error)
  }

}

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

    const response = await api.post(apiEndpoints.CHECK_AVAILABILITY, payload);
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
        <label className="block text-[#0A3D62] mb-2">Start Date & Time *</label>
        <input
          type="datetime-local"
          name="startTime"
          value={formik.values.startTime}
          onChange={formik.handleChange}
          className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
        />
        {formik.touched.startTime && formik.errors.startTime && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.startTime}
          </p>
        )}
      </div>

      {/* End DateTime */}
      <div>
        <label className="block text-[#0A3D62] mb-2">End Date & Time *</label>
        <input
          type="datetime-local"
          name="endTime"
          value={formik.values.endTime}
          onChange={formik.handleChange}
          className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
        />
        {formik.touched.endTime && formik.errors.endTime && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.endTime}</p>
        )}
      </div>

      {/* Number of Guests */}
      <div>
        <label className="block text-[#0A3D62] mb-2">Number of Guests *</label>
        <input
          type="number"
          min={1}
          name="numberOfGuests"
          value={formik.values.numberOfGuests}
          onChange={formik.handleChange}
          className="w-full px-4 py-3 bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
        />
        {formik.touched.numberOfGuests && formik.errors.numberOfGuests && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.numberOfGuests}
          </p>
        )}
      </div>

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
