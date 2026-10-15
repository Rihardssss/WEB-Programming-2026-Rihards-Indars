# Individuālā refleksija

Aizpildiet šo daļu individuāli nodarbības beigās, **neizmantojot mākslīgā intelekta rīkus**.

Ieteicamais kopējais apjoms: **aptuveni 200–300 vārdi**.

---

## 1. Utility-first CSS pieeja

Tailwind izmanto mazas gatavas klases, piemēram, `p-4`, `text-center` un `flex`, lai veidotu lapas izskatu. Šīs klases raksta uzreiz HTML elementos, tāpēc nav katru reizi jāraksta atsevišķi CSS noteikumi. Pirms tam man lielākā daļa stilu bija `styles.css` failā, bet ar Tailwind tos var pievienot uzreiz pie vajadzīgā elementa.

---

## 2. Divi migrācijas piemēri

Pirmais piemērs ir mobilā izvēlne. Sākumā tās izkārtojumu, atstarpes un krāsas noteica parastais CSS, bet pēc pārveidošanas izmantoju `flex`, `items-center`, `justify-between` un `p-4` klases.

Otrais piemērs ir projektu filtri. Pogām sākumā bija CSS noteikumi izmēram, atstarpēm un izskatam, bet Tailwind izmantoju `px-4`, `py-2`, `rounded`, `border` un `hover:` klases, lai panāktu līdzīgu rezultātu.

---

## 3. Jūsu vērtējums

Man Tailwind šķiet ērtāks, ja vajag ātri izveidot lapas izkārtojumu un pielāgot elementu izskatu, jo nav visu laiku jāmeklē vajadzīgais CSS fails. Sākumā gan bija mazliet grūtāk saprast, kura klase ko dara.

Parasto CSS es izvēlētos tad, ja vajadzētu izveidot sarežģītākus vai ļoti specifiskus stilus, jo pārāk daudz Tailwind klašu vienā elementā dažreiz kļūst grūti pārskatīt.
