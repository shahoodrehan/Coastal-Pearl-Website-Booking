"use client";

import { useFormik } from "formik";
import { availabilitySchema } from "@/schemas/avaiblityschema";
import apiEndpoints from "@/constant/apiEndpoint";
import api from "@/utils/api";
import { useRouter } from "next/router";
import { toast } from "sonner";

type AvailabilityFormValues = {
  startTime: string;
  endTime: string;
  numberOfGuests: number;
};
interface AvailabilityResponse {
  success: boolean;
  failed: boolean;
  error: string;
  data: {
    isAvailable: boolean;
    message: string;
    alternatives: {
      floor: number;
      start: string;
      end: string;
    }[];
  };
}

export default function AvailabilityCheckForm() {
  const router = useRouter();

  const formik = useFormik<AvailabilityFormValues>({
    initialValues: {
      startTime: "",
      endTime: "",
      numberOfGuests: 1,
    },

    validationSchema: availabilitySchema,

    onSubmit: async (values: AvailabilityFormValues) => {
      try {
        const payload = {
          startTime: values.startTime,
          endTime: values.endTime,
          numberOfGuests: values.numberOfGuests,
        };

        const response = await api.post<AvailabilityResponse["data"]>(
          apiEndpoints.CHECK_AVAILABILITY,
          payload
        );

        console.log("API Response:", response);
        if (response.success) {
          if (response.data?.isAvailable) {
            toast.success("Slot available!");
          } else {
            toast.warning("Slot not available! Check alternative slots.");
          }

          router.push({
            pathname: "/BookingForm",
            query: {
              isAvailable: response.data?.isAvailable.toString(),
              message: response.data?.message,
              alternatives: JSON.stringify(response.data?.alternatives),
            },
          });
        } else {
          toast.error("Failed to check availability. Please try again.");
        }
      } catch (error) {
        toast("Something went wrong!");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="
    w-full max-w-5xl
    bg-white/10 backdrop-blur-md shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]
    border border-white/40
    rounded-2xl 
    shadow-[0_8px_32px_rgba(0,0,0,0.2)]
    p-4 sm:p-6 
   mx-auto
  "
    >
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        {/* Start DateTime */}
        <div className="flex-1">
          <label className="block text-[var(--text-light)] mb-1 sm:mb-2 text-sm sm:text-base">
            Start Date & Time *
          </label>
          <input
            type="datetime-local"
            name="startTime"
            value={formik.values.startTime}
            onChange={formik.handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
          />
          {formik.touched.startTime && formik.errors.startTime && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {formik.errors.startTime}
            </p>
          )}
        </div>

        {/* End DateTime */}
        <div className="flex-1">
          <label className="block text-[var(--text-light)] mb-1 sm:mb-2 text-sm sm:text-base">
            End Date & Time *
          </label>
          <input
            type="datetime-local"
            name="endTime"
            value={formik.values.endTime}
            onChange={formik.handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
          />
          {formik.touched.endTime && formik.errors.endTime && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {formik.errors.endTime}
            </p>
          )}
        </div>

        {/* Number of Guests */}
        <div className="flex-1">
          <label className="block text-[var(--text-light)] mb-1 sm:mb-2 text-sm sm:text-base">
            Guests *
          </label>
          <input
            type="number"
            min={1}
            name="numberOfGuests"
            value={formik.values.numberOfGuests}
            onChange={formik.handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#F5EFE7] rounded-xl border-2 border-transparent focus:border-[#0A3D62] outline-none"
          />
          {formik.touched.numberOfGuests && formik.errors.numberOfGuests && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {formik.errors.numberOfGuests}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-[#0A3D62] text-white rounded-xl hover:bg-[#D1C1A7] hover:text-[#0A3D62] transition-all duration-300 shadow-md"
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="h-6 w-6 stroke-white"
          >
            <path d="m20.666 20.666 10 10"></path>
            <path
              d="m24.0002 12.6668c0 6.2593-5.0741 11.3334-11.3334 11.3334-6.2592 0-11.3333-5.0741-11.3333-11.3334 0-6.2592 5.0741-11.3333 11.3333-11.3333 6.2593 0 11.3334 5.0741 11.3334 11.3333z"
              fill="none"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
}
