import { removeAdminAuth } from "@/utils/auth";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const handleLogout = () => {
    removeAdminAuth();
    window.location.href = "/";
  };

  return (
    <div className="h-screen flex bg-[var(--bg-beige)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--bg-dark)] text-[var(--text-light)] p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-8">Admin Panel</h2>

          <nav className="flex flex-col gap-4">
            <a
              href="/admin/dashboard"
              className="hover:text-[var(--text-beige)] transition"
            >
              Dashboard
            </a>
            {/* <a href="#" className="hover:text-[var(--text-beige)] transition">
              Bookings
            </a> */}
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-8 w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}

export default DashboardLayout;
