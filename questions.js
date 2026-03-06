/* ================================================================
   MovedTrivia – Spørsmålsbank: Arbeidsnorsk
   Kategorier: rettigheter | kommunikasjon | hms | lonn | kultur
   Nivåer:     easy | medium | hard
   ================================================================ */

const QUESTIONS = [

  /* ───────────────────── RETTIGHETER ───────────────────── */
  // EASY
  {
    id: "r-e-1", category: "rettigheter", difficulty: "easy",
    question: "Hvor mange uker ferie har de fleste arbeidstakere i Norge hvert år?",
    options: ["3 uker", "4 uker", "5 uker", "6 uker"],
    answer: 2,
    explanation: "De fleste arbeidstakere i Norge har rett til 5 ukers ferie i henhold til ferieloven."
  },
  {
    id: "r-e-2", category: "rettigheter", difficulty: "easy",
    question: "Hva kalles dokumentet du får fra arbeidsgiveren din som viser at du har en jobb?",
    options: ["Arbeidskontrakt", "Kvittering", "Faktura", "Søknad"],
    answer: 0,
    explanation: "En arbeidskontrakt er avtalen mellom deg og arbeidsgiveren din. Den viser hva jobben din innebærer."
  },
  {
    id: "r-e-3", category: "rettigheter", difficulty: "easy",
    question: "Hva er minstealderen for å jobbe i Norge?",
    options: ["13 år", "15 år", "16 år", "18 år"],
    answer: 1,
    explanation: "I Norge kan barn jobbe fra de er 15 år. Under 15 år er det strenge begrensninger."
  },
  {
    id: "r-e-4", category: "rettigheter", difficulty: "easy",
    question: "Hva heter organisasjonen som hjelper arbeidstakere med rettigheter i Norge?",
    options: ["NAV", "LO (Landsorganisasjonen)", "Skatteetaten", "Arbeidstilsynet"],
    answer: 3,
    explanation: "Arbeidstilsynet er det statlige tilsynsorganet som passer på at arbeidsmiljøloven følges."
  },
  {
    id: "r-e-5", category: "rettigheter", difficulty: "easy",
    question: "Hva er 'oppsigelsestid'?",
    options: [
      "Tiden du jobber overtid",
      "Tiden mellom oppsigelse og siste arbeidsdag",
      "Tiden du kan ta pause",
      "Tiden du er sykmeldt"
    ],
    answer: 1,
    explanation: "Oppsigelsestid er perioden fra du eller arbeidsgiver sier opp arbeidsforholdet til den siste arbeidsdagen."
  },
  {
    id: "r-e-6", category: "rettigheter", difficulty: "easy",
    question: "Har du rett til å ta pauser i løpet av arbeidsdagen?",
    options: ["Nei, bare under lunsj", "Ja, loven gir rett til hvile og pauser", "Bare hvis sjefen tillater det", "Kun etter 10 timers arbeid"],
    answer: 1,
    explanation: "Arbeidsmiljøloven sikrer arbeidstakere rett til pauser og hvile i løpet av arbeidsdagen."
  },
  {
    id: "r-e-7", category: "rettigheter", difficulty: "easy",
    question: "Hva kalles det når du jobber mer enn normal arbeidstid?",
    options: ["Deltid", "Overtid", "Tillegg", "Ekstra"],
    answer: 1,
    explanation: "Overtid er arbeid utover den avtalte arbeidstiden. Du har krav på ekstra betaling for overtid."
  },
  {
    id: "r-e-8", category: "rettigheter", difficulty: "easy",
    question: "Hva er normal arbeidstid per uke i Norge?",
    options: ["30 timer", "35 timer", "37,5 timer", "40 timer"],
    answer: 3,
    explanation: "Den normale arbeidstiden i Norge er 40 timer per uke, men mange tariffavtaler gir 37,5 timer."
  },

  // MEDIUM
  {
    id: "r-m-1", category: "rettigheter", difficulty: "medium",
    question: "Hva inneholder en arbeidskontrakt? Velg det BESTE svaret.",
    options: [
      "Kun lønn og stillingstittel",
      "Arbeidsoppgaver, lønn, arbeidstid og oppsigelsestid",
      "Bare oppsigelsestid",
      "Kun start- og sluttdato"
    ],
    answer: 1,
    explanation: "En fullstendig arbeidskontrakt skal inneholde informasjon om arbeidsoppgaver, lønn, arbeidstid, oppsigelsestid og mer."
  },
  {
    id: "r-m-2", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'sykepenger' i Norge?",
    options: [
      "Penger du betaler til legen",
      "Penger du får fra NAV eller arbeidsgiver når du er syk",
      "En forsikring du kjøper selv",
      "Penger du sparer til pensjon"
    ],
    answer: 1,
    explanation: "Sykepenger er en ytelse som sikrer inntekt når du er sykemeldt. Arbeidsgiveren betaler de første 16 dagene, deretter betaler NAV."
  },
  {
    id: "r-m-3", category: "rettigheter", difficulty: "medium",
    question: "Hva er den lengste perioden du kan motta sykepenger fra NAV?",
    options: ["6 måneder", "9 måneder", "12 måneder", "52 uker"],
    answer: 3,
    explanation: "Du kan motta sykepenger fra NAV i inntil 52 uker (ett år) i løpet av en treårsperiode."
  },
  {
    id: "r-m-4", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'tariffavtale'?",
    options: [
      "En skatteavtale mellom land",
      "En kollektiv avtale mellom fagforening og arbeidsgiver om lønns- og arbeidsvilkår",
      "En personlig kontrakt mellom deg og sjefen",
      "En reiseplan for jobben"
    ],
    answer: 1,
    explanation: "En tariffavtale er en kollektiv avtale som regulerer lønns- og arbeidsvilkår for en gruppe arbeidstakere."
  },
  {
    id: "r-m-5", category: "rettigheter", difficulty: "medium",
    question: "Hva skjer hvis arbeidsgiveren din ikke betaler lønn?",
    options: [
      "Du må bare vente",
      "Du kan kontakte Arbeidstilsynet og eventuelt ta saken til retten",
      "Du mister automatisk jobben",
      "NAV betaler for deg"
    ],
    answer: 1,
    explanation: "Hvis arbeidsgiver ikke betaler lønn, kan du kontakte Arbeidstilsynet. Du kan også ta saken til Forliksrådet eller domstolen."
  },
  {
    id: "r-m-6", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'permisjon' i norsk arbeidsliv?",
    options: [
      "En type ekstra betaling",
      "Godkjent fravær fra jobben i en periode",
      "En kort pause i løpet av dagen",
      "En bonus for god jobb"
    ],
    answer: 1,
    explanation: "Permisjon er når du har godkjent fravær fra jobben. Det finnes ulike typer: foreldrepermisjon, omsorgspermisjon, og velferdspermisjon."
  },
  {
    id: "r-m-7", category: "rettigheter", difficulty: "medium",
    question: "Hva er minimum oppsigelsestid i prøvetiden?",
    options: ["1 uke", "2 uker", "14 dager", "1 måned"],
    answer: 2,
    explanation: "I prøvetiden (vanligvis de første 6 månedene) er minimum oppsigelsestid 14 dager."
  },
  {
    id: "r-m-8", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'egenmelding'?",
    options: [
      "En rapport til sjefen om jobben din",
      "Selvrapportert sykefravær uten legeerklæring",
      "En søknad om ferie",
      "En klage til Arbeidstilsynet"
    ],
    answer: 1,
    explanation: "Egenmelding betyr at du melder fra om sykdom til arbeidsgiver uten å gå til legen. Du kan bruke egenmelding noen dager før du trenger sykmelding."
  },

  // HARD
  {
    id: "r-h-1", category: "rettigheter", difficulty: "hard",
    question: "Hva er formålet med arbeidsmiljøloven (aml)?",
    options: [
      "Å bestemme skattenivået for arbeidstakere",
      "Å sikre trygge arbeidsforhold og verne arbeidstakernes helse og rettigheter",
      "Å regulere import og eksport av varer",
      "Å bestemme pensjonsalderen"
    ],
    answer: 1,
    explanation: "Arbeidsmiljøloven skal sikre trygge arbeidsforhold, ivareta arbeidstakernes helse og velferd, og fremme likebehandling i arbeidslivet."
  },
  {
    id: "r-h-2", category: "rettigheter", difficulty: "hard",
    question: "Hva er forskjellen mellom fast ansettelse og midlertidig ansettelse?",
    options: [
      "Fast ansettelse er alltid bedre betalt",
      "Fast ansettelse er uten sluttdato, midlertidig har en bestemt periode",
      "Midlertidig ansettelse gir mer ferie",
      "Det er ingen juridisk forskjell"
    ],
    answer: 1,
    explanation: "Fast ansettelse betyr at du jobber uten en fastsatt sluttdato. Midlertidig ansettelse har en bestemt periode og er kun lovlig i spesielle tilfeller."
  },
  {
    id: "r-h-3", category: "rettigheter", difficulty: "hard",
    question: "Hva betyr 'vern mot usaklig oppsigelse'?",
    options: [
      "Du kan aldri bli sagt opp",
      "Arbeidsgiver må ha en god og saklig grunn for å si deg opp",
      "Du kan si opp uten grunn",
      "Oppsigelse er kun mulig etter 5 år"
    ],
    answer: 1,
    explanation: "Arbeidsmiljøloven gir deg vern mot usaklig oppsigelse. Arbeidsgiver må ha en saklig grunn som er knyttet til deg eller bedriften for å kunne si deg opp."
  },
  {
    id: "r-h-4", category: "rettigheter", difficulty: "hard",
    question: "Hva er 'diskriminering' i arbeidslivet?",
    options: [
      "Å gi noen ekstra ferie",
      "Å behandle noen urettferdig på grunn av kjønn, alder, religion, etnisitet eller funksjonshemming",
      "Å gi ulike arbeidsoppgaver til ulike folk",
      "Å ansette folk med erfaring fremfor uten erfaring"
    ],
    answer: 1,
    explanation: "Diskriminering er urettferdig behandling basert på egenskaper som ikke er relevante for jobben, som etnisitet, religion, kjønn eller alder. Dette er forbudt i norsk lov."
  },
  {
    id: "r-h-5", category: "rettigheter", difficulty: "hard",
    question: "Hva er 'fortrinnsrett' for arbeidstakere?",
    options: [
      "Retten til å velge arbeidstid",
      "Retten til å bli ansatt igjen i samme bedrift etter oppsigelse ved nedbemanning",
      "Retten til ekstra lønn etter 5 år",
      "Retten til å nekte overtid"
    ],
    answer: 1,
    explanation: "Arbeidstakere som er sagt opp på grunn av nedbemanning har fortrinnsrett til ny stilling i bedriften i ett år etter oppsigelsestidens utløp."
  },
  {
    id: "r-h-6", category: "rettigheter", difficulty: "hard",
    question: "Hva er maksimalt antall overtidstimer per uke etter arbeidsmiljøloven?",
    options: ["5 timer", "10 timer", "15 timer", "20 timer"],
    answer: 1,
    explanation: "Etter arbeidsmiljøloven er det tillatt med maksimalt 10 timer overtid per uke, men det er grenser for månedlig og årlig overtid også."
  },

  /* ───────────────────── KOMMUNIKASJON ───────────────────── */
  // EASY
  {
    id: "k-e-1", category: "kommunikasjon", difficulty: "easy",
    question: "Hva sier du til kollegaene dine første gang du møter dem?",
    options: ["Ingenting, du bare begynner å jobbe", "Hei, jeg heter [navn]. Hyggelig å møte dere!", "Beklager, kan du hjelpe meg?", "Ha det bra!"],
    answer: 1,
    explanation: "I Norge er det vanlig å presentere seg med navn og si det er hyggelig å møte nye kolleger."
  },
  {
    id: "k-e-2", category: "kommunikasjon", difficulty: "easy",
    question: "Hva gjør du hvis du ikke forstår hva sjefen sier?",
    options: [
      "Later som du forstår",
      "Ber sjefen om å forklare igjen eller snakke langsommere",
      "Gå hjem",
      "Spør en kollega uten å si noe til sjefen"
    ],
    answer: 1,
    explanation: "Det er alltid best å be om en forklaring. Du kan si: 'Kan du gjenta det?' eller 'Kan du forklare det igjen?'"
  },
  {
    id: "k-e-3", category: "kommunikasjon", difficulty: "easy",
    question: "Hva er et 'møte' på jobben?",
    options: [
      "En type arbeidsoppgave",
      "En samling der kolleger diskuterer arbeid",
      "En pause fra jobben",
      "En form for betaling"
    ],
    answer: 1,
    explanation: "Et møte er når to eller flere kolleger samles for å diskutere, planlegge eller ta beslutninger om jobbrelaterte temaer."
  },
  {
    id: "k-e-4", category: "kommunikasjon", difficulty: "easy",
    question: "Hva er riktig måte å si 'takk' i profesjonell sammenheng på norsk?",
    options: ["Takk så mye!", "Jo", "Mmm", "Javel"],
    answer: 0,
    explanation: "'Takk så mye!' eller bare 'Takk!' er høflige og vanlige måter å uttrykke takknemlighet i norsk arbeidsliv."
  },
  {
    id: "k-e-5", category: "kommunikasjon", difficulty: "easy",
    question: "Hva gjør du hvis du kommer for sent til jobben?",
    options: [
      "Ingenting, det er ikke viktig",
      "Varsler arbeidsgiveren/sjefen og forklarer hvorfor",
      "Sender en melding til en kollega",
      "Kommer bare når du kan"
    ],
    answer: 1,
    explanation: "I Norge er det viktig å varsle sjefen hvis du kommer for sent. Du kan si: 'Beklager, jeg er forsinket fordi...' eller sende en melding."
  },
  {
    id: "k-e-6", category: "kommunikasjon", difficulty: "easy",
    question: "Hva betyr 'arbeidsplan' eller 'vaktplan'?",
    options: [
      "En plan for ferieturer",
      "En oversikt over når du og kollegene dine skal jobbe",
      "En beskrivelse av arbeidsoppgavene dine",
      "En kontrakt med arbeidsgiveren"
    ],
    answer: 1,
    explanation: "En arbeidsplan eller vaktplan viser hvilke dager og tider du skal jobbe. Det er viktig å sjekke planen regelmessig."
  },
  {
    id: "k-e-7", category: "kommunikasjon", difficulty: "easy",
    question: "Hva er 'tilbakemelding' i jobbsammenheng?",
    options: [
      "En type betaling",
      "Kommentarer om hvordan du gjør jobben din",
      "En forespørsel om ferie",
      "En rapport til myndighetene"
    ],
    answer: 1,
    explanation: "Tilbakemelding er kommentarer fra sjefen eller kolleger om det du gjør. Positiv tilbakemelding betyr at du gjør det bra, konstruktiv tilbakemelding hjelper deg å bli bedre."
  },
  {
    id: "k-e-8", category: "kommunikasjon", difficulty: "easy",
    question: "Hva betyr det å 'melde fra' om noe på jobben?",
    options: [
      "Å gå hjem tidlig",
      "Å informere sjefen eller kolleger om noe viktig",
      "Å skrive en klage",
      "Å be om ekstra lønn"
    ],
    answer: 1,
    explanation: "Å melde fra betyr å informere om noe. For eksempel: 'Jeg melder fra om at jeg er syk' eller 'Jeg melder fra om en feil i maskinen.'"
  },

  // MEDIUM
  {
    id: "k-m-1", category: "kommunikasjon", difficulty: "medium",
    question: "Hvordan skriver du en profesjonell e-post til sjefen på norsk?",
    options: [
      "Hei! Vil ha fri fredag :)",
      "Hei [navn], Jeg skriver for å spørre om... Med vennlig hilsen [ditt navn]",
      "Yo! Kan jeg få fri?",
      "Kjære direktør, jeg søker herved om..."
    ],
    answer: 1,
    explanation: "En profesjonell e-post starter med 'Hei [navn],' og avsluttes med 'Med vennlig hilsen [ditt navn]'. Tonen er vennlig men respektfull."
  },
  {
    id: "k-m-2", category: "kommunikasjon", difficulty: "medium",
    question: "Hva betyr 'kollegaer' og 'samarbeid' i norsk arbeidsliv?",
    options: [
      "Kollegaer er konkurrenter; samarbeid er å konkurrere",
      "Kollegaer er medarbeidere; samarbeid er å jobbe godt sammen",
      "Kollegaer er sjefer; samarbeid er å følge ordre",
      "Kollegaer er kunder; samarbeid er salg"
    ],
    answer: 1,
    explanation: "Kollegaer er menneskene du jobber med. Samarbeid er en viktig verdi i norsk arbeidsliv – å hjelpe hverandre og jobbe mot felles mål."
  },
  {
    id: "k-m-3", category: "kommunikasjon", difficulty: "medium",
    question: "Hva gjør du i et jobbintervju for å vise at du er interessert?",
    options: [
      "Sitter stille og svarer bare på spørsmål",
      "Stiller spørsmål om jobben og viser engasjement",
      "Forteller kun om lønn og ferie",
      "Sjekker telefonen underveis"
    ],
    answer: 1,
    explanation: "I et jobbintervju bør du stille spørsmål om arbeidsoppgaver, teamet og bedriften. Dette viser at du er interessert og forberedt."
  },
  {
    id: "k-m-4", category: "kommunikasjon", difficulty: "medium",
    question: "Hva er 'medarbeidersamtale'?",
    options: [
      "En uformell prat ved kaffemaskinen",
      "Et planlagt møte mellom deg og sjefen for å diskutere arbeidssituasjonen din",
      "Et møte med alle ansatte",
      "En lønnsforhandling"
    ],
    answer: 1,
    explanation: "Medarbeidersamtalen er et regelmessig møte mellom deg og lederen din. Dere snakker om trivsel, mål, utvikling og eventuelle utfordringer."
  },
  {
    id: "k-m-5", category: "kommunikasjon", difficulty: "medium",
    question: "Hva betyr 'å gi beskjed' i arbeidslivet?",
    options: [
      "Å sende en klage",
      "Å informere noen om noe viktig, for eksempel at du er syk",
      "Å si fra seg ansvaret",
      "Å be om høyere lønn"
    ],
    answer: 1,
    explanation: "Å gi beskjed betyr å informere. For eksempel: 'Jeg gir beskjed til sjefen om at jeg er syk i dag.'"
  },
  {
    id: "k-m-6", category: "kommunikasjon", difficulty: "medium",
    question: "Hva er 'saksliste' i et møte?",
    options: [
      "En liste over kollegaer",
      "En oversikt over temaene som skal diskuteres i møtet",
      "En liste over arbeidsoppgaver",
      "Et dokument med regler"
    ],
    answer: 1,
    explanation: "Sakslisten (eller agendaen) viser hvilke temaer som skal tas opp i møtet. Det er lurt å lese sakslisten før møtet."
  },
  {
    id: "k-m-7", category: "kommunikasjon", difficulty: "medium",
    question: "Hva er beste praksis ved bruk av mobiltelefon på jobb?",
    options: [
      "Bruk telefonen fritt hele dagen",
      "Sjekk arbeidsgiverens regler og bruk telefonen privat i pauser",
      "Aldri bruk telefon på jobb",
      "Bruk telefon kun til arbeid"
    ],
    answer: 1,
    explanation: "Mange arbeidsplasser har regler for mobilbruk. Det er vanlig å sjekke privat telefon i pauser. Følg arbeidsplassens retningslinjer."
  },
  {
    id: "k-m-8", category: "kommunikasjon", difficulty: "medium",
    question: "Hva betyr 'å si fra om' et problem på arbeidsplassen?",
    options: [
      "Å ignorere problemet",
      "Å rapportere eller fortelle om problemet til rett person",
      "Å løse problemet selv uten å si noe",
      "Å gå hjem"
    ],
    answer: 1,
    explanation: "Å si fra om et problem betyr å rapportere det til sjefen, verneombudet eller kollegaer. Det er viktig for et trygt og godt arbeidsmiljø."
  },

  // HARD
  {
    id: "k-h-1", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er forskjellen mellom 'formell' og 'uformell' kommunikasjon på arbeidsplassen?",
    options: [
      "Formell er på norsk, uformell er på andre språk",
      "Formell er offisiell kommunikasjon (e-post, rapporter), uformell er hverdagsprat (kaffeprat, SMS til kolleger)",
      "Formell er skriftlig, uformell er alltid muntlig",
      "Det er ingen forskjell"
    ],
    answer: 1,
    explanation: "Formell kommunikasjon inkluderer e-poster, møtereferater og rapporter. Uformell kommunikasjon er daglig prat med kolleger. Begge er viktige på norske arbeidsplasser."
  },
  {
    id: "k-h-2", category: "kommunikasjon", difficulty: "hard",
    question: "Hva menes med 'å varsle' i arbeidslivet?",
    options: [
      "Å si opp jobben sin",
      "Å melde fra om kritikkverdige forhold på arbeidsplassen, som ulovligheter eller farlige situasjoner",
      "Å varsle om endringer i vaktplanen",
      "Å ringe sjefen om du er syk"
    ],
    answer: 1,
    explanation: "Varsling er å si ifra om alvorlige problemer på arbeidsplassen, som fare for liv og helse, diskriminering eller lovbrudd. Arbeidsmiljøloven beskytter varslere."
  },
  {
    id: "k-h-3", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er 'konflikthåndtering' i arbeidslivet?",
    options: [
      "Å unngå alle konflikter ved å si ingenting",
      "Å håndtere uenigheter på en konstruktiv og respektfull måte",
      "Å alltid gi den andre parten rett",
      "Å sende en klage til Arbeidstilsynet umiddelbart"
    ],
    answer: 1,
    explanation: "God konflikthåndtering handler om å kommunisere åpent, lytte til begge parter og finne løsninger som alle kan leve med. På norske arbeidsplasser verdsettes dette høyt."
  },
  {
    id: "k-h-4", category: "kommunikasjon", difficulty: "hard",
    question: "Hva inneholder et godt CV (curriculum vitae)?",
    options: [
      "Kun bilde og navn",
      "Arbeidserfaring, utdanning, ferdigheter og kontaktinformasjon",
      "Kun lønnsønsker og hobbyer",
      "En personlig fortelling om livet ditt"
    ],
    answer: 1,
    explanation: "Et godt CV inneholder kontaktinformasjon, arbeidserfaring, utdanning, relevante ferdigheter og gjerne referanser. Hold det ryddig og relevant for stillingen."
  },
  {
    id: "k-h-5", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er hensikten med en 'søknadstekst' (motivasjonsbrev)?",
    options: [
      "Å liste opp alle jobber du har hatt",
      "Å forklare hvorfor du søker jobben og hva du kan bidra med",
      "Å forhandle om lønn",
      "Å kritisere den forrige arbeidsgiveren"
    ],
    answer: 1,
    explanation: "I søknadsteksten skriver du om din motivasjon for stillingen, dine relevante erfaringer og hva du kan bidra med. Du bør tilpasse teksten til hver enkelt jobb."
  },
  {
    id: "k-h-6", category: "kommunikasjon", difficulty: "hard",
    question: "Hva betyr 'taushetserklæring' i arbeidslivet?",
    options: [
      "En avtale om å jobbe stille",
      "En avtale om ikke å dele konfidensiell informasjon fra arbeidsplassen",
      "En rapport om sykefravær",
      "En kontrakt om deltidsarbeid"
    ],
    answer: 1,
    explanation: "En taushetserklæring (konfidensialitetsavtale) betyr at du ikke skal dele sensitiv informasjon om bedriften eller kundene med andre. Dette er vanlig i mange bransjer."
  },

  /* ───────────────────── HMS ───────────────────── */
  // EASY
  {
    id: "h-e-1", category: "hms", difficulty: "easy",
    question: "Hva betyr forkortelsen HMS?",
    options: [
      "Helse, Miljø og Sikkerhet",
      "Hjem, Mat og Skole",
      "Hjelp, Medisin og System",
      "Høyde, Maskin og Sjekk"
    ],
    answer: 0,
    explanation: "HMS står for Helse, Miljø og Sikkerhet. Det handler om å skape trygge og gode arbeidsforhold for alle ansatte."
  },
  {
    id: "h-e-2", category: "hms", difficulty: "easy",
    question: "Hva er et 'verneutstyr'?",
    options: [
      "Arbeidsklær du velger selv",
      "Utstyr som beskytter deg mot skader på jobben",
      "Verktøy for å reparere maskiner",
      "Klær du vasker hjemme"
    ],
    answer: 1,
    explanation: "Verneutstyr er utstyr som beskytter deg på jobb, for eksempel hjelm, vernsko, hansker, vernebriller og hørselsvern."
  },
  {
    id: "h-e-3", category: "hms", difficulty: "easy",
    question: "Hva gjør du hvis det oppstår brann på arbeidsplassen?",
    options: [
      "Prøver å slukke brannen alene",
      "Aktiverer brannalarm, forlater bygningen og ringer 110",
      "Lukker dørene og venter",
      "Henter alle eiendelene dine"
    ],
    answer: 1,
    explanation: "Ved brann: Aktiver alarmen, evakuer bygningen ordentlig og ring brannvesenet på 110. Ikke risiker livet ditt for materielle ting."
  },
  {
    id: "h-e-4", category: "hms", difficulty: "easy",
    question: "Hva er nødnummeret til politiet i Norge?",
    options: ["112", "110", "113", "911"],
    answer: 0,
    explanation: "I Norge er 112 nødnummeret til politiet. 110 er brann og 113 er ambulanse. Husk disse numrene!"
  },
  {
    id: "h-e-5", category: "hms", difficulty: "easy",
    question: "Hva er 'verneombud' på arbeidsplassen?",
    options: [
      "En vakt som passer på bygningen",
      "En ansatt som representerer de ansatte i HMS-spørsmål",
      "En lege på arbeidsplassen",
      "En sjef for HMS-avdelingen"
    ],
    answer: 1,
    explanation: "Verneombudet er en ansatt valgt av kollegaene for å representere dem i HMS-saker. Du kan kontakte verneombudet hvis du opplever problemer med sikkerhet eller arbeidsmiljø."
  },
  {
    id: "h-e-6", category: "hms", difficulty: "easy",
    question: "Hva betyr det å 'rapportere en skade' på jobben?",
    options: [
      "Å reparere skaden selv",
      "Å fortelle sjefen eller verneombudet om en ulykke eller skade",
      "Å gå til legen uten å si noe",
      "Å ignorere skaden"
    ],
    answer: 1,
    explanation: "Alle skader og nestenulykker skal rapporteres til arbeidsgiveren. Dette hjelper bedriften å forebygge fremtidige skader."
  },
  {
    id: "h-e-7", category: "hms", difficulty: "easy",
    question: "Hva er riktig håndvask-rutine for å forebygge smitte?",
    options: [
      "Skylle hendene raskt under kaldt vann",
      "Vaske hendene med såpe og vann i minst 20 sekunder",
      "Bruke håndsprit etter toalettbesøk",
      "Tørke hendene i klær"
    ],
    answer: 1,
    explanation: "Korrekt håndvask med såpe og vann i minst 20 sekunder er den beste måten å forebygge smitte på arbeidsplassen."
  },
  {
    id: "h-e-8", category: "hms", difficulty: "easy",
    question: "Hva gjør du hvis du ser en farlig situasjon på jobben?",
    options: [
      "Ignorerer det hvis det ikke angår deg",
      "Varsler sjefen eller verneombudet umiddelbart",
      "Fikser det selv uten å si noe",
      "Venter til neste møte"
    ],
    answer: 1,
    explanation: "Farlige situasjoner skal alltid rapporteres umiddelbart. Det er alles ansvar å bidra til et trygt arbeidsmiljø."
  },

  // MEDIUM
  {
    id: "h-m-1", category: "hms", difficulty: "medium",
    question: "Hva er 'risikovurdering' i HMS-sammenheng?",
    options: [
      "En vurdering av lønnen på arbeidsplassen",
      "En kartlegging av farer og tiltak for å redusere risiko for skade",
      "En sjekk av om arbeidstakerne er tilfredse",
      "En rapport til skatteetaten"
    ],
    answer: 1,
    explanation: "Risikovurdering handler om å identifisere potensielle farer på arbeidsplassen og sette inn tiltak for å hindre ulykker og skader."
  },
  {
    id: "h-m-2", category: "hms", difficulty: "medium",
    question: "Hva er 'ergonomi' på arbeidsplassen?",
    options: [
      "En type arbeidskontrakt",
      "Tilpasning av arbeidsplass og -metoder til kroppen for å unngå belastningsskader",
      "En type arbeidstidsordning",
      "Regler for bruk av kjemikalier"
    ],
    answer: 1,
    explanation: "Ergonomi handler om å tilpasse arbeidsplassen, stolene, skjermene og arbeidsbevegelsene til menneskekroppen for å forebygge belastningsskader."
  },
  {
    id: "h-m-3", category: "hms", difficulty: "medium",
    question: "Hva gjøres i en 'brannøvelse'?",
    options: [
      "Man lærer å slukke brann",
      "Man øver på evakuering av bygningen på en sikker måte",
      "Man sjekker brannslokkingsapparater",
      "Man installerer brannvarslere"
    ],
    answer: 1,
    explanation: "I en brannøvelse øver alle ansatte på å evakuere bygningen på en trygg og effektiv måte. Det er viktig å kjenne til rømningsveier."
  },
  {
    id: "h-m-4", category: "hms", difficulty: "medium",
    question: "Hva betyr 'yrkessykdom'?",
    options: [
      "En sykdom du får hjemme",
      "En sykdom som oppstår på grunn av arbeidet ditt, for eksempel støyskade eller asbest-relatert sykdom",
      "En sykdom som kun rammer en bestemt yrkesgruppe",
      "En vanlig forkjølelse du får på jobb"
    ],
    answer: 1,
    explanation: "En yrkessykdom er en sykdom forårsaket av arbeidsforhold, for eksempel støyindusert hørselstap, lungesykdom fra kjemikalier eller belastningsskader."
  },
  {
    id: "h-m-5", category: "hms", difficulty: "medium",
    question: "Hva er formålet med 'internkontroll' i en bedrift?",
    options: [
      "Å kontrollere de ansattes telefoner",
      "Å sikre at bedriften følger HMS-lovgivningen gjennom systematisk overvåking",
      "Å sjekke om ansatte stjeler fra bedriften",
      "Å kontrollere regnskapet"
    ],
    answer: 1,
    explanation: "Internkontroll er et system som sikrer at bedriften jobber systematisk med HMS og etterlever lovkrav. Det inkluderer prosedyrer, opplæring og dokumentasjon."
  },
  {
    id: "h-m-6", category: "hms", difficulty: "medium",
    question: "Hva er 'personlig verneutstyr' (PVU)?",
    options: [
      "Arbeidsklær som arbeidsgiver betaler",
      "Utstyr du bruker for å beskytte deg mot spesifikke farer på jobben",
      "Utstyr for å beskytte maskinene",
      "Sikkerhetssystemer i bygningen"
    ],
    answer: 1,
    explanation: "Personlig verneutstyr (PVU) er det siste forsvaret mot arbeidsrelaterte farer. Det inkluderer hjelm, vernebriller, hansker, hørselsvern og vernefottøy."
  },

  // HARD
  {
    id: "h-h-1", category: "hms", difficulty: "hard",
    question: "Hva er 'psykososialt arbeidsmiljø'?",
    options: [
      "Den fysiske utformingen av arbeidsplassen",
      "De sosiale og psykologiske forholdene på jobben, som trivsel, relasjoner og stressnivå",
      "Regler for sosiale medier på jobb",
      "Arbeidsplassens beliggenhet og transportmuligheter"
    ],
    answer: 1,
    explanation: "Det psykososiale arbeidsmiljøet handler om trivsel, mellommenneskelige relasjoner, stress, mobbing og den psykologiske sikkerheten på arbeidsplassen."
  },
  {
    id: "h-h-2", category: "hms", difficulty: "hard",
    question: "Hva er 'mobbing' i arbeidslivet, og hva kan du gjøre hvis du opplever det?",
    options: [
      "Mobbing er bare et barn-problem. Voksne må tåle det.",
      "Gjentatt negativ behandling, og du kan ta det opp med leder, verneombud eller Arbeidstilsynet",
      "Mobbing er kun fysisk vold",
      "Du kan si opp jobben – det er eneste løsningen"
    ],
    answer: 1,
    explanation: "Mobbing på arbeidsplassen er gjentatt negativ behandling. Du kan kontakte lederen din, verneombudet, bedriftshelsetjenesten eller Arbeidstilsynet for hjelp."
  },
  {
    id: "h-h-3", category: "hms", difficulty: "hard",
    question: "Hva er arbeidsgivers ansvar etter arbeidsmiljøloven for HMS?",
    options: [
      "Arbeidsgiver har intet ansvar – det er den ansattes eget ansvar",
      "Arbeidsgiver skal sikre et fullt forsvarlig arbeidsmiljø og ta ansvar for HMS-arbeidet",
      "Arbeidsgiver og ansatt deler likt ansvar",
      "Myndighetene er ansvarlige for HMS på private arbeidsplasser"
    ],
    answer: 1,
    explanation: "Arbeidsgiver har det overordnede ansvaret for HMS på arbeidsplassen. Dette innebærer å kartlegge risikoer, sette inn tiltak og sørge for opplæring."
  },
  {
    id: "h-h-4", category: "hms", difficulty: "hard",
    question: "Hva er 'arbeidsrelatert sykefravær' og hva bør arbeidsgiver gjøre?",
    options: [
      "Sykdom uten sammenheng med jobb – arbeidsgiver trenger ikke gjøre noe",
      "Sykdom som kan knyttes til arbeidsforhold – arbeidsgiver bør iverksette tiltak for å bedre arbeidsforholdene",
      "Alle typer fravær er arbeidsrelatert",
      "Det er kun relevant for industribedrifter"
    ],
    answer: 1,
    explanation: "Arbeidsrelatert sykefravær skyldes arbeidsforhold. Arbeidsgiver plikter å gjennomføre tiltak for å redusere dette, for eksempel tilrettelegging av arbeidet."
  },

  /* ───────────────────── LØNN & ØKONOMI ───────────────────── */
  // EASY
  {
    id: "l-e-1", category: "lonn", difficulty: "easy",
    question: "Hva er 'lønn'?",
    options: [
      "Penger du låner fra banken",
      "Penger du får betalt for arbeidet ditt",
      "En gave fra arbeidsgiveren",
      "Skatt du betaler til staten"
    ],
    answer: 1,
    explanation: "Lønn er pengene du mottar fra arbeidsgiveren som betaling for arbeidet du utfører."
  },
  {
    id: "l-e-2", category: "lonn", difficulty: "easy",
    question: "Hva er forskjellen på bruttlønn og nettolønn?",
    options: [
      "Det er ingen forskjell",
      "Bruttolønn er lønn før skatt; nettolønn er det du faktisk får utbetalt etter skatt",
      "Nettolønn er alltid høyere enn bruttolønn",
      "Bruttolønn er for deltidsarbeid, nettolønn er for fulltid"
    ],
    answer: 1,
    explanation: "Bruttolønn er det totale beløpet arbeidsgiveren betaler. Nettolønn er det du får inn på kontoen etter at skatt og andre trekk er trukket fra."
  },
  {
    id: "l-e-3", category: "lonn", difficulty: "easy",
    question: "Hva er en 'lønnssliipp'?",
    options: [
      "En kvittering for kjøp i butikk",
      "Et dokument som viser hva du har tjent og hvilke trekk som er gjort",
      "En søknad om høyere lønn",
      "En kontrakt med arbeidsgiveren"
    ],
    answer: 1,
    explanation: "Lønnslippen (eller lønnsspesifikasjonen) er et dokument du mottar med lønnen. Den viser bruttolønn, skatt, andre trekk og nettoutbetaling."
  },
  {
    id: "l-e-4", category: "lonn", difficulty: "easy",
    question: "Hva er 'skatt' i Norge?",
    options: [
      "En avgift du betaler når du handler i utlandet",
      "Penger du betaler til staten basert på inntekten din",
      "En bot for å komme for sent",
      "En månedlig avgift til fagforeningen"
    ],
    answer: 1,
    explanation: "Skatt er penger du betaler til staten. Skatten finansierer offentlige tjenester som helse, skole og veier. I Norge trekkes skatten automatisk fra lønnen."
  },
  {
    id: "l-e-5", category: "lonn", difficulty: "easy",
    question: "Hva er 'skattekort'?",
    options: [
      "Et betalingskort fra NAV",
      "Et dokument som viser hvor mye skatt du skal betale, sendt til arbeidsgiver",
      "En kvittering for betalt skatt",
      "Et kort fra banken"
    ],
    answer: 1,
    explanation: "Skattekortet viser skatteprosenten din. Arbeidsgiveren bruker det til å beregne hvor mye skatt som skal trekkes fra lønnen din. Du kan bestille skattekortet hos Skatteetaten."
  },
  {
    id: "l-e-6", category: "lonn", difficulty: "easy",
    question: "Hva er 'feriepenger'?",
    options: [
      "Ekstra lønn du får som bonus",
      "Penger som er spart opp fra forrige år og utbetales i ferien",
      "Penger du sparer selv til ferie",
      "Et tilskudd fra NAV"
    ],
    answer: 1,
    explanation: "Feriepenger er 10,2 % (eller mer med tariffavtale) av fjorårets lønn. De utbetales vanligvis i juni/mai før sommerferien."
  },
  {
    id: "l-e-7", category: "lonn", difficulty: "easy",
    question: "Hva er en 'fagforening'?",
    options: [
      "En butikk for arbeidsklær",
      "En organisasjon som representerer arbeidstakere og forhandler lønn og rettigheter",
      "En stat-etat for skatt",
      "En organisasjon for arbeidsgivere"
    ],
    answer: 1,
    explanation: "En fagforening er en organisasjon som jobber for arbeidstakernes interesser. De forhandler lønn og arbeidsvilkår med arbeidsgivere. LO er Norges største fagforeningsforbund."
  },
  {
    id: "l-e-8", category: "lonn", difficulty: "easy",
    question: "Når betales lønn vanligvis i Norge?",
    options: [
      "Hver dag",
      "En gang per uke",
      "En eller to ganger per måned",
      "Hver kvartal"
    ],
    answer: 2,
    explanation: "I Norge er det vanlig å motta lønn en gang i måneden, ofte ved månedsslutt. Noen arbeidsplasser betaler to ganger i måneden."
  },

  // MEDIUM
  {
    id: "l-m-1", category: "lonn", difficulty: "medium",
    question: "Hva er 'tillegg' i lønnssammenheng?",
    options: [
      "En ekstra betaling på toppen av grunnlønnen, for eksempel for helgearbeid, nattarbeid eller kvelder",
      "En bot for dårlig arbeid",
      "En måte å beregne skatten på",
      "En type kontrakt"
    ],
    answer: 0,
    explanation: "Tillegg er ekstra betaling utover grunnlønnen. Eksempler: kvelds- og nattillegg, helgetillegg, og ubekvemstillegg for arbeid utenom normal arbeidstid."
  },
  {
    id: "l-m-2", category: "lonn", difficulty: "medium",
    question: "Hva er 'minstelønnen' i Norge?",
    options: [
      "Det er ingen minstelønn i Norge",
      "Det finnes minstelønn i noen bransjer gjennom tariffavtaler og allmenngjøring",
      "Alle har den samme minstelønnen: 200 kr per time",
      "Minstelønnen bestemmes av NAV"
    ],
    answer: 1,
    explanation: "Norge har ikke en generell lovfestet minstelønn, men i mange bransjer er det fastsatt minstelønn gjennom tariffavtaler som er allmenngjort. For eksempel i bygg og renhold."
  },
  {
    id: "l-m-3", category: "lonn", difficulty: "medium",
    question: "Hva er 'skattetrekk'?",
    options: [
      "En frivillig betaling til en veldedig organisasjon",
      "Den skatten som automatisk trekkes fra lønnen din av arbeidsgiveren",
      "En bot fra Skatteetaten",
      "En type tillegg til lønnen"
    ],
    answer: 1,
    explanation: "Skattetrekket er skatten som arbeidsgiveren automatisk trekker fra bruttolønnen din og betaler til staten på dine vegne."
  },
  {
    id: "l-m-4", category: "lonn", difficulty: "medium",
    question: "Hva er 'pensjon' i norsk arbeidsliv?",
    options: [
      "Penger du sparer til ferie",
      "Penger du mottar når du slutter å jobbe på grunn av alder",
      "En type sykeforsikring",
      "En månedlig gave fra staten"
    ],
    answer: 1,
    explanation: "Pensjon er en inntekt du mottar etter at du slutter å jobbe. I Norge er det obligatorisk tjenestepensjon (OTP) i de fleste bedrifter, i tillegg til alderspensjon fra Nav."
  },
  {
    id: "l-m-5", category: "lonn", difficulty: "medium",
    question: "Hva er 'trekkfri godtgjørelse'?",
    options: [
      "Lønn uten skattetrekk",
      "Utlegg du får tilbake, for eksempel for reise eller mat i jobbsammenheng",
      "Ekstra lønn for gode resultater",
      "Penger du sparer til pensjon"
    ],
    answer: 1,
    explanation: "Trekkfri godtgjørelse er penger du får for å dekke utgifter i jobbsammenheng (reise, mat, overnatting). Disse er ikke lønn og beskattes normalt ikke."
  },
  {
    id: "l-m-6", category: "lonn", difficulty: "medium",
    question: "Hva betyr 'lønnsforhandlinger'?",
    options: [
      "En diskusjon om arbeidstiden",
      "En prosess der arbeidstaker og arbeidsgiver diskuterer og ble enige om lønn",
      "En krangel om arbeidsoppgaver",
      "En søknad om permisjon"
    ],
    answer: 1,
    explanation: "Lønnsforhandlinger er samtaler mellom deg (eller fagforeningen din) og arbeidsgiveren om lønnsnivå. Det er vanlig å ha lønnssamtale hvert år."
  },

  // HARD
  {
    id: "l-h-1", category: "lonn", difficulty: "hard",
    question: "Hva er 'skatteklasse' og hvem er i skatteklasse 2?",
    options: [
      "Alle er i samme skatteklasse",
      "Det er ulike skatteklasser. Skatteklasse 2 gis til enslige forsørgere og gir høyere personfradrag",
      "Skatteklasse 2 er for utenlandske arbeidstakere",
      "Skatteklasse bestemmes av inntektsnivå"
    ],
    answer: 1,
    explanation: "Skatteklasse 2 gir en ekstra skattefordel og er aktuell for enslige forsørgere. De fleste er i skatteklasse 1. Skatteklassen påvirker skatteberegningen."
  },
  {
    id: "l-h-2", category: "lonn", difficulty: "hard",
    question: "Hva er 'obligatorisk tjenestepensjon' (OTP)?",
    options: [
      "En frivillig pensjonsordning du velger selv",
      "En lovpålagt pensjonsordning der arbeidsgiver sparer minimum 2 % av lønnen din til pensjon",
      "En statlig støtteordning for fattige",
      "En ordning kun for offentlig ansatte"
    ],
    answer: 1,
    explanation: "OTP er obligatorisk for de fleste bedrifter i Norge. Arbeidsgiveren sparer minimum 2 % av lønnen din (over 1 G) til din pensjonskonto."
  },
  {
    id: "l-h-3", category: "lonn", difficulty: "hard",
    question: "Hva betyr 'G' (grunnbeløpet i folketrygden)?",
    options: [
      "Et bokstav i det norske alfabetet",
      "Et grunnbeløp fra Nav som brukes til å beregne ulike ytelser som sykepenger og pensjon",
      "En rating-system for arbeidstakere",
      "Et mål på arbeidstakers produktivitet"
    ],
    answer: 1,
    explanation: "G (Grunnbeløpet) er et beløp fastsatt av Stortinget hvert år, og brukes til å beregne ytelser fra Nav som dagpenger, uføretrygd og pensjon. Per 2024 er 1 G ≈ 124 028 kr."
  },
  {
    id: "l-h-4", category: "lonn", difficulty: "hard",
    question: "Hva er 'skattemelding' (tidligere selvangivelse)?",
    options: [
      "En søknad om skattenedsettelse",
      "Et dokument du sender til Skatteetaten hvert år som viser inntekter, fradrag og beregnet skatt",
      "En kvittering for betalt skatt",
      "Et dokument fra arbeidsgiveren om lønnen din"
    ],
    answer: 1,
    explanation: "Skattemeldingen er en årlig rapport til Skatteetaten. Den er vanligvis forhåndsutfylt. Du bør sjekke den og korrigere eventuelle feil, og legge til fradrag du har krav på."
  },

  /* ───────────────────── ARBEIDSKULTUR ───────────────────── */
  // EASY
  {
    id: "ku-e-1", category: "kultur", difficulty: "easy",
    question: "Hva er typisk norsk arbeidskultur?",
    options: [
      "Hierarkisk og formell – alltid tiltale sjefen med tittel",
      "Flat struktur, uformell tone, likestilling og direkte kommunikasjon",
      "Alle spiser alene og prater ikke med kolleger",
      "Sjefen bestemmer alt og ansatte sier aldri sin mening"
    ],
    answer: 1,
    explanation: "Norsk arbeidsliv kjennetegnes av flat hierarki, uformell tone (du-formen), god balanse mellom arbeid og fritid, og direkte kommunikasjon."
  },
  {
    id: "ku-e-2", category: "kultur", difficulty: "easy",
    question: "Hva er 'lunsjtid' på en typisk norsk arbeidsplass?",
    options: [
      "Bare 10 minutter",
      "Vanligvis 30 minutter, og mange spiser medbrakt mat",
      "1,5 time",
      "Det finnes ingen lunsjtid i Norge"
    ],
    answer: 1,
    explanation: "De fleste norske arbeidsplasser har 30 minutters lunsjpause. Det er veldig vanlig å ta med matpakke (brødmat) hjemmefra."
  },
  {
    id: "ku-e-3", category: "kultur", difficulty: "easy",
    question: "Hva er 'friluftsliv' og hva betyr det i jobbsammenheng?",
    options: [
      "En type arbeidskontrakt",
      "En norsk tradisjon med å være ute i naturen, som arbeidskulturen også verdsetter",
      "En type firmabil",
      "En HMS-prosedyre"
    ],
    answer: 1,
    explanation: "Friluftsliv er en viktig del av norsk kultur. Mange arbeidsplasser arrangerer aktiviteter utendørs, og balansen mellom jobb og fritid/natur verdsettes høyt i Norge."
  },
  {
    id: "ku-e-4", category: "kultur", difficulty: "easy",
    question: "Hva betyr 'du-formen' i norsk arbeidsliv?",
    options: [
      "At man alltid bruker formelt språk",
      "At man tiltaler alle med 'du', selv sjefer og direktører",
      "At man bruker 'De' som høflig form",
      "At man bare bruker etternavn"
    ],
    answer: 1,
    explanation: "I Norge bruker man 'du' til alle, uavhengig av tittel eller rang. Det er uvanlig å bruke 'De' (formell tittelform) i norsk arbeidsliv."
  },
  {
    id: "ku-e-5", category: "kultur", difficulty: "easy",
    question: "Hva er 'work-life balance' (balansen mellom jobb og privatliv)?",
    options: [
      "Et konsept som ikke er relevant i Norge",
      "Å ha tid til både jobb og privatliv – noe som verdsettes høyt i Norge",
      "Å jobbe så mye som mulig",
      "Å aldri jobbe overtid"
    ],
    answer: 1,
    explanation: "Work-life balance er svært viktig i norsk arbeidsliv. Norge er kjent for god balanse mellom jobb og privatliv med begrenset overtid og gode permisjonsordninger."
  },
  {
    id: "ku-e-6", category: "kultur", difficulty: "easy",
    question: "Hva er typisk norsk lunchmat (matpakke)?",
    options: [
      "Varm middag",
      "Brødskiver med pålegg, gjerne pakket hjemmefra",
      "Pizza",
      "Sushi"
    ],
    answer: 1,
    explanation: "Matpakken er en norsk tradisjon. De fleste tar med brødskiver med pålegg hjemmefra. Det er vanlig å spise matpakke i kantinen eller pauserommet."
  },
  {
    id: "ku-e-7", category: "kultur", difficulty: "easy",
    question: "Hva er 'prikketiden' i norsk arbeidsliv?",
    options: [
      "Tidspunktet du slutter å jobbe",
      "Den eksakte starttiden du skal være på jobb – punktlighet er viktig i Norge",
      "En pause midt på dagen",
      "Tidspunktet for lønnsutbetaling"
    ],
    answer: 1,
    explanation: "Punktlighet er svært viktig i norsk arbeidsliv. Du forventes å møte opp til avtalt tid. Å komme for sent uten å varsle anses som uhøflig og uprofesjonelt."
  },
  {
    id: "ku-e-8", category: "kultur", difficulty: "easy",
    question: "Hva betyr 'å ta initiativ' på jobben?",
    options: [
      "Å vente på at sjefen ber deg gjøre noe",
      "Å selv foreslå og handle proaktivt uten å vente på instrukser",
      "Å starte en konflikt",
      "Å be om høyere lønn"
    ],
    answer: 1,
    explanation: "Å ta initiativ betyr å handle selvstendig, foreslå forbedringer og vise ansvar uten å vente på at sjefen ber deg om det. Dette verdsettes i norsk arbeidsliv."
  },

  // MEDIUM
  {
    id: "ku-m-1", category: "kultur", difficulty: "medium",
    question: "Hva er 'janteloven' og har den relevans i norsk arbeidsliv?",
    options: [
      "En norsk lov som regulerer arbeidstiden",
      "En kulturell norm om at man ikke skal tro man er bedre enn andre – den påvirker likhetstankegangen på norske arbeidsplasser",
      "En skattelov",
      "En regel om alkohol på arbeidsplassen"
    ],
    answer: 1,
    explanation: "Janteloven er et uformelt kulturelt konsept om at man ikke skal heve seg over andre. Det bidrar til likhetstankegangen og teamorientering i norsk arbeidsliv, men kan også begrense individuell fremheving."
  },
  {
    id: "ku-m-2", category: "kultur", difficulty: "medium",
    question: "Hva er 'sosiale arrangementer' på arbeidsplassen i Norge?",
    options: [
      "Obligatoriske fester du må delta på",
      "Frivillige aktiviteter som julebord, teambuilding og bedriftsturer",
      "Kun for ledere og sjefer",
      "En del av arbeidstiden"
    ],
    answer: 1,
    explanation: "Sosiale arrangementer som julebord og teambuilding er vanlige på norske arbeidsplasser. De er sjelden obligatoriske, men deltakelse er positivt for fellesskapet."
  },
  {
    id: "ku-m-3", category: "kultur", difficulty: "medium",
    question: "Hva er 'likestilling' i norsk arbeidsliv?",
    options: [
      "At alle tjener det samme",
      "At alle behandles likt uavhengig av kjønn, alder, etnisitet og andre egenskaper",
      "At alle jobber likt mange timer",
      "At alle må ha likt utdanning"
    ],
    answer: 1,
    explanation: "Likestilling er en kjerneverdi i norsk samfunn og arbeidsliv. Det handler om like muligheter og lik behandling uavhengig av kjønn, alder, etnisitet, religion og funksjonsevne."
  },
  {
    id: "ku-m-4", category: "kultur", difficulty: "medium",
    question: "Hva er 'tillit' i norsk arbeidskultur?",
    options: [
      "Kontroll og overvåking av ansatte",
      "En grunnleggende verdi der arbeidstakere forventes å gjøre jobben sin uten konstant tilsyn",
      "En bonus du får etter lang tjenestetid",
      "En type forsikring"
    ],
    answer: 1,
    explanation: "Tillit er en sentral verdi i norsk arbeidsliv. Arbeidsgivere stoler vanligvis på at ansatte gjør jobben sin. Dette gir mer autonomi men krever også ansvarlighet."
  },
  {
    id: "ku-m-5", category: "kultur", difficulty: "medium",
    question: "Hva er 'kompetanseutvikling' i arbeidslivet?",
    options: [
      "Å bytte jobb for å lære noe nytt",
      "Opplæring og kurs for å bli bedre i jobben og utvikle ferdigheter",
      "En type lønnsøkning",
      "En HR-prosess for å evaluere ansatte"
    ],
    answer: 1,
    explanation: "Kompetanseutvikling handler om kontinuerlig læring og utvikling av ferdigheter gjennom kurs, etterutdanning og arbeidserfaring. Norske arbeidsgivere investerer ofte i dette."
  },
  {
    id: "ku-m-6", category: "kultur", difficulty: "medium",
    question: "Hva er 'partssamarbeid' i norsk arbeidsliv?",
    options: [
      "Samarbeid mellom to bedrifter",
      "Det organiserte samarbeidet mellom arbeidstakere (fagforeninger), arbeidsgivere og staten",
      "Et partnerskap mellom kolleger",
      "Samarbeid mellom norske og utenlandske bedrifter"
    ],
    answer: 1,
    explanation: "Den norske modellen bygger på partssamarbeid mellom fagforeninger, arbeidsgiverorganisasjoner og myndighetene. Dette er grunnlaget for den norske arbeidslivsmodellen."
  },

  // HARD
  {
    id: "ku-h-1", category: "kultur", difficulty: "hard",
    question: "Hva er 'den norske modellen' i arbeidslivet?",
    options: [
      "Et system der staten eier alle bedrifter",
      "Et trepartssamarbeid mellom fagforeninger, arbeidsgiverorganisasjoner og myndighetene, som sikrer lønnsoppgjør og arbeidsfred",
      "Et system der sjefer bestemmer alt",
      "Et system der alle tjener det samme"
    ],
    answer: 1,
    explanation: "Den norske modellen er et trepartssamarbeid (fagforeninger, arbeidsgivere, stat) som danner grunnlaget for lønnsfastsettelse, arbeidsvilkår og velferdsstaten. Dette systemet bidrar til lav ulikhet og høy produktivitet."
  },
  {
    id: "ku-h-2", category: "kultur", difficulty: "hard",
    question: "Hva er 'inkluderende arbeidsliv' (IA-avtalen)?",
    options: [
      "En avtale om å ansette kun norskfødte",
      "En avtale mellom myndighetene og partene i arbeidslivet for å redusere sykefravær og holde folk i jobb",
      "En plan for å inkludere kunder i bedriftens arbeid",
      "En ordning for elever i voksenopplæringen"
    ],
    answer: 1,
    explanation: "IA-avtalen (Inkluderende Arbeidsliv) er en samarbeidsavtale mellom myndigheter og partene for å redusere sykefravær, hindre utstøting og øke sysselsettingen blant utsatte grupper."
  },
  {
    id: "ku-h-3", category: "kultur", difficulty: "hard",
    question: "Hva er 'mangfold' (diversity) i arbeidslivet?",
    options: [
      "At alle ansatte er like",
      "Inkludering av mennesker med ulik bakgrunn, kjønn, alder, etnisitet og funksjonsevne i arbeidslivet",
      "At bedriften selger mange ulike produkter",
      "En type opplæring for nye ansatte"
    ],
    answer: 1,
    explanation: "Mangfold i arbeidslivet handler om å ha medarbeidere med ulik bakgrunn. Forskning viser at mangfoldige team er mer innovative og løser problemer bedre."
  },
  {
    id: "ku-h-4", category: "kultur", difficulty: "hard",
    question: "Hva er 'ytringsfrihet' i arbeidslivet?",
    options: [
      "Retten til å si hva du vil uten konsekvenser",
      "Retten til å ytre meninger om jobbrelaterte forhold, med noen begrensninger knyttet til taushetsplikt og lojalitet til arbeidsgiver",
      "En rett kun for journalister",
      "Retten til å bruke sosiale medier på jobb"
    ],
    answer: 1,
    explanation: "Ytringsfrihet gjelder også i arbeidslivet, men har noen begrensninger. Du kan ikke røpe bedriftshemmeligheter, men du kan varsle om kritikkverdige forhold. Arbeidsgiver kan ikke sanksjonere legitim ytring."
  }
];

/* ── Hjelpefunksjoner ── */

/**
 * Hent spørsmål filtrert på kategori og vanskelighetsgrad, i tilfeldig rekkefølge.
 */
function getQuestions(category = "all", difficulty = "easy", count = 10) {
  let pool = QUESTIONS.filter(q => q.difficulty === difficulty);
  if (category !== "all") {
    pool = pool.filter(q => q.category === category);
  }
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}

const CATEGORY_LABELS = {
  rettigheter: "Rettigheter",
  kommunikasjon: "Kommunikasjon",
  hms: "HMS",
  lonn: "Lønn & økonomi",
  kultur: "Arbeidskultur",
  all: "Alle kategorier"
};

const DIFFICULTY_LABELS = {
  easy: "Lett",
  medium: "Middels",
  hard: "Vanskelig"
};
