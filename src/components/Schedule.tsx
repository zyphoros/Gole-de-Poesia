import React, { useState } from 'react';
import { HandwritingTexture } from './HandwritingTexture';
import { WashiTape } from './WashiTape';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Mic2, 
  BookOpen, 
  FileText, 
  AlertCircle, 
  ArrowRight, 
  ExternalLink,
  Theater,
  Award,
  PenTool
} from 'lucide-react';

export const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'geral' | 'oficinas' | 'chamamento'>('geral');

  return (
    <section
      id="programacao"
      className="relative bg-[#E8A324] text-[#4A1030] pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden"
    >
      {/* TEXTURA DE ESCRITA DE FUNDO CONDIZENTE COM AS OUTRAS SEÇÕES */}
      <HandwritingTexture variant="mustard" opacity={0.06} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO PRINCIPAL DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#4A1030] text-[#F5EDE0] px-4 py-1.5 rounded-full font-display text-xs sm:text-sm tracking-widest uppercase mb-3 shadow-md transform -rotate-1">
            <Calendar className="w-3.5 h-3.5 text-[#E8A324]" />
            <span>Programação Completa • Edição 2026</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#4A1030] uppercase tracking-tight leading-none mb-3">
            GOLE DE POESIA
          </h2>

          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#340720] font-bold">
            Informações para divulgação — Oficinas e Chamamento Público
          </p>

          <p className="font-body text-sm sm:text-base text-[#4A1030]/90 max-w-2xl mx-auto mt-3 leading-relaxed">
            Formação gratuita, troca de saberes e celebração da palavra falada e cantada em Taguatinga - DF.
          </p>
        </div>

        {/* BANNER OFICIAL DE LOCALIZAÇÃO E GRATUIDADE */}
        <div className="relative bg-[#4A1030] text-[#F5EDE0] p-4 sm:p-6 rounded-2xl shadow-xl border-2 border-[#340720] mb-8 overflow-hidden">
          <WashiTape
            position="top-right"
            color="mustard"
            angle={2}
            width="w-28 sm:w-36"
            text="100% GRATUITO"
          />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#E8A324] text-[#4A1030] p-2.5 rounded-xl shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-xs sm:text-sm uppercase tracking-wider text-[#E8A324] font-bold block">
                  Local de todas as atividades
                </span>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-[#F5EDE0] leading-snug">
                  Ocupação Cultural Mercado Sul Vive
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#F5EDE0]/80 mt-0.5">
                  Ponto de Cultura Canoa – Negra e Indígena • Taguatinga-DF
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-[#FAF4EA]/10 border border-[#F5EDE0]/20 px-3.5 py-2 rounded-xl text-xs font-body shrink-0">
              <Clock className="w-4 h-4 text-[#E8A324]" />
              <span>Prazo de inscrição:</span>
              <strong className="text-[#E8A324] font-bold">Até 25/09/2026, às 23h59</strong>
            </div>
          </div>
        </div>

        {/* NAVEGAÇÃO POR ABAS / SELETOR DE VIZUALIZAÇÃO */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 border-b-2 border-[#4A1030]/15 pb-5">
          <button
            onClick={() => setActiveTab('geral')}
            className={`px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 border-2 ${
              activeTab === 'geral'
                ? 'bg-[#4A1030] text-[#E8A324] border-[#340720] shadow-md -translate-y-0.5'
                : 'bg-[#FAF4EA] text-[#4A1030] hover:bg-white border-[#4A1030]/20 shadow-sm'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#E8A324]" />
            <span>Cronograma Resumo</span>
          </button>

          <button
            onClick={() => setActiveTab('oficinas')}
            className={`px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 border-2 ${
              activeTab === 'oficinas'
                ? 'bg-[#4A1030] text-[#E8A324] border-[#340720] shadow-md -translate-y-0.5'
                : 'bg-[#FAF4EA] text-[#4A1030] hover:bg-white border-[#4A1030]/20 shadow-sm'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#E8A324]" />
            <span>Regras das Oficinas</span>
          </button>

          <button
            onClick={() => setActiveTab('chamamento')}
            className={`px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 border-2 ${
              activeTab === 'chamamento'
                ? 'bg-[#4A1030] text-[#E8A324] border-[#340720] shadow-md -translate-y-0.5'
                : 'bg-[#FAF4EA] text-[#4A1030] hover:bg-white border-[#4A1030]/20 shadow-sm'
            }`}
          >
            <Mic2 className="w-4 h-4 text-[#E8A324]" />
            <span>Chamamento Sarau</span>
          </button>
        </div>

        {/* ABA 1: RESUMO DO CRONOGRAMA (CARDS VISUAIS) */}
        {activeTab === 'geral' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#4A1030]">
                Linha do Tempo das Atividades
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#4A1030]/80 mt-1">
                Confira os dias e horários de cada oficina formativa e do Sarau Gole de Poesia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Evento 1 */}
              <div className="bg-[#FAF4EA] border-2 border-[#4A1030]/20 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#4A1030] text-[#E8A324] px-2.5 py-0.5 rounded-md font-display text-xs uppercase font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    28/09 • 18h
                  </span>
                  <span className="text-[11px] font-bold text-[#4A1030]/70 bg-[#E8A324]/20 px-2 py-0.5 rounded">
                    20 vagas
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">🎤</span>
                  <h4 className="font-display text-lg uppercase text-[#4A1030] font-bold leading-tight">
                    Canto e Performance Onomatopeia
                  </h4>
                </div>
                <p className="font-body text-xs text-[#4A1030]/80">
                  Com <strong className="text-[#4A1030]">Lis Carvalho</strong>
                </p>
                <a
                  href="#oficinas"
                  className="mt-3 inline-flex items-center gap-1 font-body text-xs font-bold text-[#4A1030] hover:underline"
                >
                  Ver oficina e formulário →
                </a>
              </div>

              {/* Evento 2 */}
              <div className="bg-[#FAF4EA] border-2 border-[#4A1030]/20 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#4A1030] text-[#E8A324] px-2.5 py-0.5 rounded-md font-display text-xs uppercase font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    28/09 • 20h
                  </span>
                  <span className="text-[11px] font-bold text-[#4A1030]/70 bg-[#E8A324]/20 px-2 py-0.5 rounded">
                    20 vagas
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">🎭</span>
                  <h4 className="font-display text-lg uppercase text-[#4A1030] font-bold leading-tight">
                    Leitura Dramática
                  </h4>
                </div>
                <p className="font-body text-xs text-[#4A1030]/80">
                  Com <strong className="text-[#4A1030]">Elmo Férrer</strong>
                </p>
                <a
                  href="#oficinas"
                  className="mt-3 inline-flex items-center gap-1 font-body text-xs font-bold text-[#4A1030] hover:underline"
                >
                  Ver oficina e formulário →
                </a>
              </div>

              {/* Evento 3 */}
              <div className="bg-[#FAF4EA] border-2 border-[#4A1030]/20 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#4A1030] text-[#E8A324] px-2.5 py-0.5 rounded-md font-display text-xs uppercase font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    29/09 • 19h às 22h
                  </span>
                  <span className="text-[11px] font-bold text-[#4A1030]/70 bg-[#E8A324]/20 px-2 py-0.5 rounded">
                    20 vagas
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">📋</span>
                  <h4 className="font-display text-lg uppercase text-[#4A1030] font-bold leading-tight">
                    Elaboração de Projetos e Captação
                  </h4>
                </div>
                <p className="font-body text-xs text-[#4A1030]/80">
                  Com <strong className="text-[#4A1030]">Igor Machado</strong>
                </p>
                <a
                  href="#oficinas"
                  className="mt-3 inline-flex items-center gap-1 font-body text-xs font-bold text-[#4A1030] hover:underline"
                >
                  Ver oficina e formulário →
                </a>
              </div>

              {/* Evento 4 */}
              <div className="bg-[#FAF4EA] border-2 border-[#4A1030]/20 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#4A1030] text-[#E8A324] px-2.5 py-0.5 rounded-md font-display text-xs uppercase font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    03/10 • 14h
                  </span>
                  <span className="text-[11px] font-bold text-[#4A1030]/70 bg-[#E8A324]/20 px-2 py-0.5 rounded">
                    20 vagas
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">✍️</span>
                  <h4 className="font-display text-lg uppercase text-[#4A1030] font-bold leading-tight">
                    Caminhos para a Escrita na Ficção
                  </h4>
                </div>
                <p className="font-body text-xs text-[#4A1030]/80">
                  Com <strong className="text-[#4A1030]">Cristiane Sobral</strong>
                </p>
                <a
                  href="#oficinas"
                  className="mt-3 inline-flex items-center gap-1 font-body text-xs font-bold text-[#4A1030] hover:underline"
                >
                  Ver oficina e formulário →
                </a>
              </div>

              {/* Evento Especial: Chamamento Sarau */}
              <div className="sm:col-span-2 bg-[#4A1030] text-[#F5EDE0] border-2 border-[#340720] rounded-xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="bg-[#E8A324] text-[#4A1030] px-3 py-1 rounded-md font-display text-xs uppercase font-bold flex items-center gap-1.5 shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-[#4A1030]" />
                    03/10 • 18h30 às 19h30
                  </span>
                  <span className="text-xs font-bold text-[#E8A324] bg-[#FAF4EA]/15 border border-[#E8A324]/40 px-2.5 py-0.5 rounded">
                    8 Poetas Selecionados
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-2xl">📖</span>
                  <h4 className="font-display text-xl sm:text-2xl uppercase text-[#F5EDE0] font-bold leading-tight">
                    Sarau Gole de Poesia <span className="text-[#E8A324]">(Chamamento Público)</span>
                  </h4>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#F5EDE0]/85 max-w-2xl leading-relaxed">
                  Apresentação ao vivo dos poetas selecionados pelo chamamento público. Local: Mercado Sul Vive.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    id="btn-inscricoes-abertas-sarau"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc3rxfYwy8pQNiSQZrUGOmJDoMFwEMSeYlqtLKGJnfkMr5xAA/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider font-bold text-[#4A1030] bg-[#E8A324] hover:bg-[#FAF4EA] px-3.5 py-2 rounded-lg shadow hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#4A1030]" />
                    <span>Inscrições Já Abertas</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <button
                    id="btn-ver-edital-chamamento"
                    onClick={() => setActiveTab('chamamento')}
                    className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider font-bold text-[#F5EDE0] bg-[#FAF4EA]/15 hover:bg-[#FAF4EA]/25 border border-[#F5EDE0]/30 px-3.5 py-2 rounded-lg shadow transition-colors"
                  >
                    <span>Ver edital completo do chamamento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ABA 2: INSCRIÇÕES DAS OFICINAS — REGRAS E CRITÉRIOS */}
        {activeTab === 'oficinas' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Coluna Esquerda: Informações Gerais */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-[#FAF4EA] border-2 border-[#4A1030]/20 rounded-xl p-5 shadow-sm">
                <h3 className="font-display text-xl uppercase text-[#4A1030] mb-3 flex items-center gap-2 font-bold">
                  <Users className="w-5 h-5 text-[#E8A324]" />
                  Quem pode participar?
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#4A1030]/85 leading-relaxed">
                  As oficinas são abertas a pessoas interessadas em <strong>poesia, literatura, escrita, canto, performance, produção cultural e demais linguagens artísticas e culturais</strong>, de acordo com a proposta de cada atividade.
                </p>
                <div className="mt-3 p-2.5 bg-[#E8A324]/15 border-l-4 border-[#4A1030] rounded-r text-xs font-body font-semibold text-[#4A1030]">
                  Não é necessário possuir experiência profissional ou formação prévia.
                </div>
              </div>

              <div className="bg-[#4A1030] text-[#F5EDE0] rounded-xl p-5 shadow-md border-2 border-[#340720]">
                <div className="flex items-center gap-2 mb-2 text-[#E8A324]">
                  <Award className="w-5 h-5" />
                  <h4 className="font-display text-lg uppercase tracking-wider">Vagas & Prazos</h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm font-body">
                  <li className="flex items-center justify-between border-b border-[#F5EDE0]/15 pb-1.5">
                    <span>Quantidade de vagas:</span>
                    <strong className="text-[#E8A324]">20 vagas por oficina</strong>
                  </li>
                  <li className="flex items-start justify-between pt-1">
                    <span>Prazo de inscrição:</span>
                    <strong className="text-[#E8A324] text-right">Até 25/09/2026, às 23h59</strong>
                  </li>
                </ul>
                <p className="text-[11px] text-[#F5EDE0]/70 mt-2 font-body italic">
                  * Ou enquanto houver vagas disponíveis.
                </p>
              </div>
            </div>

            {/* Coluna Direita: Critérios e Regras Oficiais */}
            <div className="lg:col-span-2 bg-[#FAF4EA] border-2 border-[#4A1030]/20 rounded-xl p-5 sm:p-6 shadow-sm">
              <h3 className="font-display text-xl sm:text-2xl uppercase text-[#4A1030] mb-4 flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-6 h-6 text-[#4A1030]" />
                Critérios e Regras das Oficinas
              </h3>

              <div className="space-y-3 font-body text-xs sm:text-sm text-[#4A1030]/90">
                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#E8A324]/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#4A1030] shrink-0 mt-0.5" />
                  <span><strong>Inscrição gratuita</strong> por formulário on-line oficial do projeto.</span>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#E8A324]/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#4A1030] shrink-0 mt-0.5" />
                  <span>Cada pessoa poderá se inscrever nas oficinas de seu interesse.</span>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#E8A324]/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#4A1030] shrink-0 mt-0.5" />
                  <span>É necessário preencher corretamente todos os dados solicitados no formulário de inscrição.</span>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#E8A324]/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#4A1030] shrink-0 mt-0.5" />
                  <span>A pessoa inscrita deverá possuir <strong>disponibilidade para participar integralmente</strong> da atividade no horário estipulado.</span>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#E8A324]/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#4A1030] shrink-0 mt-0.5" />
                  <span>O preenchimento do formulário <strong>não representa confirmação automática</strong> da vaga.</span>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#E8A324]/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#4A1030] shrink-0 mt-0.5" />
                  <span>A confirmação será realizada diretamente pela equipe de produção por meio dos contatos informados na inscrição.</span>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#E8A324]/15 border border-[#E8A324]/50">
                  <AlertCircle className="w-4 h-4 text-[#4A1030] shrink-0 mt-0.5" />
                  <span>Em caso de número de inscrições superior às vagas disponíveis, poderão ser considerados o <strong>interesse apresentado no formulário</strong>, a adequação à proposta da oficina e a <strong>diversidade do público participante</strong>.</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#4A1030]/15 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#4A1030]/70 font-body">
                  Clique no botão abaixo para escolher sua oficina:
                </span>
                <a
                  href="#oficinas"
                  className="inline-flex items-center gap-2 bg-[#4A1030] hover:bg-[#340720] text-[#F5EDE0] px-4 py-2 rounded-lg font-display text-sm tracking-wider uppercase shadow hover:shadow-md transition-all"
                >
                  <span>Ir para os cards de inscrição</span>
                  <ArrowRight className="w-4 h-4 text-[#E8A324]" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* ABA 3: CHAMAMENTO PÚBLICO — SARAU GOLE DE POESIA */}
        {activeTab === 'chamamento' && (
          <div className="bg-[#FAF4EA] border-2 border-[#4A1030] rounded-2xl p-5 sm:p-8 shadow-xl relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4A1030]/20 pb-5 mb-6">
              <div>
                <span className="bg-[#4A1030] text-[#E8A324] text-xs font-display uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-2 font-bold">
                  Seleção de Artistas da Palavra
                </span>
                <h3 className="font-display text-2xl sm:text-4xl uppercase text-[#4A1030] leading-none font-bold">
                  CHAMAMENTO PÚBLICO — SARAU GOLE DE POESIA
                </h3>
                <p className="font-script text-xl sm:text-2xl text-[#C98814] font-bold mt-1">
                  O Gole de Poesia abre chamamento para selecionar 8 poetas para integrar o Sarau do projeto.
                </p>
              </div>

              <div className="bg-[#4A1030] text-[#F5EDE0] p-4 rounded-xl shrink-0 text-center border-2 border-[#340720]">
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#E8A324] block leading-none">
                  8
                </span>
                <span className="font-display text-xs uppercase tracking-wider text-[#F5EDE0] mt-1 block">
                  Poetas Selecionados
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Quem pode participar & Quando acontece */}
              <div className="space-y-4">
                <div className="bg-[#FAF4EA] border border-[#4A1030]/20 rounded-xl p-4">
                  <h4 className="font-display text-base uppercase text-[#4A1030] font-bold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#E8A324]" />
                    Quem pode participar?
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#4A1030]/85 leading-relaxed">
                    Poetas, escritores(as), performers, artistas da palavra e pessoas que desenvolvam trabalhos autorais relacionados à <strong>poesia, literatura, oralidade, performance, slam, spoken word</strong> e outras formas de expressão poética.
                  </p>
                </div>

                <div className="bg-[#4A1030] text-[#F5EDE0] rounded-xl p-4 border border-[#340720]">
                  <h4 className="font-display text-base uppercase text-[#E8A324] font-bold mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#E8A324]" />
                    Quando e onde acontece o Sarau?
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#F5EDE0]/90">
                    <strong>Data:</strong> 03 de outubro de 2026<br />
                    <strong>Horário:</strong> 18h30 às 19h30<br />
                    <strong>Local:</strong> Ocupação Cultural Mercado Sul Vive – Ponto de Cultura Canoa – Negra e Indígena, Taguatinga-DF.
                  </p>
                </div>
              </div>

              {/* Como participar (Documentos necessários) */}
              <div className="bg-[#FAF4EA] border-2 border-[#4A1030]/20 rounded-xl p-4 shadow-sm">
                <h4 className="font-display text-base uppercase text-[#4A1030] font-bold mb-2 flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-[#E8A324]" />
                  Como participar?
                </h4>
                <p className="font-body text-xs text-[#4A1030]/85 mb-2">
                  A pessoa interessada deverá preencher o formulário de inscrição e apresentar:
                </p>
                <ul className="space-y-1.5 text-xs font-body text-[#4A1030]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A1030] shrink-0 mt-0.5" />
                    <span>Mini bio;</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A1030] shrink-0 mt-0.5" />
                    <span>Breve descrição de sua trajetória e/ou trabalho artístico;</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A1030] shrink-0 mt-0.5" />
                    <span>Proposta que pretende apresentar no Sarau;</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A1030] shrink-0 mt-0.5" />
                    <span>Poema ou texto autoral;</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A1030] shrink-0 mt-0.5" />
                    <span>Link para vídeo, apresentação, portfólio ou rede social artística, caso possua.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Critérios de seleção e regras gerais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#4A1030]/20">
              
              <div>
                <h4 className="font-display text-base uppercase text-[#4A1030] font-bold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#4A1030]" />
                  Critérios de Seleção (Curadoria Artística)
                </h4>
                <ul className="space-y-1.5 text-xs font-body text-[#4A1030]/85">
                  <li>• Qualidade e consistência da proposta artística;</li>
                  <li>• Relação da proposta com poesia, literatura, oralidade e/ou performance;</li>
                  <li>• Trajetória ou experiência apresentada, <strong>sem exigência de atuação profissional</strong>;</li>
                  <li>• Diversidade de linguagens e expressões poéticas;</li>
                  <li>• Diversidade e representatividade na composição do Sarau;</li>
                  <li>• Disponibilidade para participação presencial no dia do evento.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-base uppercase text-[#4A1030] font-bold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#4A1030]" />
                  Regras Gerais
                </h4>
                <ul className="space-y-1.5 text-xs font-body text-[#4A1030]/85">
                  <li>• A inscrição é 100% gratuita;</li>
                  <li>• Serão selecionados <strong>8 poetas</strong>;</li>
                  <li>• Cada participante deverá apresentar trabalho próprio ou material autorizado;</li>
                  <li>• As pessoas selecionadas serão comunicadas diretamente pela produção;</li>
                  <li>• A participação acontece presencialmente no dia <strong>03/10/2026</strong>.</li>
                </ul>
              </div>

            </div>

            {/* CTA do Chamamento com Link oficial / Instagram */}
            <div className="mt-6 pt-4 border-t border-[#4A1030]/20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#4A1030] text-[#F5EDE0] p-4 sm:p-5 rounded-xl border-2 border-[#340720]">
              <div>
                <span className="font-display text-xs uppercase tracking-wider text-[#E8A324] font-bold block">
                  Inscrições já abertas até 25/09/2026, às 23h59
                </span>
                <span className="font-body text-xs text-[#F5EDE0]/80">
                  Preencha o formulário para enviar sua proposta artística ao Sarau.
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  id="btn-inscricao-sarau-form-cta"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3rxfYwy8pQNiSQZrUGOmJDoMFwEMSeYlqtLKGJnfkMr5xAA/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E8A324] hover:bg-[#FAF4EA] text-[#4A1030] px-4 py-2 rounded-lg font-display text-xs sm:text-sm tracking-wider uppercase font-bold flex items-center gap-2 shadow hover:shadow-md transition-all shrink-0 group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#4A1030]" />
                  <span>Inscrições Já Abertas</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  id="btn-sarau-instagram-cta"
                  href="https://www.instagram.com/goledepoesia.df/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FAF4EA]/15 hover:bg-[#FAF4EA]/25 text-[#F5EDE0] border border-[#F5EDE0]/30 px-3.5 py-2 rounded-lg font-display text-xs sm:text-sm tracking-wider uppercase font-bold flex items-center gap-1.5 shadow transition-all shrink-0"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-[#E8A324]" />
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
