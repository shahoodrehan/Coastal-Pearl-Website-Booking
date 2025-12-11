"use client";

import { useState, useEffect } from "react";

export interface ExtraFacilityInput {
  extraFacilitiesId: number;
  facilityName: string;
  noOfGuests: number;
  price: number;
  total: number;
}

export interface BookingModalProps {
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
}: BookingModalProps) {
  const [floorPrice, setFloorPrice] = useState<number>(0);
  const [facilityInputs, setFacilityInputs] = useState<ExtraFacilityInput[]>(
    []
  );

  useEffect(() => {
    const defaultFacilities: ExtraFacilityInput[] = booking.extraFacilities.map(
      (f) => ({
        extraFacilitiesId: f.extraFacilitiesId,
        facilityName: f.facilityName,
        noOfGuests: 0,
        price: 0,
        total: 0,
      })
    );
    setFacilityInputs(defaultFacilities);
    setFloorPrice(0);
  }, [booking]);

  const updateFacility = (
    index: number,
    field: "noOfGuests" | "price",
    value: number
  ) => {
    const updated = [...facilityInputs];
    updated[index][field] = value;
    updated[index].total = updated[index].noOfGuests * updated[index].price;
    setFacilityInputs(updated);
  };

  const calculateTotalPrice = () => {
    const facilityTotal = facilityInputs.reduce((sum, f) => sum + f.total, 0);
    return floorPrice + facilityTotal;
  };

  const handleSave = () => {
    const payload = {
      bookingRequestsId: booking.bookingRequestId,
      status: 1, // Confirmed
      totalPrice: calculateTotalPrice(),
      facilities: facilityInputs.map((f) => ({
        extraFacilitiesId: f.extraFacilitiesId,
        noOfGuests: f.noOfGuests,
        price: f.price,
      })),
    };
    onSave(payload);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-start z-50 overflow-y-auto py-8">
      <div className="bg-white p-6 rounded-xl w-[95%] max-w-2xl shadow-lg relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Invoice — #{booking.bookingRequestId}
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
              value={`${new Date(
                booking.startTime
              ).toLocaleString()} → ${new Date(
                booking.endTime
              ).toLocaleString()}`}
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>

          {/* Floor Price */}
          <div>
            <label className="font-semibold">Floor Price:</label>
            <input
              type="number"
              value={floorPrice}
              onChange={(e) => setFloorPrice(Number(e.target.value))}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Facilities */}
          {facilityInputs.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Facilities:</h3>
              {facilityInputs.map((f, idx) => (
                <div
                  key={f.extraFacilitiesId}
                  className="grid grid-cols-4 gap-2 mb-2"
                >
                  <input
                    disabled
                    value={f.facilityName}
                    className="border p-2 rounded bg-gray-100"
                  />
                  <input
                    type="number"
                    placeholder="Guests"
                    value={f.noOfGuests}
                    onChange={(e) =>
                      updateFacility(idx, "noOfGuests", Number(e.target.value))
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={f.price}
                    onChange={(e) =>
                      updateFacility(idx, "price", Number(e.target.value))
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    disabled
                    value={f.total}
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Total Price */}
          <div>
            <label className="font-semibold">Total Price:</label>
            <input
              disabled
              value={calculateTotalPrice()}
              className="w-full border p-2 rounded bg-gray-200"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-green-600 text-white py-2 rounded mt-4"
          >
            Save & Send
          </button>
        </div>
      </div>
    </div>
  );
}
