# Lesvoorbereider LO

Een Word-invoegtoepassing die meekijkt terwijl je je lesvoorbereiding lichamelijke opvoeding schrijft in het **HOGENT-lesvoorbereidingsformulier LO**.

## Wat het doet

- **Meekijken:** zet je cursor in een veld (lesdoel, situatie, ADP, LG, remediëring…). Het zijpaneel herkent het veld, toont de regel uit de cursus en controleert je tekst meteen. Daarna kun je:
  - **Feedback op dit veld** vragen, met een verbeterde versie die je in één klik invult.
  - **Schrijf voorstel** gebruiken voor een leeg of zwak veld.
  - **Oefening voorstellen** gebruiken in een rij van de opwarming of de kern. De tool vult dan de volledige rij in: lesfasedoel, oefenstof, didactisch handelen en het LG.
- **Hele les:** controle op de twaalf stappen van de HOGENT-checklist (Basisonderwijs 2), plus kritische mentorfeedback.
- **Vraag:** stel vragen over je les. Claude leest je volledige voorbereiding mee.

De regels komen uit de syllabi *Basisonderwijs 1: lager* en *Basisonderwijs 2: lager* (HOGENT, 2025-2026). De tool verzint geen leerplancodes of bronnen.

## Installeren

### Word in de browser (makkelijkst)
1. Download `manifest.xml` uit deze repository.
2. Open een document in Word op office.com.
3. Kies **Start → Invoegtoepassingen → Meer instellingen** (of **Invoegen → Invoegtoepassingen**) en dan **Mijn invoegtoepassing uploaden**.
4. Kies `manifest.xml` en klik op **Uploaden**. Op het tabblad **Start** verschijnt de knop **Lesvoorbereider LO**.

Word in de browser onthoudt dit per browser. Na het wissen van je browsergegevens moet je de invoegtoepassing opnieuw uploaden.

### Word op Windows (desktop)
1. Maak een map, bijvoorbeeld `C:\LesvoorbereiderManifest`, en zet `manifest.xml` erin.
2. Klik met de rechtermuisknop op de map en kies **Eigenschappen → Delen → Delen**. Noteer het netwerkpad, bijvoorbeeld `\\JOUWPC\LesvoorbereiderManifest`.
3. Ga in Word naar **Bestand → Opties → Vertrouwenscentrum → Instellingen voor het Vertrouwenscentrum → Vertrouwde invoegtoepassingscatalogi**.
4. Plak het netwerkpad bij **Catalogus-URL**, klik op **Catalogus toevoegen**, vink **Weergeven in menu** aan en klik op **OK**. Herstart Word.
5. Kies **Start → Invoegtoepassingen → Meer invoegtoepassingen → GEDEELDE MAP**, selecteer **Lesvoorbereider LO** en klik op **Toevoegen**.

## Eenmalig instellen
De tool gebruikt Claude via je eigen API-sleutel:
1. Maak een account op **console.anthropic.com**, zet er een klein tegoed op en maak een API-sleutel aan.
2. Plak de sleutel in het zijpaneel (⚙).

De sleutel blijft enkel op je eigen computer. Deel het zijpaneel niet met anderen zolang je sleutel erin staat.

## Privacy
Alles wat je laat nakijken, gaat naar Claude. Gebruik daarom **geen namen van kinderen** in je voorbereiding.

## Status
Dit is een prototype voor een bachelorproef (LO & BR, HOGENT). Feedback is welkom.
