# Individuālā refleksija

Aizpildiet šo daļu individuāli nodarbības beigās, **neizmantojot mākslīgā intelekta rīkus**.

Ieteicamais kopējais apjoms: **aptuveni 200–300 vārdi**.

---

## 1. Ko deva tipi?

JavaScript un TypeScript ir diezgan līdzīgi. Galvenā atšķirība ir tā, ka TypeScript var norādīt datu tipus. Tas palīdz pamanīt kļūdas, piemēram, ja vietā, kur vajag `string`, tiek izmantots `number`. Tad TypeScript parāda kļūdu un var saprast, kas jāizlabo.

---

## 2. `null` un `querySelector`

`querySelector` ne vienmēr atrod elementu. Ja tāda elementa lapā nav, rezultāts būs `null`. Tāpēc TypeScript to arī norāda. Vajag pārbaudīt, vai elements vispār tika atrasts, pirms mēģina ar to kaut ko darīt. Tas palīdz izvairīties no kļūdām.

---

## 3. Dati no ārpuses

`JSON.parse` pats nepārbauda, vai dati tiešām ir tādi, kādus mēs sagaidām. Lietotājs var izmainīt `localStorage` caur DevTools, tāpēc nevar vienkārši pieņemt, ka dati ir pareizi. Ar `innerHTML` arī jābūt uzmanīgam, jo lietotājs var ievietot HTML vai skriptu. Tāpēc tekstam labāk izmantot `textContent`.

---

## 4. Jūsu vērtējums

Man liekas, ka mazam projektam TypeScript var arī nebūt vajadzīgs, jo tur nav tik daudz koda. Bet lielākā projektā tas ir noderīgs, jo kļūdas var pamanīt ātrāk un ir vieglāk saprast, kādi dati tiek izmantoti.
