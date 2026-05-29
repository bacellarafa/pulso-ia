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

type View = 'main' | 'edicao-abril-2026';

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
              A IA na educação entra em fase de{" "}
              <span className="text-[#6B46C1]">validação institucional</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Do campo experimental informal para governança, critérios e experimentação responsável —
              o MEC abre o primeiro sandbox regulatório para IA educacional no Brasil.
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
                  titulo: "MEC lança Sandbox IA Educação",
                  desc: "Chamada pública cria ambiente regulatório experimental para testar soluções de IA na educação — primeira iniciativa institucional do gênero no Brasil.",
                  cor: "border-[#FF6B35]"
                },
                {
                  titulo: "Prova de impacto torna-se requisito",
                  desc: "Soluções educacionais com IA precisarão demonstrar impacto, segurança, transparência e adequação pedagógica para acesso ao mercado regulado.",
                  cor: "border-[#6B46C1]"
                },
                {
                  titulo: "Rastreabilidade desde a origem",
                  desc: "Para plataformas educacionais, a oportunidade está em estruturar produtos com rastreabilidade, métricas de efetividade e governança desde o início.",
                  cor: "border-[#FF6B35]"
                },
                {
                  titulo: "Telemetria como vantagem competitiva",
                  desc: "O tema reforça a importância de telemetria, avaliação de resultados e critérios claros para adoção de IA em ambiente escolar.",
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
              Movimentos <span className="text-[#6B46C1]">de Abril</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  num: "01",
                  titulo: "MEC lança Sandbox IA Educação",
                  desc: "Chamada pública para ambiente experimental regulatório — primeiro programa estruturado do gênero no país.",
                  cor: "from-purple-600 to-purple-700"
                },
                {
                  num: "02",
                  titulo: "Debate sobre uso responsável de IA nas escolas",
                  desc: "Crescimento das discussões sobre governança, explicabilidade e supervisão humana no uso de IA educacional.",
                  cor: "from-orange-500 to-orange-600"
                },
                {
                  num: "03",
                  titulo: "Demanda por validação pedagógica e segurança",
                  desc: "Escolas e redes de ensino passam a exigir evidências de eficácia, segurança e adequação ao contexto brasileiro.",
                  cor: "from-violet-500 to-violet-600"
                },
                {
                  num: "04",
                  titulo: "IA como infraestrutura educacional regulada",
                  desc: "Sinalização clara de que IA não é mais ferramenta experimental — passa a ser tratada como infraestrutura crítica.",
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
                    Plataformas educacionais que conseguirem provar valor pedagógico, segurança,
                    explicabilidade e impacto mensurável terão vantagem competitiva em um mercado
                    cada vez mais regulado.
                  </p>
                  <p className="text-white/70 text-sm">
                    Compliance deixa de ser barreira e passa a ser diferencial de mercado.
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
                  titulo: "Camada de governança e rastreabilidade",
                  desc: "Registrar e auditar todas as interações de IA — quem usou, o quê, quando e com qual resultado.",
                  destaque: true
                },
                {
                  titulo: "Dashboard de impacto pedagógico",
                  desc: "Evoluir dashboards de uso para métricas de efetividade real na aprendizagem.",
                  destaque: true
                },
                {
                  titulo: "Trilhas de validação de qualidade",
                  desc: "Estruturar mecanismos para avaliar a qualidade das respostas da IA em contexto educacional.",
                  destaque: false
                },
                {
                  titulo: "Métricas de adoção e efetividade",
                  desc: "Criar indicadores para adoção, recorrência, satisfação docente e efetividade pedagógica.",
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

      {/* Fonte principal */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Fonte principal</p>
                <h3 className="font-bold text-gray-900 mb-2">
                  MEC lança chamada pública para Sandbox IA Educação
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Governo Federal — Ministério da Educação, Abril de 2026.
                  Primeira iniciativa regulatória estruturada para testar soluções de IA no ambiente escolar brasileiro.
                </p>
              </div>
              <a
                href="https://www.gov.br/mec/pt-br/assuntos/noticias/2026/abril/mec-lanca-chamada-publica-para-sandbox-ia-educacao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#6B46C1] text-white rounded-xl font-medium hover:bg-[#5B3A9E] transition-colors text-sm whitespace-nowrap"
              >
                <span>Acessar fonte completa</span>
                <ExternalLink className="w-4 h-4" />
              </a>
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
            <p className="text-white/40 text-xs">Hub de IA — Iônica &amp; FTD Com Você · Abril de 2026</p>
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
                <img
                  src={mascoteIA}
                  alt="PULSO — Curador de IA na Educação"
                  className="h-12 md:h-14 w-auto drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-sm md:text-base text-[#6B46C1] font-bold tracking-wide leading-tight">
                  PULSO
                </h1>
                <p className="text-xs md:text-sm text-gray-700 font-medium leading-tight">
                  Radar de IA na Educação
                </p>
                <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">Maio de 2026</p>
              </div>
            </div>

            <div className="bg-purple-50/60 px-3 py-2 rounded-lg border border-purple-100/60">
              <p className="text-[10px] md:text-xs font-semibold text-[#6B46C1] mb-1.5 text-center tracking-wider uppercase">Hub de IA</p>
              <div className="flex items-center justify-center gap-2">
                <img src={logoIonicaSmall} alt="Iônica" className="h-3 opacity-60" />
                <img src={logoFTD} alt="FTD" className="h-3 opacity-60" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <nav className="hidden md:flex items-center gap-1">
              {[
                { id: 'insight', label: 'Insight' },
                { id: 'resumo', label: 'Resumo' },
                { id: 'movimentos', label: 'Movimentos' },
                { id: 'concorrencia', label: 'Concorrência' },
                { id: 'benchmarks', label: 'Benchmarks' },
                { id: 'analise', label: 'Análise' },
                { id: 'oportunidades', label: 'Oportunidades' },
                { id: 'sinais', label: 'Sinais' },
                { id: 'edicoes', label: 'Edições' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-2 rounded-lg transition-all text-sm ${
                    activeSection === id
                      ? 'bg-[#6B46C1] text-white'
                      : 'text-gray-600 hover:bg-purple-50 hover:text-[#6B46C1]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Insight da Semana */}
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
                <span className="text-sm font-semibold">INSIGHT DA SEMANA</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl text-gray-900 font-bold mb-8 leading-tight">
              A próxima disputa da IA na educação<br />
              não será pela melhor <span className="text-[#6B46C1]">funcionalidade</span><br />
              <span className="text-[#FF6B35]">será pelo ecossistema mais integrado</span>
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                O mercado de IA educacional começa a migrar de funcionalidades isoladas para
                <strong className="text-[#6B46C1]"> ecossistemas operacionais inteligentes integrados</strong>.
              </p>

              <div className="bg-white p-8 rounded-2xl border-2 border-purple-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Por que isso está acontecendo?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <TrendingUp className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Maturidade técnica:</strong> Players dominaram features básicas e agora competem em integração
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Pressão regulatória:</strong> Governança e rastreabilidade forçam soluções mais estruturadas
                    </p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Target className="w-5 h-5 text-[#6B46C1]" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Demanda operacional:</strong> Escolas querem IA que resolva fluxos completos, não features pontuais
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              style={{ opacity }}
              className="mt-12"
            >
              <ChevronDown className="w-8 h-8 text-[#6B46C1] mx-auto animate-bounce" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resumo Executivo */}
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
              Principais <span className="text-[#6B46C1]">Implicações</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  movimento: "Consolidação regulatória (CNE + MEC)",
                  impacto: "IA institucionalizada como parte da operação escolar",
                  produto: "Governança, rastreabilidade e transparência tornam-se diferenciais competitivos"
                },
                {
                  movimento: "Players estruturando ecossistemas completos (Moderna Core, Positivo+AWS)",
                  impacto: "Competição migra de features isoladas para jornadas integradas",
                  produto: "Plataformas precisam conectar conteúdo + analytics + IA + acompanhamento"
                },
                {
                  movimento: "Analytics operacional ganhando força (Plurall 2026)",
                  impacto: "Dados passam de dashboard para ação pedagógica",
                  produto: "IA deve transformar insights em recomendações acionáveis"
                },
                {
                  movimento: "Consolidação via M&A (Árvore adquire Typper)",
                  impacto: "Mercado começa fase de concentração e fortalecimento de ecossistemas",
                  produto: "Integração e interoperabilidade tornam-se críticas"
                },
                {
                  movimento: "Big techs entrando no setor (AWS + Positivo)",
                  impacto: "Infraestrutura enterprise e IA generativa em escala",
                  produto: "Necessidade de maturidade técnica e arquitetura robusta"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl border-l-4 border-[#FF6B35] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-[#FF6B35] mb-2">MOVIMENTO</p>
                      <p className="text-sm font-medium text-gray-900">{item.movimento}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6B46C1] mb-2">IMPACTO COMPETITIVO</p>
                      <p className="text-sm text-gray-700">{item.impacto}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-2">IMPLICAÇÃO PARA PRODUTO</p>
                      <p className="text-sm text-gray-700">{item.produto}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principais Movimentos */}
      <section id="movimentos" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Principais Movimentos</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Movimentos <span className="text-[#6B46C1]">da Semana</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  org: "CNE",
                  title: "Nova regulamentação sobre uso de IA na educação",
                  date: "11/05/2026",
                  source: "G1",
                  url: "https://g1.globo.com/educacao/noticia/2026/05/11/cne-aprova-nova-regulamentacao-sobre-uso-de-ia-em-escolas-e-universidades.ghtml",
                  impact: "Mudança de fase regulatória: IA institucionalizada com necessidade de governança e rastreabilidade",
                  color: "from-purple-600 to-purple-700"
                },
                {
                  org: "MEC",
                  title: "Referencial de IA na Educação Básica",
                  date: "Abril/2026",
                  source: "MEC",
                  url: "https://www.gov.br/mec/pt-br/referencial-de-ia-na-educacao",
                  impact: "Consolidação de diretrizes oficiais — IA entrando na operação escolar",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  org: "Moderna",
                  title: "Moderna Core: ecossistema integrado",
                  date: "05/05/2026",
                  source: "Revista Educação",
                  url: "https://revistaeducacao.com.br/2026/05/05/moderna-core-bett/",
                  impact: "IA + conteúdo + analytics + jornada — mudança competitiva em direção a plataformas integradas",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  org: "Positivo",
                  title: "Parceria com AWS para IA generativa",
                  date: "2026",
                  source: "AWS Brasil",
                  url: "https://aws.amazon.com/pt/blogs/aws-brasil/como-o-educacional-area-da-positivo-tecnologia-revoluciona-a-educacao-com-ia-generativa/",
                  impact: "IA generativa em escala operacional — maturidade técnica crescente no setor",
                  color: "from-violet-500 to-violet-600"
                },
                {
                  org: "Plurall",
                  title: "Plurall 2026: analytics operacional",
                  date: "2026",
                  source: "YouTube",
                  url: "https://www.youtube.com/watch?v=dxmO6eDJqDY",
                  impact: "Transformação de dados em ação pedagógica — fortalecimento da inteligência educacional",
                  color: "from-purple-600 to-violet-600"
                },
                {
                  org: "Árvore",
                  title: "Aquisição da Typper",
                  date: "Set/2025",
                  source: "PublishNews",
                  url: "https://www.publishnews.com.br/materias/2025/09/24/arvore-adquire-a-typper-e-reforca-estrategia-em-ia-na-educacao",
                  impact: "Consolidação de ecossistema via M&A — fortalecimento de plataforma proprietária",
                  color: "from-purple-700 to-purple-800"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#6B46C1] transition-all group cursor-pointer"
                  onClick={() => window.open(item.url, '_blank')}
                >
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold">{item.org}</h3>
                      <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-white/90 mb-4 text-sm">{item.title}</p>
                    <div className="flex items-center gap-4 text-xs text-white/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        <span>{item.source}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-500 mb-2 font-semibold">IMPACTO</p>
                    <p className="text-sm text-gray-900 mb-4 leading-relaxed">{item.impact}</p>
                    <button
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-[#6B46C1] rounded-lg group-hover:bg-[#6B46C1] group-hover:text-white transition-all font-medium text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.url, '_blank');
                      }}
                    >
                      <span>Acessar fonte completa</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concorrência Direta */}
      <section id="concorrencia" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Análise Competitiva</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Concorrência <span className="text-[#6B46C1]">Direta</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left p-4 text-sm font-semibold text-gray-700">Player</th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-700">Movimento Recente</th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-700">Estratégia Implícita</th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-700">Maturidade IA</th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-700">Impacto</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      player: "Moderna (Santillana)",
                      movimento: "Moderna Core — ecossistema integrado",
                      estrategia: "Plataforma completa: conteúdo + IA + analytics + acompanhamento",
                      maturidade: "●●●●○",
                      impacto: "Alto — redefinindo benchmark do setor"
                    },
                    {
                      player: "Positivo",
                      movimento: "Parceria AWS para IA generativa",
                      estrategia: "Infraestrutura enterprise + IA em escala",
                      maturidade: "●●●●○",
                      impacto: "Alto — capacidade técnica robusta"
                    },
                    {
                      player: "Plurall (Somos)",
                      movimento: "Analytics operacional 2026",
                      estrategia: "Inteligência educacional acionável",
                      maturidade: "●●●●○",
                      impacto: "Alto — dados virando ação pedagógica"
                    },
                    {
                      player: "Árvore",
                      movimento: "Aquisição Typper",
                      estrategia: "Consolidação e expansão de ecossistema",
                      maturidade: "●●●○○",
                      impacto: "Médio — fortalecimento via M&A"
                    },
                    {
                      player: "Geekie",
                      movimento: "IA adaptativa",
                      estrategia: "Personalização em escala",
                      maturidade: "●●●○○",
                      impacto: "Médio — foco em adaptatividade"
                    },
                    {
                      player: "SAS",
                      movimento: "Plataforma integrada",
                      estrategia: "Ecossistema educacional completo",
                      maturidade: "●●●○○",
                      impacto: "Médio — força no premium"
                    }
                  ].map((item, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors"
                    >
                      <td className="p-4">
                        <p className="font-semibold text-gray-900">{item.player}</p>
                      </td>
                      <td className="p-4 text-sm text-gray-700">{item.movimento}</td>
                      <td className="p-4 text-sm text-gray-700">{item.estrategia}</td>
                      <td className="p-4">
                        <span className="text-sm font-mono text-[#FF6B35]">{item.maturidade}</span>
                      </td>
                      <td className="p-4 text-sm text-gray-700">{item.impacto}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benchmarks Internacionais */}
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
              <span className="text-sm text-[#6B46C1] font-medium">Referências Globais</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Benchmarks <span className="text-[#6B46C1]">de Inovação</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  player: "Khan Academy",
                  focus: "Khanmigo - AI Tutor",
                  approach: "IA tutor personalizado integrado à plataforma de aprendizagem",
                  lesson: "Copiloto educacional como core product"
                },
                {
                  player: "OpenAI",
                  focus: "ChatGPT Edu",
                  approach: "IA conversacional aplicada à educação com governança institucional",
                  lesson: "Infraestrutura IA enterprise para educação"
                },
                {
                  player: "Anthropic",
                  focus: "Claude for Education",
                  approach: "IA segura e interpretável para contextos educacionais",
                  lesson: "Transparência e segurança como diferencial"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B46C1] to-[#5B3A9E] rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.player}</h3>
                  <p className="text-sm text-[#FF6B35] font-semibold mb-3">{item.focus}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.approach}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 mb-1">LIÇÃO</p>
                    <p className="text-sm text-gray-900">{item.lesson}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Análise Estratégica: Diferenciação vs Commodity */}
      <section id="analise" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-[#6B46C1]" />
              <span className="text-sm text-[#6B46C1] font-medium">Análise Estratégica</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Diferenciação vs <span className="text-[#FF6B35]">Commodity</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-50 p-8 rounded-2xl border-2 border-red-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">JÁ VIROU COMMODITY</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Geração simples de conteúdo",
                    "Chat IA genérico",
                    "Funcionalidades isoladas de IA",
                    "Respostas automáticas básicas",
                    "Resumos e sínteses simples"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-green-50 p-8 rounded-2xl border-2 border-green-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">AINDA DIFERENCIA</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Ecossistema integrado completo",
                    "Analytics pedagógico acionável",
                    "Telemetria e observabilidade",
                    "Personalização operacional em escala",
                    "Integração da jornada escolar",
                    "Governança e rastreabilidade",
                    "Inteligência educacional contextual"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#6B46C1] to-[#5B3A9E] text-white rounded-xl">
              <p className="text-lg font-semibold">
                💡 A vantagem competitiva migrou de "ter IA" para "ter IA operacional integrada ao ecossistema educacional"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hype vs Tendência Real */}
      <section id="hype" className="py-24 px-6 bg-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm text-[#FF6B35] font-medium">Filtro de Sinal</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Hype vs <span className="text-[#6B46C1]">Tendência Real</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border-2 border-orange-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">SUPERVALORIZADO</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">"IA mágica"</p>
                    <p className="text-sm text-gray-600">
                      Promessas de transformação instantânea sem mudança de processo
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Funcionalidades isoladas</p>
                    <p className="text-sm text-gray-600">
                      Features desconectadas que não geram valor operacional
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Excesso de geração de conteúdo</p>
                    <p className="text-sm text-gray-600">
                      Produção massiva sem contexto pedagógico ou supervisão
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border-2 border-purple-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#6B46C1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">TENDÊNCIA REAL</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">IA operacional</p>
                    <p className="text-sm text-gray-600">
                      Integrada aos fluxos escolares, gerando valor mensurável
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Analytics acionável</p>
                    <p className="text-sm text-gray-600">
                      Dados que se transformam em recomendações práticas
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Copilotos educacionais</p>
                    <p className="text-sm text-gray-600">
                      IA que amplia capacidade do professor, não o substitui
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Plataformas inteligentes</p>
                    <p className="text-sm text-gray-600">
                      Ecossistemas completos que conectam toda a jornada
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidades de Produto */}
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
              <span className="text-sm text-[#6B46C1] font-medium">Oportunidades</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-12">
              Oportunidades de <span className="text-[#6B46C1]">Produto</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Copiloto docente integrado",
                  desc: "IA que assiste o professor em planejamento, adaptação de conteúdo e acompanhamento, conectada ao ecossistema",
                  persona: "Professores",
                  destaque: true
                },
                {
                  titulo: "Analytics pedagógico acionável",
                  desc: "Transformar dados em recomendações práticas para intervenção pedagógica",
                  persona: "Gestores",
                  destaque: true
                },
                {
                  titulo: "Telemetria de aprendizagem",
                  desc: "Rastrear jornada do aluno com granularidade para personalização real",
                  persona: "Personalização",
                  destaque: true
                },
                {
                  titulo: "IA adaptativa contextual",
                  desc: "Personalização que considera contexto escolar, não apenas performance individual",
                  persona: "Alunos",
                  destaque: false
                },
                {
                  titulo: "Governança e auditoria de IA",
                  desc: "Dashboard de rastreabilidade, explicabilidade e supervisão de IA",
                  persona: "Gestores",
                  destaque: false
                },
                {
                  titulo: "Recomendação inteligente de recursos",
                  desc: "IA que sugere materiais, atividades e estratégias com base no contexto pedagógico",
                  persona: "Professores",
                  destaque: false
                },
                {
                  titulo: "Assistente de eficiência pedagógica",
                  desc: "Automatização de tarefas operacionais para liberar tempo do professor",
                  persona: "Eficiência",
                  destaque: false
                },
                {
                  titulo: "IA para formação docente",
                  desc: "Copiloto para desenvolvimento profissional contínuo do professor",
                  persona: "Professores",
                  destaque: false
                },
                {
                  titulo: "Integração de jornada completa",
                  desc: "IA que conecta diagnóstico → intervenção → acompanhamento → avaliação",
                  persona: "Analytics",
                  destaque: true
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

      {/* Sinais Estratégicos */}
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
                  sinal: "O mercado começa a consolidar IA como infraestrutura — não apenas feature",
                  evidencia: "Parcerias com big techs (Positivo+AWS), ecossistemas integrados (Moderna Core)",
                  implicacao: "Features isoladas perdem valor; plataformas completas ganham"
                },
                {
                  sinal: "A competição migra de funcionalidades isoladas para ecossistemas completos",
                  evidencia: "Todos os players principais anunciaram 'plataformas integradas' nas últimas semanas",
                  implicacao: "Interoperabilidade e integração tornam-se críticas"
                },
                {
                  sinal: "Governança e rastreabilidade começam a ganhar peso competitivo",
                  evidencia: "Regulamentação CNE + MEC, menções explícitas de players sobre 'IA responsável'",
                  implicacao: "Compliance deixa de ser barreira e vira diferencial"
                },
                {
                  sinal: "Analytics educacional passa a ser parte central da proposta de valor",
                  evidencia: "Plurall 2026 focado em 'dados virando ação', menções constantes de 'inteligência pedagógica'",
                  implicacao: "IA descritiva (dashboards) perde para IA prescritiva (recomendações)"
                },
                {
                  sinal: "Consolidação via M&A indica maturidade do setor",
                  evidencia: "Árvore adquire Typper, movimentos de concentração",
                  implicacao: "Players menores precisam escolher: nicho ou parceria"
                },
                {
                  sinal: "Copilotos educacionais emergem como padrão de mercado",
                  evidencia: "Benchmarks internacionais (Khan, OpenAI, Anthropic) convergem nessa direção",
                  implicacao: "IA que substitui vs IA que amplifica — vitória da segunda"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border-l-4 border-[#FF6B35] shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img src={mascoteIA} alt="Signal" className="h-6 opacity-60 flex-shrink-0 mt-1" />
                    <p className="text-lg font-bold text-gray-900 leading-snug">{item.sinal}</p>
                  </div>
                  <div className="space-y-3 ml-10">
                    <div>
                      <p className="text-xs font-semibold text-[#FF6B35] mb-1">EVIDÊNCIA</p>
                      <p className="text-sm text-gray-600">{item.evidencia}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6B46C1] mb-1">IMPLICAÇÃO</p>
                      <p className="text-sm text-gray-900 font-medium">{item.implicacao}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Edições Anteriores */}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
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
                  Análise sobre ambiente de experimentação para avaliar soluções educacionais com IA
                  e antecipação de critérios de validação no setor.
                </p>
                <button
                  onClick={() => goToEdicao('edicao-abril-2026')}
                  className="w-full px-4 py-2 bg-[#6B46C1] text-white rounded-lg font-medium hover:bg-[#5B3A9E] transition-colors text-sm"
                >
                  Abrir edição
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500">Mais edições em breve</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer/Rodapé */}
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
              <p className="text-white/30 text-xs mt-2">Maio de 2026</p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Botão Voltar ao Topo */}
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
