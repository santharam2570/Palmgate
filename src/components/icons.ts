import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Cpu,
  Earth,
  Factory,
  GraduationCap,
  HardHat,
  Handshake,
  HeartHandshake,
  HeartPulse,
  Layers,
  Lightbulb,
  MonitorCog,
  Network,
  Presentation,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/services";

export const serviceIcons: Record<Service["id"], LucideIcon> = {
  training: Presentation,
  it: MonitorCog,
  hr: Users,
  study: GraduationCap,
};

export const industryIcons: Record<string, LucideIcon> = {
  technology: Cpu,
  manufacturing: Factory,
  logistics: Truck,
  healthcare: HeartPulse,
  construction: HardHat,
  retail: ShoppingBag,
};

export const valueIcons: LucideIcon[] = [ShieldCheck, HeartHandshake, Award, Lightbulb, Handshake, Earth];

export const whyChooseIcons: LucideIcon[] = [Layers, Earth, Target, Network, Sparkles];

export const sapHighlightIcons: LucideIcon[] = [Wrench, BriefcaseBusiness, CalendarDays, Users];
