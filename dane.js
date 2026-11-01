/* =====================================================================
   DANE STRONY „Boże Narodzenie u Szabliniaków”
   Tu zmieniasz wszystko, co widzi cała rodzina.
   Zasady: tekst zawsze w apostrofach '...', po każdej pozycji przecinek.
   ===================================================================== */

window.DANE = {

  organizatorka: 'Ada',

  // Kiedy Wigilia (rok-miesiąc-dzień T godzina:minuta) — do tego liczy odliczanie
  wigilia: '2026-12-24T17:00',

  // RODZINA — plec: 'k' (kobieta) albo 'm' (mężczyzna).
  // Kobiety biorą udział w losowaniu „kto zmywa”, mężczyźni w losowaniu Mikołaja.
  rodzina: [
    { imie: 'Ada',     plec: 'k' },
    { imie: 'Patryk',  plec: 'm' },
    { imie: 'Mama',    plec: 'k' },
    { imie: 'Tata',    plec: 'm' },
    { imie: 'Babcia',  plec: 'k' },
    { imie: 'Dziadek', plec: 'm' },
    { imie: 'Ciocia',  plec: 'k' },
    { imie: 'Wujek',   plec: 'm' },
  ],

  // PLAN DNIA
  plan: {
    adres: 'Adres do uzupełnienia',
    harmonogram: [
      { godzina: '15:00', co: 'Zbiórka i ostatnie poprawki przy stole' },
      { godzina: '16:30', co: 'Wszyscy na miejscu, kurtki na łóżko' },
      { godzina: '17:00', co: 'Pierwsza gwiazdka, opłatek i życzenia' },
      { godzina: '17:30', co: 'Kolacja wigilijna (12 potraw, 0 diet)' },
      { godzina: '19:00', co: 'Mikołaj i prezenty 🎅' },
      { godzina: '20:00', co: 'Kolędy, ciasto, quiz rodzinny' },
    ],
    // Kto po kogo jedzie
    transport: [
      { kierowca: 'Patryk', zabiera: 'Babcia, Dziadek', wyjazd: '15:45' },
    ],
  },

  // MENU — kto: '' oznacza, że nikt jeszcze nie zaklepał
  menu: [
    { potrawa: 'Barszcz czerwony z uszkami', kto: '' },
    { potrawa: 'Pierogi z kapustą i grzybami', kto: '' },
    { potrawa: 'Karp smażony', kto: '' },
    { potrawa: 'Ryba po grecku', kto: '' },
    { potrawa: 'Śledzie w oleju', kto: '' },
    { potrawa: 'Kapusta z grochem', kto: '' },
    { potrawa: 'Sałatka jarzynowa', kto: '' },
    { potrawa: 'Kutia', kto: '' },
    { potrawa: 'Makowiec', kto: '' },
    { potrawa: 'Sernik', kto: '' },
    { potrawa: 'Piernik', kto: '' },
    { potrawa: 'Kompot z suszu', kto: '' },
  ],

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
      odpowiedzi: ['Dziadek', 'Wujek', 'Tata', 'Wszyscy naraz'], poprawna: 1,
      komentarz: 'Zasnął z pilotem w ręku. Nikt nie odważył się go zabrać.' },
    { pytanie: 'PRZYKŁAD do podmiany: Kto zjadł najwięcej pierogów?',
      odpowiedzi: ['Patryk', 'Wujek', 'Babcia (ona tylko „próbowała”)', 'Pies, pod stołem'], poprawna: 2,
      komentarz: 'Oficjalnie 14. Nieoficjalnie elfy straciły rachubę.' },
  ],
};
