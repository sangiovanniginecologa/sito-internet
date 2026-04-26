
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Baby, Activity, ShieldCheck, HeartPulse, Sparkles, ChevronRight, User, Heart, Dna, Layers, Zap, Microscope } from 'lucide-react';

// --- SERVICE CARDS ---
export const ServicesGrid: React.FC = () => {
    const services = [
        {
            id: 'gravidanza',
            title: 'Gravidanza',
            icon: <Baby size={24} />,
            desc: 'Monitoraggio completo della gravidanza, dalla diagnosi prenatale al parto, per garantire la salute di mamma e bambino.',
            details: [
                'Gestione gravidanza fisiologica',
                'Patologia in gravidanza'
            ]
        },
        {
            id: 'patologia-vulvare',
            title: 'Patologia Vulvare',
            icon: <Microscope size={24} />,
            desc: 'Diagnosi e trattamento specialistico delle affezioni e delle dermatosi che colpiscono i genitali esterni.',
            details: [
                'Dermatosi vulvare',
                'Lichen Sclerosus',
                'Vulvodinia',
                'Dermatiti vulvari (allergiche, irritative, da contatto)',
                'Infezioni vulvari ricorrenti (candida, batteriosi)',
                'Atrofia vulvo-vaginale',
                'Lesioni vulvari benigne',
                'Condilomi e HPV',
                'Ulcere vulvari e dolore vulvare',
                'Counselling per igiene e cura vulvare'
            ]
        },
        {
            id: 'endocrinologia',
            title: 'Endocrinologia Ginecologica',
            icon: <Dna size={24} />,
            desc: 'Gestione dei disturbi ormonali che influenzano la salute riproduttiva e il benessere generale della donna.',
            details: [
                'Contraccezione', 'Acne', 'Sindrome premestruale', 
                'Sindrome dell\'ovaio policistico (PCOS)', 'Amenorrea', 
                'Metrorragia', 'Iperandrogenismo'
            ]
        },
        {
            id: 'prevenzione',
            title: 'Prevenzione',
            icon: <ShieldCheck size={24} />,
            desc: 'Screening e diagnosi delle principali infezioni e patologie per una protezione completa.',
            details: [
                'Malattie sessualmente trasmissibili', 'Virus del papilloma umano (HPV)', 
                'Condiloma acuminato', 'Herpes genitale', 
                'Infezione delle vie urinarie', 'Sifilide'
            ]
        },
        {
            id: 'ecografia',
            title: 'Ecografia',
            icon: <HeartPulse size={24} />,
            desc: 'Ecografie ginecologiche e ostetriche.',
            details: ['Ecografia transvaginale', 'Ecografia 3D/4D', 'Flussimetria', 'Ecografia transaddominale', 'Ecografia pelvica']
        },
        {
            id: 'endometriosi',
            title: 'Endometriosi',
            icon: <Layers size={24} />,
            desc: 'Percorso dedicato alla diagnosi e al trattamento dell\'endometriosi e del dolore pelvico cronico.',
            details: ['Dolore pelvico cronico', 'Diagnosi ecografica', 'Terapia medica personalizzata', 'Monitoraggio clinico']
        },
        {
            id: 'menopausa',
            title: 'Menopausa',
            icon: <Activity size={24} />,
            desc: 'Supporto specialistico per affrontare i cambiamenti ormonali con serenità e mantenere un alto livello di qualità di vita.',
            details: [
                'Terapie ormonali', 
                'Salute dell\'osso', 
                'Benessere urogenitale', 
                'Stile di vita',
                'Sindrome genitourinaria della menopausa',
                'Incontinenza urinaria',
                'Vampate',
                'Atrofia vaginale'
            ]
        },
        {
            id: 'adolescenza',
            title: 'Adolescenza',
            icon: <Sparkles size={24} />,
            desc: 'Un approccio delicato e informativo per le prime visite e l\'educazione alla salute sessuale delle più giovani.',
            details: ['Prima visita', 'Irregolarità ciclo', 'Educazione sessuale', 'Vaccinazione HPV']
        },
        {
            id: 'ginecologia',
            title: 'Ginecologia',
            icon: <Stethoscope size={24} />,
            desc: 'Visite specialistiche per la prevenzione, diagnosi e cura delle patologie dell\'apparato genitale femminile.',
            details: [
                'Terapia genito-urinaria',
                'Infezioni urinarie ricorrenti',
                'Dolore vescicale',
                'Dolore pelvico cronico e acuto',
                'Patologie uterine (es. utero setto, polipi, fibromi)',
                'Cisti ovariche',
                'Irregolarità mestruali e disordini del ciclo',
                'Contraccezione personalizzata',
                'Acne'
            ]
        },
        {
            id: 'inclusivita',
            title: 'Inclusività e supporto LGBTQ+',
            icon: <Heart size={24} />,
            desc: 'Un aspetto centrale dell’essere umano lungo tutto l’arco della vita; comprende identità, orientamento, piacere e intimità.',
            details: ['Benessere sessuale', 'Focus LGBTQ+', 'Dispareunia e Vaginismo', 'Consulenza inclusiva', 'Educazione sessuale']
        },
        {
            id: 'ostetricia',
            title: 'Ostetricia',
            icon: <Baby size={24} />,
            desc: 'Assistenza completa alla donna in gravidanza, per un percorso nascita sereno e sicuro.',
            details: [
                'Visite in gravidanza',
                'Ecografie ostetriche',
                'Gestione delle gravidanze a rischio',
                'Consulenze'
            ]
        }
    ];

    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((s) => (
                    <motion.div 
                        key={s.id}
                        className={`bg-white rounded-xl p-8 border transition-all duration-300 cursor-pointer group hover:shadow-lg relative overflow-hidden ${activeId === s.id ? 'border-medical-primary ring-1 ring-medical-primary shadow-lg' : 'border-stone-200 hover:border-medical-primary/50'}`}
                        onClick={() => setActiveId(activeId === s.id ? null : s.id)}
                        layout
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors ${activeId === s.id ? 'bg-medical-primary text-white' : 'bg-stone-100 text-stone-600 group-hover:bg-medical-primary/10 group-hover:text-medical-primary'}`}>
                            {s.icon}
                        </div>
                        
                        <h3 className="font-serif text-2xl text-stone-900 mb-3">{s.title}</h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                            {s.desc}
                        </p>

                        <AnimatePresence>
                            {activeId === s.id && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="border-t border-stone-100 pt-4 mt-4 overflow-hidden"
                                >
                                    <ul className={`grid gap-x-4 gap-y-2 ${s.details.length > 6 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                        {s.details.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-stone-500 font-medium leading-tight">
                                                <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mr-2 mt-1 shrink-0"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        <div className={`mt-4 flex items-center text-xs font-bold uppercase tracking-widest transition-colors ${activeId === s.id ? 'text-medical-primary' : 'text-stone-400 group-hover:text-medical-primary'}`}>
                            {activeId === s.id ? 'Chiudi' : 'Dettagli'} <ChevronRight size={14} className={`ml-1 transition-transform ${activeId === s.id ? 'rotate-90' : ''}`} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Special Full Width Card for MonnaLisa Touch */}
            <motion.div 
                className={`bg-white rounded-xl p-8 border transition-all duration-300 cursor-pointer group hover:shadow-lg relative overflow-hidden ${activeId === 'ringiovanimento' ? 'border-medical-primary ring-1 ring-medical-primary shadow-lg' : 'border-stone-200 hover:border-medical-primary/50'}`}
                onClick={() => setActiveId(activeId === 'ringiovanimento' ? null : 'ringiovanimento')}
                layout
            >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeId === 'ringiovanimento' ? 'bg-medical-primary text-white' : 'bg-stone-100 text-stone-600 group-hover:bg-medical-primary/10 group-hover:text-medical-primary'}`}>
                        <Zap size={24} />
                    </div>
                    
                    <div className="flex-1">
                        <h3 className="font-serif text-2xl text-stone-900 mb-2">Ringiovanimento vaginale e salute sessuale</h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4 max-w-2xl">
                           Trattamento <strong>MonnaLisa Touch</strong> per secchezza, atrofia e benessere intimo.
                           Una terapia laser d'avanguardia per migliorare la qualità della vita e la salute sessuale.
                        </p>

                        <AnimatePresence>
                            {activeId === 'ringiovanimento' && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="border-t border-stone-100 pt-4 mt-4 overflow-hidden"
                                >
                                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3">
                                        {[
                                            'Trattamento della secchezza vaginale',
                                            'Dispareunia e dolore nei rapporti',
                                            'Atrofia vulvo-vaginale',
                                            'Valutazione per Riabilitazione del pavimento pelvico',
                                            'Incontinenza urinaria lieve',
                                            'Recupero post-partum'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-stone-500 font-medium leading-tight">
                                                <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mr-2 mt-1 shrink-0"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        <div className={`mt-2 flex items-center text-xs font-bold uppercase tracking-widest transition-colors ${activeId === 'ringiovanimento' ? 'text-medical-primary' : 'text-stone-400 group-hover:text-medical-primary'}`}>
                            {activeId === 'ringiovanimento' ? 'Chiudi' : 'Dettagli'} <ChevronRight size={14} className={`ml-1 transition-transform ${activeId === 'ringiovanimento' ? 'rotate-90' : ''}`} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- LIFECYCLE TIMELINE ---
interface LifeCycleTimelineProps {
    onColorChange?: (color: string) => void;
}

export const LifeCycleTimeline: React.FC<LifeCycleTimelineProps> = ({ onColorChange }) => {
    const stages = useMemo(() => [
        { 
            id: 0, 
            label: "Adolescenza", 
            age: "12-19", 
            text: "Il momento dei primi cambiamenti. Mi occupo di educazione, prevenzione e prime visite in un clima di fiducia e delicatezza.",
            color: "#BCAAA4" // Light Rosy Beige
        },
        { 
            id: 1, 
            label: "Età Fertile", 
            age: "20-45", 
            text: "Monitoraggio della salute riproduttiva, contraccezione consapevole e supporto al desiderio di maternità.",
            color: "#A69389" // Medium Beige
        },
        {
            id: 2,
            label: "Social Freezing",
            age: "Preservazione",
            text: "Una scelta di libertà per il proprio futuro. Crioconservazione degli ovociti per proteggere la fertilità e decidere i tempi della maternità.",
            color: "#9B8A80" // Intermediate Warm Beige
        },
        { 
            id: 3, 
            label: "Gravidanza", 
            age: "Maternità", 
            text: "Un viaggio emozionante che seguo passo dopo passo, con controlli ecografici e clinici per la sicurezza di mamma e bebè.",
            color: "#907C70" // Dark Beige
        },
        { 
            id: 4, 
            label: "Menopausa", 
            age: "50+", 
            text: "Una nuova fase di vita da accogliere con serenità. Percorsi personalizzati per il benessere fisico ed emotivo.",
            color: "#786458" // Deep Brown/Beige
        },
    ], []);

    const [activeStage, setActiveStage] = useState(1); // Default to Fertile Age

    useEffect(() => {
        if (onColorChange) {
            onColorChange(stages[activeStage].color);
        }
    }, [activeStage, onColorChange, stages]);

    return (
        <div className="flex flex-col items-center">
            {/* Timeline Line */}
            <div className="relative w-full max-w-4xl h-1 bg-white/20 rounded-full mb-12 flex justify-between items-center px-4 md:px-12">
                {stages.map((stage, index) => (
                    <div key={stage.id} className="relative group cursor-pointer" onClick={() => setActiveStage(index)}>
                        {/* Dot */}
                        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10 ${activeStage === index ? 'bg-white border-white scale-150 shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-white/30 border-white/40 hover:border-white'}`}></div>
                        
                        {/* Label Desktop */}
                        <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-serif transition-colors duration-300 hidden md:block ${activeStage === index ? 'text-white font-bold' : 'text-white/50'}`}>
                            {stage.label}
                        </div>
                    </div>
                ))}
                {/* Connecting Line Progress */}
                 <motion.div 
                    className="absolute left-0 top-0 h-full bg-white rounded-full z-0"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                 />
            </div>

            {/* Content Display */}
            <div className="w-full max-w-3xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 text-center shadow-2xl"
                    >
                        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/10">
                            {stages[activeStage].age}
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">{stages[activeStage].label}</h3>
                        <p className="text-xl text-white/90 font-light leading-relaxed">
                            {stages[activeStage].text}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <div className="flex gap-2 mt-8">
                {stages.map((_, i) => (
                     <button key={i} onClick={() => setActiveStage(i)} className={`w-2 h-2 rounded-full transition-colors ${activeStage === i ? 'bg-white' : 'bg-white/20'}`} />
                ))}
            </div>
        </div>
    );
};
