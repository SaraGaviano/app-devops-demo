# Caching statico di CSS e JavaScript

- Gli asset statici hanno nome versionato e header `Cache-Control: public, max-age=31536000, immutable`.
- Le pagine HTML usano `Cache-Control: no-cache`.

Verifica con lo strumento di rete del browser (dati di esempio):

| Richiesta | Primo accesso | Secondo accesso |
|---|---|---|
| app.3f2a1c.js | 200, 84 KB | 200, dalla cache |
| stile.9b7e44.css | 200, 31 KB | 200, dalla cache |

Riferimento: issue #6.
