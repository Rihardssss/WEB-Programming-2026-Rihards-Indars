# Individuālā refleksija

## 1. Kontrolēts lauks
Pats izmēģināju noņemt onChange no Title lauka, atstājot value. Pamanīju, ka laukā vairs nevar rakstīt un konsolē parādījās React brīdinājums. Sapratu, ka vajadzīgas abas vērtības.

## 2. React stāvoklis
Eksperimentēju ar Description lauku un mēģināju mainīt vērtību ar parastu mainīgo. Teksts uzreiz neparādījās, bet pēc cita lauka izmaiņas tas pēkšņi parādījās. Sapratu, ka React stāvokli vajag mainīt ar setValues, nevis vienkārši mainīt objektu. Pārbaudīju arī, ka jaunā vērtība neparādās uzreiz pēc setValues.

## 3. Kur jāatrodas stāvoklim?
Projektu sarakstu glabāju App, jo to izmanto vairākas komponentes. Ja tas būtu tikai AddProjectForm iekšā, pārējā aplikācija nevarētu piekļūt projektiem. Filtru atstāju tuvāk vietai, kur tas tiek izmantots, jo nav vajadzības to glabāt visā aplikācijā.

## 4. Pašu hook
Izveidoju useLocalStorage hook ar nelielu palīdzību no Claude. Tas nolasa datus no localStorage ar useState un saglabā tos, kad pats izsaucu save. Tāpēc nebija nepieciešams izmantot useEffect.

Pats pārbaudīju arī bojātu localStorage. isProjectList pārbauda, vai dati ir pareizā formā. Ja dati ir bojāti, lapa turpina strādāt un tiek parādīti API projekti.
