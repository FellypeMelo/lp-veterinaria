
import React from 'react';
import { content } from '../../../data/content';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
                    
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold font-sans mb-4">{content.header.logo}</h2>
                        <p className="text-blue-200">
                            Cuidando com amor e excelência da saúde do seu melhor amigo.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Institucional</h3>
                        <ul className="space-y-3">
                            {content.footer.links.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="text-gray-500 text-sm mt-12 text-center">
                    <p className="mb-2">{content.footer.copyright}</p>
                    <p className="mb-4">{content.footer.tech}</p>
                    
                    <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-800 max-w-2xl mx-auto text-left">
                        <p className="text-xs text-gray-400 font-mono">
                            ⚠️ <strong>AVISO LEGAL - PORTFÓLIO DE ESTUDO</strong><br/>
                            Este site é um projeto puramente educativo e demonstrativo. 
                            Todos os dados, nomes, locais, números de registro (CRMV) e informações clínicas aqui apresentados são <strong>FICTÍCIOS</strong>. 
                            Não há vínculo com nenhuma clínica veterinária real. Nenhuma informação aqui deve ser considerada como aconselhamento médico-veterinário.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
