import React, { useState, useEffect } from 'react';
import {
  Heart,
  Briefcase,
  Activity,
  X,
  ChevronRight,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Award,
  Stethoscope,
  BookOpen,
  GraduationCap,
  Star,
  Building2,
  Calendar,
  Baby,
  FileText,
  Pill,
  Menu,
  Zap,
  CheckCircle2,
  Ear,
  ClipboardCheck,
  User,
  FlaskConical,
  Search,
  Users,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Sun
} from 'lucide-react';

// Reusable Button Component
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-medical-primary text-white hover:bg-medical-primary/90',
    secondary: 'bg-white text-medical-primary border border-medical-primary/20 hover:bg-stone-50',
    dark: 'bg-medical-text text-white hover:bg-medical-primary'
  };

  return (
    <button
      className={`px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs transition-all shadow-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ServicesPage = ({ onNavigate, onScroll }) => {
  return (
    <div className="pt-24 bg-medical-bg animate-fade-in overflow-x-hidden">
      {/* HERO SECTION - SPLIT LAYOUT */}
      <section className="pt-16 pb-12 px-6 md:px-12 bg-white/50 border-b border-medical-primary/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="inline-block px-3 py-1 border border-medical-primary/20 text-medical-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-white mb-2">
              Percorsi di Cura
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-medical-text leading-tight">Di cosa mi occupo</h1>
            <p className="text-xl text-medical-text/60 max-w-2xl mx-auto leading-relaxed">
            Supporto clinico e umano in ogni fase della vita femminile, dalla pubertà alla menopausa passando per la maternità.
          </p>
            <p className="text-base text-medical-text/60 leading-relaxed">
              Ogni fase della vita richiede bisogni diversi: prevenzione, contraccezione, gravidanza o gestione di patologie complesse. Offro valutazioni cliniche accurate per costruire un percorso personalizzato basato sulla tua storia.
            </p>
            <div className="flex gap-4 pt-4">
              <Button onClick={() => onScroll('contatti')}>Prenota Ora</Button>
              <Button variant="secondary" className="bg-white" onClick={() => onScroll('contatti')}>Contattami</Button>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] group">
            <img 
              src="/assets/services_hero_new.jpg" 
              alt="Ambiente Medico" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* APPROACH SECTION - TIGHTER */}
      <section className="py-12 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Ear size={24} />, title: "Ascolto", desc: "Ogni visita parte dal tuo racconto e dai tuoi obiettivi." },
            { icon: <ClipboardCheck size={24} />, title: "Diagnosi", desc: "Integrazione di esami e approfondimenti mirati." },
            { icon: <User size={24} />, title: "Cura su Misura", desc: "Indicazioni terapeutiche costruite in modo individuale." }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-3xl hover:bg-white transition-colors group">
              <div className="w-12 h-12 bg-medical-primary/10 rounded-2xl flex items-center justify-center text-medical-primary shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl mb-1 text-medical-text">{item.title}</h3>
                <p className="text-sm text-medical-text/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID - MORE DENSE */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl text-medical-text mb-4">Aree di Intervento</h2>
              <p className="text-medical-text/60">Competenza specialistica e approccio multidisciplinare per la tua salute.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={24} />, title: "Prevenzione", desc: "Screening, Pap test e controlli periodici." },
              { icon: <Zap size={24} />, title: "MonnaLisa Touch", desc: "Trattamento laser per atrofia e benessere intimo." },
              { icon: <Baby size={24} />, title: "Ostetricia", desc: "Monitoraggio della gestazione e supporto prenatale." },
              { icon: <Activity size={24} />, title: "Ecografia", desc: "Diagnostica pelvica e ostetrica di alta precisione." },
              { icon: <Stethoscope size={24} />, title: "Endometriosi", desc: "Gestione del dolore pelvico e percorsi mirati." },
              { icon: <FlaskConical size={24} />, title: "Endocrinologia", desc: "PCOS, irregolarità e disturbi ormonali." },
              { icon: <Search size={24} />, title: "Patologia Vulvare", desc: "Lesioni vulvari e gestione specialistica." },
              { icon: <Users size={24} />, title: "Infertilità", desc: "Inquadramento e percorso preconcezionale." },
              { icon: <Heart size={24} />, title: "Contraccezione", desc: "Scelta consapevole e consulenza riproduttiva." },
              { icon: <Sun size={24} />, title: "Menopausa", desc: "Gestione dei sintomi, prevenzione dell'osteoporosi e benessere ormonale." }
            ].map((s, i) => (
              <div key={i} className="bg-medical-bg/20 p-6 rounded-3xl border border-transparent hover:border-medical-primary/10 hover:bg-white transition-all shadow-sm hover:shadow-md group">
                <div className="text-medical-primary mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h4 className="font-serif text-lg text-medical-text mb-2">{s.title}</h4>
                <p className="text-medical-text/50 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO & PRACTICAL - CONSOLIDATED */}
      <section className="py-16 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* List Section */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-medical-text">Quando prenotare</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Controllo periodico", "Irregolarità ciclo", "Dolore pelvico", 
                "Infezioni ricorrenti", "Pianificazione gravidanza", "Gravidanza in corso",
                "Contraccezione", "Sintomi vulvari", "PCOS / Endometriosi"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-medical-text/70 text-sm">
                  <CheckCircle2 size={16} className="text-medical-primary/50" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-red-50 rounded-2xl border-l-4 border-red-200">
              <p className="text-red-800 font-bold text-sm mb-1 flex items-center gap-2">
                <AlertTriangle size={16} /> Non sottovalutare i sintomi
              </p>
              <p className="text-red-800/60 text-xs">In presenza di disturbi nuovi o insoliti, richiedi sempre una valutazione medica.</p>
            </div>
          </div>

          {/* Practical Card */}
          <div className="bg-medical-text text-white p-10 rounded-[40px] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-medical-primary/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <h3 className="font-serif text-3xl mb-8 relative z-10">Cosa portare alla visita</h3>
            <div className="space-y-6 relative z-10">
              {[
                { icon: <FileText size={20} />, title: "Documentazione", desc: "Esami precedenti e Pap test recenti." },
                { icon: <Pill size={20} />, title: "Farmaci", desc: "Lista dei medicinali o integratori assunti." },
                { icon: <Calendar size={20} />, title: "Date", desc: "Data ultima mestruazione o diario dei cicli." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-medical-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-stone-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIGHT CTA */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-medical-primary p-12 rounded-[50px] text-center text-white shadow-2xl space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl">Prenditi cura della tua salute</h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Siamo a tua disposizione per ogni necessità o chiarimento.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="dark" className="bg-white !text-medical-primary hover:bg-stone-100" onClick={() => onScroll('contatti')}>
              Prenota Appuntamento
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = ({ onScroll }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FCF9F7] animate-fade-in">
      <div className="container mx-auto px-6">

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-medical-primary font-bold text-[10px] tracking-[0.2em] uppercase">Chi Sono</span>
              <h1 className="font-serif text-5xl md:text-6xl text-medical-text leading-tight">Professionalità, ascolto e <span className="italic">cura personalizzata</span></h1>
            </div>
            <div className="space-y-6 text-medical-text/70 leading-relaxed text-lg">
              <p>
                Sono la Dott.ssa Maria Cristina Sangiovanni, medico chirurgo specialista in Ginecologia e Ostetricia. Mi occupo della salute della donna nelle diverse fasi della vita, con particolare attenzione alla prevenzione ginecologica, alla gravidanza, alla patologia ostetrica, all’ecografia ostetrico-ginecologica e all’endometriosi. La mia formazione si è svolta presso importanti strutture sanitarie romane, tra cui il Campus Bio-Medico, il Gemelli Isola – Isola Tiberina, l’Ospedale Sant’Eugenio e l’Azienda Ospedaliero-Universitaria Sant’Andrea.
              </p>
              <p>
                Attualmente sono Dirigente Medico in Ginecologia e Ostetricia presso l’Ospedale G.B. Grassi di Ostia e sto completando il Master Universitario di II livello in Medicina Materno-Fetale presso l’Università degli Studi di Roma Tor Vergata. Accanto all’attività clinica, porto avanti un percorso di ricerca scientifica, con partecipazione come relatrice a congressi nazionali e internazionali. Nel 2026 ho ricevuto il premio Best E-Poster al congresso SEUD per un lavoro di ricerca sull’endometriosi. Il mio approccio si basa sull’ascolto, sulla chiarezza e sulla costruzione di un percorso di cura personalizzato, in cui ogni paziente possa sentirsi accolta, compresa e accompagnata con competenza.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 relative">
              <div className="absolute -right-20 top-0 text-[120px] font-serif text-medical-primary/5 select-none pointer-events-none hidden lg:block uppercase tracking-widest">
                BIOMEDICAL
              </div>
              <div className="space-y-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-medical-primary/10 flex items-center justify-center text-medical-primary">
                  <Activity size={20} />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-medical-text/40">Attività Ospedaliera</h4>
                <p className="text-xs font-bold text-medical-text">Dirigente Medico presso Ospedale G.B. Grassi</p>
              </div>
              <div className="space-y-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-medical-primary/10 flex items-center justify-center text-medical-primary">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-medical-text/40">Formazione Avanzata</h4>
                <p className="text-xs font-bold text-medical-text">Master in Medicina Materno-Fetale</p>
              </div>
              <div className="space-y-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-medical-primary/10 flex items-center justify-center text-medical-primary">
                  <Award size={20} />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-medical-text/40">Ricerca e Congressi</h4>
                <p className="text-xs font-bold text-medical-text">Relatrice a congressi nazionali e internazionali</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl bg-white p-4 rotate-2 hover:rotate-0 transition-transform duration-700">
              <img src="/assets/sangiovanni_about_final.jpg" alt="Dott.ssa Sangiovanni" className="w-full h-full object-cover rounded-[32px]" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-medical-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-7 bg-white rounded-3xl p-12 shadow-sm border border-medical-primary/5">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-medical-bg flex items-center justify-center text-medical-primary">
                <Stethoscope size={24} />
              </div>
              <h3 className="font-serif text-2xl text-medical-text">Percorso Accademico</h3>
            </div>
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-4 h-4 rounded-full border-2 border-medical-primary bg-white z-10 mt-1.5 shrink-0"></div>
                <div className="space-y-2">
                  <span className="text-medical-primary font-bold text-xs">2026</span>
                  <h4 className="font-bold text-medical-text">Specializzazione in Ginecologia e Ostetricia</h4>
                  <p className="text-sm text-medical-text/50 italic">Università Campus Bio-Medico di Roma</p>
                </div>
              </div>
              <div className="flex gap-8 relative">
                <div className="absolute left-[7px] top-8 bottom-[-40px] w-px bg-medical-primary/10"></div>
                <div className="w-4 h-4 rounded-full border-2 border-medical-primary bg-white z-10 mt-1.5 shrink-0"></div>
                <div className="space-y-2">
                  <span className="text-medical-primary font-bold text-xs">2026 - in corso</span>
                  <h4 className="font-bold text-medical-text">Master Universitario di II livello in Medicina Materno-Fetale</h4>
                  <p className="text-sm text-medical-text/50 italic">Università degli Studi di Roma Tor Vergata</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-4 h-4 rounded-full border-2 border-medical-primary bg-white z-10 mt-1.5 shrink-0"></div>
                <div className="space-y-2">
                  <span className="text-medical-primary font-bold text-xs">2026 - attuale</span>
                  <h4 className="font-bold text-medical-text">Dirigente Medico in Ginecologia e Ostetricia</h4>
                  <p className="text-sm text-medical-text/50 italic">Ospedale G.B. Grassi – ASL Roma 3, Ostia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 bg-medical-text text-white rounded-3xl p-12 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="space-y-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-medical-primary">
                <Star size={32} />
              </div>
              <h3 className="font-serif text-3xl">La mia missione</h3>
              <p className="text-lg text-stone-400 leading-relaxed italic">
                "Ascoltare la donna significa riconoscerne la sensibilità e le esigenze uniche, garantendo un supporto clinico che non prescinda mai dal rispetto e dall'empatia."
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <User size={20} />
                </div>
                <span className="font-serif text-lg">Maria Cristina Sangiovanni</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-12 pb-8 bg-white border-t border-medical-primary/5">
          <div className="container mx-auto px-6 text-center max-w-4xl space-y-8">
            <h2 className="font-serif text-5xl md:text-6xl text-medical-text">
              Prenota una visita specialistica.
            </h2>
            <p className="text-xl text-medical-text/50 max-w-2xl mx-auto">
              Ricevo su appuntamento per offrirti consulenza ginecologica e ostetrica personalizzata.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <Button variant="dark" onClick={() => onScroll('contatti')}>Prenota un Appuntamento</Button>
            <a href="mailto:sangiovanniginecologa@gmail.com">
              <Button variant="secondary" className="bg-transparent border border-medical-primary/20">Contattami via Email</Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Block scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReminder = () => {
    const today = new Date();
    const nextYear = new Date(today.setFullYear(today.getFullYear() + 1));
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15) + 'Z';
    };

    const startTime = formatDate(nextYear);
    const endTime = formatDate(new Date(nextYear.getTime() + 60 * 60 * 1000));

    const title = "Controllo Ginecologico - Dott.ssa Sangiovanni";
    const description = "Ricordare di prenotare la visita ginecologica di controllo con la dott.ssa Sangiovanni. Contatti per prenotare: Email: sangiovanniginecologa@gmail.com - WhatsApp: +393337631097";
    
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${startTime}`,
      `DTEND:${endTime}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'promemoria_visita.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-medical-bg font-sans text-medical-text w-full overflow-x-hidden relative">

      {/* Navbar - Hidden when mobile menu is open to avoid double buttons */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'hidden' : scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center h-full">
          <div className="font-serif text-base md:text-2xl font-bold tracking-tight text-medical-text max-w-[70%] leading-tight">
            Dott.ssa Maria Cristina Sangiovanni
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-widest text-medical-text/60">
            <button onClick={() => setCurrentPage('home')} className={`hover:text-medical-primary transition-colors ${currentPage === 'home' ? 'text-medical-primary' : ''}`}>Home</button>
            <button onClick={() => setCurrentPage('servizi')} className={`hover:text-medical-primary transition-colors ${currentPage === 'servizi' ? 'text-medical-primary' : ''}`}>Di cosa mi occupo</button>
            <button onClick={() => setCurrentPage('about')} className={`hover:text-medical-primary transition-colors ${currentPage === 'about' ? 'text-medical-primary' : ''}`}>Chi Sono</button>
            <button onClick={() => scrollToSection('contatti')} className="hover:text-medical-primary transition-colors">Contatti</button>
            <Button variant="dark" className="ml-4" onClick={() => scrollToSection('contatti')}>Prenota Visita</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-medical-text p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu Overlay - Forced Full Screen Bulletproof */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#FCF9F7] z-[9999] md:hidden flex flex-col animate-fade-in"
          style={{ width: '100%', height: '100%', left: 0, top: 0, right: 0, bottom: 0, margin: 0, padding: 0 }}
        >
          {/* Header in Overlay */}
          <div className="flex justify-between items-center px-8 py-8 border-b border-medical-primary/10">
            <div className="font-serif text-2xl font-bold text-medical-text">
              Menu
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-medical-text p-2 hover:bg-medical-primary/5 rounded-full transition-colors">
              <X size={48} />
            </button>
          </div>

          {/* Menu Links - Truly Monumental and Spaced */}
          <div className="flex-grow flex flex-col items-center justify-center space-y-12 px-8 pb-12">
            <button 
              onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} 
              className={`text-6xl font-serif tracking-tighter py-3 w-full text-center transition-all ${currentPage === 'home' ? 'text-medical-primary italic underline underline-offset-[24px]' : 'text-medical-text opacity-90'}`}
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentPage('servizi'); setIsMobileMenuOpen(false); }} 
              className={`text-6xl font-serif tracking-tighter py-3 w-full text-center transition-all ${currentPage === 'servizi' ? 'text-medical-primary italic underline underline-offset-[24px]' : 'text-medical-text opacity-90'}`}
            >
              Servizi
            </button>
            <button 
              onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }} 
              className={`text-6xl font-serif tracking-tighter py-3 w-full text-center transition-all ${currentPage === 'about' ? 'text-medical-primary italic underline underline-offset-[24px]' : 'text-medical-text opacity-90'}`}
            >
              Chi Sono
            </button>
            <button 
              onClick={() => { scrollToSection('contatti'); setIsMobileMenuOpen(false); }} 
              className="text-6xl font-serif tracking-tighter py-3 w-full text-center text-medical-text/30"
            >
              Contatti
            </button>
            
            <div className="pt-16 w-full">
              <Button 
                variant="dark" 
                className="w-full py-12 text-4xl shadow-2xl rounded-[50px] font-serif" 
                onClick={() => { scrollToSection('contatti'); setIsMobileMenuOpen(false); }}
              >
                Prenota Visita
              </Button>
            </div>
          </div>
        </div>
      )}

      <main>
        {currentPage === 'home' ? (
          <>
            {/* Hero Section - Stacked on Mobile, Split on Desktop */}
            <section className="relative min-h-screen flex flex-col md:flex-row bg-medical-bg overflow-hidden">
              
              {/* Text Side */}
              <div className="flex-1 flex items-center z-10 pt-32 pb-12 md:py-0">
                <div className="container mx-auto px-6">
                  <div className="max-w-2xl space-y-8 animate-fade-in text-center md:text-left mx-auto md:mx-0">
                    <div className="inline-block px-4 py-1.5 border border-medical-primary/20 text-medical-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-white/80 backdrop-blur-sm">
                      Ginecologia e Ostetricia
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-medical-text">
                      Accompagno ogni donna in <span className="italic text-medical-primary">ogni fase della vita.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-medical-text leading-relaxed mx-auto md:mx-0 font-medium">
                      Prevenzione, cura e ascolto per il benessere femminile, con un approccio empatico e professionale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                      <Button variant="dark" className="px-10 py-5 text-base md:text-xs" onClick={() => scrollToSection('contatti')}>Prenota una Visita</Button>
                      <Button variant="secondary" className="px-10 py-5 text-base md:text-xs bg-white/90" onClick={() => setCurrentPage('servizi')}>Scopri i Servizi</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Side - Full Width on Mobile, Half on Desktop */}
              <div className="relative w-full md:w-[50%] h-[50vh] md:h-screen overflow-hidden">
                <img 
                  src="/assets/sangiovanni_real_hero.jpg" 
                  alt="Dott.ssa Maria Cristina Sangiovanni"
                  className="w-full h-full object-cover object-top md:object-contain md:object-right-bottom transition-all duration-1000"
                  style={{
                    maskImage: window.innerWidth > 768 ? 'linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' : 'none',
                    WebkitMaskImage: window.innerWidth > 768 ? 'linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' : 'none'
                  }}
                />
                {/* Mobile shadow overlay to transition to next section */}
                <div className="absolute inset-0 bg-gradient-to-t from-medical-bg via-transparent to-transparent md:hidden" />
              </div>
            </section>

            {/* Il Mio Approccio */}
            <section id="chi-sono" className="py-12 bg-white">
              <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="font-serif text-4xl md:text-5xl text-medical-text mb-6">Il Mio Approccio</h2>
                <p className="text-lg text-medical-text/70 mb-12 leading-relaxed">
                  Ogni donna merita un percorso di cura personalizzato, fondato sull'ascolto, sulla chiarezza e sull'appropriatezza clinica.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Heart className="text-medical-primary" />,
                      title: "Empatia e Ascolto",
                      desc: "Accolgo ogni paziente con attenzione e rispetto, creando uno spazio in cui sentirsi libera di raccontare dubbi, sintomi e bisogni."
                    },
                    {
                      icon: <Briefcase className="text-medical-primary" />,
                      title: "Competenza Clinica",
                      desc: "Un'esperienza ospedaliera e aggiornamento scientifico per offrire una valutazione accurata e consapevole."
                    },
                    {
                      icon: <Activity className="text-medical-primary" />,
                      title: "Cura Personalizzata",
                      desc: "Dalla prevenzione ginecologica alla gravidanza, fino alla gestione delle principali patologie ostetriche e ginecologiche, ogni percorso viene costruito sulle esigenze della singola paziente."
                    }
                  ].map((card, i) => (
                    <div key={i} className="p-10 bg-medical-bg rounded-lg text-left space-y-4 hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-medical-primary group-hover:text-white transition-colors">
                        {card.icon}
                      </div>
                      <h3 className="font-serif text-xl text-medical-text">{card.title}</h3>
                      <p className="text-sm text-medical-text/60 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
                <Button variant="secondary" className="mt-12" onClick={() => setCurrentPage('about')}>Chi Sono</Button>
                
                {/* Testimonials */}
                <div className="pt-8 pb-12 bg-white overflow-hidden">
                  <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl md:text-5xl text-medical-text mb-8 text-center">Le Esperienze delle Pazienti</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          text: "La dottoressa Sangiovanni è una professionista rara. Mi ha fatto sentire subito a mio agio e ha risposto a ogni mio dubbio con estrema chiarezza.",
                          name: "Laura M.",
                          sub: "Paziente dal 2023"
                        },
                        {
                          text: "Ho seguito tutto il percorso della mia gravidanza con lei. Competenza e umanità sono le parole che meglio la descrivono.",
                          name: "Sara L.",
                          sub: "Paziente dal 2023"
                        },
                        {
                          text: "Mi sono sentita finalmente accolta per le problematiche della menopausa. Una guida preziosa in questo momento di cambiamento.",
                          name: "Elena G.",
                          sub: "Paziente dal 2022"
                        }
                      ].map((testi, i) => (
                        <div key={i} className="p-8 bg-medical-bg rounded-lg space-y-6 flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#775927" className="text-medical-primary" />)}
                            </div>
                            <p className="text-medical-text/70 leading-relaxed italic">"{testi.text}"</p>
                          </div>
                          <div className="flex items-center gap-4 border-t border-medical-primary/10 pt-6">
                            <div className="w-10 h-10 bg-medical-primary/10 rounded-full flex items-center justify-center font-bold text-medical-primary">
                              {testi.name[0]}
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-medical-text">{testi.name}</h4>
                              <p className="text-xs text-medical-text/40">{testi.sub}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 px-6">
              <div className="container mx-auto max-w-5xl bg-medical-text rounded-[40px] p-12 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-medical-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="relative z-10 space-y-8">
                  <h2 className="font-serif text-4xl md:text-5xl">Prenditi cura di te stessa</h2>
                  <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                    Prenota un appuntamento per una visita specialistica ginecologica o ostetrica.
                  </p>
                  <Button variant="secondary" className="!bg-white !text-medical-text hover:!bg-stone-50" onClick={() => scrollToSection('contatti')}>
                    Prenota Ora Appuntamento
                  </Button>
                </div>
              </div>
            </section>
          </>
        ) : currentPage === 'servizi' ? (
          <ServicesPage onNavigate={setCurrentPage} onScroll={scrollToSection} />
        ) : currentPage === 'about' ? (
          <AboutPage onScroll={scrollToSection} />
        ) : null}

        {/* Contatti Section - Moved outside ternary to be global */}
        <section id="contatti" className="py-12 bg-[#FCF9F7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-serif text-5xl text-medical-text">Contatti</h2>
              <p className="text-lg text-medical-text/60 max-w-2xl mx-auto">
                Sono a disposizione per informazioni, appuntamenti e consulenze. Scegli il canale che preferisci per contattarmi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left Side: Image */}
              <div className="rounded-[40px] overflow-hidden shadow-sm h-[350px] md:h-[550px]">
                <img
                  src="/assets/contact_desk.jpg"
                  alt="Contatti Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Contact Card and Reminder */}
              <div className="space-y-8">
                {/* White Contact Card */}
                <div className="bg-white p-6 md:p-10 rounded-[40px] shadow-sm border border-medical-primary/5 space-y-10">
                  {/* WhatsApp */}
                  <a href="https://wa.me/393337631097" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 md:gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#E8F5E9] rounded-2xl flex items-center justify-center text-[#4CAF50] shrink-0 transition-transform group-hover:scale-110">
                      <MessageCircle size={24} />
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-medical-text/40">Whatsapp</h4>
                      <p className="text-xl font-serif text-medical-text font-bold">Invia un messaggio</p>
                      <p className="text-sm text-medical-text/50">Risposta rapida durante gli orari di segreteria.</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:sangiovanniginecologa@gmail.com" className="flex items-start gap-4 md:gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-medical-bg rounded-2xl flex items-center justify-center text-medical-primary shrink-0 transition-transform group-hover:scale-110">
                      <Mail size={24} />
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-medical-text/40">Email</h4>
                      <p className="text-lg md:text-xl font-serif text-medical-text font-bold break-all leading-tight">
                        sangiovanniginecologa@gmail.com
                      </p>
                      <p className="text-sm text-medical-text/50">Riceverai risposta il prima possibile.</p>
                    </div>
                  </a>

                  {/* Ospedale */}
                  <div className="flex items-start gap-4 md:gap-6 group">
                    <div className="w-12 h-12 bg-medical-bg rounded-2xl flex items-center justify-center text-medical-primary shrink-0 transition-transform group-hover:scale-110">
                      <Building2 size={24} />
                    </div>
                    <div className="space-y-2 overflow-hidden">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-medical-text/40">Ospedale</h4>
                      <p className="text-xl font-serif text-medical-text font-bold leading-tight">Ospedale G.B. Grassi – ASL Roma 3 (Ostia)</p>
                      <p className="text-sm text-medical-text/50">Attività clinica e assistenziale.</p>
                      <a 
                        href="https://www.aslroma3.it/ospedale-g-b-grassi/ostetricia-e-ginecologia/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-medical-primary text-xs font-bold flex items-center gap-2 mt-2 group-hover:gap-3 transition-all"
                      >
                        Vai alla pagina del reparto <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Studio */}
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-medical-bg rounded-2xl flex items-center justify-center text-medical-primary shrink-0 transition-transform group-hover:scale-110">
                      <MapPin size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-medical-text/40">Studio</h4>
                      <p className="text-xl font-serif text-medical-text font-bold">Sunmed Group – Roma EUR Torrino</p>
                      <p className="text-sm text-medical-text/50">Ricevo su appuntamento.</p>
                      <a 
                        href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x13258b47f9303a63:0xfc9bb80baf176081?sa=X&ved=1t:8290&ictx=111" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-medical-primary text-xs font-bold flex items-center gap-2 mt-2 group-hover:gap-3 transition-all"
                      >
                        Vedi su Google Maps <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reminder Card - Now Full Width Below the Grid */}
            <div className="mt-12 bg-[#F3E5DC] p-6 md:p-10 rounded-[40px] shadow-sm border border-medical-primary/5">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center text-medical-primary shrink-0">
                    <Calendar size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl text-medical-text font-bold leading-tight">Non dimenticare il controllo annuale</h3>
                    <p className="text-medical-text/60 leading-relaxed text-base">
                      Aggiungi un promemoria al tuo calendario per ricordarti di prenotare la prossima visita tra un anno.
                    </p>
                  </div>
                </div>
                <Button 
                  variant="dark" 
                  className="w-full md:w-auto px-10 py-4 text-base md:text-xs bg-[#775927] hover:bg-[#634a21] leading-tight"
                  onClick={handleReminder}
                >
                  Ricordami la prossima visita
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-100 py-20 text-medical-text">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="font-serif text-xl font-bold">Dr. Maria Cristina Sangiovanni</div>
            <a 
              href="https://www.linkedin.com/in/maria-cristina-sangiovanni-39b4801a4/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-medical-text/60 hover:text-medical-primary transition-colors cursor-pointer"
            >
              <Linkedin size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Linkedin</span>
            </a>
          </div>
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-medical-text/40 mb-8">Navigazione</h4>
            <ul className="space-y-4 text-sm text-medical-text/60 font-medium">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-medical-primary transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('servizi')} className="hover:text-medical-primary transition-colors">Servizi</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-medical-primary transition-colors font-bold text-medical-primary border-b border-medical-primary/20">Chi Sono</button></li>
              <li><button onClick={() => scrollToSection('contatti')} className="hover:text-medical-primary transition-colors">Contatti</button></li>
            </ul>
          </div>
          <div>
            <div className="h-16 hidden md:block"></div>
            <ul className="space-y-4 text-sm text-medical-text/60 font-medium">
              <li><a href="#" className="hover:text-medical-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-medical-primary transition-colors">Informativa Sanitaria</a></li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-medical-text/30">
          <div>© 2024 Dr. Maria Cristina Sangiovanni. P.IVA 12345678901</div>
          <div className="flex gap-8">
            <a href="#">Impostazioni Cookie</a>
            <a href="#">Diritto d'autore</a>
          </div>
        </div>
      </footer>

      {/* CV Modal Popup (Mini version to match "Chi Sono") */}
      {showCV && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCV(false)}></div>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative z-10 animate-fade-in-up p-8 md:p-12">
            <button onClick={() => setShowCV(false)} className="absolute top-6 right-6 p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors">
              <X size={24} />
            </button>
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="rounded-lg overflow-hidden shadow-lg aspect-[3/4] bg-stone-100 mb-6">
                  <img src="/assets/sangiovanni_portrait_hero_1777150897710.png" alt="Dott.ssa Sangiovanni" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-medical-text/60 text-sm italic border-b border-stone-100 pb-2">
                    <Award size={16} /> Specialista in Ginecologia
                  </div>
                  <div className="flex items-center gap-3 text-medical-text/60 text-sm italic border-b border-stone-100 pb-2">
                    <MapPin size={16} /> Milano, Italia
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 space-y-8">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl text-medical-text">Dott.ssa Maria Cristina Sangiovanni</h2>
                  <p className="text-medical-primary font-bold uppercase tracking-[0.2em] text-xs">Medico Chirurgo - Ostetricia e Ginecologia</p>
                </div>
                <div className="space-y-4 text-medical-text/70 leading-relaxed">
                  <p>
                    Mi dedico alla salute della donna con un approccio che unisce l'eccellenza clinica a una profonda empatia. La mia missione è accompagnare ogni paziente attraverso le diverse fasi della vita, dalla prevenzione alla maternità, fino alla menopausa.
                  </p>
                  <p>
                    Presso il mio studio di Milano, offro consulenze specialistiche supportate dalle più recenti tecnologie diagnostiche, garantendo un ambiente accogliente e professionale dove ogni donna può sentirsi ascoltata e curata.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-medical-bg rounded-lg">
                    <div className="font-serif text-2xl text-medical-primary mb-1">10+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Anni di Esperienza</div>
                  </div>
                  <div className="p-4 bg-medical-bg rounded-lg">
                    <div className="font-serif text-2xl text-medical-primary mb-1">5000+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Pazienti Assistite</div>
                  </div>
                </div>
                <Button onClick={() => setShowCV(false)}>Contattami</Button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
