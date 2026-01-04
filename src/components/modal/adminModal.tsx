"use client";

import { useEffect } from "react";
import { useFormik, FormikHelpers } from "formik";
import AdminBookingSchema from "@/schemas/AdminBookingSchema"; // import your schema here
import GenericModal from "./GenericModal";

export interface ExtraFacilityInput {
  extraFacilitiesId: number;
  facilityName: string;
  noOfGuests: string | number;
  price: string | number;
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
      floorPrice: "" as string | number,
      facilities: booking.extraFacilities.map((f) => ({
        extraFacilitiesId: f.extraFacilitiesId,
        facilityName: f.facilityName,
        noOfGuests: "" as string | number,
        price: "" as string | number,
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

      const floorPrice = typeof values.floorPrice === 'string' ? parseFloat(values.floorPrice) || 0 : values.floorPrice;
      const payload = {
        bookingRequestsId: booking.bookingRequestId,
        status: 1,
        totalPrice:
          values.facilities.reduce((sum, f) => sum + f.total, 0) + floorPrice,
        facilities: values.facilities.map((f) => ({
          extraFacilitiesId: f.extraFacilitiesId,
          noOfGuests: typeof f.noOfGuests === 'string' ? parseFloat(f.noOfGuests) || 0 : f.noOfGuests,
          price: typeof f.price === 'string' ? parseFloat(f.price) || 0 : f.price,
        })),
      };
      onSave(payload);
    },
  });

  // Update total when guests or price change
  const handleFacilityChange = (
    index: number,
    field: "noOfGuests" | "price",
    value: string
  ) => {
    const updated = [...formik.values.facilities];
    // Allow empty string or valid numbers
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      updated[index][field] = value;
      // Calculate total with parsed numbers
      const guests = typeof updated[index].noOfGuests === 'string'
        ? parseFloat(updated[index].noOfGuests) || 0
        : updated[index].noOfGuests;
      const price = typeof updated[index].price === 'string'
        ? parseFloat(updated[index].price) || 0
        : updated[index].price;
      updated[index].total = guests * price;
      formik.setFieldValue("facilities", updated);
    }
    // Touch the field to trigger validation
    formik.setFieldTouched(`facilities.${index}.${field}`, true);
  };

  const calculateTotalPrice = () => {
    const floorPrice = typeof formik.values.floorPrice === 'string'
      ? parseFloat(formik.values.floorPrice) || 0
      : formik.values.floorPrice;
    return (
      (floorPrice +
        formik.values.facilities.reduce((sum, f) => sum + f.total, 0)).toLocaleString()
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

      <div className="space-y-4">
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
            type="text"
            name="floorPrice"
            value={formik.values.floorPrice}
            onChange={(e) => {
              const value = e.target.value;
              // Allow empty string or valid numbers (including decimals)
              if (value === "" || /^\d*\.?\d*$/.test(value)) {
                formik.setFieldValue("floorPrice", value);
              }
            }}
            onBlur={(e) => {
              formik.handleBlur(e);
              // Convert to number on blur if not empty
              if (e.target.value !== "") {
                const numValue = parseFloat(e.target.value);
                if (!isNaN(numValue)) {
                  formik.setFieldValue("floorPrice", numValue);
                }
              }
            }}
            placeholder="0"
            className={`w-full border p-2 rounded ${formik.touched.floorPrice && formik.errors.floorPrice
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
                    type="text"
                    placeholder="0"
                    value={f.noOfGuests}
                    onChange={(e) =>
                      handleFacilityChange(
                        idx,
                        "noOfGuests",
                        e.target.value
                      )
                    }
                    onBlur={(e) => {
                      formik.setFieldTouched(`facilities.${idx}.noOfGuests`, true);
                      // Convert to number on blur if not empty
                      if (e.target.value !== "") {
                        const numValue = parseFloat(e.target.value);
                        if (!isNaN(numValue)) {
                          const updated = [...formik.values.facilities];
                          updated[idx].noOfGuests = numValue;
                          formik.setFieldValue("facilities", updated);
                        }
                      }
                    }}
                    className={`border p-2 rounded ${formik.touched.facilities?.[idx]?.noOfGuests &&
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
                    type="text"
                    placeholder="0"
                    value={f.price}
                    onChange={(e) =>
                      handleFacilityChange(
                        idx,
                        "price",
                        e.target.value
                      )
                    }
                    onBlur={(e) => {
                      formik.setFieldTouched(`facilities.${idx}.price`, true);
                      // Convert to number on blur if not empty
                      if (e.target.value !== "") {
                        const numValue = parseFloat(e.target.value);
                        if (!isNaN(numValue)) {
                          const updated = [...formik.values.facilities];
                          updated[idx].price = numValue;
                          formik.setFieldValue("facilities", updated);
                        }
                      }
                    }}
                    className={`border p-2 rounded ${formik.touched.facilities?.[idx]?.price &&
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
                    value={f.total !== 0 ? "Rs. " + f.total.toLocaleString() : "..."}
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
            value={calculateTotalPrice() !== "0" ? "Rs. " + calculateTotalPrice() : "..."}
            className="w-full border p-2 rounded bg-gray-200"
          />
        </div>

        <button
          type="button"
          onClick={() => formik.handleSubmit()}
          disabled={loading}
          className="w-full bg-[var(--bg-dark)] text-[var(--text-light)] py-2 rounded mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Saving..." : "Save & Send"}
        </button>
      </div>
    </GenericModal>
  );
}