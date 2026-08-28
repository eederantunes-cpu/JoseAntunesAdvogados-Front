import Divider from "../Divider/divider";
import "./style.css";

function AreasAtuacaoCard({ icon, title, resume, topics }) {
    return(
        <div className="areasAtuacao-card">
            <div className="areasAtuacao-card-header">
                <img src={icon} />
                <h3>{title}</h3>
            </div>
            <p>{resume}</p>
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
        </div>
    );
}

function AreasAtuacaoDivider({ para }) {
    return(
        <div className="areasAtuacaoPara-container-divider">
            <Divider />
            <p>{para}</p>
            <Divider />
        </div>
    );
}

function AreasAtuacaoPara({ persona, cards }) {
    return(
        <>
            <AreasAtuacaoDivider para={persona} />
            <div className="areasAtuacao-container-cards">
                {cards.map((card, index) => (
                    <AreasAtuacaoCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        resume={card.resume}
                        topics={card.topics}
                    />
                ))}
            </div>
        </>
    );
}

function AreasAtuacaoParaVoce() {
    const cards = [
        {
            icon: "/icons/cards-areas-atuacao-voce-icon.svg",
            title: "Direito Civil",
            resume: "Atuação consultiva e contenciosa em questões cíveis:",
            topics: ["Contratos", "Responsabilidade civil", "Cobranças e obrigações", "Ações judiciais em geral"]
        },
        {
            icon: "/icons/cards-areas-atuacao-voce-icon.svg",
            title: "Direito Previdenciário",
            resume: "Orientação e representação junto ao INSS e à Justiça:",
            topics: ["Aposentadorias", "Benefícios por incapacidade", "Pensões", "Revisões de benefícios"]
        },
        {
            icon: "/icons/cards-areas-atuacao-voce-icon.svg",
            title: "Direito Trabalhista",
            resume: "Atuação na defesa dos direitos do trabalhador:",
            topics: ["Reclamatórias trabalhistas", "Verbas rescisórias", "Acordos e orientação", "Preventiva"]
        },
        {
            icon: "/icons/cards-areas-atuacao-voce-icon.svg",
            title: "Defesa Penal — Direito Penal Econômico",
            resume: "Defesa técnica de pessoas físicas, sócios e administradores nos crimes contra a ordem econômica:",
            topics: ["Defesa técnica em inquéritos e processos", "Acompanhamento de investigações", "Atuação consultiva na área penal"]
        },
        {
            icon: "/icons/cards-areas-atuacao-voce-icon.svg",
            title: "Consultoria e Planejamento Tributário",
            resume: "Orientação jurídica para pessoas físicas em:",
            topics: ["Planejamento tributário", "Consultoria preventiva", "Questões administrativas"]
        }
    ];

    return(
        <>
            <AreasAtuacaoPara persona="Para Você" cards={cards}/>
        </>
    );
}

function AreasAtuacaoParaSuaEmpresa() {
    const cards = [
        {
            icon: "/icons/cards-areas-atuacao-empresa-icon.svg",
            title: "Compliance Empresarial — Consultoria Preventiva",
            resume: "Compliance é manter a empresa em conformidade com as normas que regem sua atividade. Atuação preventiva nas questões:",
            topics: ["Societárias", "Trabalhistas", "Tributárias", "Contratuais", "Políticas internas e programas de integridade"]
        },
        {
            icon: "/icons/cards-areas-atuacao-empresa-icon.svg",
            title: "Contencioso Empresarial",
            resume: "Atuação nas questões relacionadas ao exercício da atividade empresarial, representando a empresa em:",
            topics: ["Processos judiciais", "Processos administrativos", "Execuções fiscais", "Gestão de crise", "Revisão de contratos"]
        }
    ];

    return(
        <>
            <AreasAtuacaoPara persona="Para Sua Empresa" cards={cards}/>
        </>
    );
}

export default function AreasAtuacao() {
    return(
        <div className="areasAtuacao-background">
            <section id="areas-atuacao" className="areasAtuacao">
                <h2 className="areasAtuacao-title">
                    Como podemos te <span>ajudar</span> ?
                </h2>
                <p>
                    Atuação preventiva e contenciosa, para empresas e pessoas físicas, com embasamento técnico e alinhada à legislação vigente.
                </p>
                <AreasAtuacaoParaVoce />
                <AreasAtuacaoParaSuaEmpresa />
            </section>
        </div>
    );
}