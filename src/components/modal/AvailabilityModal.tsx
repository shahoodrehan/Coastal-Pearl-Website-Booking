"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import { availabilitySchema } from "@/schemas/avaiblityschema";
import apiEndpoints from "@/constant/apiEndpoint";
import api from "@/utils/api";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { useAvailableSlotModal } from "@/context/AvailableSlotModalContext";

type AvailabilityFormValues = {
  startTime: string;
  endTime: string;
  numberOfGuests: number | string;
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

const AvailabilityModal = () => {
  const { isOpen, closeModal } = useAvailableSlotModal();
  const router = useRouter();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  const now = new Date();
  const minDateTime = now.toISOString().slice(0, 16);

  const formik = useFormik<AvailabilityFormValues>({
    initialValues: {
      startTime: "",
      endTime: "",
      numberOfGuests: "",
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

        if (response.success) {
          if (response.data?.isAvailable) {
            closeModal();
            toast.success("Slot available!");
          } else {
            toast.warning("Slot not available! Check alternative slots.");
          }

          document.cookie = "allowBooking=1; path=/; SameSite=Strict";
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
        toast.error("Something went wrong!");
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white/10 backdrop-blur-md
    border border-white/40 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 animate-scaleIn"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✕ icon at top right */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Check Availability</h2>

        {/* Form directly inside modal */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          {/* Start DateTime */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Start Date & Time <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              name="startTime"
              min={minDateTime}
              value={formik.values.startTime}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#0A3D62] focus:ring-[#0A3D62] outline-none"
            />
            {formik.touched.startTime && formik.errors.startTime && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.startTime}
              </p>
            )}
          </div>

          {/* End DateTime */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              End Date & Time <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              name="endTime"
              min={minDateTime}
              value={formik.values.endTime}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#0A3D62] focus:ring-[#0A3D62] outline-none"
            />
            {formik.touched.endTime && formik.errors.endTime && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.endTime}
              </p>
            )}
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Guests <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min={1}
              placeholder="No. of guests"
              name="numberOfGuests"
              value={formik.values.numberOfGuests || ""}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#0A3D62] focus:ring-[#0A3D62] outline-none"
            />
            {formik.touched.numberOfGuests && formik.errors.numberOfGuests && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.numberOfGuests}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#0A3D62] text-white rounded-lg hover:bg-[#D1C1A7] hover:text-[#0A3D62] transition-all duration-300 shadow-md"
          >
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
};

export default AvailabilityModal;
