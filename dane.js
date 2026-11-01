/* =====================================================================
   DANE STRONY „Boże Narodzenie u Szabliniaków”
   Tu zmieniasz wszystko, co widzi cała rodzina.
   Zasady: tekst zawsze w apostrofach '...', po każdej pozycji przecinek.
   ===================================================================== */

window.DANE = {

  organizatorka: 'Ada',

  // Kiedy Wigilia (rok-miesiąc-dzień T godzina:minuta) — do tego liczy odliczanie
  wigilia: '2026-12-24T19:00',

  // RODZINA — plec: 'k' (kobieta) albo 'm' (mężczyzna).
  // Kobiety biorą udział w losowaniu „kto zmywa”, mężczyźni w losowaniu Mikołaja.
  rodzina: [
    { imie: 'Adusia',     plec: 'k' },
    { imie: 'Patryczek',  plec: 'm' },
    { imie: 'Karolinka',  plec: 'k' },
    { imie: 'Marcinek',   plec: 'm' },
    { imie: 'Anitka',     plec: 'k' },
    { imie: 'Kludysia',   plec: 'k' },
    { imie: 'Lusia',      plec: 'k' },
    { imie: 'Dareczek',   plec: 'm' },
    { imie: 'Agniesia',   plec: 'k' },
    { imie: 'Hubi',       plec: 'm' },
    { imie: 'Martynka',   plec: 'k' },
    { imie: 'Bartuś',     plec: 'm' },
    { imie: 'Pawcia',     plec: 'k' },
    { imie: 'Szymonek',   plec: 'm' },
    { imie: 'Ania',       plec: 'k' },
    { imie: 'Laurka',     plec: 'k' },
    { imie: 'Patka',      plec: 'k' },
  ],

  // PLAN DNIA
  plan: {
    adres: 'U Babci Basi',
    harmonogram: [
      { godzina: '18:30', co: 'Przyjazd do Babci Basi, kurtki na łóżko' },
      { godzina: '19:00', co: 'Pierwsza gwiazdka, opłatek i życzenia' },
      { godzina: '19:30', co: 'Kolacja wigilijna (12 potraw, 0 diet)' },
      { godzina: '21:00', co: 'Mikołaj i prezenty 🎅' },
      { godzina: '21:30', co: 'Losowanie, kto zmywa 🧽' },
      { godzina: '22:00', co: 'Kolędy, ciasto, quiz rodzinny' },
    ],
  },

  // CO KTO PRZYNOSI — adres arkusza Google (wkleja Claude po podłączeniu)
  jedzenieUrl: '',

  // QUIZ — odpowiedzi: lista możliwości, poprawna: numer poprawnej odpowiedzi (liczone od 1)
  quiz: [
    { pytanie: 'Ile potraw tradycyjnie powinno być na wigilijnym stole?',
      odpowiedzi: ['7', '10', '12', 'Tyle, ile zmieści babcia'], poprawna: 3,
      komentarz: '12, jak 12 apostołów albo 12 miesięcy. A babcia i tak zrobi 15.' },
    { pytanie: 'Po co chowa się łuskę karpia do portfela?',
      odpowiedzi: ['Żeby portfel pachniał rybą', 'Na pieniądze przez cały rok', 'Na szczęście w miłości', 'Bo szkoda wyrzucić'], poprawna: 2,
      komentarz: 'Łuska = pieniądze. Elfy sprawdzą w grudniu 2027, czy zadziałało.' },
    { pytanie: 'Z jakiego kraju pochodzi kolęda „Cicha noc”?',
      odpowiedzi: ['Z Polski', 'Z Niemiec', 'Z Austrii', 'Z Laponii'], poprawna: 3,
      komentarz: 'Austria, 1818 rok. Napisana na gitarę, bo organy w kościele się zepsuły.' },
    { pytanie: 'Dlaczego zostawia się przy stole jedno wolne miejsce?',
      odpowiedzi: ['Dla zbłąkanego wędrowca', 'Dla Mikołaja', 'Na wypadek, gdyby wujek przyprowadził kolegę', 'Żeby był łokieć na stole'], poprawna: 1,
      komentarz: 'Dla niespodziewanego gościa. Wujek i jego kolega niech dostawią krzesło.' },
    { pytanie: 'PRZYKŁAD do podmiany: Kto w zeszłym roku zasnął pierwszy po kolacji?',
      odpowiedzi: ['Dareczek', 'Marcinek', 'Patryczek', 'Wszyscy naraz'], poprawna: 1,
      komentarz: 'Zasnął z pilotem w ręku. Nikt nie odważył się go zabrać.' },
    { pytanie: 'PRZYKŁAD do podmiany: Kto zjadł najwięcej pierogów?',
      odpowiedzi: ['Szymonek', 'Hubi', 'Babcia Basia (ona tylko „próbowała”)', 'Pies, pod stołem'], poprawna: 2,
      komentarz: 'Oficjalnie 14. Nieoficjalnie elfy straciły rachubę.' },
  ],
};
