import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Brain,
  GraduationCap,
  Shield,
  Users,
  TrendingUp,
  Lightbulb,
  BookOpen,
  Award,
  Target,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Calendar,
  FileText,
  Zap,
  AlertCircle,
  CheckCircle,
  TrendingDown,
  BarChart3,
  Globe,
  ArrowLeft,
  Library
} from 'lucide-react';
import logoIonica from '../imports/Logo-ionica_(1).png';
import logoIonicaSmall from '../imports/Logo-ionica_(1)-1.png';
import logoFTD from '../imports/ftd_com_voce_logo.png';
import mascoteIA from '../imports/ionia-1.png';

type View = 'main' | 'edicao-abril-2026' | 'edicao-maio-2026' | 'edicao-junho-2026';

// ─── Edição Abril 2026 (arquivo) ────────────────────────────────────────────
function EdicaoAbril2026({
  onBack,
  onBackToEdicoes,
  mascote,
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  logoSmall: string;
  logoFtd: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Abril de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Edições Anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-[#6B46C1] text-white rounded-lg hover:bg-[#5B3A9E] transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição Atual
            </button>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-sm text-[#6B46C1] font-medium">Insight da Quinzena — Abril 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            O MEC abre sandbox de IA para educação básica:<br />
            <span className="text-[#6B46C1]">quem molda os critérios, molda o próximo PNLD</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            O Ministério da Educação abriu um ambiente de experimentação controlado para soluções de IA, avaliando por inovação, escalabilidade e governança ética — sinalizando os critérios que guiarão contratos públicos.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <FileText className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
          </div>
          <div className="space-y-4">
            {[
              { movimento: "MEC abre sandbox regulatório para IA na educação básica", impacto: "Players que participam ganham vantagem direta no PNLD futuro e contratos públicos", produto: "Critérios: inovação + escalabilidade + governança ética — requisitos de entrada, não diferenciais" },
              { movimento: "CNE forma comissão especial para diretrizes de IA (básica e superior)", impacto: "Regulação virá no 2º semestre de 2026 — janela de 6 meses para adequação", produto: "Empresas sem governança auditável terão barreira de entrada no mercado público" },
              { movimento: "BNCC Computação torna IA curricular em todas as escolas em 2026", impacto: "Demanda estrutural criada por lei — não depende de adoção voluntária", produto: "Janela de 12–18 meses antes de commodity. Diferencial: formação docente integrada" },
              { movimento: "Arco/Geekie consolida Teacher Assistant com OpenAI", impacto: "Primeiro player BR com IA generativa integrada ao fluxo pedagógico", produto: "Cria pressão sobre concorrentes — Plurall/SOMOS precisam acelerar integração" },
              { movimento: "MEC lança curso 'IA na prática docente' e plataforma MEC Idiomas com tutor IA", impacto: "Estado forma professores para IA antes que o mercado o faça", produto: "Cria expectativa docente que plataformas privadas precisam igualar ou superar" },
            ].map((item, i) => (
              <div key={i} className={`bg-white p-6 rounded-xl border-l-4 ${ i === 0 ? 'border-[#6B46C1]' : i === 1 ? 'border-[#FF6B35]' : 'border-purple-300'} shadow-sm hover:shadow-md transition-shadow`}>
                <p className="font-bold text-gray-900 mb-2">{item.movimento}</p>
                <p className="text-sm text-gray-600 mb-1"><span className="font-semibold text-[#6B46C1]">Impacto:</span> {item.impacto}</p>
                <p className="text-sm text-gray-500"><span className="font-semibold">Para produto:</span> {item.produto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
          </div>
          <div className="grid gap-5">
            {[
              { titulo: "MEC Sandbox de IA: ambiente regulatório aberto", empresa: "MEC / Governo Federal", data: "Março–Abril 2026", resumo: "O Ministério da Educação abriu inscrições para sandbox regulatório avaliando soluções de IA por inovação, escalabilidade e governança ética. Publicação do documento orientador 'IA na Educação Básica'.", impacto: "Empresas que participarem moldam os critérios que valerão nos próximos ciclos do PNLD. É uma janela que se fecha em 12–18 meses.", color: "from-purple-600 to-purple-700" },
              { titulo: "BNCC Computação: IA obrigatória em todas as escolas em 2026", empresa: "CNE / Redes de Ensino", data: "2026", resumo: "A partir de 2026, a BNCC Computação passa a ser obrigatória em todas as escolas brasileiras, tornando o trabalho com IA parte estruturada do currículo.", impacto: "Janela de 12–18 meses para sistemas de ensino sem solução de IA curricular. Quem chegar primeiro com formação + ferramenta integradas captura o mercado.", color: "from-purple-700 to-purple-800" },
              { titulo: "Arco/Geekie + OpenAI: Teacher Assistant em expansão", empresa: "Arco Educação / Geekie", data: "Abril 2026", resumo: "A Arco Educação reporta avanços na parceria com OpenAI anunciada em 2024. O Teacher Assistant, que gera planos pedagógicos personalizados para alunos com deficiência, está em expansão.", impacto: "Primeiro grande player BR com IA generativa no fluxo pedagógico. Cria pressão sobre Plurall/SOMOS para acelerarem suas próprias integrações.", color: "from-purple-500 to-purple-600" },
              { titulo: "MEC lança curso de IA para docentes e plataforma de idiomas com IA", empresa: "MEC", data: "Abril 2026", resumo: "Curso 'IA na prática docente' disponível na Plataforma Mais Professores. Lançamento da MEC Idiomas com tutor de IA que corrige pronúncia e permite prática de conversação.", impacto: "Estado formando professores para IA cria expectativa docente que plataformas privadas precisarão igualar ou superar.", color: "from-purple-600 to-violet-600" },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${m.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{m.empresa}</span>
                    <span className="text-xs text-gray-400">{m.data}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{m.titulo}</h4>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{m.resumo}</p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                    <p className="text-xs text-gray-700 leading-relaxed">{m.impacto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <img src={mascote} alt="iônIA" className="h-14 w-auto opacity-90" />
            <div>
              <p className="text-purple-200 text-xs font-semibold uppercase tracking-widest mb-1">Implicação Estratégica</p>
              <h3 className="text-2xl font-bold">O que isso significa para produto</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titulo: "Sandbox como atalho estratégico", desc: "Participar do sandbox do MEC não é burocracia — é posicionamento. Quem moldou os critérios terá vantagem natural nos contratos públicos que virão em 2026/2027." },
              { titulo: "Formação docente como moat", desc: "BNCC Computação obrigatória cria demanda estrutural. O produto que treina o professor enquanto ele usa — não em curso separado — tem retenção que nenhum contrato garante." },
              { titulo: "Governança como requisito de entrada", desc: "O documento orientador do MEC e as diretrizes do CNE estão sinalizando que compliance de IA vai virar pré-requisito, não diferencial, para contratos públicos." },
              { titulo: "Janela fechando para players BR", desc: "Arco/Geekie tem vantagem hoje. Concorrentes têm 12–18 meses para desenvolver integração comparável antes que a vantagem se solidifique em churn muito baixo." },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/20">
                <h4 className="font-bold text-white mb-2">{item.titulo}</h4>
                <p className="text-purple-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { titulo: "Entrar no MEC Sandbox — janela fechando", desc: "Submeter solução com foco em governança ética e escalabilidade. Critérios explícitos: inovação + escalabilidade + governança. Posicionamento privilegiado em contratos públicos e PNLD futuros.", destaque: true },
              { titulo: "Formação docente integrada à ferramenta", desc: "BNCC Computação obrigatória em 2026 cria demanda estrutural. Produto que ensina o professor enquanto ele usa — não em curso separado — tem adoção comprovada e retenção alta.", destaque: true },
              { titulo: "IA com dado longitudinal do aluno", desc: "Ferramentas genéricas não têm histórico. As soluções dos grupos educacionais têm — mas não estão usando. Conectar IA ao histórico real cria diferenciação que nenhuma big tech consegue replicar.", destaque: false },
              { titulo: "Governança auditável para compliance CNE", desc: "CNE publicará diretrizes no 2º semestre de 2026. Produto que entrega rastreabilidade + log auditável + relatório para gestor vira requisito de entrada no mercado público regulado.", destaque: false },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border-2 transition-all ${item.destaque ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg' : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                  <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
                </div>
                <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Todas as Edições
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Edição Atual
          </button>
        </div>
      </section>

      <footer className="py-10 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoSmall} alt="Iônica" className="h-7 w-auto opacity-80" />
            <div>
              <p className="text-white/80 text-sm font-semibold">Pulso IA</p>
              <p className="text-white/50 text-xs">Radar de IA na Educação · Abril 2026</p>
            </div>
          </div>
          <img src={logoFtd} alt="FTD" className="h-6 w-auto opacity-40" />
        </div>
      </footer>
    </div>
  );
}

function EdicaoMaio2026({
  onBack,
  onBackToEdicoes,
  mascote,
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  logoSmall: string;
  logoFtd: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Maio de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <Library className="w-4 h-4" />
              Edições anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#6B46C1] text-white text-sm font-medium rounded-lg hover:bg-[#5B3A9E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-3 h-3" />
              Maio de 2026
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              A próxima disputa da IA na educação não será pela melhor{" "}
              <span className="text-[#6B46C1]">funcionalidade</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O mercado migra de features isoladas para ecossistemas operacionais integrados —
              CNE regulamenta, Moderna Core e Positivo+AWS definem o novo benchmark.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumo executivo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Principais <span className="text-[#6B46C1]">Implicações</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  titulo: "CNE regulamenta uso de IA na educação",
                  desc: "Nova regulamentação institucionaliza a IA como parte da operação escolar — governança, rastreabilidade e transparência tornam-se diferenciais competitivos.",
                  cor: "border-[#FF6B35]"
                },
                {
                  titulo: "Ecossistemas integrados definem o novo benchmark",
                  desc: "Moderna Core e Positivo+AWS sinalizam: a competição migrou de features isoladas para jornadas completas — conteúdo + analytics + IA + acompanhamento.",
                  cor: "border-[#6B46C1]"
                },
                {
                  titulo: "Analytics operacional ganha força",
                  desc: "Plurall 2026 e outros players apostam em dados que viram ação pedagógica — IA prescritiva supera IA descritiva.",
                  cor: "border-[#FF6B35]"
                },
                {
                  titulo: "Consolidação via M&A acelera",
                  desc: "Árvore adquire Typper — mercado entra em fase de concentração e fortalecimento de ecossistemas. Integração e interoperabilidade tornam-se críticas.",
                  cor: "border-[#6B46C1]"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="font-semibold text-gray-900 mb-1">{item.titulo}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais movimentos */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Movimentos <span className="text-[#6B46C1]">de Maio</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  num: "01",
                  titulo: "Moderna Core: ecossistema integrado",
                  desc: "Plataforma completa combinando conteúdo, IA, analytics e acompanhamento — novo benchmark do setor educacional.",
                  cor: "from-purple-600 to-purple-700"
                },
                {
                  num: "02",
                  titulo: "Positivo + AWS: IA generativa em escala",
                  desc: "Parceria traz infraestrutura enterprise e capacidade técnica robusta para IA generativa no ambiente educacional.",
                  cor: "from-orange-500 to-orange-600"
                },
                {
                  num: "03",
                  titulo: "Plurall 2026: analytics operacional",
                  desc: "SOMOS Educação aposta em inteligência pedagógica acionável — dados virando recomendações práticas para professores.",
                  cor: "from-violet-500 to-violet-600"
                },
                {
                  num: "04",
                  titulo: "Árvore adquire Typper",
                  desc: "Primeira grande aquisição EdTech do ciclo — mercado entra em fase de consolidação e fortalecimento de plataformas proprietárias.",
                  cor: "from-purple-700 to-purple-800"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implicação estratégica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-[#FF6B35] font-medium">Implicação Estratégica</span>
            </div>
            <div className="bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <img src={mascote} alt="" className="h-14 w-auto flex-shrink-0 opacity-90" />
                <div>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed mb-3">
                    A vantagem competitiva migrou de "ter IA" para "ter IA operacional integrada
                    ao ecossistema educacional" — features isoladas perdem valor,
                    plataformas completas ganham mercado.
                  </p>
                  <p className="text-white/70 text-sm">
                    Quem conectar conteúdo + analytics + IA + formação docente numa jornada única define o padrão.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades de produto */}
      <section className="py-20 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              O que construir <span className="text-[#6B46C1]">a partir disso</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  titulo: "Copiloto docente integrado",
                  desc: "IA que assiste o professor em planejamento, adaptação de conteúdo e acompanhamento, conectada ao ecossistema.",
                  destaque: true
                },
                {
                  titulo: "Analytics pedagógico acionável",
                  desc: "Transformar dados em recomendações práticas para intervenção pedagógica — sair do dashboard para a ação.",
                  destaque: true
                },
                {
                  titulo: "Telemetria de aprendizagem",
                  desc: "Rastrear jornada do aluno com granularidade para personalização real e evidências de impacto.",
                  destaque: false
                },
                {
                  titulo: "Integração de jornada completa",
                  desc: "IA que conecta diagnóstico → intervenção → acompanhamento → avaliação numa experiência unificada.",
                  destaque: false
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                    <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
                  </div>
                  <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                  <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navegação inferior */}
      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <Library className="w-4 h-4" />
            Voltar para edições anteriores
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição atual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={mascote} alt="PULSO" className="h-16 w-auto mx-auto mb-4 drop-shadow-lg" />
          <p className="text-white/70 text-sm font-medium mb-1">PULSO — Radar de IA na Educação</p>
          <div className="pt-5 border-t border-white/15 mt-5 space-y-1">
            <p className="text-white/60 text-xs">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Maio de 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Edição Junho 2026 (arquivo) ────────────────────────────────────────────
function EdicaoJunho2026({
  onBack,
  onBackToEdicoes,
  mascote,
  logoSmall,
  logoFtd,
}: {
  onBack: () => void;
  onBackToEdicoes: () => void;
  mascote: string;
  logoSmall: string;
  logoFtd: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascote} alt="PULSO" className="h-9 w-auto" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mb-0.5">Edição Anterior</p>
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Junho de 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToEdicoes}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Edições Anteriores
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-[#6B46C1] text-white rounded-lg hover:bg-[#5B3A9E] transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Edição Atual
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-white via-purple-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-sm text-[#6B46C1] font-medium">Insight da Quinzena — Junho 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            O Brasil chegou ao ponto de inflexão:<br />
            <span className="text-[#6B46C1]">IA na educação virou objeto de regulação, capital e escala</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            CNE aprovou diretrizes com semáforo de riscos, BNDES injetou R$ 300M na Positivo e Plurall IA gerou 26 mil PEIs em 3 meses. O mercado não discute mais se — disputa quem chega primeiro.
          </p>
        </div>
      </section>

      {/* Resumo Executivo */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <FileText className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
          </div>
          <div className="space-y-4">
            {[
              { movimento: "CNE aprova semáforo de riscos para IA (mai/2026)", impacto: "Compliance vira requisito de entrada — não diferencial opcional", produto: "Produtos sem governança auditável perdem acesso ao mercado público regulado", cor: "border-[#6B46C1]" },
              { movimento: "BNDES injeta R$ 300M na Positivo para IA + plataforma MARIA com GPT", impacto: "Capital institucional valida o setor — modelo replicável por outros grupos", produto: "Vertical integrada (hardware + software + IA própria) cria vantagem estrutural", cor: "border-[#FF6B35]" },
              { movimento: "Moderna relança Aprova Brasil com IA para 800k alunos e SAEB (mai/2026)", impacto: "Defesa de base instalada com upgrade tecnológico — produto com 15 anos ganha nova vida", produto: "Integrar conteúdo + avaliação SAEB + IA + analytics num único produto é o novo benchmark público", cor: "border-purple-300" },
              { movimento: "Google + UNICEF entram no mercado público BR com Gemini e NotebookLM (mai/2026)", impacto: "Big tech contorna ausência de conteúdo BR via parceria institucional multilateral", produto: "Resposta não é produto melhor — é relacionamento mais profundo com redes e secretarias", cor: "border-purple-300" },
              { movimento: "Plurall IA: 26 mil PEIs gerados, 2 mil escolas ativas em 3 meses", impacto: "Primeira prova de escala real de IA no ensino formal brasileiro", produto: "PEI automatizado deixou de ser hipótese — é demanda comprovada e mercado aberto", cor: "border-purple-300" },
            ].map((item, i) => (
              <div key={i} className={`bg-white p-6 rounded-xl border-l-4 ${item.cor} shadow-sm hover:shadow-md transition-shadow`}>
                <p className="font-bold text-gray-900 mb-2">{item.movimento}</p>
                <p className="text-sm text-gray-600 mb-1"><span className="font-semibold text-[#6B46C1]">Impacto:</span> {item.impacto}</p>
                <p className="text-sm text-gray-500"><span className="font-semibold">Para produto:</span> {item.produto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movimentos */}
      <section className="py-16 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { titulo: "CNE aprova diretrizes com semáforo de riscos para IA", empresa: "CNE / MEC", data: "11 mai/2026", resumo: "CNE aprovou parecer que classifica tecnologias por risco: proibiu vigilância emocional e perfilização psicológica; exige supervisão humana em correção automatizada.", impacto: "Compliance vira requisito de entrada no mercado público. Produto sem governança auditável perde acesso a contratos regulados.", color: "from-purple-600 to-purple-700" },
              { titulo: "BNDES injeta R$ 300M na Positivo — plataforma MARIA integra GPT", empresa: "Positivo Tecnologia / BNDES", data: "Abril–Maio 2026", resumo: "Positivo fechou financiamento de até R$ 300M com BNDES para Plano de Inovação 2026–2028, incluindo MARIA, assistente de IA que monta planos de estudo personalizados.", impacto: "Vertical integrada (hardware + software + IA própria) cria vantagem estrutural difícil de replicar por players apenas de software.", color: "from-purple-700 to-purple-800" },
              { titulo: "Moderna relança Aprova Brasil com IA para 800k alunos", empresa: "Moderna / Santillana", data: "Bett Brasil / mai 2026", resumo: "Soluções Moderna lançou nova versão do Aprova Brasil com monitoramento em tempo real, análise de performance no SAEB e intervenção pedagógica baseada em IA.", impacto: "Produto de 15 anos ganhou nova vida com IA integrada. Benchmark: conteúdo + SAEB + analytics em plataforma única.", color: "from-purple-500 to-purple-600" },
              { titulo: "Google + UNICEF parceria 3 anos no Brasil — Gemini e NotebookLM em escolas públicas", empresa: "Google / UNICEF", data: "Mai/2026", resumo: "Parceria trienal anuncia uso de Gemini e NotebookLM em escolas públicas brasileiras. Google.org destina R$ 5M para expandir programa Experience AI no Brasil.", impacto: "Big tech contorna ausência de conteúdo brasileiro via parceria institucional multilateral — canal de distribuição diferente dos players privados.", color: "from-purple-600 to-violet-600" },
              { titulo: "Plurall IA: 26 mil PEIs gerados em 3 meses", empresa: "Somos / Plurall", data: "mai/2026", resumo: "Em 3 meses de uso, mais de 2 mil escolas criaram pelo menos um PEI na plataforma Plurall IA, com 26 mil conteúdos adaptados gerados. Predição por IA prevista para 2026.", impacto: "Primeira prova de escala real de IA no ensino formal brasileiro. PEI automatizado saiu de hipótese para demanda comprovada.", color: "from-purple-600 to-purple-700" },
              { titulo: "Bett Brasil 2026: 65 mil visitantes, +40% vs 2025", empresa: "Bett Brasil", data: "mai/2026", resumo: "Maior edição da história do evento com lançamentos de Somos, Moderna, Super Professor (Leitor de Gabaritos + Diagramador), SoftBank Robotics (Léia) e relatório OCDE em português.", impacto: "Mercado saiu do discurso para o produto. Volume de lançamentos indica corrida por posicionamento antes da regulação final do CNE.", color: "from-purple-700 to-purple-800" },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${m.color}`} />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{m.empresa}</span>
                    <span className="text-xs text-gray-400">{m.data}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm leading-snug">{m.titulo}</h4>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">{m.resumo}</p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                    <p className="text-xs text-gray-700 leading-relaxed">{m.impacto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implicação Estratégica */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <img src={mascote} alt="iônIA" className="h-14 w-auto opacity-90" />
            <div>
              <p className="text-purple-200 text-xs font-semibold uppercase tracking-widest mb-1">Implicação Estratégica</p>
              <h3 className="text-2xl font-bold">O que mudou de Maio para Junho</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titulo: "Regulação chegou com dentes", desc: "CNE não apenas orientou — classificou por risco. Produtos que monitoram emoção ou geram decisão automatizada sobre aluno estão proibidos. Compliance deixou de ser opcional." },
              { titulo: "Capital institucional valida o mercado", desc: "BNDES + R$ 300M na Positivo é o sinal mais claro: o setor deixou de ser experimento e virou prioridade de política industrial. Modelo replicável por outros grupos." },
              { titulo: "Escala saiu do piloto", desc: "26 mil PEIs em 3 meses — é a primeira evidência de escala real de IA no ensino formal BR. Transforma argumento de vendas: deixou de ser 'pode funcionar', virou 'já funciona'." },
              { titulo: "Big techs acelerando pelo canal público", desc: "Google + UNICEF escolheu escola pública como porta de entrada — onde nenhum player BR tem relacionamento multilateral comparável. Diferente da ameaça privada, essa é mais lenta mas mais ampla." },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/20">
                <h4 className="font-bold text-white mb-2">{item.titulo}</h4>
                <p className="text-purple-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="py-16 px-6 bg-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
            <span className="text-sm text-[#6B46C1] font-medium">Oportunidades de Produto</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { titulo: "PEI automatizado com IA para inclusão", desc: "Plurall IA provou a escala — 26 mil PEIs em 3 meses. Com 5,1M de alunos com deficiência no Brasil e menos de 30% com PEI adequado, a oportunidade é enorme e urgente.", destaque: true },
              { titulo: "Governança auditável para compliance CNE", desc: "CNE definiu o semáforo. Produto que entrega rastreabilidade de decisões de IA + log auditável + relatório para gestor vira requisito de entrada no mercado público regulado.", destaque: true },
              { titulo: "Analytics prescritivo com dado SAEB", desc: "Moderna Aprova Brasil mostrou o modelo: SAEB + recomendação pedagógica + IA. Oportunidade para plataformas com dado de desempenho conectar performance com intervenção.", destaque: false },
              { titulo: "Produto de formação docente integrada à ferramenta", desc: "79% dos professores não sabem ensinar com IA. Produto que treina o professor enquanto ele usa — não em curso separado — tem retenção comprovada e diferenciação durável.", destaque: false },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border-2 transition-all ${item.destaque ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg' : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${item.destaque ? 'bg-white/20' : 'bg-purple-100'}`}>
                  <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
                </div>
                <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>{item.titulo}</h3>
                <p className={`text-sm leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-purple-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToEdicoes}
            className="flex items-center gap-2 px-5 py-3 border border-[#6B46C1] text-[#6B46C1] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Todas as Edições
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Edição Atual
          </button>
        </div>
      </section>

      <footer className="py-10 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoSmall} alt="Iônica" className="h-7 w-auto opacity-80" />
            <div>
              <p className="text-white/80 text-sm font-semibold">Pulso IA</p>
              <p className="text-white/50 text-xs">Radar de IA na Educação · Junho 2026</p>
            </div>
          </div>
          <img src={logoFtd} alt="FTD" className="h-5 w-auto opacity-40" />
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('insight');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentView, setCurrentView] = useState<View>('main');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['insight', 'resumo', 'movimentos', 'concorrencia', 'benchmarks', 'analise', 'hype', 'oportunidades', 'sinais', 'edicoes'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEdicao = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'edicao-junho-2026') {
    return (
      <EdicaoJunho2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={mascoteIA}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
      />
    );
  }

  if (currentView === 'edicao-maio-2026') {
    return (
      <EdicaoMaio2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={mascoteIA}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
      />
    );
  }

  if (currentView === 'edicao-abril-2026') {
    return (
      <EdicaoAbril2026
        onBack={() => goToEdicao('main')}
        onBackToEdicoes={() => {
          setCurrentView('main');
          setTimeout(() => {
            const el = document.getElementById('edicoes');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}
        mascote={mascoteIA}
        logoSmall={logoIonicaSmall}
        logoFtd={logoFTD}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 md:py-4">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative flex-shrink-0">
                <img src={mascoteIA} alt="PULSO" className="h-10 md:h-12 w-auto" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base md:text-lg font-bold text-gray-900 tracking-tight">PULSO</h1>
                  <span className="hidden md:inline text-xs text-gray-400 font-normal">·</span>
                  <span className="hidden md:inline text-xs text-gray-500">Radar de IA na Educação</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-50/60 px-3 py-2 rounded-lg border border-purple-100/60">
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest leading-none mb-0.5">Edição Atual</p>
                    <p className="text-xs font-semibold text-[#6B46C1] leading-tight">Julho de 2026</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={logoIonica} alt="Iônica" className="h-6 md:h-7 w-auto opacity-70 hidden sm:block" />
              <img src={logoFTD} alt="FTD" className="h-5 md:h-6 w-auto opacity-50 hidden sm:block" />
            </div>
          </div>

          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {[
              { id: 'insight', label: 'Insight' },
              { id: 'resumo', label: 'Resumo' },
              { id: 'movimentos', label: 'Movimentos' },
              { id: 'concorrencia', label: 'Concorrência' },
              { id: 'benchmarks', label: 'Benchmarks' },
              { id: 'analise', label: 'Análise' },
              { id: 'hype', label: 'Hype' },
              { id: 'oportunidades', label: 'Oportunidades' },
              { id: 'sinais', label: 'Sinais' },
              { id: 'edicoes', label: 'Arquivo' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeSection === item.id
                    ? 'bg-[#6B46C1] text-white'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-[#6B46C1]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ── INSIGHT DA QUINZENA ── */}
      <section id="insight" className="min-h-screen flex items-center justify-center pt-44 md:pt-48 px-6 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA QUINZENA</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl text-gray-900 font-bold mb-8 leading-tight">
              O Gemini entrou direto no ENEM:<br />
              a batalha agora é pelo <span className="text-[#6B46C1]">estudante brasileiro</span><br />
              <span className="text-[#FF6B35]">dentro do exame mais disputado do país</span>
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Em junho de 2026, o Google anunciou simulados gratuitos do ENEM diretamente no app Gemini, desenvolvidos com a Akira Enem. Enquanto isso, o CNE abriu consulta pública até 14 de junho e a Moderna Plus avançou com material para o PNLD 2026 no Ensino Médio. O campo de batalha migrou do produto para o <strong className="text-[#6B46C1]">canal de distribuição</strong> — e o Gemini encontrou o atalho mais curto para 10 milhões de vestibulandos.
              </p>

              <div className="bg-white p-8 rounded-2xl border-2 border-purple-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Por que este momento é diferente?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Target className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Canal direto ao aluno:</strong> Simulado gratuito no Gemini app é distribuição zero cost para 10M+ de vestibulandos — sem passar por escola, professor ou sistema de ensino
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Regulação em consulta:</strong> CNE abriu consulta pública até 14/jun — janela rara para players BR influenciarem as regras antes de serem definidas
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <BookOpen className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>PNLD 2026 em disputa:</strong> Moderna Plus Educação Digital lançada para Ensino Médio — corrida por materiais aprovados começa a definir quem ocupa o currículo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div style={{ opacity }} className="mt-12">
              <ChevronDown className="w-8 h-8 text-[#6B46C1] mx-auto animate-bounce" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── RESUMO EXECUTIVO ── */}
      <section id="resumo" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Resumo Executivo</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              O que mudou em <span className="text-[#6B46C1]">Junho/Julho 2026</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  movimento: "Google lança simulados gratuitos do ENEM no Gemini (jun/2026)",
                  impacto: "Big tech entra no mercado de preparação para vestibular com canal direto ao aluno — zero fricção, zero custo",
                  produto: "Players de cursinho e preparatório precisam redirecionar diferencial para o que o Gemini não entrega: mentoria humana, trilha personalizada por histórico, conteúdo adaptado à escola"
                },
                {
                  movimento: "CNE abre consulta pública sobre diretrizes de IA (até 14/jun/2026)",
                  impacto: "Última janela antes da regulação ser fechada — quem contribui influencia critérios que valerão por anos",
                  produto: "Participar não é opcional para quem quer contratos públicos: a regulação vai exigir adequações e quem moldou os critérios chega na frente"
                },
                {
                  movimento: "Moderna Plus Educação Digital lançada para PNLD 2026 — Ensino Médio",
                  impacto: "Material digital integrado ao PNLD cria lock-in curricular pelo livro didático aprovado pelo MEC",
                  produto: "Ensino Médio público é o maior mercado BR — player com material PNLD aprovado tem distribuição de 8M+ alunos garantida sem custo de aquisição"
                },
                {
                  movimento: "Gemini Summit 2026: Google forma professores brasileiros em IA — evento gratuito",
                  impacto: "Google usa formação docente gratuita como canal de adoção do ecossistema — estratégia de longo prazo que players BR precisam responder",
                  produto: "Formação gratuita cria vantagem de rede: professor formado pelo Google usa Gemini na sala, não Copilot nem ferramenta proprietária"
                },
                {
                  movimento: "Geekie expande Caderno do Estudo Inteligente para novos componentes + Ultravisão da Coordenação",
                  impacto: "Geekie aprofunda integração física-digital: material impresso com QR codes ligados à plataforma, analytics para coordenadores",
                  produto: "Modelo híbrido (impresso + IA) resolve a realidade das escolas que ainda usam caderno — diferencial que produto 100% digital não tem"
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-[#FF6B35] shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-bold text-gray-900 mb-2">{item.movimento}</p>
                  <p className="text-sm text-gray-600 mb-1"><span className="font-semibold text-[#6B46C1]">Impacto:</span> {item.impacto}</p>
                  <p className="text-sm text-gray-500"><span className="font-semibold">Para produto:</span> {item.produto}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRINCIPAIS MOVIMENTOS ── */}
      <section id="movimentos" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Movimentos da <span className="text-[#6B46C1]">Quinzena</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  titulo: "Gemini lança simulados gratuitos do ENEM no app — parceria com Akira Enem",
                  empresa: "Google",
                  data: "10 jun/2026",
                  resumo: "O Google anunciou durante o Google for Brasil 2026 que o Gemini passará a oferecer simulados gratuitos do ENEM. Desenvolvida com a Akira Enem, a ferramenta oferece testes completos ou por área, com diagnóstico detalhado, análise de desempenho e plano de estudos personalizado.",
                  impacto: "Canal direto para 10M+ vestibulandos sem passar por escola ou sistema de ensino. Ameaça específica a players de preparatório: Descomplica, Estratégia, Aprova Concursos.",
                  fonte: "https://tecnoblog.net/noticias/gemini-tera-simulados-e-planos-de-estudo-para-enem/",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  titulo: "CNE consulta pública sobre IA: janela para players BR influenciarem a regulação",
                  empresa: "CNE / MEC",
                  data: "18 mai–14 jun/2026",
                  resumo: "Após aprovar diretrizes em maio, CNE abriu consulta pública virtual para contribuições de escolas, empresas e especialistas até 14 de junho. Diretrizes classificam riscos: proibição de vigilância emocional, exigência de supervisão humana em correção automatizada.",
                  impacto: "Quem contribuiu para a consulta tem argumento técnico de alinhamento regulatório no processo comercial. Quem não contribuiu se submete aos critérios de quem contribuiu.",
                  fonte: "https://www.apufsc.org.br/2026/05/12/cne-aprova-diretrizes-para-ia-na-educacao/",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "Moderna Plus Educação Digital lançada para PNLD 2026 — Ensino Médio",
                  empresa: "Moderna / Santillana",
                  data: "Fev–Jun 2026",
                  resumo: "Material didático integrado para o Ensino Médio como parte do PNLD 2026, combinando recurso impresso com plataforma digital. Aprovação pelo PNLD garante distribuição para 8M+ alunos do Ensino Médio público.",
                  impacto: "Lock-in curricular pelo livro didático aprovado. Player com material PNLD aprovado tem distribuição garantida — modelo de negócio com custo de aquisição próximo a zero.",
                  fonte: "https://www.facebook.com/editoramoderna/videos/pnld-2026-ensino-m%C3%A9dio-moderna-plus-educa%C3%A7%C3%A3o-digital/1716753715679384/",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  titulo: "Google Gemini Summit 2026: formação gratuita de professores brasileiros em IA",
                  empresa: "Google Education",
                  data: "Jun/2026",
                  resumo: "Evento gratuito de três semanas forma professores, gestores e lideranças educacionais brasileiras em uso do Gemini. Programação inclui planos de aula aumentados, alinhamento com BNCC e uso ético e responsável da IA.",
                  impacto: "Formação gratuita é estratégia de lock-in suave: professor formado pelo Google adota Gemini no fluxo de trabalho. Escala nacional sem custo de aquisição para o Google.",
                  fonte: "https://patriciencias.com/google-gemini-summit-2026/",
                  color: "from-purple-600 to-violet-600"
                },
                {
                  titulo: "Geekie expande Caderno do Estudo Inteligente + lança Ultravisão da Coordenação",
                  empresa: "Geekie",
                  data: "Jun/2026",
                  resumo: "Expansão do Caderno do Estudo Inteligente para novos componentes curriculares. Lançamento da Ultravisão da Coordenação — tela de gestão com dados consolidados de alunos, turmas e professores para coordenadores pedagógicos.",
                  impacto: "Modelo híbrido (impresso + IA + analytics) endereça realidade das escolas que não são 100% digitais. Ultravisão cria camada de gestão que retém o cliente no ecossistema.",
                  fonte: "https://www.geekie.com.br/melhor-solucao-de-tecnologia-educacional-para-escolas-particulares-tecnologia-educacional/",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "MEC Idiomas lançado com tutor de IA para correção de pronúncia e conversação",
                  empresa: "MEC",
                  data: "Abr–Jun/2026",
                  resumo: "Plataforma gratuita MEC Idiomas disponível para computadores e Android/iOS oferece centenas de aulas em seis níveis de proficiência com tutor de IA que corrige pronúncia e permite prática de conversação em tempo real.",
                  impacto: "Estado entregando produto de IA de qualidade gratuitamente cria benchmark público difícil de bater por preço. Diferencial para players privados precisa ser profundidade, personalização ou integração curricular.",
                  fonte: "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/abril/mec-lanca-orientacoes-sobre-ia-na-educacao-basica",
                  color: "from-purple-600 to-purple-700"
                },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${m.color}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">
                          <Users className="w-3 h-3" /> {m.empresa}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-full">
                          <Calendar className="w-3 h-3" /> {m.data}
                        </span>
                      </div>
                      <a href={m.fonte} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#6B46C1] transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 leading-snug">{m.titulo}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{m.resumo}</p>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{m.impacto}</p>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-[#6B46C1] rounded-lg group-hover:bg-[#6B46C1] group-hover:text-white transition-all font-medium text-sm mt-4">
                      <ExternalLink className="w-4 h-4" />
                      Ver fonte
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONCORRÊNCIA DIRETA ── */}
      <section id="concorrencia" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Concorrência Direta</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Mapa <span className="text-[#6B46C1]">Competitivo</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-50">
                    {["Player", "Movimento recente", "Estratégia implícita", "Maturidade IA", "Impacto competitivo"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-purple-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { player: "Google", movimento: "Simulados gratuitos ENEM no Gemini + Gemini Summit para professores", estrategia: "Canal direto ao aluno e ao professor — ecossistema fecha pelo uso gratuito antes de qualquer contrato", maturidade: "Alta", impacto: "Alto" },
                    { player: "Moderna / Santillana", movimento: "Moderna Plus PNLD 2026 + Aprova Brasil com IA para 800k alunos", estrategia: "Lock-in via currículo aprovado + base instalada com upgrade tecnológico", maturidade: "Média-Alta", impacto: "Alto" },
                    { player: "Geekie (Arco)", movimento: "Caderno Estudo Inteligente + Ultravisão da Coordenação + OpenAI Teacher Assistant", estrategia: "Ecossistema híbrido (impresso + digital + analytics) que atende school reality, não school ideal", maturidade: "Alta", impacto: "Alto" },
                    { player: "Plurall / Somos", movimento: "26 mil PEIs gerados + funcionalidade de predição IA prevista", estrategia: "Walled garden: IA treinada com conteúdo proprietário + dado de desempenho real", maturidade: "Média-Alta", impacto: "Alto" },
                    { player: "Positivo", movimento: "MARIA (assistente IA) + R$ 300M BNDES + expansão B2B escolas", estrategia: "Vertical integrada: hardware + software + IA própria = custo total de propriedade menor", maturidade: "Média", impacto: "Médio-Alto" },
                    { player: "MEC / Gov Federal", movimento: "MEC Idiomas com IA + PNLD 2026 + consulta CNE + BNCC Computação", estrategia: "Estado como agente de distribuição gratuita — pressiona player privado a diferenciar por profundidade", maturidade: "Baixa-Média", impacto: "Alto" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-purple-50/30 transition-colors' : 'bg-purple-50/20 hover:bg-purple-50/40 transition-colors'}>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{row.player}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{row.movimento}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed">{row.estrategia}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.maturidade.includes('Alta') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {row.maturidade}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.impacto === 'Alto' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                          {row.impacto}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENCHMARKS DE INOVAÇÃO ── */}
      <section id="benchmarks" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Globe className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Benchmarks de Inovação</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              O que o mundo está <span className="text-[#6B46C1]">fazendo</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  empresa: "Khan Academy + Microsoft",
                  pais: "EUA / Global",
                  what: "Khan Academy Districts 2026–27: renovação com plataforma reimaginada, lançando para todos os usuários em julho 2026. Azure OpenAI integrado ao Khanmigo com licença gratuita até jun/2027.",
                  why: "Modelo de distribuição via distrito escolar é o mais próximo do modelo de sistema de ensino brasileiro. A gratuidade temporária com conversão posterior é estratégia de crescimento replicável.",
                  application: "Player BR poderia replicar: oferta gratuita em escolas públicas selecionadas → dado de uso → argumento comercial para rede privada. Dado público valida produto para o privado."
                },
                {
                  empresa: "Gemini + Akira Enem",
                  pais: "Brasil",
                  what: "Simulado completo do ENEM no app Gemini com correção automática, diagnóstico por área e plano de estudos personalizado — disponível a partir de julho/2026 sem custo.",
                  why: "Primeiro produto de IA do Google desenhado especificamente para o contexto educacional brasileiro. Sinaliza que o ENEM é o maior ponto de entrada no mercado de educação do país.",
                  application: "Para players de conteúdo: o simulado genérico virou commodity. Diferencial está no simulado com histórico longitudinal do aluno, adaptado ao currículo da escola específica."
                },
                {
                  empresa: "Anthropic Learning Mode",
                  pais: "Global",
                  what: "Claude for Education com 'Learning Mode': configurado por instituição, responde de forma socrática — guia o raciocínio em vez de entregar a resposta. 100k professores via Teach For All.",
                  why: "Resposta direta à crítica pedagógica principal da IA na educação. Ao embutir método pedagógico no modelo, Anthropic criou diferencial que modelos genéricos não têm por padrão.",
                  application: "Para produto BR: configurabilidade pedagógica é o diferencial. Produto que permite escola definir 'como a IA se comporta' com os alunos dessa escola tem argumento que ChatGPT e Gemini não têm."
                },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold text-gray-900">{b.empresa}</p>
                      <p className="text-xs text-gray-500">{b.pais}</p>
                    </div>
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-purple-700 mb-1">O que estão fazendo</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{b.what}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-orange-600 mb-1">Por que importa</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{b.why}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Aplicação no ensino formal BR</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{b.application}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ANÁLISE ESTRATÉGICA ── */}
      <section id="analise" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Target className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Análise Estratégica</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Diferenciação vs <span className="text-[#6B46C1]">Commodity</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  <p className="font-bold text-red-700 text-sm uppercase tracking-wide">Virou commodity em Julho/2026</p>
                </div>
                <div className="space-y-4">
                  {[
                    { item: "Simulado com IA", motivo: "Gemini entregou de graça para 10M de vestibulandos em junho" },
                    { item: "Chatbot para tirar dúvidas do aluno", motivo: "ChatGPT, Gemini e Claude estão disponíveis sem custo" },
                    { item: "Geração de atividades e provas", motivo: "Qualquer LLM gera em segundos — sem diferencial" },
                    { item: "Correção ortográfica e gramatical", motivo: "Feature de editores de texto gratuitos" },
                    { item: "Resumo automático de conteúdo", motivo: "NotebookLM faz gratuitamente com qualquer PDF" },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{c.item}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{c.motivo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="font-bold text-green-700 text-sm uppercase tracking-wide">Ainda diferencia em Julho/2026</p>
                </div>
                <div className="space-y-4">
                  {[
                    { item: "IA treinada com currículo proprietário do sistema de ensino", motivo: "Google e OpenAI não têm os livros didáticos e avaliações das escolas brasileiras" },
                    { item: "Simulado com histórico longitudinal do aluno", motivo: "Gemini conhece vestibulando anônimo — escola conhece histórico de 5 anos do aluno" },
                    { item: "Analytics prescritivo conectado ao dado de sala de aula", motivo: "Plataformas com dado real de turma e professor entregam recomendação acionável imediata" },
                    { item: "Configurabilidade pedagógica por escola", motivo: "Anthropic mostrou o caminho: escola que define 'como a IA age' retém autonomia pedagógica" },
                    { item: "Formação docente integrada ao uso da ferramenta", motivo: "Google Summit forma professor para usar Gemini — quem forma para usar sua própria plataforma tem vantagem de retenção" },
                  ].map((d, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{d.item}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{d.motivo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HYPE VS TENDÊNCIA REAL ── */}
      <section id="hype" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Hype vs Tendência Real</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              O que é ruído, o que é <span className="text-[#6B46C1]">sinal</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <p className="font-bold text-orange-700 mb-6 text-sm uppercase tracking-wide flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Superestimado
                </p>
                <div className="space-y-5">
                  {[
                    { titulo: "Gemini vai dominar a preparação para o ENEM", desc: "A ferramenta tem acesso, mas não tem o histórico do aluno nem o contexto da escola. Adoção massiva não é uso pedagógico real." },
                    { titulo: "IA regulamentada = IA paralisada", desc: "As diretrizes do CNE definem balizas, não proibições. Compliance vai acelerar adoção institucional, não frear." },
                    { titulo: "PNLD digital vai substituir o livro impresso", desc: "Escola pública ainda tem realidade de conectividade fragmentada. Material híbrido (impresso + digital) é o produto viável, não 100% digital." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <p className="font-bold text-blue-700 mb-6 text-sm uppercase tracking-wide flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Tendência Real
                </p>
                <div className="space-y-5">
                  {[
                    { titulo: "Distribuição gratuita como estratégia de lock-in", desc: "Google Summit, MEC Idiomas, Khan Academy gratuito — todos usam gratuidade como canal de adoção. Modelo que players BR deveriam considerar para ganhar escala antes de monetizar." },
                    { titulo: "Material PNLD como ativo estratégico de distribuição", desc: "Moderna Plus para Ensino Médio é prova: material aprovado pelo PNLD é o canal de distribuição mais barato do país para escola pública — zero custo de aquisição." },
                    { titulo: "Regulação criando requisito de entrada, não barreira", desc: "CNE definiu o que não pode. Quem está adequado usa conformidade como argumento comercial. Compliance é moat, não custo." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 bg-white rounded-2xl p-8 border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-5 h-5 text-[#6B46C1]" />
                  <p className="font-bold text-gray-900">O padrão desta quinzena</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  O Google não entrou na educação pela porta da escola — entrou pela porta do vestibulando. É a primeira vez que uma big tech cria produto desenhado especificamente para o contexto do ENEM, com parceria local (Akira Enem) e distribuição zero cost. O sinal é claro: quem tem canal direto ao aluno não precisa convencer a escola. Para players BR, o diferencial deixou de ser funcionalidade — é o dado do aluno que a big tech não tem.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OPORTUNIDADES DE PRODUTO ── */}
      <section id="oportunidades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Prioridades Estratégicas</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Oportunidades de <span className="text-[#6B46C1]">Produto</span>
            </h2>
            <p className="text-gray-500 mb-4">Oportunidades identificadas com base nos sinais desta quinzena</p>

            {/* Legenda */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E]" />
              <span className="text-sm text-gray-600"><strong className="text-[#6B46C1]">Roxo</strong> = oportunidade prioritária desta quinzena — sinal mais forte, janela mais estreita</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Simulado adaptativo com histórico longitudinal do aluno",
                  desc: "Gemini entregou simulado genérico — mas não tem o histórico de 3 anos do aluno na plataforma. Produto que combina banco ENEM + histórico real + diagnóstico personalizado por escola tem diferencial que big tech não pode copiar.",
                  persona: "Preparatório",
                  destaque: true
                },
                {
                  titulo: "Participação na consulta CNE — posicionamento regulatório",
                  desc: "A consulta pública do CNE encerrou em 14/jun. Quem contribuiu tem argumento técnico de alinhamento. Para próximas consultas: monitorar e participar é vantagem comercial, não burocracia.",
                  persona: "Estratégico",
                  destaque: true
                },
                {
                  titulo: "Formação docente integrada ao uso da ferramenta",
                  desc: "Google Summit forma professor para usar Gemini gratuitamente. Resposta: produto que ensina o professor a usar sua plataforma enquanto ele a usa tem retenção que curso externo não tem.",
                  persona: "Professores",
                  destaque: false
                },
                {
                  titulo: "Material híbrido (impresso + IA) para escolas com conectividade fragmentada",
                  desc: "Geekie e Moderna mostraram que material impresso com QR code ligado à plataforma funciona onde produto 100% digital falha. Escola BR é híbrida — produto que ignora isso perde mercado.",
                  persona: "Inclusão",
                  destaque: false
                },
                {
                  titulo: "Analytics para coordenador pedagógico com dado de turma",
                  desc: "Geekie lançou Ultravisão da Coordenação: dado consolidado de alunos, turmas e professores para coordenadores. Comprovou demanda. Produto que entrega visão de gestão retém cliente no ecossistema.",
                  persona: "Gestão",
                  destaque: false
                },
                {
                  titulo: "IA configurável por escola para manter autonomia pedagógica",
                  desc: "Anthropic Learning Mode mostrou o modelo: escola que define como a IA age com seus alunos mantém identidade pedagógica. Produto com configurabilidade por instituição é argumento para mantenedores exigentes.",
                  persona: "Pedagógico",
                  destaque: false
                },
                {
                  titulo: "Conteúdo PNLD com IA integrada — ensino médio público",
                  desc: "Moderna Plus para PNLD 2026 é prova de modelo: material aprovado = distribuição de 8M alunos sem custo de aquisição. Para players com capacidade editorial, PNLD digital com IA é o maior canal de escala do país.",
                  persona: "Público",
                  destaque: true
                },
                {
                  titulo: "Produto de compliance auditável para CNE",
                  desc: "CNE proibiu vigilância emocional e exigiu supervisão em correção automatizada. Produto que entrega log auditável + relatório de conformidade + trilha de supervisão humana vira requisito de entrada no mercado público.",
                  persona: "Regulatório",
                  destaque: false
                },
                {
                  titulo: "IA para formação de idiomas com custo abaixo do MEC Idiomas",
                  desc: "MEC Idiomas com tutor de IA criou benchmark gratuito. Diferencial privado: profundidade de personalização por perfil de escola, integração curricular e dado de progresso longitudinal que plataforma pública não tem.",
                  persona: "Idiomas",
                  destaque: false
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    item.destaque
                      ? 'bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] text-white border-transparent shadow-lg'
                      : 'bg-white border-purple-200 hover:border-[#FF6B35] hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.destaque ? 'bg-white/20' : 'bg-purple-100'
                    }`}>
                      <Lightbulb className={`w-4 h-4 ${item.destaque ? 'text-white' : 'text-[#6B46C1]'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold mb-2 ${item.destaque ? 'text-white' : 'text-gray-900'}`}>
                        {item.titulo}
                      </h3>
                      <p className={`text-sm mb-3 leading-relaxed ${item.destaque ? 'text-white/90' : 'text-gray-600'}`}>
                        {item.desc}
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.destaque ? 'bg-white/20 text-white' : 'bg-purple-100 text-[#6B46C1]'
                      }`}>
                        {item.persona}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SINAIS ESTRATÉGICOS ── */}
      <section id="sinais" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={mascoteIA} alt="IA Curator" className="h-10 opacity-80" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                <span className="text-sm text-[#FF6B35] font-medium">Sinais Estratégicos</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Interpretações <span className="text-[#6B46C1]">Profundas</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  sinal: "O Google não entrou pela escola — entrou pelo ENEM",
                  evidencia: "Simulados gratuitos no Gemini em parceria com Akira Enem — produto desenhado para o vestibulando, não para o professor",
                  implicacao: "Canal direto ao aluno bypassa escola, secretaria e sistema de ensino. Para players BR, o diferencial deixou de ser funcionalidade e passou a ser o dado do aluno que a big tech não tem."
                },
                {
                  sinal: "Gratuidade virou estratégia de distribuição, não de sustentabilidade",
                  evidencia: "Google Summit gratuito, MEC Idiomas gratuito, Khan Academy gratuito até jun/2027 — todos usam zero cost como canal de adoção",
                  implicacao: "Player que não tiver versão gratuita com dado real de uso vai perder a corrida de distribuição antes de conseguir monetizar. Freemium não é estratégia de produto — é estratégia de mercado."
                },
                {
                  sinal: "PNLD digital é o maior canal de distribuição sem custo do país",
                  evidencia: "Moderna Plus para Ensino Médio: aprovação pelo PNLD = 8M de alunos com material garantido sem custo de aquisição",
                  implicacao: "Para players com capacidade editorial, a equação é clara: investir no processo PNLD tem ROI de distribuição que nenhuma campanha de marketing consegue igualar. Mas exige 3–4 anos de ciclo."
                },
                {
                  sinal: "Compliance regulatório virou argumento comercial B2G",
                  evidencia: "CNE classificou riscos, proibiu vigilância emocional, exigiu supervisão humana — diretrizes concretas, não orientações",
                  implicacao: "Produto que demonstra conformidade com as diretrizes CNE tem argumento direto para contratos com secretarias de educação. Quem não adequar vai perder licitações — não por preço, por requisito."
                },
                {
                  sinal: "Geekie mostrou que o coordenador é o buyer menos explorado do setor",
                  evidencia: "Ultravisão da Coordenação: tela específica para coordenador pedagógico com dados consolidados de turma",
                  implicacao: "O mercado EdTech foca em professor e aluno. Coordenador é quem renova contrato, apresenta resultado para direção e influencia a compra do próximo ciclo. Produto que serve ao coordenador cria retenção diferente."
                },
                {
                  sinal: "Configurabilidade pedagógica é o próximo diferencial de produto",
                  evidencia: "Anthropic Learning Mode: escola configura como a IA responde aos alunos. Geekie: coordenador configura visão de dados. MEC Idiomas: tutor configurado por nível",
                  implicacao: "O produto genérico perdeu. Quem vence é quem permite que a instituição imprima sua identidade pedagógica no produto. Customização não é feature — é posicionamento."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 leading-snug">{item.sinal}</h3>
                  </div>
                  <div className="bg-purple-50/60 rounded-xl p-4 mb-3">
                    <p className="text-xs font-semibold text-purple-600 mb-1">Evidência</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.evidencia}</p>
                  </div>
                  <div className="bg-orange-50/60 rounded-xl p-4">
                    <p className="text-xs font-semibold text-orange-600 mb-1">Implicação</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.implicacao}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDIÇÕES ANTERIORES ── */}
      <section id="edicoes" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Arquivo</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Edições <span className="text-[#6B46C1]">Anteriores</span>
            </h2>
            <p className="text-gray-600 mb-12">
              Biblioteca viva do Radar de IA na Educação — histórico contínuo de inteligência estratégica
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Junho 2026 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Junho de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  O Brasil no ponto de inflexão: IA virou objeto de regulação, capital e escala
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  CNE aprova semáforo de riscos, BNDES injeta R$ 300M na Positivo e Plurall IA gera 26 mil PEIs em 3 meses.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-junho-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Maio 2026 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Maio de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  A próxima disputa não será pela melhor funcionalidade
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Mercado migra de features isoladas para ecossistemas integrados. CNE regulamenta, Moderna Core e Positivo+AWS definem novo benchmark.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-maio-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              {/* Card Abril 2026 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Abril de 2026</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  MEC abre sandbox para testar IA na educação
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Análise sobre ambiente de experimentação para avaliar soluções educacionais com IA e antecipação de critérios de validação no setor.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-abril-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16 px-6 bg-gradient-to-br from-[#6B46C1] to-[#4C3290] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Player de vídeo iônIA */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-5">
                <Globe className="w-3 h-3 text-purple-200" />
                <span className="text-xs text-purple-200 font-medium uppercase tracking-widest">iônIA</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Conheça a iônIA</h3>
              <p className="text-white/60 text-sm mb-6">A robozinha de IA da Iônica</p>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 border border-white/10">
                <video
                  controls
                  className="w-full"
                  preload="metadata"
                >
                  <source src={new URL('../imports/ionia-video.mp4', import.meta.url).href} type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
            </div>

            <div className="flex justify-center mb-5">
              <img
                src={mascoteIA}
                alt="PULSO — Curador de IA na Educação"
                className="h-20 md:h-24 w-auto drop-shadow-lg"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-wide">
              PULSO
            </h3>
            <p className="text-white/70 text-sm md:text-base mb-1 font-medium">
              Radar de IA na Educação
            </p>
            <p className="text-white/50 text-xs mb-8">
              Movimentos de mercado · Implicações estratégicas · Oportunidades de produto
            </p>

            <div className="pt-6 border-t border-white/15 space-y-1.5">
              <p className="text-white/60 text-sm">Curadoria e análise: <span className="text-white/80 font-medium">Silvana Helena</span></p>
              <p className="text-white/50 text-sm">Hub de IA — Iônica &amp; FTD Com Você</p>
              <p className="text-white/30 text-xs mt-2">Julho de 2026</p>
            </div>
          </motion.div>
        </div>
      </footer>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-[#FF6B35] hover:bg-[#FF8C5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </div>
  );
}
