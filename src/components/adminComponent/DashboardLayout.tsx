import { useEffect } from "react";
import { removeAdminAuth } from "@/utils/auth";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import { isAdminLoggedIn } from "@/utils/auth";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const handleLogout = () => {
    removeAdminAuth(router);
  };

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.replace("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-beige)]">
      {/* Header */}
      <header className="bg-[#fdf6e3] text-[var(--text-dark)] shadow-md">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/admin/dashboard" className="flex-shrink-0">
            <div className="relative w-[100px] h-[60px]">
              <Image
                src="/images/logo.png"
                alt="Logo"

                priority
                height={40}
                width={70}
                sizes="100px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>

          {/* Right Side: Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 bg-[var(--text-beige)] text-[var(--bg-dark)] rounded-lg font-semibold hover:bg-[#c5b48d] transition"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;