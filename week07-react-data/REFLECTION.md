# Individuālā refleksija

Aizpildiet šo daļu individuāli nodarbības beigās, **neizmantojot mākslīgā intelekta rīkus**.

Ieteicamais kopējais apjoms: **aptuveni 200–300 vārdi**.

---

## 1. Divi pieprasījumi

Dev režīmā "effect start" parādījās divreiz, jo React StrictMode izstrādes režīmā palaiž efektu divreiz. Network cilnē redzēju divus pieprasījumus uz projects.json, no kuriem pirmais tika atcelts. Preview režīmā bija tikai viens pieprasījums.

---

## 2. Atkarību masīvs

Noņemot atkarību masīvu, 3 sekundēs izveidojās vairāk nekā 400 pieprasījumu. Tas notika tāpēc, ka setState izraisīja jaunu render un efekts palaidās atkārtoti. Līdzīga problēma bija ar inline funkciju, jo katrā render tā tika izveidota no jauna.

---

## 3. Kur dzīvo ielāde

projects.json un deadlines.json ielādējas tikai vienu reizi, jo to ielāde atrodas App komponentē. Savukārt forecast tiek ielādēts katru reizi, kad atgriežos Dashboard lapā, jo WeatherCard tiek izveidota no jauna.

---

## 4. Kad vajag useEffect

useEffect vajag darbībām ārpus React, piemēram, API pieprasījumiem vai scrollTo(). Parastām lietotāja darbībām, piemēram, filtra maiņai, pietiek ar setState. To var salīdzināt ar iepriekšējo CampusFlow projektu, kur localStorage.setItem izmantoju tieši vērtības maiņas funkcijā.
