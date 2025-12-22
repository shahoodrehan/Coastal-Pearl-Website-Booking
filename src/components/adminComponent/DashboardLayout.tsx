import { useState } from "react";
import { removeAdminAuth } from "@/utils/auth";
import { Menu } from "lucide-react";
import Image from "next/image";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true); // sidebar open/close

  const handleLogout = () => {
    removeAdminAuth();
    window.location.href = "/";
  };

  return (
    <div className="h-screen flex bg-[var(--bg-beige)] overflow-hidden scrollbar-hide">
      {/* Sidebar */}
      <aside
        className={`bg-[var(--bg-dark)] text-[var(--text-light)] flex flex-col justify-between transition-all duration-300 ${
          isOpen ? "w-64 p-6" : "w-16 p-2"
        }`}
      >
        <div>
          {/* Header: Logo + Toggle */}
          <div className="flex items-center justify-between mb-6">
            {isOpen && (
              <div className="flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-beige)] hover:text-white transition"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            <a
              href="/admin/dashboard"
              className={`mt-8 w-full py-2 rounded-lg text-center font-semibold transition ${
                isOpen
                  ? "bg-[var(--text-beige)] text-[var(--bg-dark)] hover:bg-[#c5b48d]"
                  : "bg-transparent text-[var(--text-light)] hover:bg-[var(--bg-dark)]"
              }`}
            >
              {isOpen ? "Show Bookings" : "📄"}
            </a>
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className={`mt-8 w-full py-2 rounded-lg font-semibold transition ${
            isOpen
              ? "bg-[var(--text-beige)] text-[var(--bg-dark)] hover:bg-[#c5b48d]"
              : "bg-transparent text-[var(--text-light)] hover:bg-[var(--bg-dark)]"
          }`}
        >
          {isOpen ? "Logout" : "🚪"}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto scrollbar-hide">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
