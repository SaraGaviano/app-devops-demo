# Policy CSP

Policy applicata al sito (esempio):

- `default-src 'self'`: solo risorse dello stesso dominio.
- `img-src 'self' data:`: immagini locali e incorporate.
- `script-src 'self'` e `style-src 'self'`: nessuno script o stile esterno.

Altre intestazioni: HSTS per un anno, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.

Verifica: intestazioni presenti in ogni risposta (controllo con strumento di rete). Richiede una Change normal.

Riferimento: issue #8.
