# +Potencial Ensino Multidisciplinar

Landing page institucional construída em Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## Como rodar

```bash
npm install
npm run dev
```

A aplicação fica disponível em http://localhost:3000.

## Onde editar

- Textos, telefone, endereço, redes: `data/site.ts`
- Professores: `data/teachers.ts` (substituir `image` por arquivos em `/public/images/professores`)
- Trilhas de estudo: `data/trails.ts`
- Metodologia: `data/methodology.ts`
- Conteúdos / podcasts: `data/contents.ts`
- Linha do tempo: `data/timeline.ts`
- Logo: `components/Logo.tsx`
- Cores e fontes: `tailwind.config.ts` e `app/globals.css`

## Imagens reais

As fotos dos professores são placeholders SVG. Para usar as fotos reais, salve em:

```
public/images/professores/diego.jpg
public/images/professores/rogerio.jpg
public/images/professores/luciano.jpg
```

Se um caminho não existir, o componente cai automaticamente no avatar genérico em azul-marinho.
