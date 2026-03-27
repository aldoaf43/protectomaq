import { Cta } from "@/types/sanity";
import Link from "next/link";
import { Button } from "./ui/button";
import { sendGAdsEvent } from "@/lib/gtag";

interface CtaProps {
  cta: Cta;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
}

export default function CtaButton({ cta, className, size }: CtaProps) {
  return (
    <Button
      asChild
      size={size}
      variant={cta.color}
      className={`text-lg transition-all ${className || ""}`}
      onClick={() =>
        cta?.codeConversion ? sendGAdsEvent(cta?.codeConversion) : null
      }
    >
      <Link href={cta.url}>{cta.text.toLocaleUpperCase()}</Link>
    </Button>
  );
}
