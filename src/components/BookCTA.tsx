import { Button } from "@/components/ui/button";
import { Book, Headphones } from "lucide-react";

interface BookCTAProps {
  showPrices?: boolean;
  className?: string;
  onlyPrint?: boolean;
  onlyAudio?: boolean;
}

export const BookCTA = ({ showPrices = false, className = "", onlyPrint = false, onlyAudio = false }: BookCTAProps) => {
  if (onlyPrint) {
    return (
      <div className={`flex justify-center ${className}`}>
        <Button variant="cta" size="lg" className="text-lg px-8 py-4">
          <Book className="w-5 h-5" />
          {showPrices ? "Livro Impresso - R$ 89,90" : "📖 Quero o Livro Impresso"}
        </Button>
      </div>
    );
  }

  if (onlyAudio) {
    return (
      <div className={`flex justify-center ${className}`}>
        <Button variant="ctaSecondary" size="lg" className="text-lg px-8 py-4">
          <Headphones className="w-5 h-5" />
          {showPrices ? "Audiobook - R$ 49,90" : "🎧 Quero o Audiobook"}
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      <Button variant="cta" size="lg" className="text-lg px-8 py-4">
        <Book className="w-5 h-5" />
        {showPrices ? "Livro Impresso - R$ 89,90" : "📖 Quero o Livro Impresso"}
      </Button>
      <Button variant="ctaSecondary" size="lg" className="text-lg px-8 py-4">
        <Headphones className="w-5 h-5" />
        {showPrices ? "Audiobook - R$ 49,90" : "🎧 Quero o Audiobook"}
      </Button>
    </div>
  );
};