import {
  Baby,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Instagram,
  MessageCircle,
  Puzzle,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

export const links = {
  whatsapp: "https://wa.me/5511939242364",
  instagram: "https://www.instagram.com/psico.alexiaferreira/",
};

export const navItems = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Desenvolvimento Infantil", "#desenvolvimento"],
  ["ABA", "#aba"],
  ["Atendimento", "#atendimento"],
  ["Contato", "#contato"],
];

export const demands = [
  {
    icon: Sprout,
    title: "Desenvolvimento infantil",
    text: "Apoio para compreender ritmos, habilidades e necessidades da criança.",
  },
  {
    icon: Puzzle,
    title: "Comportamento",
    text: "Leitura cuidadosa de comportamentos e contextos do cotidiano.",
  },
  {
    icon: Clock3,
    title: "Rotina e hábitos",
    text: "Orientação para construir previsibilidade, autonomia e segurança.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação",
    text: "Estratégias para favorecer expressão, escuta e interação.",
  },
  {
    icon: HeartHandshake,
    title: "Orientação familiar",
    text: "Acolhimento aos responsáveis em decisões e desafios da rotina.",
  },
  {
    icon: Users,
    title: "Habilidades sociais",
    text: "Apoio para ampliar vínculos, brincadeiras e convivência.",
  },
  {
    icon: BookOpen,
    title: "ABA",
    text: "Práticas estruturadas a partir da observação do comportamento.",
  },
  {
    icon: Baby,
    title: "Acolhimento aos pais",
    text: "Escuta ética para famílias que buscam clareza e direção.",
  },
];

export const audiences = [
  "Famílias que buscam compreender melhor o desenvolvimento da criança.",
  "Responsáveis que desejam apoio profissional diante de desafios comportamentais.",
  "Crianças que precisam desenvolver habilidades de comunicação, autonomia ou interação.",
  "Famílias que buscam orientação sobre rotina, hábitos e manejo de comportamentos.",
  "Responsáveis que desejam acompanhamento ético, estruturado e acolhedor.",
];

export const steps = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    text: "Você envia uma mensagem pelo WhatsApp para contar brevemente sua demanda.",
  },
  {
    icon: CheckCircle2,
    title: "Entendimento inicial",
    text: "A necessidade da família é acolhida com cuidado, sem julgamentos ou promessas.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento",
    text: "São alinhadas disponibilidade, orientações iniciais e próximos passos.",
  },
  {
    icon: Sparkles,
    title: "Plano individualizado",
    text: "O acompanhamento começa com olhar singular para a criança e sua família.",
  },
];

export const faqs = [
  {
    question: "Como funciona a primeira conversa?",
    answer:
      "A primeira conversa acontece pelo WhatsApp, para entender a demanda inicial e verificar disponibilidade de horários.",
  },
  {
    question: "O atendimento é online ou presencial?",
    answer: "Consulte a disponibilidade diretamente pelo WhatsApp.",
  },
  {
    question: "O que é ABA?",
    answer:
      "ABA é a Análise do Comportamento Aplicada, uma abordagem baseada na observação e compreensão do comportamento para planejar estratégias individualizadas.",
  },
  {
    question: "Como saber se meu filho precisa de acompanhamento?",
    answer:
      "Quando há dúvidas sobre desenvolvimento, comportamento, comunicação, rotina ou interação social, uma orientação profissional pode ajudar a compreender o momento da criança.",
  },
  {
    question: "Os responsáveis participam do processo?",
    answer:
      "Sim. A participação da família é importante para compreender a rotina, alinhar estratégias e favorecer continuidade no cotidiano.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Clique em um dos botões de WhatsApp da página para tirar dúvidas e verificar horários disponíveis.",
  },
];

export const socialCards = [
  "Desenvolvimento não é comparação.",
  "Pequenos avanços também importam.",
  "Rotina pode ser cuidado.",
  "ABA com ética, escuta e direção.",
];

export const footerLinks = [
  ["Instagram", links.instagram, Instagram],
  ["WhatsApp", links.whatsapp, MessageCircle],
];
