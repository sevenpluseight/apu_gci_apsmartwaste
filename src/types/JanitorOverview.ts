export type KioskStatus =
  | "good"
  | "half-full"
  | "full"
  | "maintenance";

export interface Kiosk {
  id: string;
  name: string;
  type: "Plastic" | "Paper" | "Metal";
  location: string;
  fillLevel: number;
  status: KioskStatus;
  lastUpdated: string;
  href: string;
}

export interface OverflowReport {
  id: string;
  title: string;
  location: string;
  reportedAt: string;
  priority: "High" | "Medium" | "Low";
  status: "Assigned" | "In Progress";
  href: string;
}

export interface MaintenanceForecast {
  id: string;
  kiosk: string;
  location: string;
  fillLevel: number;
  message: string;
  estimatedTime: string;
  status: "urgent" | "upcoming" | "normal";
}

export interface JanitorOverview {
  date: string;

  janitor: {
    id: string;
    name: string;
  };

  shift: {
    workingHours: string;
    assignedArea: string;
  };

  kiosks: Kiosk[];
  overflowReports: OverflowReport[];
  maintenanceForecast: MaintenanceForecast[];
}
