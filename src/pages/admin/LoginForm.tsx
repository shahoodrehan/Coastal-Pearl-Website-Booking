// src/pages/admin/login.tsx
import { useFormik } from "formik";
import apiEndpoints from "@/constant/apiEndpoint";
import api from "@/utils/api";
import { setAdminAuth } from "@/utils/auth";

interface LoginFormValues {
  userEmail: string;
  password: string;
}

export default function LoginForm() {
  const formik = useFormik<LoginFormValues>({
    initialValues: { userEmail: "", password: "" },
    onSubmit: async (values) => {
      try {
        const payload = { email: values.userEmail, password: values.password };
        const response = await api.post(apiEndpoints.ADMIN_LOGIN, payload);

        if (response.success) {
          // Save "isAdmin" cookie for login
          setAdminAuth();
          // Redirect to dashboard
          window.location.href = "/admin/dashboard";
        } else {
          alert(response.error || "Invalid email or password");
        }
      } catch (err) {
        console.error(err);
        alert("Login error. Please try again.");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-beige)]">
      <div className="w-full max-w-md bg-[var(--bg-light)] shadow-xl rounded-2xl p-8 border border-[var(--bg-beige2)]">
        <h2 className="text-3xl font-semibold text-center mb-6 text-[var(--text-dark)]">
          Admin Login
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-5"
        >
          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[var(--text-dark)] font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="userEmail"
              value={formik.values.userEmail}
              onChange={formik.handleChange}
              className="border border-[var(--bg-beige2)] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--bg-dark)]"
              placeholder="Enter admin email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-[var(--text-dark)] font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="border border-[var(--bg-beige2)] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--bg-dark)]"
              placeholder="Enter password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[var(--bg-dark)] text-[var(--text-light)] font-medium text-lg hover:bg-opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
