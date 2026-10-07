import {
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Code2,
  Factory,
  FolderKanban,
  GraduationCap,
  HeartPulse,
  Hotel,
  Layers,
  Rocket,
  Server,
  ShoppingBag,
  Truck,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import type { ServiceId } from "@/lib/site";

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  erp: Boxes,
  crm: Users,
  sharepoint: FolderKanban,
  python: Code2,
  fullstack: Layers,
  ai: BrainCircuit,
};

export const industryIcons: LucideIcon[] = [Warehouse, ShoppingBag, Factory, Building2, HeartPulse, Truck, GraduationCap, Hotel];

export const sapHighlightIcons: LucideIcon[] = [Server, BriefcaseBusiness, Users, Rocket];
