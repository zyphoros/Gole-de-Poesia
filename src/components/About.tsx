import React from 'react';
import { HandwritingTexture } from './HandwritingTexture';
import { WashiTape } from './WashiTape';
import { PoetryChaliceIcon } from './LogoGoleDePoesia';
import { Mic2, BookOpen, Layers, PenTool, Sparkles, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative bg-[#4A1030] text-[#F5EDE0] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden"
    >
      {/* TEXTURA DE FUNDO COM ESCRITA À MÃO EM CREME SUTIL */}
      <HandwritingTexture variant="wine" opacity={0.04} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO DA SEÇÃO SOBRE */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          <div className="inline-flex items-center gap-2 bg-[#E8A324] text-[#4A1030] px-4 py-1.5 rounded-full font-display text-sm tracking-widest uppercase mb-4 shadow-md transform -rotate-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Taguatinga - DF • Arte Coletiva</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F5EDE0] uppercase tracking-wide leading-none mb-3">
            O QUE É O <span className="text-[#E8A324]">GOLE DE POESIA</span>?
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-[#E8A324] font-bold">
            Literatura que se fala, se canta e se vive.
          </p>
        </div>

        {/* BLOCO PRINCIPAL EXPLICATIVO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* COLUNA DE TEXTO MANIFESTO (TEXTO PLACEHOLDER AJUSTÁVEL) */}
          <div className="lg:col-span-7 space-y-5">
            {/*
              =========================================================
              TEXTO EXPLICATIVO DEFINITIVO (EDITÁVEL)
              =========================================================
            */}
            <p className="font-body text-lg sm:text-xl text-[#F5EDE0] leading-relaxed font-light">
              O <strong className="font-bold text-[#E8A324]">Gole de Poesia</strong> é um encontro pulsante onde a literatura periférica ganha voz, corpo e circulação. Nascido no território cultural de <span className="underline decoration-[#E8A324] decoration-2">Taguatinga - DF</span>, o coletivo articula a força da ancestralidade afro-brasileira com a urgência dos saraus, da poesia falada e da criação independente.
            </p>

            <p className="font-body text-base sm:text-lg text-[#F5EDE0]/85 leading-relaxed">
              Mais do que contemplar a arte, propomos beber de sua fonte viva: criamos espaços acolhedores e gratuitos de troca de saberes, onde pessoas de todas as idades podem experimentar a escrita, aprimorar a presença cênica, interpretar poemas e compreender como viabilizar seus próprios projetos culturais.
            </p>

            <div className="p-5 bg-[#340720]/80 border-l-4 border-[#E8A324] rounded-r-xl shadow-inner my-6">
              <p className="font-script text-2xl text-[#E8A324] font-bold leading-snug">
                “A poesia não cabe apenas no livro fechado na estante. Ela é o grito do beco, o canto da avó, o verso que rasga a rotina e devolve o poder de sonhar.”
              </p>
              <span className="font-display text-xs tracking-widest text-[#F5EDE0]/60 uppercase block mt-2">
                — Manifesto Gole de Poesia
              </span>
            </div>

            <p className="font-body text-base text-[#F5EDE0]/80 leading-relaxed">
              Nesta edição, reunimos <span className="text-[#E8A324] font-semibold">4 oficinas gratuitas</span> com artistas e referências consagradas do cenário literário e cênico brasileiro, culminando em uma grande celebração poética na nossa cidade.
            </p>
          </div>

          {/* COLUNA DE CARD/DESTAQUE VISUAL COM A TAÇA E NÚMEROS */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#340720] border-2 border-[#E8A324]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {/* Fita washi tape decorativa */}
              <WashiTape
                position="top-right"
                color="mustard"
                width="w-28"
                text="FORMATIVO"
                angle={3}
              />

              <div className="flex items-center gap-3 mb-6 border-b border-[#F5EDE0]/15 pb-4">
                <div className="p-3 bg-[#E8A324] text-[#4A1030] rounded-xl">
                  <PoetryChaliceIcon className="w-8 h-8" color="#4A1030" />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-[#F5EDE0]">
                    Um Gole de Tudo Isso
                  </h3>
                  <span className="font-body text-xs text-[#E8A324]">
                    Pilares do Projeto Cultural
                  </span>
                </div>
              </div>

              {/* 4 Eixos Formativos */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#E8A324]/10 rounded-lg text-[#E8A324] mt-1 shrink-0">
                    <Mic2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-wide text-[#F5EDE0]">
                      Oralidade & Canto
                    </h4>
                    <p className="font-body text-xs text-[#F5EDE0]/75">
                      Voz, respiração e a canção como extensão da palavra poética.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#E8A324]/10 rounded-lg text-[#E8A324] mt-1 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-wide text-[#F5EDE0]">
                      Leitura Dramática
                    </h4>
                    <p className="font-body text-xs text-[#F5EDE0]/75">
                      Interpretação e presença de palco para dar corpo ao verso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#E8A324]/10 rounded-lg text-[#E8A324] mt-1 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-wide text-[#F5EDE0]">
                      Gestão & Captação
                    </h4>
                    <p className="font-body text-xs text-[#F5EDE0]/75">
                      Autonomia e sustentabilidade para artistas independentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#E8A324]/10 rounded-lg text-[#E8A324] mt-1 shrink-0">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-wide text-[#F5EDE0]">
                      Ficção & Narrativa Afro
                    </h4>
                    <p className="font-body text-xs text-[#F5EDE0]/75">
                      Criação de histórias e descolonização do imaginário literário.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tag informativa de gratuidade */}
              <div className="mt-6 pt-4 border-t border-[#F5EDE0]/15 flex items-center justify-between text-xs">
                <span className="font-script text-lg text-[#E8A324]">Inscrições 100% gratuitas</span>
                <span className="font-display uppercase tracking-widest text-[#F5EDE0]/60">Taguatinga • DF</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTÃO CTA INTERMEDIÁRIO */}
        <div className="text-center pt-2">
          <a
            href="#oficinas"
            className="inline-flex items-center gap-3 bg-[#E8A324] hover:bg-[#F2AE30] text-[#4A1030] px-8 py-3.5 rounded-xl font-display text-xl tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <Sparkles className="w-5 h-5" />
            <span>Escolha a sua oficina e inscreva-se</span>
          </a>
        </div>

      </div>
    </section>
  );
};
