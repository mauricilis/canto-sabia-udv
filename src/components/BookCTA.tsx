import { Button } from "@/components/ui/button";
import { Book, Headphones } from "lucide-react";

interface BookCTAProps {
  showPrices?: boolean;
  className?: string;
  onlyPrint?: boolean;
  onlyAudio?: boolean;
  isHero?: boolean;
}

export const BookCTA = ({ showPrices = false, className = "", onlyPrint = false, onlyAudio = false, isHero = false }: BookCTAProps) => {
  const scrollToFormats = () => {
    const formatsSection = document.querySelector('section:has(h2:contains("Escolha sua versão"))') || 
                          document.querySelector('[data-section="book-formats"]');
    if (formatsSection) {
      formatsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (onlyPrint) {
    if (isHero) {
      return (
        <div className={`flex justify-center ${className}`}>
          <Button variant="cta" size="lg" className="text-lg px-8 py-4" onClick={scrollToFormats}>
            <Book className="w-5 h-5" />
            📖 Conhecer o Livro
          </Button>
        </div>
      );
    }
    return (
      <div className={`flex justify-center ${className}`}>
        <Button 
          variant="cta" 
          size="lg" 
          className="text-lg px-8 py-4"
          onClick={() => window.open('https://www.nossaloja.vc/canto-do-sabia---biografia-do-mestre-florencio/p', '_blank')}
        >
          <Book className="w-5 h-5" />
          {showPrices ? "Livro Impresso - R$ 89,90" : "📖 Quero o Livro Impresso"}
        </Button>
      </div>
    );
  }

  if (onlyAudio) {
    if (isHero) {
      return (
        <div className={`flex justify-center ${className}`}>
          <Button variant="ctaSecondary" size="lg" className="text-lg px-8 py-4" onClick={scrollToFormats}>
            <Headphones className="w-5 h-5" />
            🎧 Conhecer o Livro
          </Button>
        </div>
      );
    }
    return (
      <div className={`flex justify-center ${className}`}>
        <Button 
          variant="ctaSecondary" 
          size="lg" 
          className="text-lg px-8 py-4"
          onClick={() => window.open('https://go.hotmart.com/B101075266E', '_blank')}
        >
          <Headphones className="w-5 h-5" />
          {showPrices ? "Audiobook - R$ 49,90" : "🎧 Quero o Audiobook"}
        </Button>
      </div>
    );
  }

  if (isHero) {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
        <Button variant="cta" size="lg" className="text-lg px-8 py-4" onClick={scrollToFormats}>
          <Book className="w-5 h-5" />
          📖 Conhecer o Livro
        </Button>
        <Button variant="ctaSecondary" size="lg" className="text-lg px-8 py-4" onClick={scrollToFormats}>
          <Headphones className="w-5 h-5" />
          🎧 Conhecer o Livro
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      <Button 
        variant="cta" 
        size="lg" 
        className="text-lg px-8 py-4"
        onClick={() => window.open('https://www.nossaloja.vc/canto-do-sabia---biografia-do-mestre-florencio/p', '_blank')}
      >
        <Book className="w-5 h-5" />
        {showPrices ? "Livro Impresso - R$ 89,90" : "📖 Quero o Livro Impresso"}
      </Button>
      <Button 
        variant="ctaSecondary" 
        size="lg" 
        className="text-lg px-8 py-4"
        onClick={() => window.open('https://go.hotmart.com/B101075266E', '_blank')}
      >
        <Headphones className="w-5 h-5" />
        {showPrices ? "Audiobook - R$ 49,90" : "🎧 Quero o Audiobook"}
      </Button>
    </div>
  );
};