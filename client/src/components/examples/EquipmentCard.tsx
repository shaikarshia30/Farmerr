import EquipmentCard from "../EquipmentCard";
import { useToast } from "@/hooks/use-toast";

export default function EquipmentCardExample() {
  const { toast } = useToast();

  const sampleEquipment = {
    id: "1",
    name: "John Deere Tractor",
    type: "Heavy Machinery",
    owner: "Farm Equipment Rentals",
    location: "Fresno, CA",
    distance: "5 km away",
    pricePerDay: "$150",
    pricePerWeek: "$900",
    availability: "available" as const,
    description: "Powerful tractor suitable for plowing and heavy-duty farm work. Well-maintained and regularly serviced.",
  };

  const handleRequest = (equipmentId: string) => {
    console.log("Requested equipment:", equipmentId);
    toast({
      title: "Rental request sent!",
      description: "The equipment provider will contact you shortly.",
    });
  };

  return (
    <div className="p-8">
      <EquipmentCard equipment={sampleEquipment} onRequest={handleRequest} />
    </div>
  );
}
