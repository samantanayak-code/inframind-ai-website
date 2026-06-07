import { Check } from "lucide-react";

interface FeatureItemProps {
  title: string;
  description?: string;
}

export function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 mt-0.5">
        <Check className="w-5 h-5 text-indigo-400" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-white">{title}</h4>
        {description && <p className="text-sm text-gray-400 mt-0.5">{description}</p>}
      </div>
    </div>
  );
}
