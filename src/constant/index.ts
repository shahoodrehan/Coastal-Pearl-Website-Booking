export const enum BookingStatus {
  Pending = 1,
  Confirmed = 2,
  Cancelled = 3,
  Completed = 4
}

export const BookingStatusLabels= {
  [BookingStatus.Pending]: "Pending",
  [BookingStatus.Confirmed]: "Confirmed",
  [BookingStatus.Cancelled]: "Cancelled",
  [BookingStatus.Completed]: "Completed",
};


export enum FloorPreference {
  GroundFloor = 1,
  FirstFloor = 2,
  SecondFloor = 3,
  CompleteResort = 4
}
export const FloorPreferenceLabels: Record<FloorPreference, string> = {
  [FloorPreference.GroundFloor]: "Ground Floor",
  [FloorPreference.FirstFloor]: "First Floor",
  [FloorPreference.SecondFloor]: "Second Floor",
  [FloorPreference.CompleteResort]: "Complete Resort",
};
