# Traduções (i18n)

Idiomas disponíveis: **pt-BR** (padrão) e **en**.

## Manutenção

- **pt-BR.json** – textos em português
- **en.json** – textos em inglês

Ao editar, mantenha a **mesma estrutura** nos dois arquivos (mesmas chaves). Só altere os valores.

## Estrutura das chaves

| Chave | Onde aparece |
|-------|----------------|
| `metadata` | Título e descrição da página (SEO) |
| `header` | Menu, marca, links PT/EN |
| `hero` | Nome, subtítulo, botões |
| `skills` | Sobre mim, experiências, categorias (Frontend, Backend, Utilitários) |
| `projects` | Título da seção, títulos e descrições dos projetos |
| `modal` | Botões do modal (fechar, ver projeto, setas do carrossel) |
| `contact` | Título, subtítulo, labels dos links |
| `countdown` | Labels do relógio (HORAS, MIN, SEG) |
| `footer` | Copyright (use `{year}` para o ano) |

## Adicionar novo idioma

1. Crie `src/messages/<locale>.json` (ex.: `es.json`).
2. Em `src/i18n/routing.ts`, adicione o locale em `locales`.
3. Inclua o novo idioma no seletor do Header (e no `messages/README.md` se quiser).
