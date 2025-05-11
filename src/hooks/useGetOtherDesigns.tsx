"use client";
import { useParams } from "next/navigation";
import { CompanyDesigns } from "@/constants";

export default function UseGetOtherDesigns() {
  const { id } = useParams();
  const otherDesigns = CompanyDesigns.filter((design) => id !== design.id);
  return otherDesigns;
}
