# Individuālā refleksija

Aizpildiet šo daļu individuāli nodarbības beigās, **neizmantojot mākslīgā intelekta rīkus**.

Ieteicamais kopējais apjoms: **aptuveni 200–300 vārdi**.

---

## 1. Ko deva tipi?

JavaScript un TypeScript ir diezgan līdzīgi, bet TypeScript ļauj norādīt datu tipus. Tas palīdz ātrāk pamanīt kļūdas, piemēram, ja mainīgajam, kuram jābūt `string`, tiek piešķirts `number`. TypeScript parāda kļūdu vēl pirms koda palaišanas, tāpēc ir vieglāk saprast, kas jāizlabo.

---

## 2. `null` un `querySelector`

`querySelector` ne vienmēr atrod vajadzīgo elementu. Ja tāda elementa lapā nav, tas atgriež `null`. Tāpēc pirms elementa izmantošanas ir jāpārbauda, vai tas tika atrasts. Ja to nedara, programma var mēģināt izmantot elementu, kas neeksistē, un rasties kļūda.

---

## 3. Dati no ārpuses

`JSON.parse` pārveido JSON tekstu par JavaScript datiem, bet nepārbauda, vai tie atbilst tam, ko programma sagaida. Piemēram, lietotājs var izmainīt `localStorage` datus caur DevTools. Arī `innerHTML` jāizmanto uzmanīgi, jo tajā ievietots HTML var tikt izpildīts pārlūkā. Ja vajag parādīt parastu tekstu, drošāk ir izmantot `textContent`.

---

## 4. Jūsu vērtējums

Man šķiet, ka mazam projektam TypeScript ne vienmēr ir nepieciešams, jo kods nav tik liels un tajā ir vieglāk orientēties. Bet lielākos projektos tas ir noderīgs, jo palīdz ātrāk atrast kļūdas un saprast, kādi dati tiek izmantoti. Sākumā ar tipiem ir mazliet vairāk jādomā, bet vēlāk tas var ietaupīt laiku.
