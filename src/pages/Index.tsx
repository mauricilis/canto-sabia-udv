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
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-16 md:pt-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto overflow-hidden">
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
              <BookCTA className="mt-8" isHero={true} />
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

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-forest mb-8">Conheça a História</h2>
            <div className="relative w-full">
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/eOpZwEB7q-o"
                  title="O Canto do Sabiá - Vídeo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
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
      <section className="py-20 bg-white" data-section="book-formats">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest mb-16">
            Escolha sua versão e receba onde estiver
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">📖</div>
                <h3 className="text-2xl font-bold text-forest mb-4">Formato Impresso (capa dura)</h3>
                <div className="text-lg font-semibold text-golden mb-6 p-3 bg-golden/10 rounded-lg">
                  Valor promocional de lançamento: R$53 à vista
                </div>
                <ul className="space-y-3 text-muted-foreground mb-8 text-left">
                  <li>• Fotos e registros emocionantes</li>
                  <li>• Excelente acabamento, ideal para guardar e presentear</li>
                  <li>• Papel de qualidade para uma leitura confortável</li>
                  <li>• Consulte valores de frete para todo o Brasil</li>
                </ul>
                <div className="flex justify-center">
                  <BookCTA showPrices={false} onlyPrint={true} />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🎧</div>
                <h3 className="text-2xl font-bold text-forest mb-4">Formato Audiobook</h3>
                <div className="text-lg font-semibold text-golden mb-6 p-3 bg-golden/10 rounded-lg">
                  Valor promocional de lançamento: R$40 à vista
                </div>
                <ul className="space-y-3 text-muted-foreground mb-8 text-left">
                  <li>• 12 capítulos, 55 áudios, com aproximadamente 8h de conteúdo total</li>
                  <li>• Idioma em português</li>
                  <li>• Acesso vitalício</li>
                  <li>• Narração profissional com entonação sensível</li>
                  <li>• Ideal para quem deseja conhecer a história de M. Florêncio em qualquer momento do dia.</li>
                  <li>• Disponibilizado pela Hotmart para acesso via navegador ou app</li>
                  <li>• Acesso imediato após a compra</li>
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
                <div className="text-center mt-4">
                  <a 
                    href="https://www.instagram.com/lodicampossoares/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-golden hover:text-golden-dark transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @lodicampossoares
                  </a>
                </div>
              </div>
               <div className="md:w-2/3 space-y-4">
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Edson Lodi é escritor, pesquisador e discípulo da União do Vegetal desde a década de 1970. Ao longo de décadas, conviveu de perto com Mestre Florêncio e sua família, sendo testemunha de muitos dos momentos que agora narra com sensibilidade, respeito e profundidade.
                 </p>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Com um olhar atento à alma da floresta, ao valor da memória e à essência dos ensinos do Mestre Gabriel, Edson mergulhou em dezenas de entrevistas, relatos e documentos para reconstruir esta trajetória ímpar. Seu compromisso foi claro desde o início: registrar, com o coração e a verdade possível, a vida de um homem simples e grandioso, cuja história ecoa como um canto de sabiá na alma da irmandade.
                 </p>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Além de sua vivência pessoal com Mestre Florêncio desde 1976, Edson também se dedicou a pesquisas sobre o contexto histórico e cultural do Nordeste e da Amazônia, ampliando o olhar sobre as raízes sociais e espirituais que moldaram a vida deste Mestre querido.
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

      {/* Sponsors Section */}
      <section className="py-16 bg-white border-t border-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-forest mb-8">Patrocinadores:</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <img 
              src="/lovable-uploads/baa4af34-d29a-413a-aef5-0abec1f14667.png" 
              alt="Capella" 
              className="h-8 md:h-10"
            />
            <img 
              src="/lovable-uploads/fba3158c-9afa-4ffd-ba15-7e4a27b491b5.png" 
              alt="Casa Cobi" 
              className="h-12 md:h-16"
            />
            <img 
              src="/lovable-uploads/afb2c83a-9b09-48e0-a5f9-ecfe18849e70.png" 
              alt="Jutica" 
              className="h-8 md:h-10"
            />
            <img 
              src="/lovable-uploads/37f42f56-e1d9-4fc1-8070-dd302d1b0a92.png" 
              alt="Dr Parfum" 
              className="h-12 md:h-16"
            />
            <img 
              src="/lovable-uploads/00ee5aad-11c8-4865-be8b-724e7bc91ae0.png" 
              alt="Mancini" 
              className="h-12 md:h-16"
            />
            <img 
              src="/lovable-uploads/b8e98eb3-c427-4678-8030-897ba4122c5b.png" 
              alt="Supernova" 
              className="h-8 md:h-10"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-earth text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-80 mb-4 md:mb-0">© 2024 O Canto do Sabiá - Todos os direitos reservados</p>
            <img 
              src="/lovable-uploads/791e73cc-4948-4a76-891e-3051461c27e4.png" 
              alt="Prosperar" 
              className="h-8 opacity-80"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;