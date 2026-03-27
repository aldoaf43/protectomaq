"use client";

import { LucideProps } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { Skeleton } from "./skeleton";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface DynamicIconProps extends Omit<LucideProps, "ref" | "name"> {
  name: keyof typeof dynamicIconImports;
}

const IconFallback = ({ className }: LucideProps) => (
  <Skeleton className={className} />
);

// Pre-create all dynamic components outside render
const dynamicIcons = Object.entries(dynamicIconImports).reduce(
  (acc, [key, importFn]) => {
    acc[key] = dynamic(() => importFn(), {
      loading: () => <IconFallback />,
      ssr: false,
    });
    return acc;
  },
  {} as Record<string, React.ComponentType<LucideProps>>,
);

function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const LucideIcon = dynamicIcons[name];

  if (!LucideIcon) {
    return <IconFallback {...props} />;
  }

  return (
    <Suspense fallback={<IconFallback {...props} />}>
      <LucideIcon {...props} />
    </Suspense>
  );
}

export default DynamicIcon;
