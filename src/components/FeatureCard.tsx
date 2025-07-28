import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const IconComponent = Icons[icon] as LucideIcon;
  
  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8 text-center space-y-4">
        <div className="flex justify-center">
          <IconComponent size={48} className="text-forest" />
        </div>
        <h3 className="text-xl font-semibold text-forest">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};