import JobCard from "../JobCard";
import { useToast } from "@/hooks/use-toast";

export default function JobCardExample() {
  const { toast } = useToast();

  const sampleJob = {
    id: "1",
    farmName: "Green Valley Farms",
    jobType: "Harvesting",
    cropType: "Wheat",
    location: "Sacramento, CA",
    distance: "2.5 km away",
    wage: "$18/hour",
    duration: "2 weeks",
    startDate: "Nov 15, 2025",
    description: "Looking for experienced workers for wheat harvesting season",
    urgency: "high" as const,
  };

  const handleApply = (jobId: string) => {
    console.log("Applied to job:", jobId);
    toast({
      title: "Application submitted!",
      description: "The farmer will review your application soon.",
    });
  };

  return (
    <div className="p-8">
      <JobCard job={sampleJob} onApply={handleApply} />
    </div>
  );
}
