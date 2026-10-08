/* Lesvoorbereider LO – logica (zonder Word-afhankelijkheid, dus testbaar).
   Gebaseerd op het HOGENT-lesvoorbereidingsformulier LO en de syllabi
   Basisonderwijs 1 & 2: lager (HOGENT, 2025-2026). */
(function (root) {
  "use strict";

  /* ---------- Regels die de AI meekrijgt ---------- */
  const REGELS = `Je bent een ervaren lerarenopleider LO-BR van HOGENT en kijkt mee terwijl een student zijn lesvoorbereiding lichamelijke opvoeding (lager onderwijs) schrijft in het HOGENT-lesvoorbereidingsformulier. Je schrijft correct, beknopt Algemeen Nederlands. Je bent een eerlijke, kritische mentor: je benoemt zwaktes en geeft concrete verbeteringen. Volg de syllabi Basisonderwijs 1 en 2 (HOGENT, 2025-2026):

DIDACTISCH MODEL (sleutelvragen): 1) In welke situatie begin ik? 2) Wat wil ik bereiken? (leerplandoelen → lesdoelen → lesfasedoelen) 3) Wat doe ik om de doelen te bereiken? (oefenstof, organisatie, instructie/demo, leergesprek, foutenanalyse, feedback, materiaal, klasmanagement) 4) Met welk resultaat? (evaluatie, reflectie).

LEERPLANDOELEN: max. 3, minstens 1 bewegingsdoel (BD) en 1 persoonsdoel (PD); altijd code + volledige tekst. GO!: 6.2.x = bewegingsdoel, 6.1.x = persoonsdoel. Leer Lokaal (OVSG, leergebied Gezondheid): BD uit motorische competenties of gezonde en veilige levensstijl, PD uit mentaal welbevinden (bv. "GEZ moc 1, B.23 ..."). ZILL: 2 persoonsgebonden doelen uit verschillende ontwikkelvelden óf 1 persoonsgebonden + 1 cultuurgebonden (bv. "MZlb6 ..."). VERZIN NOOIT een leerplancode of doeltekst; schrijf dan "[AANVULLEN: ...]".

LESONDERWERP: wat + hoe: organisatievorm + bewegingsvaardigheden / materiaal / psychomotorische ontwikkelingskans (bv. "vakken: balanceren, glijden, werpen"). Uitzondering: zelfsprekende categorieën ("tikspelen: basistikspel").

LESDOELEN: afgeleid van het leerplandoel (herkenbaar). Formule: "De leerlingen + actief werkwoord + inhoud (+ voorwaarde/conditie)". Gouden regels: leerlingengedrag; actief, observeerbaar, evalueerbaar; concrete inhoud; beknopt en enkelvoudig; voorwaarden vermelden. Herziene taxonomie van Bloom (psychomotorisch: observeren en nadoen → uitvoeren na instructie → zelfstandig → toepassen in andere vorm → natuurlijk en automatisch; affectief: openstaan → reageren → voorkeur tonen → handelen vanuit persoonlijk kader → consistent handelen; cognitief: onthouden, begrijpen, toepassen, analyseren, evalueren, creëren). Geen vage werkwoorden (kennen, weten, leren, inzien, kunnen).

LESFASEDOELEN: klein, zeer concreet, logisch opgebouwd naar het lesdoel; elk draagt bij aan een lesdoel; elk lesdoel (ook het PD) komt aan bod.

BEGINSITUATIE: pedagogisch (groepssfeer, relaties, sterktes, noden + concrete aanpak, aansluiting leefwereld); didactisch (hoeveelste les, voorkennis, motorisch beginniveau, aanpak sterke en minder sterke leerlingen). Enkel relevante factoren. Verzin geen feiten over de klas.

LESOPBOUW: opwarming min. 10 min, in functie van de kern, iedereen tegelijk actief, intensiteit opbouwen, geen estafettes, eenvoudig of gekend, zelfde materiaal/opstelling als de kern. Kern ≈ 2/3 van de lestijd. Slot ≈ 5 min: tot rust komen (kalmerend/zintuigspel, relaxatie, creatieve ademhaling — niet "tellen tot 60" of "dode vis" —, leergesprek met vragen én antwoorden, samen opbergen); lesfasedoel slot = "/".

ORGANISATIE: klassikaal, partner, golven (max. 4 per rij), bewegingsomloop (geen twee moeilijke opdrachten, bypass), posten, werken in vakken (focusvak begeleid door de lesgever; 5-8 lln per vak: ≤15 lln 2 vakken, 16-23 lln 3, 24-31 lln 4). Hoge actieve leertijd: kort instrueren, start-/stopsignaal, snelle groepsindeling, materiaal klaar, geen grote toestellen verplaatsen tijdens de les.

INSTRUCTIE: demo + uitleg tegelijk; spel: naam → uitgangspositie → terrein → rolverdeling → kernidee met demo → regels + consequenties → controlevraag (geen ja/nee) → startsignaal; 6W (wie, wat, waar, wanneer, waarmee, wat erna); exacte aantallen.

OEFENSTOF: Naam; Situatie in puntjes (materiaal + aantallen, terrein/zones, aantal lln, teams, tikkers, verlossers, inkleding); Opdracht (concreet, "Aangetikt = ...", spelregels); progressie en regressie.

DIDACTISCH HANDELEN: algemene afspraken (preventief klasmanagement); afspraken per oefening (regels, veiligheid, organisatie); ADP (technisch, kort, vaktaal/beeldspraak); LG met vragen ÉN verwachte antwoorden (V: / A:), open vragen, geen ja/nee-, suggestieve, dubbele of kettingvragen; remediëring = foutenanalyse (verwachte fout + correctie; belangrijkste eerst, één tegelijk, positief, kort; fout voorkomen door de situatie aan te passen); overgang (vlot, hoge actieve leertijd). Onderlinge hulp pas vanaf 8 jaar.

DIDACTISCHE PRINCIPES: motivatie, aanschouwelijkheid, activiteit, differentiatie, geleidelijkheid, integratie/herhaling.

BRONNEN: APA-stijl; eigen kennis en AI zijn geen bron; verzin nooit bronnen.

PRIVACY: gebruik nooit namen van kinderen; raad de student aan namen te vervangen.`;

  /* ---------- Velden van het formulier ---------- */
  const F = {
    lesonderwerp: { naam: "Lesonderwerp", tip: "Wat + hoe: organisatievorm + bewegingsvaardigheden, materiaal of psychomotorische ontwikkelingskans. Bv. 'Vakken: balanceren, glijden, werpen'." },
    leerplan: { naam: "Leerplan", tip: "Noteer het leerplan van de koepel van je stageschool: GO!, ZILL (Katholiek Onderwijs) of Leer Lokaal (OVSG)." },
    lpd_bd: { naam: "Leerplandoel – bewegingsdoel", tip: "Code + volledige tekst, letterlijk uit het leerplan. GO!: 6.2.x. Max. 3 leerplandoelen in totaal." },
    lpd_pd: { naam: "Leerplandoel – persoonsdoel", tip: "Code + volledige tekst, letterlijk uit het leerplan. GO!: 6.1.x. Bij ZILL: persoonsgebonden of cultuurgebonden doel." },
    ld_bd: { naam: "Lesdoel – bewegingsdoel", tip: "De leerlingen + actief werkwoord + inhoud (+ voorwaarde). Observeerbaar, evalueerbaar, enkelvoudig. Het leerplandoel moet herkenbaar blijven." },
    ld_pd: { naam: "Lesdoel – persoonsdoel", tip: "De leerlingen + actief werkwoord + inhoud (+ voorwaarde). Gaat het leerplandoel over samenwerken, dan ook het lesdoel." },
    voorblad: { naam: "Voorblad", tip: "Lestijd = de tijd waarin je echt lesgeeft (lesuur min verplaatsen en omkleden)." },
    bs_ped: { naam: "Beginsituatie – pedagogisch", tip: "Groepssfeer, relaties, specifieke noden + jouw concrete aanpak, aansluiting bij de leefwereld. Enkel wat relevant is voor deze les. Geen namen van kinderen." },
    bs_did: { naam: "Beginsituatie – didactisch", tip: "Hoeveelste les? Voorkennis? Motorisch beginniveau voor dit lesonderwerp? Aanpak voor motorisch sterke en minder sterke leerlingen." },
    geblesseerd: { naam: "Opdracht voor geblesseerde leerlingen", tip: "Gedetailleerd en zinvol, gelinkt aan je lesdoelen: scheidsrechter, observator met kijkwijzer, tijdwaarnemer…" },
    grondplan: { naam: "Grondplan / lesorganisatie", tip: "Digitaal bovenaanzicht bij de start van de kern: materiaal, leerlingen in uitgangspositie en de positie van de leerkracht. Gebruik de symbolenlijst." },
    materiaal: { naam: "Materiaal", tip: "Alles met exacte aantallen. Hetzelfde materiaal hergebruiken in opwarming en kern bespaart tijd." },
    bronnen: { naam: "Inhoudelijke bronnen", tip: "APA-stijl. Eigen kennis (en AI) is geen bron. Gebruik minstens de bronnenlijst van de opleiding op Chamilo." },
    fasekop: { naam: "Timing lesfase", tip: "Opwarming min. 10', kern ≈ 2/3 van de lestijd, slot ± 5'. Controleer of de som gelijk is aan je lestijd." },
    lesfasedoel: { naam: "Lesfasedoel", tip: "Klein en zeer concreet, in opbouw naar je lesdoel. Zelfde formule: De leerlingen + werkwoord + inhoud (+ voorwaarde). Noteer ook de timing." },
    naam: { naam: "Naam van de oefening", tip: "Een korte, herkenbare naam die je ook bij de instructie gebruikt." },
    situatie: { naam: "Situatie", tip: "In puntjes: materiaal (aantal), terreinafbakening en zones, aantal lln, teams, lln per team, tikkers, verlossers, inkleding." },
    opdracht: { naam: "Opdracht", tip: "Concreet geformuleerd met exacte aantallen. Bij tikspelen: 'Aangetikt = …' en de spelregels die je bij de instructie geeft." },
    progressie: { naam: "Progressie", tip: "Hoe maak je het moeilijker voor wie het al kan? (differentiatie)" },
    regressie: { naam: "Regressie", tip: "Hoe maak je het makkelijker voor wie het nog niet lukt? (differentiatie)" },
    afspraken: { naam: "Afspraken", tip: "Spelregels, veiligheid en organisatie voor deze oefening, in puntjes." },
    adp: { naam: "ADP (aandachtspunten)", tip: "Technische aandachtspunten voor een correcte uitvoering. Kort, met vaktaal of beeldspraak. Bij de instructie geef je er één mee." },
    remediering: { naam: "Remediëring (foutenanalyse)", tip: "Welke fouten verwacht je (essentieel, secundair, onecht)? Hoe corrigeer je ze? Belangrijkste eerst, één tegelijk, positief. Kan je de fout voorkomen door de situatie aan te passen?" },
    overgang: { naam: "Overgang", tip: "Hoe ga je vlot naar de volgende oefening? Zo weinig mogelijk materiaal verplaatsen, hoge actieve leertijd." },
    lg: { naam: "Leergesprek (LG)", tip: "Schrijf vragen ÉN verwachte antwoorden uit (V: … / A: …). Open vragen, geen ja/nee, niet suggestief, geen dubbele vragen." },
    algemene_afspraken: { naam: "Algemene afspraken", tip: "Preventief klasmanagement: start- en stopsignaal, verzamelplaats, hoe je aandacht vraagt." },
    plaatsen_materiaal: { naam: "Plaatsen materiaal", tip: "6W: wie plaatst wat, waar, wanneer, op welke manier (veilig heffen per leeftijd) en wat erna." },
    opruimen: { naam: "Opruimen materiaal", tip: "Wie ruimt wat op en hoe? Veilig heffen en dragen volgens leeftijd." },
    reflectie: { naam: "Reflectie", tip: "Na de les: wat werkte en neem je mee? Wat pas je aan voor de volgende les? Zijn je doelen bereikt?" },
    onbekend: { naam: "Lesvoorbereiding", tip: "Zet je cursor in een veld van het HOGENT-formulier om tips en controle voor dat veld te zien." }
  };

  const LABELS = [
    [/^\s*lesonderwerp\b/i, "lesonderwerp"], [/^\s*leerplan\s*:/i, "leerplan"],
    [/^\s*algemene afspraken/i, "algemene_afspraken"], [/^\s*plaatsen materiaal/i, "plaatsen_materiaal"], [/^\s*opruimen materiaal/i, "opruimen"],
    [/^\s*naam\s*:/i, "naam"], [/^\s*situatie\s*:/i, "situatie"], [/^\s*opdracht\b(?! voor geblesseerde)/i, "opdracht"],
    [/^\s*[‘'’]?\s*progressie/i, "progressie"], [/^\s*[‘'’]?\s*regressie/i, "regressie"],
    [/^\s*afspraken\s*:/i, "afspraken"], [/^\s*adp\b/i, "adp"], [/^\s*remedi[eë]ring/i, "remediering"],
    [/^\s*overgang/i, "overgang"], [/^\s*lg\b/i, "lg"]
  ];
  function labelOf(line) { for (const [re, k] of LABELS) if (re.test(line)) return k; return null; }
  function lastLabel(text) {
    const lines = String(text || "").replace(/\r/g, "\n").split("\n");
    for (let i = lines.length - 1; i >= 0; i--) { const k = labelOf(lines[i]); if (k) return k; }
    return null;
  }
  function tableKind(head) {
    const h = String(head || "").trim().toLowerCase();
    if (/^naam\b/.test(h)) return "voorblad";
    if (h.startsWith("beginsituatie")) return "beginsituatie";
    if (h.startsWith("grondplan")) return "grondplan";
    if (h.startsWith("inhoudelijke bronnen")) return "bronnen";
    if (h.startsWith("opwarming")) return "opwarming";
    if (h.startsWith("kern")) return "kern";
    if (h.startsWith("slot")) return "slot";
    if (h.startsWith("reflectie")) return "reflectie";
    return null;
  }

  /* Bepaal welk veld de cursor raakt.
     ctx = {head, row, col, para, before}  (before = celtekst vóór de cursor) */
  function classify(ctx) {
    const kind = tableKind(ctx.head);
    const para = String(ctx.para || ""), before = String(ctx.before || "").replace(/\r/g, "\n");
    const fase = kind ? kind : null;
    if (!kind) return { key: "onbekend", fase };
    if (kind === "voorblad") {
      if (ctx.row === 0 && ctx.col === 1) return { key: "lesonderwerp", fase };
      if (ctx.row === 0) return { key: "voorblad", fase };
      const inLesdoelen = /lesdoelen/i.test(before);
      const own = /^\s*BD\b/.test(para) ? "BD" : /^\s*PD\b/.test(para) ? "PD" : null;
      let which = own;
      if (!which) { const m = before.match(/\b(BD|PD)\s*:/g); which = m ? m[m.length - 1].slice(0, 2) : null; }
      if (/^\s*leerplan\s*:/i.test(para)) return { key: "leerplan", fase };
      if (!which) return { key: inLesdoelen ? "ld_bd" : "lpd_bd", fase };
      return { key: (inLesdoelen ? "ld_" : "lpd_") + which.toLowerCase(), fase };
    }
    if (kind === "beginsituatie") {
      if (/geblesseerde/i.test(para) || /geblesseerde/i.test(before) || ctx.row >= 4) return { key: "geblesseerd", fase };
      if (ctx.row <= 1) return { key: "bs_ped", fase };
      return { key: "bs_did", fase };
    }
    if (kind === "grondplan") return { key: ctx.col === 1 ? "materiaal" : "grondplan", fase };
    if (kind === "bronnen") return { key: "bronnen", fase };
    if (kind === "reflectie") return { key: "reflectie", fase };
    // lesfasetabellen
    if (ctx.row === 0) return { key: "fasekop", fase };
    if (ctx.row === 1) return { key: "fasekop", fase };
    if (ctx.col === 0) return { key: kind === "slot" ? "onbekend" : "lesfasedoel", fase };
    const k = labelOf(para) || lastLabel(before);
    return { key: k || (ctx.col === 1 ? "naam" : "afspraken"), fase };
  }

  /* Haal de waarde van een veld uit de paragraaf (zonder label). */
  function stripLabel(para) {
    const s = String(para || "");
    const m = s.match(/^\s*[‘'’]?\s*(lesonderwerp|leerplan|algemene afspraken met de groep|plaatsen materiaal|opruimen materiaal|naam|situatie|opdracht|progressie|regressie|afspraken|adp|remedi[eë]ring|overgang|lg|bd|pd|datum)\s*:?\s*/i);
    return m ? s.slice(m[0].length) : s;
  }

  /* ---------- Controle per veld ---------- */
  const VAAG = /\b(kennen|kent|weten|weet|leren|leert|inzien|begrijpen|begrijpt|kunnen|kan|beseffen|ervaren)\b/i;
  function doelIssues(t) {
    const p = []; t = String(t || "").trim();
    if (!t) return ["Nog leeg."];
    if (/\[AANVULLEN/i.test(t)) p.push("Bevat nog [AANVULLEN].");
    if (!/^De leerlingen\b/.test(t)) p.push("Start met 'De leerlingen …' (leerlingengedrag).");
    const v = t.match(VAAG); if (v) p.push(`'${v[0]}' is niet observeerbaar: kies een actief werkwoord (uitvoeren, verlossen, aanpassen, naleven…).`);
    if ((t.match(/\ben\b/g) || []).length >= 2) p.push("Mogelijk niet enkelvoudig: één doel per zin.");
    if (t.length > 220) p.push("Erg lang: formuleer beknopter.");
    return p;
  }
  function checkField(key, text) {
    const t = String(text || "").trim(), p = [];
    switch (key) {
      case "ld_bd": case "ld_pd": case "lesfasedoel": return doelIssues(t.replace(/^\s*\d+\s*['’′]\s*/, ""));
      case "lpd_bd": case "lpd_pd":
        if (!t) return ["Nog leeg."];
        if (/\[AANVULLEN/i.test(t)) p.push("Vul code + volledige tekst in uit het leerplan.");
        else if (!/^\s*([A-Za-z]{2,}\s?[a-z]*\s?\d|\d+(\.\d+)+)/.test(t)) p.push("Begint niet met een leerplancode.");
        if (key === "lpd_bd" && /^\s*6\.1\./.test(t)) p.push("6.1.x is in het GO!-leerplan een persoonsdoel, geen bewegingsdoel.");
        if (key === "lpd_pd" && /^\s*6\.2\./.test(t)) p.push("6.2.x is in het GO!-leerplan een bewegingsdoel, geen persoonsdoel.");
        return p;
      case "lesonderwerp": if (!t) return ["Nog leeg."]; if (!/:/.test(t)) p.push("Noteer wat + hoe, bv. 'Golven: dribbelen met de hand'."); return p;
      case "lg": if (!t) return ["Nog leeg."]; if (!/A\s*:/.test(t)) p.push("Schrijf ook de verwachte antwoorden uit (A: …)."); if (/\b(begrijpt iedereen|is dat duidelijk|snappen jullie)\b/i.test(t)) p.push("Ja/nee-controlevraag: stel een gerichte open vraag."); return p;
      case "situatie": if (!t) return ["Nog leeg."]; if (!/\d/.test(t)) p.push("Geen aantallen: noteer materiaal, aantal lln, teams…"); return p;
      case "opdracht": if (!t) return ["Nog leeg."]; if (/tikker|tikken|tikspel/i.test(t) && !/aangetikt/i.test(t)) p.push("Tikspel: noteer 'Aangetikt = …'."); return p;
      case "bronnen": if (!t) return ["Nog leeg."]; if (/\[AANVULLEN/i.test(t)) p.push("Bevat nog [AANVULLEN]: vul de vakliteratuur aan."); if (!/\(\d{4}[a-z]?\)|\(z\.d\.\)/.test(t)) p.push("Geen APA-jaartal tussen haakjes gevonden."); return p;
      case "geblesseerd": case "bs_ped": case "bs_did": case "adp": case "remediering": case "overgang": case "afspraken": case "naam":
        if (!t) return ["Nog leeg."]; return p;
      default: return p;
    }
  }

  /* ---------- Controle van het hele document ---------- */
  // tables: array van 2D-arrays (celteksten); return lijst {stap,titel,st,punten}
  function norm(s) { return String(s || "").replace(/\r\n?/g, "\n").replace(/\u000b/g, "\n"); }
  function grab(text, re) { const m = norm(text).match(re); return m ? m[1].trim() : ""; }
  function minutes(head) { const m = String(head || "").match(/(\d+)\s*['’′]|(\d+)\s*min/i); return m ? +(m[1] || m[2]) : null; }

  function segments(cellText) {
    const out = {}; let cur = null;
    for (const line of norm(cellText).split("\n")) {
      const k = labelOf(line);
      if (k) { cur = k; out[k] = (out[k] ? out[k] + "\n" : "") + stripLabel(line).trim(); }
      else if (cur) out[cur] += "\n" + line;
    }
    for (const k in out) out[k] = out[k].trim();
    return out;
  }
  function parseDoc(tables) {
    const d = { kind: {} };
    for (const t of tables) { const k = tableKind(t?.[0]?.[0]); if (k && !d.kind[k]) d.kind[k] = t; }
    const vb = d.kind.voorblad;
    if (vb) {
      const c0 = norm(vb[0]?.[0]), c1 = norm(vb[0]?.[1]), doelen = norm(vb[1]?.[1] ?? vb[1]?.[0]);
      d.lestijd = (c0.match(/Lestijd:\s*(\d+)/i) || [])[1] ? +c0.match(/Lestijd:\s*(\d+)/i)[1] : null;
      d.lesonderwerp = grab(c1, /Lesonderwerp:\s*([\s\S]*)/i);
      const [lpd, ld] = doelen.split(/Lesdoelen\s*:?/i);
      d.lpd_bd = grab(lpd || "", /BD[ \t]*:[ \t]*(.*)/); d.lpd_pd = grab(lpd || "", /PD[ \t]*:[ \t]*(.*)/);
      d.ld_bd = grab(ld || "", /BD[ \t]*:[ \t]*(.*)/); d.ld_pd = grab(ld || "", /PD[ \t]*:[ \t]*(.*)/);
    }
    const bs = d.kind.beginsituatie;
    if (bs) { d.bs_ped = norm(bs[1]?.[0]).trim(); d.bs_did = norm(bs[3]?.[0]).trim(); d.geblesseerd = norm(bs[4]?.[0]).replace(/^[\s\S]*?leerlingen:\s*/i, "").trim(); }
    if (d.kind.bronnen) d.bronnen = norm(d.kind.bronnen[0]?.[0]).replace(/Inhoudelijke bronnen:\s*/i, "").replace(/Noteer je bronnen in APA-stijl\.?/i, "").trim();
    for (const f of ["opwarming", "kern", "slot"]) {
      const t = d.kind[f]; if (!t) continue;
      d[f] = { min: minutes(t[0]?.[0]), rows: t.slice(2) };
    }
    if (d.slot) { const r = d.slot.rows[0] || []; d.slotEx = segments(r[1] || ""); }
    if (d.kern) {
      d.oef = [];
      d.kern.rows.forEach(r => { const ex = norm(r[1]); if (/Naam\s*:/i.test(ex)) d.oef.push({ doel: norm(r[0]).trim(), ex: segments(r[1]), dh: segments(r[2]) }); });
      d.lgs = d.kern.rows.map(r => norm(r[2])).filter(x => /^\s*LG\b/i.test(x.trim())).map(x => stripLabel(x.trim()));
    }
    return d;
  }

  function checkDoc(tables) {
    const d = parseDoc(tables), R = [];
    const add = (stap, titel, st, punten = []) => R.push({ stap, titel, st, punten });
    if (!d.kind.voorblad || !d.kind.kern) {
      add("!", "Dit lijkt geen HOGENT-lesvoorbereidingsformulier", "bad", ["Open je lesvoorbereiding in het HOGENT-formulier (tabellen voorblad, beginsituatie, opwarming, kern, slot)."]);
      return { d, R };
    }
    add(1, "Lesonderwerp concreet (wat + hoe)", !d.lesonderwerp ? "bad" : /:/.test(d.lesonderwerp) ? "ok" : "warn", !d.lesonderwerp ? ["Nog leeg."] : /:/.test(d.lesonderwerp) ? [] : ["Noteer organisatievorm + vaardigheid, bv. 'Vakken: balanceren, werpen'."]);
    { const p = [...checkField("lpd_bd", d.lpd_bd).map(x => "BD: " + x), ...checkField("lpd_pd", d.lpd_pd).map(x => "PD: " + x)];
      add(2, "Leerplandoelen: 1 BD + 1 PD met code en tekst", p.some(x => /leeg|AANVULLEN|Vul/.test(x)) ? "bad" : p.length ? "warn" : "ok", p); }
    { const p = []; let st = "ok";
      if ((d.bs_ped || "").length < 60) { p.push("Pedagogische beginsituatie is (bijna) leeg."); st = "warn"; }
      if ((d.bs_did || "").length < 60) { p.push("Didactische beginsituatie is (bijna) leeg."); st = "warn"; }
      if (!d.geblesseerd) { p.push("Opdracht voor geblesseerde leerlingen ontbreekt."); st = "bad"; }
      add(3, "Beginsituatie pedagogisch en didactisch", st, p); }
    { const p = [...doelIssues(d.ld_bd).map(x => "BD: " + x), ...doelIssues(d.ld_pd).map(x => "PD: " + x)];
      add(4, "Lesdoelen volgens de gouden regels", p.some(x => /leeg|AANVULLEN/.test(x)) ? "bad" : p.length ? "warn" : "ok", p); }
    { const p = []; (d.oef || []).forEach((o, i) => doelIssues(o.doel.replace(/^\s*\d+\s*['’′]\s*/, "")).forEach(x => p.push(`Oefening ${i + 1}: ${x}`)));
      if (!(d.oef || []).length) p.push("Nog geen kernoefeningen gevonden.");
      add(5, "Lesfasedoelen in de kern", !(d.oef || []).length || p.some(x => /leeg/.test(x)) ? "bad" : p.length ? "warn" : "ok", p); }
    { const p = checkField("bronnen", d.bronnen); add(6, "Bronnen in APA-stijl", !d.bronnen ? "bad" : p.length ? "warn" : "ok", p); }
    { const p = []; (d.oef || []).forEach((o, i) => { for (const lab of ["naam", "situatie", "opdracht"]) if (!o.ex[lab]) p.push(`Oefening ${i + 1}: ${lab} is leeg.`); if (o.ex.situatie && !/\d/.test(o.ex.situatie)) p.push(`Oefening ${i + 1}: situatie zonder aantallen.`); });
      add(7, "Oefenstof uitgeschreven (naam, situatie, opdracht)", p.some(x => /leeg/.test(x)) ? "bad" : p.length ? "warn" : "ok", p); }
    add(8, "Zaalopstelling digitaal getekend", "info", ["Bovenaanzicht bij de start van de kern: materiaal, lln, positie lk."]);
    { const p = []; (d.oef || []).forEach((o, i) => { const miss = [["afspraken","afspraken"],["adp","ADP"],["remediering","remediëring"],["overgang","overgang"]].filter(([k]) => !o.dh[k]).map(x => x[1]); if (miss.length) p.push(`Oefening ${i + 1}: ${miss.join(", ")} leeg.`); });
      (d.lgs || []).forEach((lg, i) => { if (!lg.trim()) p.push(`LG ${i + 1}: leeg.`); else if (!/A\s*:/.test(lg)) p.push(`LG ${i + 1}: geen uitgeschreven antwoorden (A: …).`); });
      add(9, "Didactisch handelen: afspraken, ADP, LG, foutenanalyse, overgang", p.some(x => /leeg/.test(x)) ? "bad" : p.length ? "warn" : "ok", p); }
    { const p = []; let st = "ok"; const m = d.opwarming?.min;
      if (m == null) { p.push("Geen timing in de titel 'Opwarming (… )' gevonden."); st = "warn"; } else if (m < 10) { p.push(`Opwarming duurt ${m}', minimum is 10'.`); st = "bad"; }
      const tx = (d.opwarming?.rows || []).map(r => r.join(" ")).join(" ");
      if (/estafette/i.test(tx)) { p.push("Estafettes zijn geen goede opwarming (niet iedereen tegelijk actief)."); st = "bad"; }
      add(10, "Opwarming (min. 10', iedereen actief)", st, p); }
    add(11, "Organisatie per lesfase getekend (indien nodig)", "info", ["Bovenaanzicht per lesfase/post; bij techniek het zij-aanzicht. Kijkwijzers in bijlage."]);
    { const p = []; let st = "ok"; const m = d.slot?.min; if (!d.slotEx?.naam && !d.slotEx?.opdracht) { p.push("Slotactiviteit is nog leeg."); st = "bad"; } if (m != null && (m < 3 || m > 8)) { p.push(`Slot duurt ${m}', richtwaarde ± 5'.`); st = "warn"; }
      const tx = (d.slot?.rows || []).map(r => r.join(" ")).join(" ");
      if (/tellen tot 60|dode vis/i.test(tx)) { p.push("Kies een creatievere rustoefening dan 'tellen tot 60' of 'dode vis'."); st = "warn"; }
      add(12, "Slot / cooling down (± 5')", st, p); }
    { const p = []; let st = "ok"; const a = d.opwarming?.min, b = d.kern?.min, c = d.slot?.min;
      if ([a, b, c].some(x => x == null)) { p.push("Noteer de minuten in de titels van opwarming, kern en slot, bv. 'Kern (10:38–11:08 · 30')'."); st = "warn"; }
      else { const tot = a + b + c; if (d.lestijd && tot !== d.lestijd) { p.push(`Som van de lesfasen is ${tot}', lestijd is ${d.lestijd}'.`); st = Math.abs(tot - d.lestijd) > 3 ? "bad" : "warn"; }
        const r = b / tot; if (r < .55 || r > .75) { p.push(`Kern is ${Math.round(r * 100)}% van de les; richtwaarde ≈ 2/3.`); if (st === "ok") st = "warn"; } }
      add("⏱", "Timing klopt met de lestijd", st, p); }
    return { d, R };
  }

  function docAsText(tables, maxLen = 60000) {
    let out = "";
    tables.forEach((t, i) => {
      const k = tableKind(t?.[0]?.[0]) || "tabel";
      out += `\n### ${k.toUpperCase()} (tabel ${i + 1})\n`;
      t.forEach(r => { out += "| " + r.map(c => norm(c).trim().replace(/\n+/g, " ⏎ ")).join(" | ") + " |\n"; });
    });
    return out.length > maxLen ? out.slice(0, maxLen) + "\n[… afgekapt]" : out;
  }

  const api = { segments, REGELS, F, classify, stripLabel, checkField, checkDoc, parseDoc, docAsText, tableKind, labelOf };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.LV = api;
})(typeof window !== "undefined" ? window : globalThis);
