"use client";
import { useParams } from "next/navigation";
import { CompanyDesigns } from "@/constants";

export default function UseGetCurrentDesign() {
  const { id } = useParams();
  const currentDesign = CompanyDesigns.find((design) => id === design.id);
  return currentDesign;
}
