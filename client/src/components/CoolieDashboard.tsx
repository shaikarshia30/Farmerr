import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Briefcase, CheckCircle, Clock, MapPin } from "lucide-react";
import JobCard, { type Job } from "./JobCard";
import { useToast } from "@/hooks/use-toast";

export default function CoolieDashboard() {
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    distance: [10],
    minWage: "",
  });

  // TODO: remove mock functionality
  const stats = [
    { icon: Briefcase, label: "Available Jobs", value: "42", color: "text-primary" },
    { icon: Clock, label: "Applied", value: "8", color: "text-blue-600" },
    { icon: CheckCircle, label: "Accepted", value: "3", color: "text-green-600" },
  ];

  // TODO: remove mock functionality
  const mockJobs: Job[] = [
    {
      id: "1",
      farmName: "Sunrise Valley Farm",
      jobType: "Harvesting",
      cropType: "Wheat",
      location: "Sacramento, CA",
      distance: "2.5 km away",
      wage: "$18/hour",
      duration: "2 weeks",
      startDate: "Nov 15, 2025",
      description: "Need experienced workers for wheat harvest",
      urgency: "high",
    },
    {
      id: "2",
      farmName: "Green Meadows",
      jobType: "Planting",
      cropType: "Corn",
      location: "Fresno, CA",
      distance: "4 km away",
      wage: "$16/hour",
      duration: "1 week",
      startDate: "Nov 20, 2025",
      description: "Seasonal corn planting assistance needed",
      urgency: "medium",
    },
    {
      id: "3",
      farmName: "Hillside Orchards",
      jobType: "Fruit Picking",
      cropType: "Apples",
      location: "Modesto, CA",
      distance: "6 km away",
      wage: "$17/hour",
      duration: "3 weeks",
      startDate: "Nov 12, 2025",
      description: "Apple harvest season - multiple positions",
      urgency: "high",
    },
  ];

  const handleApply = (jobId: string) => {
    console.log("Applied to job:", jobId);
    toast({
      title: "Application submitted!",
      description: "The farmer will review your application soon.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold">Find Your Next Job</h1>
        <p className="text-muted-foreground">Browse opportunities near you</p>
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

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Filters Sidebar */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Refine your job search</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Distance (km)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={filters.distance}
                  onValueChange={(value) => setFilters({ ...filters, distance: value })}
                  max={50}
                  min={1}
                  step={1}
                  className="flex-1"
                  data-testid="slider-distance"
                />
                <span className="w-12 text-sm text-muted-foreground">{filters.distance[0]} km</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="minWage">Minimum Wage</Label>
              <Input
                id="minWage"
                type="number"
                placeholder="e.g., 15"
                value={filters.minWage}
                onChange={(e) => setFilters({ ...filters, minWage: e.target.value })}
                data-testid="input-min-wage"
              />
            </div>

            <Button className="w-full" variant="outline" data-testid="button-reset-filters">
              Reset Filters
            </Button>
          </CardContent>
        </Card>

        {/* Jobs Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Showing jobs within {filters.distance[0]} km</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
