# Individuālā refleksija

## 1. Props tipi (StatCard eksperiments)
Kad izdzēsu `note` vienai kartītei, TypeScript uzreiz parādija kļūdu, jo šis props ir obligāts. Arī tad kad ieliku `tone="green"`, parādijās kļūda, jo tāda vērtība nav atļauta. Interesanti bija tas, ka `npm run dev` kļūdas neuzrādija, bet `npm run build` gan.

## 2. Kas pārnāca, kas pazuda
`types.ts`, `guards.ts` un `api.ts` palika tādi paši kā iepriekšējā nedēļā. Pazuda `render.ts`, jo tagad HTML veidošana notiek ar React komponentēm un JSX. Sākumā bija mazliet jāpierod pie jaunās pieejas.

## 3. Funkcija kā prop
`ErrorBox` izmanto `onRetry` funkciju, kuru saņem no citas komponentes. Piemēram, projektiem tiek padota `loadProjects`, bet termiņiem `loadDeadlines`. Tādā veidā nav jātaisa divas atsevišķas ErrorBox komponentes.

## 4. `key` un stāvoklis
Kā `key` izmantoju `project.id`, jo tas katram projektam ir savs un nemainās, ja saraksts tiek pārkārtots. Pārbaudīju arī, ka filtrs paliek uz "Done" pēc atkārtotas renderēšanas. Tas strādā, jo filtra stāvoklis atrodas `ProjectSection` komponentē un nepazūd, kad mainās props.
