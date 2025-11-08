import DashboardLayout from "../DashboardLayout";
import FarmerDashboard from "../FarmerDashboard";

export default function DashboardLayoutExample() {
  return (
    <DashboardLayout userRole="farmer" userName="John Farmer">
      <FarmerDashboard />
    </DashboardLayout>
  );
}
