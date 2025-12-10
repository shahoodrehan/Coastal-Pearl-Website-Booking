// availabilitySchema.ts
import * as Yup from "yup";

export const availabilitySchema = Yup.object({
  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string().required("End time is required"),
  numberOfGuests: Yup.number()
    .min(1, "Minimum 1 guest required")
    .required("Guest count required"),
});
