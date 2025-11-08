import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, DollarSign, Clock } from "lucide-react";

export interface Job {
  id: string;
  farmName: string;
  jobType: string;
  cropType: string;
  location: string;
  distance: string;
  wage: string;
  duration: string;
  startDate: string;
  description: string;
  urgency?: "high" | "medium" | "low";
}

interface JobCardProps {
  job: Job;
  onApply?: (jobId: string) => void;
  showActions?: boolean;
}

export default function JobCard({ job, onApply, showActions = true }: JobCardProps) {
  const urgencyColors = {
    high: "destructive",
    medium: "secondary",
    low: "outline",
  } as const;

  return (
    <Card className="hover-elevate" data-testid={`card-job-${job.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg">{job.farmName}</CardTitle>
            <CardDescription className="mt-1">{job.jobType}</CardDescription>
          </div>
          {job.urgency && (
            <Badge variant={urgencyColors[job.urgency]} data-testid={`badge-urgency-${job.id}`}>
              {job.urgency}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{job.cropType}</Badge>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{job.location}</span>
            <span className="ml-auto font-medium text-foreground">{job.distance}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSign className="h-4 w-4 text-primary" />
            <span>Wage:</span>
            <span className="ml-auto font-medium text-foreground">{job.wage}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span>Duration:</span>
            <span className="ml-auto font-medium text-foreground">{job.duration}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Starts:</span>
            <span className="ml-auto font-medium text-foreground">{job.startDate}</span>
          </div>
        </div>

        {showActions && (
          <Button
            className="w-full mt-2"
            onClick={() => onApply?.(job.id)}
            data-testid={`button-apply-${job.id}`}
          >
            Apply Now
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
