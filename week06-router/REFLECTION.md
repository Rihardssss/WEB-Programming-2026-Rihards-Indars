# Individuālā refleksija

## 1. `Link` pret `<a>`

Pats pārbaudīju atšķirību starp `NavLink` un parastu `<a>` saiti. Ar `NavLink` pārejot starp lapām, lapa nepārlādējas un dati nav jāielādē no jauna. Ar parasto `<a>` notiek pilna lapas pārlāde un pieprasījumi atkārtojas. Pamanīju arī, ka abos gadījumos ievadītais teksts pazūd, jo tiek izveidota jauna komponentes versija vai pārlādēta visa lapa.

## 2. Kas paliek pēc pārejas uz citu lapu?

Eksperimentējot sapratu, ka filtra vērtība un ievadītais teksts pazūd, jo tie atrodas pašas lapas komponentē. Savukārt pievienotie projekti paliek, jo tie glabājas `App` stāvoklī un `localStorage`. `App` paliek aktīvs arī tad, kad pārslēdzos uz citu lapu.

## 3. Adrese kā dati

Sapratu, ka pēc lapas pārlādes React stāvoklis pazūd, bet adrese paliek. Ar `useParams()` varu iegūt projekta ID no adreses un atrast vajadzīgo projektu.

Pārbaudīju arī, kas notiek, ja datu ielāde aizņem ilgāku laiku. Bez `loading` pārbaudes lapa uzreiz parādīja, ka projekts nav atrasts, lai gan dati vēl nemaz nebija ielādējušies. Tāpēc vispirms ir svarīgi parādīt ielādes tekstu un tikai pēc tam pārbaudīt, vai projekts eksistē.

## 4. Kopīgais rāmis

`Header` atrodas `Layout` komponentē, tāpēc tas paliek arī tad, kad pārslēdzos starp lapām. Pamanīju, ka izvēlne pati neaizveras, jo `Header` netiek pārlādēts. Tāpēc pievienoju `closeMenu()`, lai pēc navigācijas izvēlne aizvērtos.

Sapratu arī, ka `<Outlet />` ir vajadzīgs, lai parādītu konkrētās lapas saturu. Bez tā būtu redzams tikai kopīgais rāmis, piemēram, galvene un kājene, bet pati lapa neparādītos.
