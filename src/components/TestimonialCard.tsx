import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
}

export const TestimonialCard = ({ quote, author, className = "" }: TestimonialCardProps) => {
  return (
    <Card className={`bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="text-sage text-6xl leading-none mb-4">"</div>
        <p className="text-foreground mb-4 italic text-lg leading-relaxed">{quote}</p>
        <p className="text-forest font-semibold">— {author}</p>
      </CardContent>
    </Card>
  );
};