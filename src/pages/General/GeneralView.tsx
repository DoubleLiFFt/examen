import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { ChevronDown, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";


function TestimonialCard({ quote, name, desc }: { quote: string, name: string, desc: string }) {
    return (
        <div className="bg-[#1e1e1e] p-8 rounded-xl border border-zinc-800 hover:border-emerald-500/30 transition-all group">
            <p className="text-xl font-medium text-zinc-200 mb-8 italic">"{quote}"</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden">
                    <img src="/Animals.jpeg" alt="user" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="text-sm font-bold text-white uppercase tracking-widest">{name}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-tighter">{desc}</p>
                </div>
            </div>
        </div>
    );
}

function FaqItem({ title, content }: { title: string, content?: string }) {
    const [abierto, setAbierto] = useState(false);
    const toggleAcordeon = () => {
        setAbierto(!abierto);
    };
    return (
        <div className="bg-[#1e1e1e] rounded-lg border border-zinc-800 overflow-hidden transition-all duration-300">
            <div
                onClick={toggleAcordeon}
                className="flex justify-between items-center p-5 cursor-pointer hover:bg-zinc-800/50 transition-colors select-none"
            >
                <span className={`font-bold text-sm tracking-wide transition-colors ${abierto ? 'text-emerald-500' : 'text-zinc-200'}`}>
                    {title}
                </span>
                <ChevronDown
                    size={18}
                    className={`text-zinc-500 transition-transform duration-300 ${abierto ? 'rotate-180 text-emerald-500' : ''}`}
                />
            </div>
            <div className={`grid transition-all duration-300 ease-in-out ${abierto ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    {content && (
                        <div className="p-5 pt-0 text-zinc-400 text-xs leading-relaxed border-t border-zinc-800/50 mt-2">
                            {content}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function FooterCol({ title, links }: { title: string, links: string[] }) {
    return (
        <div className="space-y-4">
            <h5 className="font-bold text-zinc-100 text-sm tracking-widest uppercase">{title}</h5>
            <ul className="space-y-2">
                {links.map(link => (
                    <li key={link} className="text-zinc-500 text-xs hover:text-emerald-400 cursor-pointer transition-colors">
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
}

//---------------------------------------------------------------------------------------------------------------

export default function GeneralView() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#121212] text-white font-sans">
            <section className="relative h-[600px] w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Animals.jpeg"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#121212]"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
                        GESTIONA<span className="text-emerald-500">$</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl font-light italic">
                        ¿Alguna vez supiste por qué no podías cumplir tus metas financieras?
                    </p>
                    <div className="flex gap-4 mt-10">
                        <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-emerald-500 hover:text-white transition-all hover:cursor-pointer hover:scale-115" onClick={() => {navigate("/Login")}}>
                            Ya lo sé
                        </button>
                        <button className="px-8 py-3 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 text-white font-bold rounded-lg hover:bg-zinc-700 transition-all hover:cursor-pointer hover:scale-115" onClick={() => {navigate("/Register")}}>
                            Saber ya!
                        </button>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-24 px-8">
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-zinc-100">Nuestros Clientes</h3>
                    <p className="text-zinc-500 mt-2">Siempre están contentos de haber confiado en nosotros.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TestimonialCard
                        quote="Es la mejor app para llevar un control"
                        name="Title"
                        desc="Description"
                    />
                    <TestimonialCard
                        quote="Me alegra la seguridad que tienen."
                        name="Title"
                        desc="Description"
                    />
                    <TestimonialCard
                        quote="Estoy muy contenta de haber confiado."
                        name="Title"
                        desc="Description"
                    />
                    <TestimonialCard
                        quote="Adoro esta app."
                        name="Title"
                        desc="Description"
                    />
                    <TestimonialCard
                        quote="Es lo mejor que hay."
                        name="Title"
                        desc="Description"
                    />
                    <TestimonialCard
                        quote="Nunca más usare excel"
                        name="Title"
                        desc="Description"
                    />
                </div>
            </section>
            <section className="bg-[#2c3e3a]/20 py-24 px-8 border-t border-emerald-900/10">
                <div className="max-w-4xl mx-auto space-y-4">
                    <FaqItem
                        title="¿Quiénes somos?"
                        content="Somos una startup dedicada a democratizar la salud financiera mediante tecnología intuitiva, ayudando a nuestros usuarios a tomar decisiones inteligentes con su dinero."
                    />
                    <FaqItem
                        title="¿La aplicación es gratuita?"
                        content="Ofrecemos un Plan Essential totalmente gratuito para el control de gastos. También contamos con un Plan Pro que incluye análisis predictivo con IA y gestión de inversiones."
                    />
                    <FaqItem
                        title="¿Cómo protegen mi información?"
                        content="Tus datos se resguardan bajo estándares AES-256 de grado militar. No almacenamos credenciales bancarias y cumplimos estrictamente con las normativas de protección de datos vigentes."
                    />
                    <FaqItem
                        title="¿Veré cambios en mis finanzas?"
                        content="Nuestras métricas indican que los usuarios activos logran reducir sus gastos hormiga en un 20% durante el primer trimestre gracias a nuestras alertas de presupuesto inteligente."
                    />
                    <FaqItem
                        title="¿Por qué confiar en nuestra plataforma?"
                        content="Más que una app, somos una comunidad en crecimiento respaldada por expertos en Fintech, comprometidos con la transparencia total y el soporte técnico 24/7."
                    />
                    <FaqItem
                        title="¿Puedo sincronizar mis cuentas?"
                        content="Sí, nuestra plataforma permite la integración segura con las principales entidades bancarias para automatizar el registro de tus movimientos sin necesidad de entrada manual."
                    />
                </div>
            </section>
            <footer className="bg-[#1a1a1a] py-16 px-8 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <h4 className="text-2xl font-bold tracking-tighter">GESTIONA<span className="text-emerald-500">$</span></h4>
                        <div className="flex gap-4 text-zinc-400">
                            <Twitter size={20} className="hover:text-emerald-500 cursor-pointer" />
                            <Instagram size={20} className="hover:text-emerald-500 cursor-pointer" />
                            <Youtube size={20} className="hover:text-emerald-500 cursor-pointer" />
                            <Linkedin size={20} className="hover:text-emerald-500 cursor-pointer" />
                        </div>
                    </div>
                    <FooterCol title="Use cases" links={["UI design", "UX design", "Prototyping"]} />
                    <FooterCol title="Explore" links={["Design", "Prototyping", "Development"]} />
                    <FooterCol title="Resources" links={["Blog", "Best practices", "Support"]} />
                </div>
            </footer>
        </div>
    );
}

