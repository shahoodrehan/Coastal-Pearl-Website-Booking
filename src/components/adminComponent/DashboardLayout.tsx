import { useEffect, useState } from "react";
import { removeAdminAuth } from "@/utils/auth";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import { isAdminLoggedIn } from "@/utils/auth";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true); // sidebar open/close

  const handleLogout = () => {
    removeAdminAuth(router); // pass router to removeAdminAuth
  };
  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.replace("/"); // redirect if not logged in
    }
  }, [router]);

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
                <Link href="/admin/dashboard" className="block">
                  <div className="relative w-[100px] h-[80px]">
                    <Image
                      src="/images/Logo.png"
                      alt="Logo"
                      fill
                      priority
                      sizes="100px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
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
