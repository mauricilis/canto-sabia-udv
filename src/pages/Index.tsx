import { BookCTA } from "@/components/BookCTA";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import bookCover from "@/assets/book-cover.jpg";
import mestreFlorencio from "@/assets/mestre-florencio.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 to-forest/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                O Canto do <span className="text-golden">Sabiá</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light opacity-90">
                A história viva de um dos maiores discípulos de Mestre Gabriel
              </h2>
              <p className="text-xl opacity-80 leading-relaxed">
                A biografia emocionante de Mestre Florêncio, agora disponível nos formatos livro impresso e audiobook.
              </p>
              <BookCTA className="mt-8" />
            </div>
            <div className="lg:w-1/2 flex justify-center gap-8">
              <img 
                src={bookCover} 
                alt="Capa do livro O Canto do Sabiá" 
                className="w-64 lg:w-80 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
              />
              <img 
                src={mestreFlorencio} 
                alt="Mestre Florêncio" 
                className="w-48 lg:w-64 h-64 lg:h-80 object-cover shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
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
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest mb-16">
            Por que ler (ou ouvir) O Canto do Sabiá?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon="📚"
              title="Biografia com riqueza de detalhes"
              description="Dos desafios da infância até seu papel como Conselheiro e referência espiritual."
            />
            <FeatureCard
              icon="🌿"
              title="Conexão com a origem da UDV"
              description="M. Florêncio foi formado diretamente por Mestre Gabriel e dedicou sua vida à expansão da União."
            />
            <FeatureCard
              icon="🗣️"
              title="Relatos emocionantes e verdadeiros"
              description="Histórias contadas por familiares, amigos e discípulos que viveram ao seu lado."
            />
            <FeatureCard
              icon="❤️"
              title="Um legado de amor e fidelidade"
              description="M. Florêncio escolheu partir com sua memória intacta — para nunca esquecer seu Mestre."
            />
            <FeatureCard
              icon="🎧"
              title="Versão em audiobook com narração envolvente"
              description="Ideal para quem deseja ouvir os ensinamentos em qualquer momento do dia."
            />
            <FeatureCard
              icon="🕊️"
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-forest mb-16">Para quem é este livro</h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <span className="text-golden text-2xl">✅</span>
                <p>Quem deseja conhecer de perto a história de um dos primeiros mestres da UDV</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-golden text-2xl">✅</span>
                <p>Quem sente saudade de ouvir as palavras simples e profundas de M. Florêncio</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-golden text-2xl">✅</span>
                <p>Quem valoriza o legado dos pioneiros da União do Vegetal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Formats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest mb-16">
            O que você vai encontrar no livro
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-muted/30">
              <CardContent className="p-8">
                <div className="text-6xl mb-6 text-center">📖</div>
                <h3 className="text-2xl font-bold text-forest mb-4 text-center">Formato Impresso (capa dura)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Mais de 300 páginas de histórias, imagens e registros emocionantes</li>
                  <li>• Excelente acabamento, ideal para guardar e presentear</li>
                  <li>• Papel de qualidade para uma leitura confortável</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-muted/30">
              <CardContent className="p-8">
                <div className="text-6xl mb-6 text-center">🎧</div>
                <h3 className="text-2xl font-bold text-forest mb-4 text-center">Formato Audiobook</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Narração profissional com entonação sensível</li>
                  <li>• Escute no seu tempo: em casa, na estrada ou na floresta</li>
                  <li>• Disponível para download ou streaming</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest mb-16">O que dizem sobre o livro</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Revivi cada momento ao lado do M. Florêncio. Um presente para a alma."
              author="M. José Silva"
            />
            <TestimonialCard
              quote="Ouvir o audiobook foi como sentar à beira do fogão e escutar o Mestre contar histórias."
              author="C. Maria da Luz"
            />
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-20 bg-gradient-to-r from-golden/20 to-golden/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest mb-16">
            Escolha sua versão e receba onde estiver
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">📖</div>
                <h3 className="text-2xl font-bold text-forest mb-4">Livro Impresso</h3>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li>• Frete para todo o Brasil</li>
                  <li>• R$ 89,90 ou em até 3x sem juros</li>
                </ul>
                <BookCTA showPrices={false} />
              </CardContent>
            </Card>
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🎧</div>
                <h3 className="text-2xl font-bold text-forest mb-4">Audiobook Digital</h3>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li>• Acesso imediato após a compra</li>
                  <li>• R$ 49,90</li>
                </ul>
                <BookCTA showPrices={false} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-forest">Sobre o Autor</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Edson Lodi é escritor e membro da UDV, com profundo respeito pela história da União. 
              Neste trabalho, ele reconstrói com sensibilidade e fidelidade o legado de um homem que foi 
              exemplo de vida espiritual e amor fraterno.
            </p>
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