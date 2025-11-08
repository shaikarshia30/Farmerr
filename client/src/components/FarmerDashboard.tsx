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
import { Briefcase, Users, Wrench, Plus } from "lucide-react";
import EquipmentCard, { type Equipment } from "./EquipmentCard";
import { useToast } from "@/hooks/use-toast";

export default function FarmerDashboard() {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [jobForm, setJobForm] = useState({
    jobType: "",
    cropType: "",
    wage: "",
    duration: "",
    startDate: "",
    description: "",
  });

  // TODO: remove mock functionality
  const stats = [
    { icon: Briefcase, label: "Active Jobs", value: "5", color: "text-primary" },
    { icon: Users, label: "Applications", value: "23", color: "text-blue-600" },
    { icon: Wrench, label: "Equipment Rented", value: "2", color: "text-orange-600" },
  ];

  // TODO: remove mock functionality
  const mockEquipment: Equipment[] = [
    {
      id: "1",
      name: "Combine Harvester",
      type: "Harvesting Equipment",
      owner: "AgriRent Services",
      location: "Nearby",
      distance: "3 km",
      pricePerDay: "$200",
      pricePerWeek: "$1200",
      availability: "available",
      description: "Modern combine harvester for efficient crop harvesting",
    },
    {
      id: "2",
      name: "Irrigation System",
      type: "Watering Equipment",
      owner: "FarmTech Rentals",
      location: "Nearby",
      distance: "7 km",
      pricePerDay: "$80",
      pricePerWeek: "$480",
      availability: "available",
      description: "Complete drip irrigation system for large fields",
    },
  ];

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posted:", jobForm);
    toast({
      title: "Job posted successfully!",
      description: "Workers in your area will see your job listing.",
    });
    setIsDialogOpen(false);
    setJobForm({
      jobType: "",
      cropType: "",
      wage: "",
      duration: "",
      startDate: "",
      description: "",
    });
  };

  const handleRequestEquipment = (equipmentId: string) => {
    console.log("Equipment requested:", equipmentId);
    toast({
      title: "Rental request sent",
      description: "The equipment provider will contact you soon.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Welcome back, Farmer!</h1>
          <p className="text-muted-foreground">Manage your jobs and equipment rentals</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-post-job">
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Post a New Job</DialogTitle>
              <DialogDescription>Fill in the details to create a job listing for workers</DialogDescription>
            </DialogHeader>
            <form onSubmit={handlePostJob} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="jobType">Job Type</Label>
                <Input
                  id="jobType"
                  placeholder="e.g., Harvesting, Planting"
                  value={jobForm.jobType}
                  onChange={(e) => setJobForm({ ...jobForm, jobType: e.target.value })}
                  required
                  data-testid="input-job-type"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Input
                  id="cropType"
                  placeholder="e.g., Wheat, Corn"
                  value={jobForm.cropType}
                  onChange={(e) => setJobForm({ ...jobForm, cropType: e.target.value })}
                  required
                  data-testid="input-crop-type"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wage">Wage (per hour)</Label>
                <Input
                  id="wage"
                  placeholder="e.g., $18"
                  value={jobForm.wage}
                  onChange={(e) => setJobForm({ ...jobForm, wage: e.target.value })}
                  required
                  data-testid="input-wage"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  placeholder="e.g., 2 weeks"
                  value={jobForm.duration}
                  onChange={(e) => setJobForm({ ...jobForm, duration: e.target.value })}
                  required
                  data-testid="input-duration"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={jobForm.startDate}
                  onChange={(e) => setJobForm({ ...jobForm, startDate: e.target.value })}
                  required
                  data-testid="input-start-date"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the job requirements..."
                  value={jobForm.description}
                  onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                  rows={3}
                  data-testid="input-description"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-submit-job">
                Post Job
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
              <div className="text-2xl font-bold" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Equipment Section */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Available Equipment Nearby</h2>
          <Button variant="outline" data-testid="button-browse-equipment">
            Browse All
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {mockEquipment.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} onRequest={handleRequestEquipment} />
          ))}
        </div>
      </div>
    </div>
  );
}
