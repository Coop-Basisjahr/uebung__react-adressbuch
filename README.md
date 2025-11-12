# Übung React Adressbuch

Diese Übung dient der Anwendung von Routing im Frontend mit dem Package `react-router-dom`.

## Routing aufsetzen

- Installiere das Package `react-router-dom`.
- Wrappe im `main.tsx` die `<App />` Komponente in den `<BrowserRouter>`.
- Richte im `App.tsx` eine Route `/` ein, welche die Seite `Index.tsx` anzeigt.

## Einzelne Mitarbeiter Anzeigen

- Richte im `App.tsx` eine Route `employee/:id` ein, welche die Seite `EmployeePage.tsx` anzeigt.
- Lies in `EmployeePage.tsx` den Parameter `id` aus und lade den entsprechenden Mitarbeitenden mit dem vorbereiteten Code.

## Mitarbeiter verlinken

Verlinke die einzelnen Elemente auf der Startseite mit dem entsprechenden Mitarbeiter. Wenn auf einen Mitarbeiter geklickt wird, soll die sich Unterseite von diesem öffnen. Nutze dafür die korrekte Komponente aus dem `react-router-dom` Package.

## Startseite

Richte die Startseite (`/`) so ein, dass die Suchparameter `name` & `department` in der URL angegeben werden können. Nutze `/src/pages/EmployeeSearchPage.tsx` als Vorlage.
Teste, ob deine Lösung funktioniert, indem du `/?name=Alice&department=HR` in der Suchleiste ergänzt. Du solltest folglich nur noch Alice Johnson auf der Startseite sehen.
