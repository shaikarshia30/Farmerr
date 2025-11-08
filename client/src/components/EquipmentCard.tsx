import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Wrench } from "lucide-react";

export interface Equipment {
  id: string;
  name: string;
  type: string;
  owner: string;
  location: string;
  distance: string;
  pricePerDay: string;
  pricePerWeek: string;
  availability: "available" | "rented" | "maintenance";
  description: string;
}

interface EquipmentCardProps {
  equipment: Equipment;
  onRequest?: (equipmentId: string) => void;
  showActions?: boolean;
}

export default function EquipmentCard({ equipment, onRequest, showActions = true }: EquipmentCardProps) {
  const availabilityConfig = {
    available: { label: "Available", variant: "default" as const },
    rented: { label: "Rented", variant: "secondary" as const },
    maintenance: { label: "Maintenance", variant: "destructive" as const },
  };

  const config = availabilityConfig[equipment.availability];

  return (
    <Card className="hover-elevate" data-testid={`card-equipment-${equipment.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg">{equipment.name}</CardTitle>
            <CardDescription className="mt-1">{equipment.type}</CardDescription>
          </div>
          <Badge variant={config.variant} data-testid={`badge-status-${equipment.id}`}>
            {config.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wrench className="h-4 w-4 text-primary" />
            <span>Owner:</span>
            <span className="ml-auto font-medium text-foreground">{equipment.owner}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{equipment.location}</span>
            <span className="ml-auto font-medium text-foreground">{equipment.distance}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSign className="h-4 w-4 text-primary" />
            <div className="ml-auto text-right">
              <div className="font-medium text-foreground">{equipment.pricePerDay}/day</div>
              <div className="text-xs">{equipment.pricePerWeek}/week</div>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{equipment.description}</p>

        {showActions && (
          <Button
            className="w-full mt-2"
            disabled={equipment.availability !== "available"}
            onClick={() => onRequest?.(equipment.id)}
            data-testid={`button-request-${equipment.id}`}
          >
            {equipment.availability === "available" ? "Request Rental" : "Unavailable"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
