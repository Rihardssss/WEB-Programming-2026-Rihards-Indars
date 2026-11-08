# Mākslīgā intelekta izmantošana

**Vārds, uzvārds:** Rihards Indārs
**Izmantotais(-ie) MI rīks(-i):** Claude

## Kam es izmantoju mākslīgo intelektu?

- Lai saprastu, kā ar `react-router` var izveidot vairākas lapas un pārvietoties starp tām.
- Lai saprastu, kā darbojas `useParams()` un kāpēc dažreiz vērtība var būt `undefined`.
- Lai palīdzētu saprast, kur labāk ievietot kopīgās funkcijas un konstantes, lai nebūtu kļūdu ar lint.

## Kuru kodu vai konfigurāciju būtiskā apjomā ģenerēja mākslīgais intelekts?

- Sākotnējo `Layout.tsx` struktūru un daļu no lapām mapē `src/pages/`.
- Palīdzēja pārveidot `Header.tsx`, izmantojot `NavLink` un `Link`.
- Sākotnējo `ProjectDetailsPage.tsx` struktūru.
- `NotFoundPage.tsx` sākotnējo struktūru.

## Kuru kodu vai konfigurāciju es uzrakstīju pats vai būtiski pārveidoju?

- Pielāgoju lapu saturu un izskatu.
- Pārbaudīju navigāciju starp visām lapām.
- Pārbaudīju, vai galvenē pareizi izceļas aktīvā lapa.
- Pielāgoju kodu un laboju problēmas, kas parādījās testēšanas laikā.

## Viens MI ieteikums, kuru es noraidīju vai izmainīju

Konstantes `categoryBadge`, `progressColor` un `statusLabel` sākumā atradās `ProjectCard.tsx`. Pārcēlu tās uz atsevišķu `projectStyles.ts` failu, jo tā bija vieglāk uzturēt kodu un pazuda lint brīdinājums.

## Viena lieta, kuru es pārbaudīju pats

Pats pārbaudīju navigāciju pārlūkā un skatījos DevTools Network sadaļā. Salīdzināju `NavLink` ar parastu `<a href>`. Pamanīju, ka ar `NavLink` dati netiek ielādēti no jauna, bet ar parasto saiti pieprasījumi atkārtojas.
