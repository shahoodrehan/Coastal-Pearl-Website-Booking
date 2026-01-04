// src/pages/admin/login.tsx
import { useFormik } from "formik";
import apiEndpoints from "@/constant/apiEndpoint";
import api from "@/utils/api";
import { setAdminAuth } from "@/utils/auth";
import { isAdminLoggedIn } from "@/utils/auth";

import { useRouter } from "next/router";
import { toast } from "sonner";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormValues {
  userEmail: string;
  password: string;
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isAdminLoggedIn()) {
      router.push("/admin/dashboard");
    }
  }, [router]);
  const formik = useFormik<LoginFormValues>({
    initialValues: { userEmail: "", password: "" },
    onSubmit: async (values) => {
      try {
        const payload = { email: values.userEmail, password: values.password };
        const response = await api.post(apiEndpoints.ADMIN_LOGIN, payload);

        const data = response.data;

        if (data) {
          setAdminAuth();
          toast.success("Login Successfull");
          router.push("/admin/dashboard");
        } else {
          console.error("Invalid credentials");
          toast.error("Invalid credentials");
        }
      } catch (err: any) {
        console.error(err);

        toast.error("Server error. Please try again later.");
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

          <div className="flex flex-col relative">
            <label
              htmlFor="password"
              className="text-[var(--text-dark)] font-medium"
            >
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="border border-[var(--bg-beige2)] p-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--bg-dark)]"
              placeholder="Enter password"
            />

            {/* Eye Button */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[42px] text-[var(--text-dark)] hover:opacity-70"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
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

LoginForm.getLayout = (page: React.ReactNode) => page;
