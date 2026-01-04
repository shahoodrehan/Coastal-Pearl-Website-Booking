"use client";

import { useEffect } from "react";
import { useFormik, FormikHelpers } from "formik";
import AdminBookingSchema from "@/schemas/AdminBookingSchema"; // import your schema here
import GenericModal from "./GenericModal";

export interface ExtraFacilityInput {
  extraFacilitiesId: number;
  facilityName: string;
  noOfGuests: number;
  price: number;
  total: number;
}

export interface BookingModalProps {
  loading: boolean;
  booking: {
    bookingRequestId: number;
    noOfGuests: number;
    startTime: string;
    endTime: string;
    extraFacilities: { extraFacilitiesId: number; facilityName: string }[];
  };
  onClose: () => void;
  onSave: (payload: {
    bookingRequestsId: number;
    status: number;
    totalPrice: number;
    facilities: {
      extraFacilitiesId: number;
      noOfGuests: number;
      price: number;
    }[];
  }) => void;
}

export default function BookingModal({
  booking,
  onClose,
  onSave,
  loading,
}: BookingModalProps) {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      floorPrice: 0,
      facilities: booking.extraFacilities.map((f) => ({
        extraFacilitiesId: f.extraFacilitiesId,
        facilityName: f.facilityName,
        noOfGuests: 0,
        price: 0,
        total: 0,
      })),
    },
    validationSchema: AdminBookingSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      // Manually validate all fields before submission
      const errors = await formik.validateForm();
      if (Object.keys(errors).length > 0) {
        // Mark all fields as touched to show errors
        formik.setTouched({
          floorPrice: true,
          facilities: values.facilities.map(() => ({
            noOfGuests: true,
            price: true,
          })),
        });
        return; // Prevent submission
      }

      const payload = {
        bookingRequestsId: booking.bookingRequestId,
        status: 1,
        totalPrice:
          values.facilities.reduce((sum, f) => sum + f.total, 0) +
          values.floorPrice,
        facilities: values.facilities.map((f) => ({
          extraFacilitiesId: f.extraFacilitiesId,
          noOfGuests: f.noOfGuests,
          price: f.price,
        })),
      };
      onSave(payload);
    },
  });

  // Update total when guests or price change
  const handleFacilityChange = (
    index: number,
    field: "noOfGuests" | "price",
    value: number
  ) => {
    const updated = [...formik.values.facilities];
    // Handle NaN values - set to 0 if NaN
    updated[index][field] = isNaN(value) ? 0 : value;
    updated[index].total = updated[index].noOfGuests * updated[index].price;
    formik.setFieldValue("facilities", updated);
    // Touch the field to trigger validation
    formik.setFieldTouched(`facilities.${index}.${field}`, true);
  };

  const calculateTotalPrice = () => {
    return (
      formik.values.floorPrice +
      formik.values.facilities.reduce((sum, f) => sum + f.total, 0)
    );
  };

  const formatDateTime12Hour = (dateStr: string) => {
    const date = new Date(dateStr);

    // Format date part
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const datePart = date.toLocaleDateString(undefined, options);

    // Format time part
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // convert 0 -> 12
    const timePart = `${hours}:${minutes} ${ampm}`;

    return `${datePart}, ${timePart}`;
  };

  return (
    <GenericModal bodyClassName="lg:w-[45vw] h-[90vh] md:w-[90vw]  overflow-y-auto" onClose={onClose} isOpen={true} >
      <h2 className="text-xl font-semibold mb-4 ">
        Booking No. #{booking.bookingRequestId}
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* No of Guests */}
        <div>
          <label className="font-semibold">No. of Guests:</label>
          <input
            disabled
            value={booking.noOfGuests}
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        {/* Booking Date */}
        <div>
          <label className="font-semibold">Booking Date:</label>
          <input
            disabled
            value={`${formatDateTime12Hour(
              booking.startTime
            )} → ${formatDateTime12Hour(booking.endTime)}`}
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        {/* Floor Price */}
        <div>
          <label className="font-semibold">Floor Price:</label>
          <input
            type="number"
            name="floorPrice"
            value={formik.values.floorPrice}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value >= 0) {
                formik.handleChange(e);
              } else if (e.target.value === "") {
                formik.setFieldValue("floorPrice", 0);
              }
            }}
            onBlur={formik.handleBlur}
            onKeyDown={(e) => {
              if (["-", "+", "e", "E"].includes(e.key)) e.preventDefault();
            }}
            className={`w-full border p-2 rounded no-spinner ${formik.touched.floorPrice && formik.errors.floorPrice
              ? "border-red-500"
              : ""
              }`}
          />
          {formik.touched.floorPrice && formik.errors.floorPrice && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.floorPrice as string}
            </p>
          )}
        </div>

        {/* Facilities */}
        {formik.values.facilities.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Facilities:</h3>
            {formik.values.facilities.map((f, idx) => (
              <div
                key={f.extraFacilitiesId}
                className="grid grid-cols-4 gap-2 mb-2"
              >
                {/* Facility Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Facility</label>
                  <input
                    disabled
                    value={f.facilityName}
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>

                {/* Number of Guests */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Guests</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={f.noOfGuests}
                    min={0}
                    onChange={(e) =>
                      handleFacilityChange(
                        idx,
                        "noOfGuests",
                        e.target.valueAsNumber
                      )
                    }
                    onBlur={() => formik.setFieldTouched(`facilities.${idx}.noOfGuests`, true)}
                    className={`border p-2 rounded no-spinner ${formik.touched.facilities?.[idx]?.noOfGuests &&
                      (formik.errors.facilities?.[idx] as any)?.noOfGuests
                      ? "border-red-500"
                      : ""
                      }`}
                  />
                  {formik.touched.facilities?.[idx]?.noOfGuests &&
                    (formik.errors.facilities?.[idx] as any)?.noOfGuests && (
                      <p className="text-red-500 text-xs mt-1">
                        {(formik.errors.facilities?.[idx] as any).noOfGuests}
                      </p>
                    )}
                </div>

                {/* Price per Guest */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Price</label>
                  <input
                    type="number"
                    placeholder="0"
                    min={0}
                    value={f.price ?? ""}
                    onChange={(e) =>
                      handleFacilityChange(
                        idx,
                        "price",
                        e.target.valueAsNumber
                      )
                    }
                    onBlur={() => formik.setFieldTouched(`facilities.${idx}.price`, true)}
                    className={`border p-2 rounded no-spinner ${formik.touched.facilities?.[idx]?.price &&
                      (formik.errors.facilities?.[idx] as any)?.price
                      ? "border-red-500"
                      : ""
                      }`}
                  />
                  {formik.touched.facilities?.[idx]?.price &&
                    (formik.errors.facilities?.[idx] as any)?.price && (
                      <p className="text-red-500 text-xs mt-1">
                        {(formik.errors.facilities?.[idx] as any).price}
                      </p>
                    )}
                </div>

                {/* Total Amount */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Total</label>
                  <input
                    disabled
                    value={f.total !== 0 ? "Rs. " + f.total : "..."}
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Price */}
        <div>
          <label className="font-semibold">Total Price:</label>
          <input
            disabled
            value={calculateTotalPrice() !== 0 ? "Rs. " + calculateTotalPrice() : "..."}
            className="w-full border p-2 rounded bg-gray-200"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--bg-dark)] text-[var(--text-light)] py-2 rounded mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Saving..." : "Save & Send"}
        </button>
      </form>
    </GenericModal>
  );
}