import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <div>
        <Head>
            <title>Termos | HSG Vehicle Sales</title>
        </Head>
        <h1>HSG Vehicle Sales</h1>
        <ul>
            <li><Link href='/'>Página Inicial</Link></li>
            <li><Link href="/perfil">Meu perfil</Link></li>
            <li><Link href="/usuarios">Lista de usuários</Link></li>
            <li><Link href="/veiculos">Lista de veículos</Link></li>
        </ul>
        <h2>Termos de Uso</h2>
        <ol>
            <li>
                <h3>Aceitação dos Termos</h3>
                <p>
                Ao utilizar o site HSG Vehicle Sales, você concorda com os termos e condições descritos a seguir. Caso não concorde com qualquer parte destes termos, recomendamos que não utilize a plataforma.
                </p>
            </li>
            <li>
                <h3>Natureza Simulada do Site</h3>
                <p>
                O HSG Vehicle Sales é uma plataforma fictícia desenvolvida exclusivamente para fins de simulação. Nenhum dos veículos exibidos, usuários cadastrados ou informações apresentadas representam dados reais ou transações comerciais legítimas.
                </p>
                <p>
                <strong>Isenção de Responsabilidade:</strong> O HSG Vehicle Sales não realiza vendas reais, não intermedia negociações e não se responsabiliza por qualquer uso indevido das informações simuladas aqui exibidas. Toda e qualquer ação tomada com base no conteúdo deste site é de total responsabilidade do usuário.
                </p>
            </li>
            <li>
                <h3>Cadastro e Informações Pessoais</h3>
                <p>
                Ao se cadastrar, você concorda em fornecer informações verídicas, ainda que simuladas, para efeito da experiência da plataforma. O uso de dados fictícios é incentivado para preservar a privacidade dos participantes.
                </p>
            </li>
            <li>
                <h3>Exibição Pública do E-mail</h3>
                <p>
                Ao se cadastrar, você declara estar ciente e concorda em permitir que seu e-mail seja exibido publicamente em seu perfil. O e-mail será visível apenas para fins demonstrativos.
                </p>
            </li>
            <li>
                <h3>Uso Responsável da Plataforma</h3>
                <p>
                Você concorda em utilizar o site de forma ética, sem violar leis ou direitos de terceiros, mesmo em um ambiente simulado. Qualquer uso indevido poderá resultar em restrição de acesso à plataforma.
                </p>
            </li>
            <li>
                <h3>Alterações nos Termos</h3>
                <p>
                Estes termos podem ser modificados periodicamente para refletir melhorias ou ajustes no funcionamento da plataforma. Recomendamos que o usuário revise esta página com frequência.
                </p>
            </li>
        </ol>
        <p>Veja mais informações sobre o site em sua <Link href='/sobre'>página de sobre</Link>.</p>
    </div>
  );
}