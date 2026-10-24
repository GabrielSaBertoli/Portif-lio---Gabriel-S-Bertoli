# Plano de implementação — Gabriel Sá Bertoli

## Escopo
Single Page de portfólio pessoal para Gabriel Sá Bertoli, com HTML5 semântico, CSS3 e JavaScript Vanilla, sem frameworks ou bibliotecas externas. A página será servida como site estático pelo runtime WebDev na porta 3000.

## Direção visual
- **Movimento:** cyberpunk editorial / terminal de alta tecnologia, com contraste de tela preta, vermelho profundo e branco-gelo.
- **Princípios:** precisão de interface, tensão entre vazio e informação, hierarquia tipográfica forte e microinterações discretas.
- **Filosofia de cor:** preto cria o espaço de imersão; #8B0000 funciona como pulso, foco e sinal de ação; #FFFAFA traz legibilidade e o aspecto de papel luminoso sobre o terminal.
- **Paradigma de layout:** composição assimétrica com trilho lateral de navegação, módulos de mídia como “estações” e grandes blocos de respiro, evitando um grid centralizado genérico.
- **Elementos de assinatura:** linhas de varredura e ruído sutil, molduras técnicas com cantos recortados e um marcador vertical vermelho que acompanha seções e interações.
- **Interação:** cada ação deve parecer uma resposta de sistema: hover desloca e ilumina, links exibem estados de foco claros e a rolagem revela os módulos como se fossem carregados em sequência.
- **Animação:** entrada por opacidade e deslocamento curto com IntersectionObserver; pulso lento no núcleo do hero; parallax suave no halo; respeito a `prefers-reduced-motion`.
- **Tipografia:** títulos em stack condensada e pesada (`Arial Narrow`, `Impact` como fallback) com tracking negativo; textos e metadados em stack mono (`ui-monospace`, `SFMono-Regular`) para a linguagem de console.
- **Essência da marca:** tecnologia com repertório visual, para pessoas e equipes que valorizam clareza, experimentação e presença digital autoral. Personalidade: preciso, inquieto, humano.
- **Voz:** direta, observadora e sem clichês. Exemplos: “Ideias que entram em modo de execução.” / “O detalhe é onde a interface ganha pulso.”
- **Wordmark/marca:** monograma `GSB` tratado como módulo de sistema, com colchetes e um cursor vermelho em estado ativo.
- **Cor proprietária:** vermelho pulso `#8B0000`, usado com parcimônia para que cada acento pareça uma instrução ativa.

## Estrutura do projeto
- `index.html`: página única, metadados, navegação, hero, introdução, módulos de vídeo/áudio/imagem/infográfico/animação/música e rodapé.
- `styles.css`: tokens visuais, layout responsivo, molduras cyberpunk, estados de hover/foco, animações e breakpoints.
- `script.js`: ano automático, IntersectionObserver, cursor/parallax e pequenas microinterações sem dependências.
- `server.js`: servidor HTTP estático mínimo para Preview, respeitando `PORT`.
- `public/manus-routes.json`: manifesto da rota única `/` exigido pelo WebDev.
- `imagens/`: assets locais de substituição fácil para perfil, imagem de destaque e infográfico.

## Decisões de conteúdo
Os caminhos de mídia solicitados pelo briefing permanecem literais no HTML: `video/video.mp4`, `audio/audio.mp3`, `imagens/imagem.jpg`, `imagens/infografico.png`, `animacao/animacao.mp4` e `musica/musica.mp3`. Os arquivos podem ser trocados sem alterar a estrutura da página. O texto `[INSIRA SEU TEXTO AQUI]` é mantido como marcador explícito na introdução.
