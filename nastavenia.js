// ============================================================
//  NASTAVENIA FORMULÁRA – tu sa menia všetky texty.
//  Po zmene zvýš "verzia", aby bolo v PDF jasné, čo klient podpísal.
//  Obchodné podmienky a GDPR sú v súbore podmienky.md.
// ============================================================
window.NASTAVENIA = {
  verzia: '1.0 – 1. 1. 2027',
  trener: 'Marco Kormúth',
  podtitul: 'Kondičný a osobný tréner',
  kontaktEmail: 'marco38.kormuth@gmail.com',

  // Adresa Google skriptu. Kým je prázdna, formulár beží v skúšobnom režime
  // (kód je 123456 a nič sa neodošle).
  skriptUrl: 'https://script.google.com/macros/s/AKfycbw58oalBahskfiBx6FKUB3paOlWEJVRGodnrTSAaUjVf0gpbfzh1lj9QbvGaZ75hFfyzw/exec',

  osobneUdaje: [
    { id: 'meno', label: 'Meno a priezvisko', typ: 'text', povinne: true, autocomplete: 'name' },
    { id: 'narodenie', label: 'Dátum narodenia', typ: 'date', povinne: true, autocomplete: 'bday' },
    { id: 'telefon', label: 'Telefón', typ: 'tel', povinne: true, autocomplete: 'tel' },
    { id: 'adresa', label: 'Fakturačná adresa', typ: 'text', povinne: false, pomoc: 'Len ak chcete faktúru.', autocomplete: 'street-address' },
    { id: 'nudza', label: 'Kontakt v núdzi', typ: 'text', povinne: true, pomoc: 'Meno a telefón osoby, ktorú mám kontaktovať.' }
  ],

  zastupca: [
    { id: 'z_meno', label: 'Meno a priezvisko rodiča / zákonného zástupcu', typ: 'text', povinne: true },
    { id: 'z_vztah', label: 'Vzťah ku klientovi', typ: 'text', povinne: true, pomoc: 'Napríklad matka, otec.' },
    { id: 'z_telefon', label: 'Telefón', typ: 'tel', povinne: true }
  ],

  zdravie: [
    'Ochorenie srdca, vysoký tlak, závraty alebo mdloby',
    'Cukrovka, astma alebo iné chronické ochorenie',
    'Operácia alebo vážnejšie zranenie za posledné 2 roky',
    'Bolesť chrbta, krku, ramien, kolien alebo iných kĺbov',
    'Problémy s platničkami alebo diagnóza chrbtice',
    'Pravidelné lieky',
    'Tehotenstvo alebo obdobie po pôrode',
    'Lekár vám odporučil obmedziť pohyb'
  ],

  vyhlasenia: [
    'Uvedené informácie sú pravdivé a úplné a nič podstatné som nezamlčal(a).',
    'Každú zmenu zdravotného stavu oznámim trénerovi pred ďalším tréningom.',
    'Beriem na vedomie, že tréner nie je lekár ani fyzioterapeut a nestanovuje diagnózy.',
    'Ak mám pochybnosti o svojom zdravotnom stave, prekonzultujem cvičenie s lekárom. Tréner môže požadovať súhlas lekára.',
    'Počas tréningu ihneď oznámim bolesť, závrat alebo iný nezvyčajný pocit.'
  ],

  potvrdenie: 'Prečítal(a) som si obchodné podmienky a informácie o spracúvaní osobných údajov a súhlasím s obchodnými podmienkami.',

  suhlasy: [
    { id: 'zdravotne', nazov: 'Zdravotné údaje', povinne: true,
      text: 'Súhlasím so spracúvaním údajov o mojom zdravotnom stave, liekoch, zraneniach, bolesti, spánku, strese, meraniach InBody a výsledkoch pohybových testov na účel bezpečného nastavenia tréningu.' },
    { id: 'foto', nazov: 'Fotografie a videá', povinne: false,
      text: 'Súhlasím s vyhotovením a uchovávaním fotografií a videí mojej postavy a pohybu na účel hodnotenia techniky a pokroku. Nebudú zverejnené.' },
    { id: 'zverejnenie', nazov: 'Zverejnenie', povinne: false,
      text: 'Súhlasím s anonymným zverejnením môjho príbehu alebo výsledkov (bez mena a tváre) v obsahu trénera na webe alebo sociálnych sieťach. Každý konkrétny príspevok mi tréner ukáže vopred.' },
    { id: 'odbornik', nazov: 'Zdieľanie s odborníkom', povinne: false,
      text: 'Súhlasím, aby tréner v prípade potreby zdieľal nevyhnutné údaje s fyzioterapeutom alebo lekárom, ktorého si zvolím.' }
  ],

  odvolanie: 'Súhlasy dávam na dobu uvedenú v informáciách o spracúvaní údajov. Môžem ich kedykoľvek odvolať e-mailom na marco38.kormuth@gmail.com alebo osobne.'
};
