# Individuālā refleksija

Aizpildiet šo daļu individuāli nodarbības beigās, **neizmantojot mākslīgā intelekta rīkus**.

Ieteicamais kopējais apjoms: **aptuveni 200–300 vārdi**.

---

## 1. Kad `fetch` nemet kļūdu?

`fetch` pats nemet kļūdu, ja serveris atgriež 404 vai 500. Tāpēc vajag pārbaudīt `response.ok`. Ja atbilde nav veiksmīga, var parādīt kļūdu lietotājam.

---

## 2. `any` un `unknown`

`any` ir bīstams, jo mēs nezinām, kādi dati tiek saņemti, un var rasties kļūdas. `unknown` liek vispirms pārbaudīt datus, pirms tos izmantojam. `data as Project[]` vienkārši pasaka TypeScript, ka tie ir projekti, bet nepārbauda, vai tā tiešām ir. Type guard pārbauda, vai dati ir pareizajā formā.

---

## 3. Sveša API dati

Mēs izveidojām savu tipu `CurrentWeather`, lai dati visā lietotnē būtu vienādi un tos būtu vieglāk izmantot. Ja Open-Meteo pārdēvētu kādu lauku, būtu jāizmaina tikai vieta, kur saņemam un pārveidojam datus. Citādi varētu pārstāt darboties vairākas lapas daļas.

---

## 4. Lietotāja skatījums

Es pārbaudīju lapu ar lēnu internetu DevTools. Pirms ielādes stāvokļa pievienošanas lietotājs varēja domāt, ka lapa nestrādā, jo nekas nenotika. Tagad tiek parādīts, ka dati ielādējas, un lietotājs zina, ka jāuzgaida.
