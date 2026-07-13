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

type View = 'main' | 'edicao-abril-2026' | 'edicao-maio-2026' | 'edicao-junho-2026' | 'edicao-junho-2026-b';

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
      {/* Mini header */}
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
              Abril de 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              O MEC abre sandbox de IA para educação básica:<br />
              <span className="text-[#6B46C1]">quem molda os critérios, molda o próximo PNLD</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O Ministério da Educação abriu um ambiente de experimentação controlado para soluções de IA, avaliando por inovação, escalabilidade e governança ética — sinalizando os critérios que guiarão contratos públicos.
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
                { titulo: "MEC abre sandbox regulatório para IA na educação básica", desc: "Players que participam ganham vantagem direta no PNLD futuro e contratos públicos. Critérios: inovação + escalabilidade + governança ética — requisitos de entrada, não diferenciais.", cor: "border-[#6B46C1]" },
                { titulo: "CNE forma comissão especial para diretrizes de IA (básica e superior)", desc: "Regulação virá no 2º semestre de 2026 — janela de 6 meses para adequação. Empresas sem governança auditável terão barreira de entrada no mercado público.", cor: "border-[#FF6B35]" },
                { titulo: "BNCC Computação torna IA curricular em todas as escolas em 2026", desc: "Demanda estrutural criada por lei — não depende de adoção voluntária. Janela de 12–18 meses antes de commodity. Diferencial: formação docente integrada.", cor: "border-[#FF6B35]" },
                { titulo: "Arco/Geekie consolida Teacher Assistant com OpenAI", desc: "Primeiro player BR com IA generativa integrada ao fluxo pedagógico. Cria pressão sobre concorrentes — Plurall/SOMOS precisam acelerar integração.", cor: "border-[#6B46C1]" },
                { titulo: "MEC lança curso 'IA na prática docente' e plataforma MEC Idiomas com tutor IA", desc: "Estado forma professores para IA antes que o mercado o faça. Cria expectativa docente que plataformas privadas precisam igualar ou superar.", cor: "border-[#6B46C1]" },
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
              Movimentos <span className="text-[#6B46C1]">de Abril</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "MEC Sandbox de IA: ambiente regulatório aberto", desc: "O Ministério da Educação abriu inscrições para sandbox regulatório avaliando soluções de IA por inovação, escalabilidade e governança ética. Publicação do documento orientador 'IA na Educação Básica'.", impacto: "Empresas que participarem moldam os critérios que valerão nos próximos ciclos do PNLD. É uma janela que se fecha em 12–18 meses.", cor: "from-purple-600 to-purple-700" },
                { num: "02", titulo: "BNCC Computação: IA obrigatória em todas as escolas em 2026", desc: "A partir de 2026, a BNCC Computação passa a ser obrigatória em todas as escolas brasileiras, tornando o trabalho com IA parte estruturada do currículo.", impacto: "Janela de 12–18 meses para sistemas de ensino sem solução de IA curricular. Quem chegar primeiro com formação + ferramenta integradas captura o mercado.", cor: "from-purple-700 to-purple-800" },
                { num: "03", titulo: "Arco/Geekie + OpenAI: Teacher Assistant em expansão", desc: "A Arco Educação reporta avanços na parceria com OpenAI anunciada em 2024. O Teacher Assistant, que gera planos pedagógicos personalizados para alunos com deficiência, está em expansão.", impacto: "Primeiro grande player BR com IA generativa no fluxo pedagógico. Cria pressão sobre Plurall/SOMOS para acelerarem suas próprias integrações.", cor: "from-purple-500 to-purple-600" },
                { num: "04", titulo: "MEC lança curso de IA para docentes e plataforma de idiomas com IA", desc: "Curso 'IA na prática docente' disponível na Plataforma Mais Professores. Lançamento da MEC Idiomas com tutor de IA que corrige pronúncia e permite prática de conversação.", impacto: "Estado formando professores para IA cria expectativa docente que plataformas privadas precisarão igualar ou superar.", cor: "from-purple-600 to-violet-600" },
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
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
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
                    O MEC não abriu só um sandbox — abriu o processo de definição dos critérios do próximo PNLD. Quem participa agora molda as regras que valerão para todos depois.
                  </p>
                  <p className="text-white/70 text-sm">
                    Governança ética, escalabilidade e inovação deixaram de ser diferenciais opcionais e viraram requisitos de entrada no mercado público de educação.
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
                { titulo: "Entrar no MEC Sandbox — janela fechando", desc: "Submeter solução com foco em governança ética e escalabilidade. Critérios explícitos: inovação + escalabilidade + governança. Posicionamento privilegiado em contratos públicos e PNLD futuros.", destaque: true },
                { titulo: "Formação docente integrada à ferramenta", desc: "BNCC Computação obrigatória em 2026 cria demanda estrutural. Produto que ensina o professor enquanto ele usa — não em curso separado — tem adoção comprovada e retenção alta.", destaque: true },
                { titulo: "IA com dado longitudinal do aluno", desc: "Ferramentas genéricas não têm histórico. As soluções dos grupos educacionais têm — mas não estão usando. Conectar IA ao histórico real cria diferenciação que nenhuma big tech consegue replicar.", destaque: false },
                { titulo: "Governança auditável para compliance CNE", desc: "CNE publicará diretrizes no 2º semestre de 2026. Produto que entrega rastreabilidade + log auditável + relatório para gestor vira requisito de entrada no mercado público regulado.", destaque: false },
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
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
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
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Abril de 2026</p>
          </div>
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
      {/* Mini header */}
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
              Junho de 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              O Brasil chegou ao ponto de inflexão:<br />
              <span className="text-[#6B46C1]">IA na educação virou objeto de regulação, capital e escala</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              CNE aprovou diretrizes com semáforo de riscos, BNDES injetou R$ 300M na Positivo e Plurall IA gerou 26 mil PEIs em 3 meses. O mercado não discute mais se — disputa quem chega primeiro.
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
                { titulo: "CNE aprova semáforo de riscos para IA (mai/2026)", desc: "Compliance vira requisito de entrada — não diferencial opcional. Produtos sem governança auditável perdem acesso ao mercado público regulado.", cor: "border-[#6B46C1]" },
                { titulo: "BNDES injeta R$ 300M na Positivo para IA + plataforma MARIA com GPT", desc: "Capital institucional valida o setor — modelo replicável por outros grupos. Vertical integrada (hardware + software + IA própria) cria vantagem estrutural.", cor: "border-[#FF6B35]" },
                { titulo: "Moderna relança Aprova Brasil com IA para 800k alunos e SAEB (mai/2026)", desc: "Defesa de base instalada com upgrade tecnológico — produto com 15 anos ganha nova vida. Integrar conteúdo + avaliação SAEB + IA + analytics num único produto é o novo benchmark público.", cor: "border-[#FF6B35]" },
                { titulo: "Google + UNICEF entram no mercado público BR com Gemini e NotebookLM (mai/2026)", desc: "Big tech contorna ausência de conteúdo BR via parceria institucional multilateral. Resposta não é produto melhor — é relacionamento mais profundo com redes e secretarias.", cor: "border-[#6B46C1]" },
                { titulo: "Plurall IA: 26 mil PEIs gerados, 2 mil escolas ativas em 3 meses", desc: "Primeira prova de escala real de IA no ensino formal brasileiro. PEI automatizado deixou de ser hipótese — é demanda comprovada e mercado aberto.", cor: "border-[#6B46C1]" },
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
              Movimentos <span className="text-[#6B46C1]">de Junho</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "CNE aprova diretrizes com semáforo de riscos para IA", desc: "CNE aprovou parecer que classifica tecnologias por risco: proibiu vigilância emocional e perfilização psicológica; exige supervisão humana em correção automatizada.", impacto: "Compliance vira requisito de entrada no mercado público. Produto sem governança auditável perde acesso a contratos regulados.", cor: "from-purple-600 to-purple-700" },
                { num: "02", titulo: "BNDES injeta R$ 300M na Positivo — plataforma MARIA integra GPT", desc: "Positivo fechou financiamento de até R$ 300M com BNDES para Plano de Inovação 2026–2028, incluindo MARIA, assistente de IA que monta planos de estudo personalizados.", impacto: "Vertical integrada (hardware + software + IA própria) cria vantagem estrutural difícil de replicar por players apenas de software.", cor: "from-purple-700 to-purple-800" },
                { num: "03", titulo: "Moderna relança Aprova Brasil com IA para 800k alunos", desc: "Soluções Moderna lançou nova versão do Aprova Brasil com monitoramento em tempo real, análise de performance no SAEB e intervenção pedagógica baseada em IA.", impacto: "Produto de 15 anos ganhou nova vida com IA integrada. Benchmark: conteúdo + SAEB + analytics em plataforma única.", cor: "from-purple-500 to-purple-600" },
                { num: "04", titulo: "Google + UNICEF parceria 3 anos no Brasil", desc: "Parceria trienal anuncia uso de Gemini e NotebookLM em escolas públicas brasileiras. Google.org destina R$ 5M para expandir programa Experience AI no Brasil.", impacto: "Big tech contorna ausência de conteúdo brasileiro via parceria institucional multilateral — canal de distribuição diferente dos players privados.", cor: "from-purple-600 to-violet-600" },
                { num: "05", titulo: "Plurall IA: 26 mil PEIs gerados em 3 meses", desc: "Em 3 meses de uso, mais de 2 mil escolas criaram pelo menos um PEI na plataforma Plurall IA, com 26 mil conteúdos adaptados gerados. Predição por IA prevista para 2026.", impacto: "Primeira prova de escala real de IA no ensino formal brasileiro. PEI automatizado saiu de hipótese para demanda comprovada.", cor: "from-purple-600 to-purple-700" },
                { num: "06", titulo: "Bett Brasil 2026: 65 mil visitantes, +40% vs 2025", desc: "Maior edição da história do evento com lançamentos de Somos, Moderna, Super Professor, SoftBank Robotics (Léia) e relatório OCDE em português.", impacto: "Mercado saiu do discurso para o produto. Volume de lançamentos indica corrida por posicionamento antes da regulação final do CNE.", cor: "from-purple-700 to-purple-800" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#6B46C1] transition-all"
                >
                  <div className={`bg-gradient-to-r ${item.cor} px-6 py-4`}>
                    <span className="text-white/50 text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white font-bold mt-1 leading-snug">{item.titulo}</p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
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
                    O Brasil saiu do "se" e entrou no "quem chega primeiro". Regulação aprovada, capital institucional injetado, escala comprovada — o mercado entrou em fase de corrida por posicionamento.
                  </p>
                  <p className="text-white/70 text-sm">
                    Quem conectar compliance + dado longitudinal + IA prescritiva numa jornada única define o padrão do próximo ciclo educacional.
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
                { titulo: "PEI automatizado com IA para inclusão", desc: "Plurall IA provou a escala — 26 mil PEIs em 3 meses. Com 5,1M de alunos com deficiência no Brasil e menos de 30% com PEI adequado, a oportunidade é enorme e urgente.", destaque: true },
                { titulo: "Governança auditável para compliance CNE", desc: "CNE definiu o semáforo. Produto que entrega rastreabilidade de decisões de IA + log auditável + relatório para gestor vira requisito de entrada no mercado público regulado.", destaque: true },
                { titulo: "Analytics prescritivo com dado SAEB", desc: "Moderna Aprova Brasil mostrou o modelo: SAEB + recomendação pedagógica + IA. Oportunidade para plataformas com dado de desempenho conectar performance com intervenção.", destaque: false },
                { titulo: "Produto de formação docente integrada à ferramenta", desc: "79% dos professores não sabem ensinar com IA. Produto que treina o professor enquanto ele usa — não em curso separado — tem retenção comprovada e diferenciação durável.", destaque: false },
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
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
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
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Junho de 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


// ─── Edição Junho 2026 · #07 — 2ª quinzena (arquivo) ────────────────────────
function EdicaoJunho2026B({
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
              <p className="text-sm font-bold text-[#6B46C1] leading-tight">Junho de 2026 · Ed. #07</p>
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
              Edição #07 · 08 – 19 Jun 2026
            </div>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">INSIGHT DA EDIÇÃO</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">
              O Gemini entrou direto no ENEM:<br />
              <span className="text-[#6B46C1]">a batalha agora é pelo estudante brasileiro dentro do exame mais disputado do país</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O Google anunciou simulados gratuitos do ENEM no Gemini, desenvolvidos com a Akira Enem, enquanto o CNE encerrava a consulta pública sobre IA na educação. O campo de batalha migrou do produto para o canal de distribuição.
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
                { titulo: "Big techs passaram a competir diretamente pela distribuição educacional", desc: "Simulado ENEM gratuito no Gemini (parceria com Akira Enem) é o primeiro produto de IA do Google desenhado para o contexto brasileiro — canal direto a 10M+ de vestibulandos, sem passar pela escola.", cor: "border-[#6B46C1]" },
                { titulo: "Regulação de IA entrou em fase prática", desc: "CNE encerrou consulta pública sobre as diretrizes: proibição de vigilância emocional e supervisão humana obrigatória em correção automatizada. Compliance virou requisito de entrada.", cor: "border-[#FF6B35]" },
                { titulo: "Gratuidade virou estratégia de aquisição em escala", desc: "Google Summit gratuito para professores, MEC Idiomas gratuito (212k usuários em dias), Khan Academy gratuito até 2027 — zero cost como canal de adoção antes de monetizar.", cor: "border-[#FF6B35]" },
                { titulo: "O diferencial migrou do conteúdo para o dado de aprendizagem", desc: "Gemini tem alcance, mas não tem histórico do aluno. Quem tem o dado longitudinal tem o ativo que a big tech não copia.", cor: "border-[#6B46C1]" },
                { titulo: "Coordenador pedagógico emergiu como buyer estratégico", desc: "Geekie lançou a Ultravisão da Coordenação — dado consolidado de turma em tempo real. Coordenador renova contrato e influencia a compra do próximo ciclo.", cor: "border-[#6B46C1]" },
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
              Movimentos da <span className="text-[#6B46C1]">Quinzena</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { num: "01", titulo: "Gemini lança simulados gratuitos do ENEM com a Akira Enem", desc: "Anunciado no Google for Brasil (10/jun): testes completos ou por área, diagnóstico detalhado e plano de estudos personalizado, gratuitos no app Gemini.", impacto: "Canal direto a 10M+ vestibulandos sem passar por escola ou sistema de ensino. Ameaça específica a preparatórios.", cor: "from-purple-600 to-purple-700" },
                { num: "02", titulo: "CNE encerra consulta pública sobre IA na Educação", desc: "Consulta via Brasil Participativo (18/mai–14/jun) colheu contribuições sobre as diretrizes de IA na educação básica e superior antes da fase final.", impacto: "Quem participou tem argumento técnico de alinhamento regulatório. Compliance virou moat, não custo.", cor: "from-purple-700 to-purple-800" },
                { num: "03", titulo: "MEC Idiomas: 212 mil usuários em dias com tutor de IA gratuito", desc: "Plataforma pública de inglês e espanhol (A1–C2) com agente de IA para dúvidas e conversação, em app e web.", impacto: "Estado entregando IA de qualidade gratuita cria benchmark público difícil de bater por preço. Diferencial privado: personalização e dado longitudinal.", cor: "from-purple-500 to-purple-600" },
                { num: "04", titulo: "Geekie One lança Ultravisão da Coordenação", desc: "Tela de gestão com dados consolidados de alunos, turmas e professores em tempo real, específica para coordenadores pedagógicos.", impacto: "Coordenador como buyer estratégico: produto que o serve cria retenção que ferramenta de aluno não cria.", cor: "from-purple-600 to-violet-600" },
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
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">Impacto estratégico</p>
                      <p className="text-xs text-gray-700 leading-relaxed">{item.impacto}</p>
                    </div>
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
                    O Google não entrou na educação pela porta da escola — entrou pela porta do vestibulando. Quem tem canal direto ao aluno não precisa convencer a escola.
                  </p>
                  <p className="text-white/70 text-sm">
                    Para players BR, o diferencial deixou de ser funcionalidade — é o dado do aluno que a big tech não tem.
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
                { titulo: "Simulado adaptativo com histórico longitudinal", desc: "Big tech tem alcance; plataforma que combina banco ENEM + histórico real de 3+ anos + diagnóstico por escola tem diferencial que o Google não copia.", destaque: true },
                { titulo: "Produto de IA auditável e alinhado ao CNE", desc: "Supervisão humana e proibição de vigilância emocional viram critério de licitação. Quem chegar adequado primeiro tem argumento técnico único.", destaque: true },
                { titulo: "Formação docente integrada à própria plataforma", desc: "Professor formado pelo Google usa Gemini. Resposta: formação dentro da ferramenta, não fora — retenção que curso externo não tem.", destaque: false },
                { titulo: "Analytics prescritivo para coordenador pedagógico", desc: "Coordenador renova contrato e apresenta resultado para direção. Visão consolidada de turma e professor cria retenção estrutural.", destaque: false },
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
                  {item.destaque && <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">Prioritário</span>}
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
            <p className="text-white/40 text-xs">Hub de IA — Iônica & FTD Com Você · Junho de 2026 · Edição #07</p>
          </div>
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

  if (currentView === 'edicao-junho-2026-b') {
    return (
      <EdicaoJunho2026B
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
      <header className="fixed top-0 left-0 right-0 bg-white/96 backdrop-blur-md z-50 border-b border-gray-100/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* Linha 1 — identidade + direita */}
          <div className="flex items-center justify-between h-12 md:h-14">

            {/* Identidade — mascote + nome */}
            <div className="flex items-center gap-3">
              <img src={mascoteIA} alt="PULSO" className="h-10 md:h-11 w-auto flex-shrink-0" />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-sm md:text-base font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>PULSO</span>
                <span className="hidden md:inline text-[11px] text-gray-400 font-normal mt-0.5">Radar de IA na Educação</span>
              </div>
            </div>

            {/* Direita — edição + logos parceiros */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex flex-col items-end leading-none">
                <span className="text-[11px] font-bold text-[#6B46C1] uppercase tracking-widest">Edição #08</span>
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">20 Jun – 13 Jul 2026</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <img src={logoIonica} alt="Iônica" className="h-5 w-auto" style={{ filter: 'grayscale(100%) opacity(0.45)' }} />
              <div className="w-px h-4 bg-gray-200" />
              <img src={logoFTD} alt="FTD Com Você" className="h-4 w-auto" style={{ filter: 'grayscale(100%) opacity(0.40)' }} />
            </div>
          </div>

          {/* Linha 2 — nav centralizada com respiro */}
          <nav className="flex items-center justify-center gap-1 pb-2">
            {[
              { id: 'insight', label: 'Insight' },
              { id: 'resumo', label: 'Resumo' },
              { id: 'movimentos', label: 'Movimentos' },
              { id: 'concorrencia', label: 'Concorrência' },
              { id: 'benchmarks', label: 'Benchmarks' },
              { id: 'analise', label: 'Análise' },
              { id: 'hype', label: 'Hype' },
              { id: 'oportunidades', label: 'Oportunidades' },
              { id: 'edicoes', label: 'Arquivo' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all ${
                  activeSection === item.id
                    ? 'bg-[#6B46C1] text-white'
                    : 'text-gray-500 hover:bg-purple-50 hover:text-[#6B46C1]'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
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
              A era dos anúncios acabou:<br />
              a IA na educação entrou na fase de <span className="text-[#6B46C1]">consolidação</span><br />
              <span className="text-[#FF6B35]">— quem não constrói capacidade, compra</span>
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Em 15 dias, a Cogna elevou para 90% sua fatia no Educbank, a Teachy fez o <strong className="text-[#6B46C1]">primeiro M&A de IA em educação da América Latina</strong> e a Khan Academy admitiu que só 15% dos alunos usam o Khanmigo — e o relançou reconstruído. O mercado parou de comprar promessa: passou a comprar talento, base instalada e <strong className="text-[#6B46C1]">uso real medido</strong>.
              </p>

              <div className="bg-white p-8 rounded-2xl border-2 border-purple-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Por que este momento é diferente?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Target className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Consolidação via M&A:</strong> dois movimentos na mesma quinzena — Cogna+Educbank e Teachy+Nero.AI. Capacidade de IA e camadas da operação escolar viraram alvo de aquisição, não de desenvolvimento interno
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <BarChart3 className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Reality check de engajamento:</strong> Khan Academy expôs a métrica que ninguém publica — só 15% de uso real. Adoção anunciada deixou de valer; uso medido virou a nova moeda do setor
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Regulação com data:</strong> encerrada a consulta pública, o CNE leva as diretrizes a seminário nacional em julho e à homologação do MEC na sequência — o mercado passou a operar com prazo, não com hipótese
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

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              O que mudou desde a <span className="text-[#6B46C1]">última edição</span>
            </h2>
            <p className="text-gray-500 mb-12 text-lg">O que a liderança precisa entender em 2 minutos — conclusões, não notícias.</p>

            <div className="space-y-4">
              {[
                {
                  conclusao: "O M&A virou o atalho para capacidade de IA",
                  raciocinio: "A Teachy comprou a Nero.AI — acquihiring de sete dígitos que incorpora time de desenvolvimento e propriedade intelectual. Construir capacidade interna ficou mais lento que a janela competitiva; comprar talento pronto virou estratégia, e players com caixa saem na frente."
                },
                {
                  conclusao: "O ecossistema educacional se expandiu para além do pedagógico",
                  raciocinio: "A Cogna elevou a participação da Somos no Educbank para 90% por R$ 46,3 milhões. Mensalidade, inadimplência e crédito escolar agora estão no mesmo grupo que o Plurall — quem controla a camada financeira da escola tem dado e relacionamento que ferramenta pedagógica isolada não alcança."
                },
                {
                  conclusao: "Uso real virou a métrica que define produto",
                  raciocinio: "A Khan Academy admitiu publicamente que só 15% dos alunos com acesso usam o Khanmigo — apesar de 108 milhões de interações — e refez o produto embutido na prática, medindo 'acerto no item seguinte'. IA como app separado falhou no maior case do mundo."
                },
                {
                  conclusao: "A distribuição gratuita da big tech saiu do anúncio e entrou em operação",
                  raciocinio: "Os simulados ENEM do Gemini, anunciados em junho, entraram no ar em julho — no app e no Modo IA da Busca. A ameaça deixou de ser roadmap: neste semestre de ENEM, 10 milhões de vestibulandos têm diagnóstico gratuito no bolso."
                },
                {
                  conclusao: "Compliance ganhou data",
                  raciocinio: "Com a consulta pública encerrada, o CNE realiza seminário nacional em julho e envia as diretrizes à homologação do MEC. Adequação regulatória deixou de ser projeto para 2027 — virou cronograma do segundo semestre de 2026."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-[#FF6B35] shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-bold text-gray-900 mb-2 text-base">{item.conclusao}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.raciocinio}</p>
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
                  titulo: "Cogna eleva participação no Educbank para 90% — camada financeira entra no ecossistema",
                  empresa: "Cogna / Somos",
                  data: "26 jun/2026",
                  resumo: "A Cogna anunciou a compra de mais 47% do Educbank por R$ 46,3 milhões, elevando a participação da Somos para 90%. O Educbank é plataforma de gestão financeira escolar — cobrança, mensalidades, garantia de recebimento e crédito para escolas privadas.",
                  impacto: "O grupo dono do Plurall agora controla também a camada financeira da escola. Dado de pagamento + dado pedagógico no mesmo ecossistema cria retenção e inteligência de risco que player de conteúdo puro não replica.",
                  fonte: "https://www.infomoney.com.br/mercados/cogna-cogn3-adquire-educbank-por-r-463-milhoes/",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  titulo: "Teachy compra Nero.AI — primeiro M&A de IA em educação da América Latina",
                  empresa: "Teachy",
                  data: "2 jul/2026",
                  resumo: "Aquisição em formato acquihiring, na casa de sete dígitos, incorporando o time de desenvolvimento e a propriedade intelectual da software house fundada em 2023, que atendeu clientes como Fundação Lemann, Insper e Sebrae em mais de 100 projetos de IA.",
                  impacto: "Talento de IA virou ativo escasso e comprável. Abre o ciclo de consolidação: edtechs com capacidade técnica viram alvo — e grupos que não comprarem terão de disputar talento no mercado, mais caro e mais lento.",
                  fonte: "https://startups.com.br/negocios/ma/teachy-compra-nero-ai-e-amplia-aposta-em-ia-educacional/",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "Simulados ENEM do Gemini entram no ar — a ameaça saiu do roadmap",
                  empresa: "Google",
                  data: "Jul/2026",
                  resumo: "Anunciados em junho com a Akira Enem, os simulados gratuitos ficaram disponíveis no app Gemini e no Modo IA da Busca: prova completa ou por área, diagnóstico de lacunas por competência e plano de estudos personalizado — em pleno semestre de preparação para o exame.",
                  impacto: "Preparatórios e sistemas de ensino agora competem com diagnóstico gratuito e ilimitado no bolso do aluno. O simulado avulso virou definitivamente commodity — o espaço defensável é o preparo conectado ao histórico e à escola.",
                  fonte: "https://gd.eurisko.com.br/2026/06/23/como-usar-os-novos-simulados-do-enem-no-gemini-guia-completo-para-estudar-melhor-com-a-ia-do-google",
                  color: "from-purple-600 to-violet-600"
                },
                {
                  titulo: "CNE leva diretrizes de IA a seminário nacional — homologação do MEC na sequência",
                  empresa: "CNE / MEC",
                  data: "Jul/2026",
                  resumo: "Encerrada a consulta pública em 14 de junho, o parecer com classificação de risco (proibição de vigilância emocional e de decisões totalmente automatizadas; supervisão humana em correção) segue para seminário nacional em julho e depois para homologação do MEC.",
                  impacto: "O mercado passa a operar com cronograma regulatório concreto. Produto sem trilha de adequação documentada entra no 2º semestre em desvantagem em qualquer processo público — e, crescentemente, no privado.",
                  fonte: "https://www.cartacapital.com.br/toquetec/ia-nas-escolas-o-que-muda-com-as-novas-diretrizes-do-cne/",
                  color: "from-purple-700 to-purple-800"
                },
                {
                  titulo: "MEC estende formação em IA aos professores do ensino fundamental",
                  empresa: "MEC",
                  data: "26 jun/2026",
                  resumo: "O curso 'IA na prática docente: uso ético, criativo e pedagógico – ensino fundamental' foi lançado na Plataforma Mais Professores, ampliando a trilha antes restrita ao ensino médio, dentro da Estratégia Nacional de Escolas Conectadas (Enec).",
                  impacto: "O Estado agora forma professores em IA em toda a educação básica. A régua de expectativa docente sobe para todas as plataformas: formação genérica virou piso — o diferencial passa a ser formação embutida no próprio produto.",
                  fonte: "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/junho/mec-lanca-curso-de-ia-para-professores-do-ensino-fundamental",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  titulo: "Khan Academy admite: só 15% usam o Khanmigo — e relança o produto reconstruído",
                  empresa: "Khan Academy",
                  data: "Jun–Jul/2026",
                  resumo: "Apesar de 108 milhões de interações desde 2023, apenas 15% dos alunos com acesso usam o tutor regularmente. A versão reimaginada, moldada com distritos-piloto, chega a todos os parceiros: IA embutida na prática (aparece no erro e na dúvida) e nova métrica de 'acerto no item seguinte'.",
                  impacto: "Primeiro reality check público do maior case de IA educacional do mundo. O tutor como app separado morreu; IA embutida no fluxo de estudo, medida por aprendizagem transferida, é o novo benchmark de produto.",
                  fonte: "https://www.edtechinnovationhub.com/news/only-15-percent-of-students-with-access-to-khanmigo-actually-use-it-khan-academy-admits",
                  color: "from-purple-600 to-violet-600"
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
                    <a href={m.fonte} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-[#6B46C1] rounded-lg group-hover:bg-[#6B46C1] group-hover:text-white transition-all font-medium text-sm mt-4">
                      <ExternalLink className="w-4 h-4" />
                      Ver fonte
                    </a>
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
                    { player: "Cogna / Somos (Plurall)", movimento: "Compra de +47% do Educbank (90% do capital) por R$ 46,3M — gestão financeira escolar", estrategia: "Ecossistema total da operação escolar: pedagógico + dado + dinheiro no mesmo grupo. Retenção via camadas, não via feature", maturidade: "Média-Alta", impacto: "Alto" },
                    { player: "Teachy", movimento: "Aquisição da Nero.AI (acquihiring, 7 dígitos) — time e IP incorporados", estrategia: "Consolidar-se como plataforma de IA educacional comprando capacidade técnica em vez de construir — velocidade como vantagem", maturidade: "Alta", impacto: "Médio-Alto" },
                    { player: "Google", movimento: "Simulados ENEM no ar no Gemini e no Modo IA da Busca, com a Akira Enem", estrategia: "Distribuição direta ao aluno em escala nacional, sem intermediação da escola — o gratuito como canal de aquisição", maturidade: "Alta", impacto: "Alto" },
                    { player: "Khan Academy", movimento: "Admissão dos 15% de uso + rollout do Khanmigo reconstruído para todos os distritos", estrategia: "Da feature ao fluxo: IA embutida na prática, com métrica de aprendizagem transferida como prova de valor", maturidade: "Alta", impacto: "Médio-Alto" },
                    { player: "MEC / Gov Federal", movimento: "Curso de IA para docentes do fundamental (26/jun) + MEC Idiomas em expansão", estrategia: "Estado como formador e distribuidor gratuito — eleva o piso de expectativa e pressiona o privado a diferenciar por profundidade", maturidade: "Baixa-Média", impacto: "Alto" },
                    { player: "CNE", movimento: "Consulta encerrada, seminário nacional em julho e homologação do MEC na sequência", estrategia: "Institucionalizar governança por nível de risco — transformar compliance em critério de acesso ao mercado", maturidade: "Média", impacto: "Alto" },
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
                  empresa: "Khan Academy Reimaginada",
                  pais: "EUA / Global",
                  what: "Após admitir que só 15% dos alunos usavam o Khanmigo, reconstruiu o produto com distritos-piloto: IA embutida na prática (aparece no erro, na dúvida, no próximo passo), dashboards refeitos e a métrica 'next-item correctness' — se o aluno acerta sozinho o item seguinte após a ajuda da IA.",
                  why: "A maior operação de IA educacional do mundo abandonou o modelo 'tutor como app separado' com base em dado de uso real — e criou a métrica que separa performance assistida de aprendizagem transferida.",
                  application: "Plataformas BR deveriam auditar o próprio engajamento real (não licenças vendidas) e mover a IA para os pontos de fricção do estudo. Publicar métrica de aprendizagem real pode virar argumento comercial inédito no mercado brasileiro."
                },
                {
                  empresa: "Teachy + Nero.AI",
                  pais: "Brasil",
                  what: "Acquihiring de sete dígitos: a edtech incorporou o time de desenvolvimento e a propriedade intelectual de uma software house boutique de IA com mais de 100 projetos entregues — o primeiro M&A de IA em educação da América Latina.",
                  why: "Inaugura o mercado de capacidade técnica em IA educacional: velocidade de produto virou item comprável. O gargalo do setor deixou de ser ideia e passou a ser time capaz de executar.",
                  application: "Grupos educacionais podem acelerar roadmap comprando squads prontos de IA em vez de disputar contratações unitárias. Mapear boutiques de IA com tração vira tarefa de estratégia — antes que o concorrente o faça."
                },
                {
                  empresa: "Gemini + Akira Enem (no ar)",
                  pais: "Brasil",
                  what: "Os simulados gratuitos do ENEM saíram do palco do Google for Brasil e chegaram ao aluno: prova completa ou por área, diagnóstico de lacunas e plano de estudos, no app Gemini e no Modo IA da Busca.",
                  why: "Primeiro produto educacional de big tech desenhado para o Brasil em operação real — e em pleno semestre de preparação para o exame. A régua do que é 'gratuito e bom' subiu de forma permanente.",
                  application: "O simulado avulso virou commodity definitiva. O espaço defensável do player BR é o preparo conectado ao histórico longitudinal do aluno, ao currículo da escola e ao acompanhamento docente — o que a distribuição de massa não entrega."
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
                  <p className="font-bold text-red-700 text-sm uppercase tracking-wide">Virou commodity</p>
                </div>
                <div className="space-y-4">
                  {[
                    { item: "Tutor de IA como app separado", motivo: "Khan Academy provou com dado real: 85% dos alunos com acesso simplesmente não usam" },
                    { item: "Simulado e diagnóstico ENEM", motivo: "Gemini entrega grátis, em escala e no bolso do aluno — agora em operação, não em anúncio" },
                    { item: "Anúncio de 'IA na plataforma'", motivo: "O mercado parou de precificar promessa — sem uso medido, o anúncio não diferencia mais" },
                    { item: "Formação docente genérica em IA", motivo: "MEC forma professores do fundamental ao médio de graça; Google e Microsoft também" },
                    { item: "Geração de planos de aula e questões", motivo: "Qualquer LLM entrega em segundos — e o professor formado pelo Estado já sabe pedir" },
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
                  <p className="font-bold text-green-700 text-sm uppercase tracking-wide">Ainda diferencia</p>
                </div>
                <div className="space-y-4">
                  {[
                    { item: "Capacidade interna de IA — time e propriedade intelectual", motivo: "Virou ativo de M&A: quem tem acelera, quem não tem compra ou fica para trás (Teachy/Nero.AI)" },
                    { item: "IA embutida no fluxo de estudo, com métrica de aprendizagem", motivo: "O novo padrão Khan: aparecer no erro e na dúvida, e provar transferência com 'acerto no item seguinte'" },
                    { item: "Ecossistema pedagógico + financeiro integrado", motivo: "Cogna/Educbank: dado de pagamento e de aprendizagem no mesmo grupo — retenção que feature não cria" },
                    { item: "Dado longitudinal do aluno conectado ao currículo da escola", motivo: "O Gemini conhece o vestibulando anônimo — a escola conhece 5 anos de história do aluno" },
                    { item: "Trilha de compliance CNE auditável", motivo: "Com seminário em julho e homologação próxima, adequação documentada vira critério de compra" },
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
                    { titulo: "Anunciar IA ainda gera vantagem competitiva", desc: "O caso Khan encerrou essa fase: 108 milhões de interações e 15% de uso real. Adoção anunciada sem engajamento medido virou passivo reputacional, não ativo de marketing." },
                    { titulo: "M&A resolve a lacuna de IA instantaneamente", desc: "Comprar time e IP acelera, mas integração de produto e cultura leva ciclos. A aquisição é o começo da execução, não o atalho para o resultado — quem tratar M&A como troféu repetirá o erro do anúncio." },
                    { titulo: "A big tech vai substituir o sistema de ensino", desc: "O Gemini no ENEM tem alcance inédito, mas não tem currículo, histórico do aluno nem vínculo com a operação da escola. Distribuição de massa captura o estudante avulso — não a jornada escolar." },
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
                    { titulo: "Consolidação do setor via M&A", desc: "Dois movimentos em 15 dias — Educbank (camada de operação) e Nero.AI (capacidade técnica). O capital está indo para ativos que encurtam caminho: talento, base instalada e dado. A onda tende a acelerar antes da homologação do CNE." },
                    { titulo: "Uso medido como moeda de credibilidade", desc: "A métrica de aprendizagem transferida da Khan ('acerto no item seguinte') tende a entrar em RFPs e processos de compra. Quem medir e publicar engajamento real primeiro define a régua da conversa comercial." },
                    { titulo: "Regulação como cronograma, não como debate", desc: "Seminário nacional em julho e homologação do MEC na sequência transformam as diretrizes em requisito datado. A pergunta deixou de ser 'o que o CNE vai exigir' e virou 'quem chega adequado primeiro'." },
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
                  A quinzena não teve um grande lançamento — e isso é o sinal. O capital foi para aquisições (Educbank, Nero.AI), a maior plataforma de IA educacional do mundo refez o produto com base em dado de uso real, e a regulação ganhou data. O mercado de IA na educação saiu da fase de prometer e entrou na fase de provar: quem mede aprendizagem de verdade, controla mais camadas da operação escolar e chega adequado à homologação do CNE define o próximo ciclo. Feature não é mais notícia — consolidação e evidência são.
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

            {/* Legenda prioridade */}
            <div className="flex items-center gap-6 mb-10 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#6B46C1]" />
                <span className="text-sm text-gray-600"><strong>Alta</strong> — janela estreita, agir agora</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                <span className="text-sm text-gray-600"><strong>Média</strong> — posicionar nos próximos ciclos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-600"><strong>Baixa</strong> — monitorar</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  sinal: "Khan Academy admitiu 15% de uso real e refez o produto embutido no fluxo de estudo",
                  oportunidade: "Auditoria de uso real + IA embutida nos pontos de fricção",
                  impacto: "Medir engajamento real (não licenças vendidas) e mover a IA para dentro do fluxo — erro, dúvida, próximo item. Publicar métrica de aprendizagem transferida vira argumento comercial que nenhum player BR usa hoje.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Produto / Dados"
                },
                {
                  sinal: "Teachy comprou a Nero.AI — capacidade de IA virou ativo comprável",
                  oportunidade: "Tese de build vs buy para capacidade de IA",
                  impacto: "Mapear boutiques e squads de IA com tração antes da próxima janela de consolidação. Construir tudo internamente ficou mais lento que o ciclo competitivo — e o caso Teachy tende a inflacionar os próximos alvos.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Estratégico / M&A"
                },
                {
                  sinal: "Simulados do Gemini entraram no ar em pleno semestre de preparação para o ENEM",
                  oportunidade: "Preparatório conectado ao histórico e ao currículo da escola",
                  impacto: "Responder à distribuição gratuita com o que ela não tem: dado longitudinal de 3+ anos, vínculo com o plano pedagógico e acompanhamento docente. O simulado avulso morreu; a jornada de preparação integrada é o espaço defensável.",
                  prioridade: "Alta",
                  cor: "border-[#6B46C1]",
                  corBadge: "bg-[#6B46C1] text-white",
                  area: "Preparatório / Iônica"
                },
                {
                  sinal: "Cogna foi a 90% do Educbank — camada financeira integrada ao ecossistema pedagógico",
                  oportunidade: "Integração de dado operacional + pedagógico da escola",
                  impacto: "Cruzar dados de operação escolar com aprendizagem cria visão de risco e retenção que fideliza o mantenedor. É a resposta estrutural ao movimento da Somos — e um antídoto contra a comoditização da feature.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#FF6B35] text-white",
                  area: "Ecossistema / Gestão"
                },
                {
                  sinal: "CNE realiza seminário nacional em julho, com homologação do MEC na sequência",
                  oportunidade: "Trilha de adequação CNE concluída antes da homologação",
                  impacto: "Chegar homologado à regulação — log auditável, supervisão humana documentada, classificação de risco mapeada — vira argumento decisivo em licitação e diferencial crescente na venda B2B privada.",
                  prioridade: "Média",
                  cor: "border-[#FF6B35]",
                  corBadge: "bg-[#FF6B35] text-white",
                  area: "B2G / Compliance"
                },
                {
                  sinal: "MEC estendeu a formação em IA aos professores do ensino fundamental",
                  oportunidade: "Formação docente embutida no produto para o fundamental",
                  impacto: "O piso subiu: professor do fundamental formado pelo Estado passa a esperar IA na plataforma que já usa. Formação dentro do fluxo de trabalho diferencia e retém — curso externo virou commodity.",
                  prioridade: "Baixa",
                  cor: "border-gray-200",
                  corBadge: "bg-gray-200 text-gray-700",
                  area: "Professores / Iônica"
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`bg-white rounded-2xl border-2 ${item.cor} p-6 hover:shadow-md transition-all`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.corBadge}`}>
                      {item.prioridade}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{item.area}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">Sinal observado</p>
                  <p className="text-sm text-gray-500 mb-3 italic leading-relaxed">{item.sinal}</p>
                  <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">{item.oportunidade}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.impacto}</p>
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
              {/* Card Junho 2026 · Ed. #07 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6B46C1] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">EDIÇÃO ANTERIOR</p>
                    <p className="text-sm text-gray-700">Junho de 2026 · Ed. #07</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#6B46C1]" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  O Gemini entrou direto no ENEM: a batalha é pelo estudante dentro do exame
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Google anuncia simulados gratuitos do ENEM com a Akira Enem, CNE encerra consulta pública e a disputa migra do produto para o canal de distribuição.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-junho-2026-b')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

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
