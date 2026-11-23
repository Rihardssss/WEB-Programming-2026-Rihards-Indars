# Mākslīgā intelekta izmantošana

**Vārds, uzvārds:** Rihards Indārs  
**Izmantotais(-ie) MI rīks(-i):** Claude

## Kam es izmantoju mākslīgo intelektu?

- Lai saprastu fetch pieprasījumu atcelšanu ar useEffect un AbortController
- Lai palīdzētu izveidot useFetch hook ar loading/error/success stāvokļiem
- Lai saprastu problēmas ar useEffect atkarību masīvu

## Kuru kodu vai konfigurāciju būtiskā apjomā ģenerēja mākslīgais intelekts?

- useFetch.ts pamata struktūru
- Daļu no api.ts izmaiņām, lai padotu signal fetch funkcijām

## Kuru kodu vai konfigurāciju es uzrakstīju pats/pati vai būtiski pārveidoju?

- Izvēlējos, kur izmantot useFetch - App.tsx vai WeatherCard.tsx
- Pielāgoju risinājumu projekta struktūrai un sakārtoju main.tsx
- Pats testēju pieprasījumus un pārbaudīju rezultātus

## Viens MI ieteikums, kuru es noraidīju vai izmainīju

Neizmantoju AbortSignal.any ar timeout, jo šajā uzdevumā tas nebija nepieciešams.

## Viena lieta, kuru es pārbaudīju pats/pati, nevis vienkārši uzticējos MI atbildei

Network cilnē pārbaudīju pieprasījumus uz projects.json. Dev režīmā bija divi pieprasījumi, pirmais tika atcelts, bet preview režīmā bija tikai viens.
