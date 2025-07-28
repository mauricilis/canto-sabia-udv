import { BookCTA } from "@/components/BookCTA";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Bird } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import bookCover from "/lovable-uploads/a066a471-a501-4429-a8d8-fefb24a9a103.png";
import mestreFlorencio from "/lovable-uploads/a5b6c8fc-0790-4df0-ad70-4d87ea25f2b0.png";
import heroBackground from "/lovable-uploads/61ce68d9-23be-418c-b6f0-4b3d0b5f8d39.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-yellow-700/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                O Canto do <span className="text-golden">Sabiá</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light opacity-90">
                A história de Mestre Florêncio
              </h2>
              <p className="text-xl opacity-80 leading-relaxed">
                A biografia emocionante de Mestre Florêncio, agora disponível nos formatos livro impresso e audiobook.
              </p>
              <BookCTA className="mt-8" />
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src={bookCover} 
                alt="Capa do livro O Canto do Sabiá" 
                className="w-64 lg:w-80 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img 
                  src="/lovable-uploads/f435d26f-183f-4fb1-97b7-099e7c813792.png" 
                  alt="Mestre Florêncio" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-bold text-forest">Uma História que Vive no Coração da UDV</h2>
                <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
                  <p>
                    Mestre Florêncio não foi apenas um discípulo de Mestre Gabriel. Ele foi guardião da palavra, 
                    exemplo de humildade e ponte viva entre a floresta, a fé e os ensinos da União do Vegetal.
                  </p>
                  <p>
                    Neste livro, Edson Lodi resgata momentos marcantes, desde os primeiros encontros com o Mestre 
                    até seus últimos dias, deixando registrada uma herança de amor, força e lealdade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest mb-16">
            Por que ler (ou ouvir) O Canto do Sabiá?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon="BookOpen"
              title="Biografia com riqueza de detalhes"
              description="Dos desafios da infância até seu papel como Conselheiro e referência espiritual."
            />
            <FeatureCard
              icon="Leaf"
              title="Conexão com a origem da UDV"
              description="M. Florêncio foi formado diretamente por Mestre Gabriel e dedicou sua vida à expansão da União."
            />
            <FeatureCard
              icon="MessageCircle"
              title="Relatos emocionantes e verdadeiros"
              description="Histórias contadas por familiares, amigos e discípulos que viveram ao seu lado."
            />
            <FeatureCard
              icon="Heart"
              title="Um legado de amor e fidelidade"
              description="M. Florêncio escolheu partir com sua memória intacta — para nunca esquecer seu Mestre."
            />
            <FeatureCard
              icon="Headphones"
              title="Versão em audiobook com narração envolvente"
              description="Ideal para quem deseja ouvir os ensinamentos em qualquer momento do dia."
            />
            <FeatureCard
              icon="Bird"
              title="Uma herança espiritual"
              description="Palavras que tocam a alma e fortalecem a fé na jornada espiritual."
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-forest to-forest-light text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-golden text-8xl leading-none mb-8">"</div>
            <blockquote className="text-3xl lg:text-4xl font-light italic leading-relaxed mb-8">
              Quero morrer me lembrando do meu Mestre.
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed">
              Essa frase dita por M. Florêncio ao recusar tratamentos agressivos resume o tom profundo desta biografia. 
              Escolheu preservar a memória, a consciência e a gratidão.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-forest mb-16">Para quem é este livro</h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img 
                  src="/lovable-uploads/93a10b04-4ab7-42f0-a0d4-87c4557046b7.png" 
                  alt="Mestre Florêncio em contemplação" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <Bird className="text-golden flex-shrink-0 mt-1" size={24} />
                  <p>Quem deseja conhecer de perto a história de um dos primeiros mestres da UDV</p>
                </div>
                <div className="flex items-start gap-4">
                  <Bird className="text-golden flex-shrink-0 mt-1" size={24} />
                  <p>Quem sente saudade de ouvir as palavras simples e profundas de M. Florêncio</p>
                </div>
                <div className="flex items-start gap-4">
                  <Bird className="text-golden flex-shrink-0 mt-1" size={24} />
                  <p>Quem valoriza o legado dos pioneiros da União do Vegetal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Formats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest mb-16">
            Escolha sua versão e receba onde estiver
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">📖</div>
                <h3 className="text-2xl font-bold text-forest mb-6">Formato Impresso (capa dura)</h3>
                <ul className="space-y-3 text-muted-foreground mb-8 text-left">
                  <li>• Mais de 300 páginas de histórias, imagens e registros emocionantes</li>
                  <li>• Excelente acabamento, ideal para guardar e presentear</li>
                  <li>• Papel de qualidade para uma leitura confortável</li>
                  <li>• Frete para todo o Brasil</li>
                  <li>• R$ 89,90 ou em até 3x sem juros</li>
                </ul>
                <div className="flex justify-center">
                  <BookCTA showPrices={false} onlyPrint={true} />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🎧</div>
                <h3 className="text-2xl font-bold text-forest mb-6">Formato Audiobook</h3>
                <ul className="space-y-3 text-muted-foreground mb-8 text-left">
                  <li>• Narração profissional com entonação sensível</li>
                  <li>• Escute no seu tempo: em casa, na estrada ou na floresta</li>
                  <li>• Disponibilizado pela Hotmart para acesso via navegador ou app</li>
                  <li>• Acesso imediato após a compra</li>
                  <li>• R$ 49,90</li>
                </ul>
                <div className="flex justify-center">
                  <BookCTA showPrices={false} onlyAudio={true} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-forest text-center mb-12">Sobre o Autor</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/d9389d0a-da74-4271-a934-b0240f7de142.png" 
                  alt="Edson Lodi - Autor" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Edson Lodi é escritor e membro da UDV, com profundo respeito pela história da União. 
                  Neste trabalho, ele reconstrói com sensibilidade e fidelidade o legado de um homem que foi 
                  exemplo de vida espiritual e amor fraterno.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com uma trajetória dedicada à preservação da memória e dos ensinamentos da UDV, 
                  Edson traz em "O Canto do Sabiá" uma narrativa tocante sobre um dos discípulos mais queridos de Mestre Gabriel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-forest to-forest-light text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-golden text-6xl mb-6">🕊️</div>
            <h2 className="text-4xl font-bold">Uma história para guardar no coração. Um legado para viver.</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Adquira agora o livro ou audiobook de O Canto do Sabiá e mantenha viva a memória de um dos primeiros irmãos da UDV.
            </p>
            <BookCTA />
          </div>
        </div>
      </section>

      {/* Realization Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-forest mb-8">Realização:</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/439e2ddd-861d-483b-8990-9f098c4f8193.png" 
              alt="Ministério da Cultura - Governo Federal - Brasil" 
              className="h-20 md:h-24"
            />
            <img 
              src="/lovable-uploads/4bd67657-8ddd-4b8e-9a9f-7f42a7d95fea.png" 
              alt="Lei Rouanet - Fundo Nacional da Cultura" 
              className="h-20 md:h-24"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-earth text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">© 2024 O Canto do Sabiá - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;