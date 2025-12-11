"use client";

import { useState, useEffect } from "react";
import api from "@/utils/api";
import apiEndpoints from "@/constant/apiEndpoint";
import {
  BookingStatus,
  FloorPreference,
  FloorPreferenceLabels,
} from "@/constant";
import BookingModal from "@/components/modal/adminModal";

interface ExtraFacility {
  extraFacilitiesId: number;
  facilityName: string;
}
interface ExtraFacilityInput {
  extraFacilitiesId: number;
  facilityName: string;
  noOfGuests: number;
  price: number;
  total: number;
}

interface Booking {
  bookingRequestId: number;
  userName: string;
  userEmail: string;
  contactNo: string;
  startTime: string;
  endTime: string;
  noOfGuests: number;
  floorPreference: number;
  status: string; // "Pending" | "Confirmed"
  createdOn: string;
  extraFacilities: ExtraFacility[];
  items: Booking[];
  totalCount: number;
}
interface BookingApiResponse {
  items: Booking[];
  totalCount: number;
}

export default function BookingTable() {
  const [mounted, setMounted] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // States for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  //Fetch Api Code
  const pageSize = 10;

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await api.get<BookingApiResponse>(
        apiEndpoints.FETCH_BOOKINGS,
        {
          params: {
            PageIndex: page,
            PageSize: pageSize,
            SearchTerm: searchTerm,
          },
        }
      );

      console.log("Fetched bookings:", response);

      if (response.success && response.data) {
        setBookings(response.data.items || []);
        setTotalCount(response.data.totalCount || 0);
      } else {
        setBookings([]);
        console.error("Failed to fetch bookings:", response.error);
      }
    } catch (err) {
      console.error("API error:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    setMounted(true);
    fetchBookings();
  }, [page, searchTerm]);

  const handleStatusChange = (id: number, newStatus: string) => {
    const previousStatus =
      bookings.find((b) => b.bookingRequestId === id)?.status || newStatus;

    setBookings((prev) =>
      prev.map((b) =>
        b.bookingRequestId === id ? { ...b, status: newStatus } : b
      )
    );

    //response
    //success
    //faled
    setBookings((prev) =>
      prev.map((b) =>
        b.bookingRequestId === id ? { ...b, status: previousStatus } : b
      )
    );

    console.log("Update status for", id, "to", newStatus);
    // TODO: Call API to update status
  };

  if (!mounted) return null;

  const totalPages = Math.ceil(totalCount / pageSize);

  //Modal open Login
  const openModal = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedBooking(null);
  };

  // Save handler
  const handleSaveModal = async (payload: any) => {
    console.log("API payload:", payload);
    // TODO: Call your API here
    setBookings((prev) =>
      prev.map((b) =>
        b.bookingRequestId === payload.bookingRequestsId
          ? { ...b, status: "Confirmed", totalPrice: payload.totalPrice }
          : b
      )
    );
    closeModal();
  };

  return (
    <>
      <div className="w-full bg-[var(--bg-beige)] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-[var(--text-dark)]">
          Booking List
        </h2>

        {/* Search */}
        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-lg flex-1 focus:outline-none focus:ring-1 focus:ring-[var(--bg-dark)]"
          />
          <button
            onClick={() => fetchBookings()}
            className="px-4 py-2 rounded-lg bg-[var(--bg-dark)] text-white"
          >
            Search
          </button>
        </div>

        {loading ? (
          <p>Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="overflow-auto w-full max-h-full">
            <table className="min-w-max border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-[var(--bg-dark)] text-[var(--text-light)]">
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Contact</th>
                  <th className="p-3 text-left">Start Time</th>
                  <th className="p-3 text-left">End Time</th>
                  <th className="p-3 text-left">Guests</th>
                  <th className="p-3 text-left">Floor</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Created On</th>
                  <th className="p-3 text-left">Extra Facilities</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking, idx) => (
                  <tr
                    key={booking.bookingRequestId}
                    className={`border-b ${
                      idx % 2 === 0
                        ? "bg-[var(--bg-beige2)]/10"
                        : "bg-[var(--bg-beige)]"
                    } hover:bg-[var(--bg-beige2)]/30`}
                  >
                    <td className="p-3 p-3 whitespace-nowra">
                      {booking.bookingRequestId}
                    </td>
                    <td className="p-3 capitalize whitespace-nowra">
                      {booking.userName}
                    </td>
                    <td className="p-3 p-3 whitespace-nowra">
                      {booking.userEmail}
                    </td>
                    <td className="p-3 p-3 whitespace-nowra">
                      {booking.contactNo}
                    </td>
                    <td className="p-3 p-3 whitespace-nowra">
                      {new Date(booking.startTime).toLocaleString()}
                    </td>
                    <td className="p-3 p-3 whitespace-nowra">
                      {new Date(booking.endTime).toLocaleString()}
                    </td>
                    <td className="p-3 p-3 whitespace-nowra">
                      {booking.noOfGuests}
                    </td>
                    <td className="p-3 p-3 whitespace-nowra">
                      {
                        FloorPreferenceLabels[
                          booking.floorPreference as FloorPreference
                        ]
                      }
                    </td>
                    <td className="p-3 p-3 whitespace-nowra">
                      <select
                        value={booking.status}
                        onChange={(e) =>
                          handleStatusChange(
                            booking.bookingRequestId,
                            e.target.value
                          )
                        }
                        className="px-2 py-1 rounded border border-[var(--bg-beige2)] bg-white focus:outline-none focus:ring-1 focus:ring-[var(--bg-dark)]"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td className="p-3">
                      {new Date(booking.createdOn).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      {booking.extraFacilities
                        .map((f) => f.facilityName)
                        .join(", ")}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => openModal(booking)}
                        className="px-3 py-1 rounded-lg bg-[var(--bg-dark)] text-white cursor-pointer"
                      >
                        Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 rounded bg-[var(--bg-dark)] text-white disabled:bg-gray-400"
              >
                Previous
              </button>

              <span className="px-3 py-1 text-[var(--text-dark)]">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-3 py-1 rounded bg-[var(--bg-dark)] text-white disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      {showModal && selectedBooking && (
        <BookingModal
          booking={selectedBooking}
          onClose={() => setShowModal(false)}
          onSave={handleSaveModal}
        />
      )}
    </>
  );
}
