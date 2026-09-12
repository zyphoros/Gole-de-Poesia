/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Workshops } from './components/Workshops';
import { Schedule } from './components/Schedule';
import { Footer } from './components/Footer';
import { TornPaperEdge } from './components/TornPaperEdge';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E8A324] text-[#4A1030] selection:bg-[#4A1030] selection:text-[#F5EDE0]">
      {/* 1. HEADER COM LOGO OFICIAL, ÂNCORAS E TAG TAGUATINGA - DF */}
      <Header />

      <main className="flex-grow">
        {/* 2. HERO: FUNDO MOSTARDA COM TEXTURA DE ESCRITA, CARTAZ E CTA */}
        <Hero />

        {/* 3. OFICINAS GRATUITAS: 4 CARDS COM FACILITADORES E INSCRIÇÕES DIRETAS */}
        <Workshops />

        {/* 4. PROGRAMAÇÃO E CHAMAMENTO PÚBLICO: REGRAS, EDITAL DO SARAU E CRONOGRAMA */}
        <Schedule />

        {/* EFEITO DE PAPEL RASGADO: TRANSIÇÃO MOSTARDA -> VINHO */}
        <TornPaperEdge fillColor="#E8A324" position="bottom" flipX={false} />

        {/* 5. SOBRE: O QUE É O GOLE DE POESIA, MANIFESTO E PILARES */}
        <About />

        {/* EFEITO DE PAPEL RASGADO: TRANSIÇÃO VINHO -> VINHO ESCURO DO FOOTER */}
        <TornPaperEdge fillColor="#4A1030" position="bottom" flipX={false} />
      </main>

      {/* 6. FOOTER: FUNDO VINHO PROFUNDO COM INSTAGRAM, CONTATO E CRÉDITOS */}
      <Footer />
    </div>
  );
}
