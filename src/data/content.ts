
import { Stethoscope, Syringe, Microscope, Clock, Phone } from 'lucide-react';

export const content = {
  header: {
    logo: "Veterinária Santa Luzia",
    nav: [
      { label: "Início", href: "#hero" },
      { label: "Serviços", href: "#services" },
      { label: "Sobre Nós", href: "#about" },
      { label: "Contato", href: "#contact" },
    ],
    cta: "Agendar Consulta",
  },
  hero: {
    title: "Amor, carinho e medicina de ponta para o seu melhor amigo.",
    subtitle: "Na Veterinária Santa Luzia, tratamos seu pet como parte da nossa família. Conte com uma equipe especializada e estrutura completa para diagnósticos, tratamentos e emergências.",
    cta: "Quero Agendar uma Visita",
    badge: "⭐ Atendemos Cães, Gatos e Animais Silvestres",
  },
  services: {
    title: "Tudo o que seu pet precisa em um só lugar",
    subtitle: "Da prevenção ao tratamento complexo, cuidamos de cada detalhe.",
    items: [
      {
        title: "Consultas e Check-ups",
        description: "A prevenção é o ato de amor mais importante. Realizamos avaliações completas para todas as idades.",
        icon: Stethoscope,
      },
      {
        title: "Vacinação e Imunização",
        description: "Mantenha a carteirinha em dia com vacinas importadas e protocolos individualizados.",
        icon: Syringe,
      },
      {
        title: "Exames e Diagnóstico",
        description: "Laboratório próprio, Raio-X Digital e Ultrassonografia para resultados rápidos e precisos.",
        icon: Microscope,
      },
      {
        title: "Cirurgias e Internação 24h",
        description: "Centro cirúrgico equipado com monitoramento anestésico avançado e baias confortáveis.",
        icon: Clock,
      },
    ],
  },
  about: {
    title: "Por que confiar a saúde do seu pet à Santa Luzia?",
    description: "Sabemos que levar o pet ao veterinário pode ser estressante. Por isso, na Santa Luzia, adotamos o conceito Fear Free (Livre de Medo). Nossa estrutura foi pensada para acalmar os animais, com feromônios no ambiente e manejo gentil. Fundada com a missão de oferecer medicina veterinária de excelência, combinamos tecnologia de ponta com aquele carinho de quem ama o que faz.",
    features: [
      { icon: Stethoscope, text: "Corpo Clínico Especializado" },
      { icon: Clock, text: "Ambiente Climatizado" }, // Used Clock as placeholder for snowflake/AC if needed or generic
      { icon: Phone, text: "Histórico de Confiança" }, // Placeholder icon
    ],
    imageAlt: "Equipe veterinária Santa Luzia",
  },
  doctors: {
    title: "Nosso Corpo Clínico",
    subtitle: "Profissionais apaixonados por animais e excelência técnica.",
    items: [
      {
        name: "Dr. André Silva",
        specialty: "Clínica Geral e Cirurgia",
        crmv: "CRMV-SP 00000",
        image: "/images/doctors/doctor_andre_silva.png"
      },
      {
        name: "Dra. Mariana Costa",
        specialty: "Dermatologia e Felinos",
        crmv: "CRMV-SP 00000",
        image: "/images/doctors/doctor_mariana_costa.png"
      },
      {
        name: "Dr. Carlos Santos",
        specialty: "Ortopedia e Diagnóstico",
        crmv: "CRMV-SP 00000",
        image: "/images/doctors/doctor_carlos_santos.png"
      },
       {
        name: "Dra. Beatriz Lima",
        specialty: "Anestesiologia",
        crmv: "CRMV-SP 00000",
        image: "/images/doctors/doctor_beatriz_lima.png"
      },
    ]
  },
  contact: {
    title: "Estamos prontos para receber você",
    subtitle: "Venha nos fazer uma visita e tomar um café conosco.",
    address: {
      street: "Rua Exemplo, 123 – Bairro Centro",
      city: "Cidade – Estado",
      ref: "Ao lado do Mercado Municipal, frente à praça",
    },
    hours: [
      "Segunda a Sexta: 08h às 20h",
      "Sábado: 09h às 15h",
      "Domingo/Plantão: Sob aviso prévio",
    ],
    phone: {
      whatsapp: "(XX) 99999-9999",
      fixed: "(XX) 3333-3333",
    },
    email: "contato@vetsantaluzia.com.br",
    cta: "Chamar no WhatsApp Agora",
  },
  footer: {
    copyright: "© 2024 Veterinária Santa Luzia. Todos os direitos reservados.",
    tech: "Responsável Técnico: Dr. Nome Sobrenome - CRMV-UF 00000",
    links: [
        { label: "Início", href: "#hero" },
        { label: "Corpo Clínico", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Trabalhe Conosco", href: "#" },
    ]
  }
};
