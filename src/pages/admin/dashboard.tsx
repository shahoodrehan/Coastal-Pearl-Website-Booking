import BookingTable from "@/components/adminComponent/BookingTable";
import DashboardLayout from "@/components/adminComponent/DashboardLayout";
import { GetServerSideProps } from "next";
import { getAdminAuthFromServer } from "@/utils/auth";

function Dashboard() {
  return (
    <DashboardLayout>
      <BookingTable />
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const isAdmin = getAdminAuthFromServer(ctx);

  if (!isAdmin) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  return { props: {} };
};

export default Dashboard;
