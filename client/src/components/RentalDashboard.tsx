import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wrench, DollarSign, Package, Plus } from "lucide-react";
import EquipmentCard, { type Equipment } from "./EquipmentCard";
import { useToast } from "@/hooks/use-toast";

export default function RentalDashboard() {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [equipmentForm, setEquipmentForm] = useState({
    name: "",
    type: "",
    pricePerDay: "",
    pricePerWeek: "",
    description: "",
  });

  // TODO: remove mock functionality
  const stats = [
    { icon: Package, label: "Listed Equipment", value: "12", color: "text-primary" },
    { icon: Wrench, label: "Currently Rented", value: "7", color: "text-blue-600" },
    { icon: DollarSign, label: "Revenue (This Month)", value: "$3,240", color: "text-green-600" },
  ];

  // TODO: remove mock functionality
  const mockEquipment: Equipment[] = [
    {
      id: "1",
      name: "John Deere Tractor",
      type: "Heavy Machinery",
      owner: "You",
      location: "Your Location",
      distance: "—",
      pricePerDay: "$150",
      pricePerWeek: "$900",
      availability: "rented",
      description: "Powerful tractor for heavy-duty farm work",
    },
    {
      id: "2",
      name: "Seed Planter",
      type: "Planting Equipment",
      owner: "You",
      location: "Your Location",
      distance: "—",
      pricePerDay: "$80",
      pricePerWeek: "$480",
      availability: "available",
      description: "Precision seed planting equipment",
    },
    {
      id: "3",
      name: "Fertilizer Spreader",
      type: "Application Equipment",
      owner: "You",
      location: "Your Location",
      distance: "—",
      pricePerDay: "$60",
      pricePerWeek: "$360",
      availability: "maintenance",
      description: "Efficient fertilizer distribution system",
    },
  ];

  const handleAddEquipment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Equipment added:", equipmentForm);
    toast({
      title: "Equipment listed successfully!",
      description: "Your equipment is now available for farmers to rent.",
    });
    setIsDialogOpen(false);
    setEquipmentForm({
      name: "",
      type: "",
      pricePerDay: "",
      pricePerWeek: "",
      description: "",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Equipment Rental Dashboard</h1>
          <p className="text-muted-foreground">Manage your equipment inventory and rentals</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-equipment">
              <Plus className="mr-2 h-4 w-4" />
              Add Equipment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>List New Equipment</DialogTitle>
              <DialogDescription>Add equipment to your rental inventory</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddEquipment} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Equipment Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., John Deere Tractor"
                  value={equipmentForm.name}
                  onChange={(e) => setEquipmentForm({ ...equipmentForm, name: e.target.value })}
                  required
                  data-testid="input-equipment-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Input
                  id="type"
                  placeholder="e.g., Heavy Machinery"
                  value={equipmentForm.type}
                  onChange={(e) => setEquipmentForm({ ...equipmentForm, type: e.target.value })}
                  required
                  data-testid="input-equipment-type"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerDay">Price Per Day</Label>
                <Input
                  id="pricePerDay"
                  placeholder="e.g., $150"
                  value={equipmentForm.pricePerDay}
                  onChange={(e) => setEquipmentForm({ ...equipmentForm, pricePerDay: e.target.value })}
                  required
                  data-testid="input-price-day"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerWeek">Price Per Week</Label>
                <Input
                  id="pricePerWeek"
                  placeholder="e.g., $900"
                  value={equipmentForm.pricePerWeek}
                  onChange={(e) => setEquipmentForm({ ...equipmentForm, pricePerWeek: e.target.value })}
                  required
                  data-testid="input-price-week"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your equipment..."
                  value={equipmentForm.description}
                  onChange={(e) => setEquipmentForm({ ...equipmentForm, description: e.target.value })}
                  rows={3}
                  data-testid="input-equipment-description"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-submit-equipment">
                List Equipment
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid={`stat-${stat.label.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Equipment Inventory */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Your Equipment</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockEquipment.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} showActions={false} />
          ))}
        </div>
      </div>
    </div>
  );
}
