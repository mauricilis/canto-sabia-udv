import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon, title, description, className = "" }: FeatureCardProps) => {
  return (
    <Card className={`bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 border-0 ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="text-golden text-4xl mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-forest mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};