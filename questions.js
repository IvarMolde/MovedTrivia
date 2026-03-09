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
  },

  /* ═══════════════════ NYE SPØRSMÅL ═══════════════════ */

  /* ───────────── RETTIGHETER – nye ───────────── */
  // EASY
  {
    id: "r-e-9", category: "rettigheter", difficulty: "easy",
    question: "Hva er 'prøvetid' i norsk arbeidsliv?",
    options: [
      "En periode der arbeidsgiver kan avslutte ansettelsen med kortere frist",
      "En ekstra ferieperiode i starten av ansettelsen",
      "En test du må bestå for å få fast jobb",
      "En periode uten lønn der du viser deg frem"
    ],
    answer: 0,
    explanation: "Prøvetid er en innledende periode (vanligvis 6 måneder) der arbeidsgiver og arbeidstaker kan avslutte ansettelsen med kortere oppsigelsestid (14 dager)."
  },
  {
    id: "r-e-10", category: "rettigheter", difficulty: "easy",
    question: "Hva betyr 'deltidsjobb'?",
    options: [
      "En jobb der du jobber gratis",
      "En midlertidig jobb som varer noen uker",
      "En jobb der du jobber færre timer enn en fulltidsstilling",
      "En jobb uten skriftlig kontrakt"
    ],
    answer: 2,
    explanation: "Deltidsjobb betyr at du jobber færre timer per uke enn en fulltidsstilling (100 %). Mange jobber 50 %, 60 % eller 80 % stilling."
  },
  {
    id: "r-e-11", category: "rettigheter", difficulty: "easy",
    question: "Hva er NAV?",
    options: [
      "En norsk bank for næringslivet",
      "En fagforening for offentlig ansatte",
      "Den norske arbeids- og velferdsetaten som hjelper med arbeid og sosiale ytelser",
      "Et statlig skattevesen"
    ],
    answer: 2,
    explanation: "NAV (Arbeids- og velferdsetaten) er den statlige etaten som administrerer dagpenger, sykepenger, uføretrygd, arbeidsmarkedstiltak og andre velferdsytelser."
  },
  {
    id: "r-e-12", category: "rettigheter", difficulty: "easy",
    question: "Hva er 'dagpenger'?",
    options: [
      "Penger du betaler for å jobbe på dagskift",
      "En ekstra bonus per dag du er på jobb",
      "Penger du tjener som overtidsbetaling",
      "Støtte fra NAV når du er arbeidsledig"
    ],
    answer: 3,
    explanation: "Dagpenger er en stønad fra NAV til deg som har mistet jobben. For å ha rett til dagpenger må du ha hatt inntekt over en viss grense det siste året."
  },
  {
    id: "r-e-13", category: "rettigheter", difficulty: "easy",
    question: "Har du rett til fri på helligdager i Norge?",
    options: [
      "Nei, du jobber alle dager som vanlig",
      "Ja, de fleste helligdager er lovfestede fridager",
      "Bare jul og påske er fridager",
      "Kun offentlig ansatte har fri på helligdager"
    ],
    answer: 1,
    explanation: "De fleste helligdager er lovfestede fridager i Norge. Jobber du på helligdager, har du vanligvis krav på helligdagstillegg i lønnen."
  },
  {
    id: "r-e-14", category: "rettigheter", difficulty: "easy",
    question: "Hva er 'foreldrepermisjon'?",
    options: [
      "Permisjon du tar for å besøke foreldrene dine i utlandet",
      "Rett til fri fra jobb i forbindelse med fødsel eller adopsjon av barn",
      "En type pensjon for foreldre over 60 år",
      "Permisjon for å ta vare på syke foreldre"
    ],
    answer: 1,
    explanation: "Foreldrepermisjon er retten til å ta fri fra jobben når du får barn. I Norge har foreldre rett til inntil 49 eller 59 ukers foreldrepermisjon, avhengig av valgt stønadsnivå."
  },
  {
    id: "r-e-15", category: "rettigheter", difficulty: "easy",
    question: "Hva skjer hvis du er syk under ferien?",
    options: [
      "Du mister feriedagene og de regnes som brukt",
      "Du får ekstra lønn for sykdommen",
      "Du kan kreve de syke feriedagene tilbake som ny ferie",
      "Du må betale tilbake feriepengene for de dagene"
    ],
    answer: 2,
    explanation: "Hvis du er syk under ferien, kan du søke om å få de syke dagene tilbake som ferie. Du må dokumentere sykdommen med sykemelding fra lege."
  },
  {
    id: "r-e-16", category: "rettigheter", difficulty: "easy",
    question: "Hva er en 'stillingsbeskrivelse'?",
    options: [
      "En liste over regler og rutiner på arbeidsplassen",
      "Et dokument som beskriver dine arbeidsoppgaver og ansvar i jobben",
      "Din søknad til stillingen",
      "En kontrakt om lønn og feriepenger"
    ],
    answer: 1,
    explanation: "Stillingsbeskrivelsen er et dokument som forklarer hva jobben din innebærer: arbeidsoppgaver, ansvarsområder og forventninger til deg som ansatt."
  },

  // MEDIUM
  {
    id: "r-m-9", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'permittering'?",
    options: [
      "En permanent oppsigelse av ansatte på grunn av nedbemanning",
      "En midlertidig ordning der ansatte ikke jobber og arbeidsgiver fritas fra lønnsplikt",
      "En bonusordning for lojale ansatte",
      "En type langvarig ferie betalt av arbeidsgiver"
    ],
    answer: 1,
    explanation: "Permittering er når arbeidsgiver midlertidig fritar ansatte fra arbeidsplikten, for eksempel ved ordremangel. De ansatte beholder arbeidsforholdet og kan motta dagpenger fra NAV."
  },
  {
    id: "r-m-10", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'yrkesskade'?",
    options: [
      "En skade du får hjemme etter en lang arbeidsdag",
      "En sykdom du arver genetisk som påvirker arbeidsevnen",
      "En skade som oppstår på arbeidsstedet eller i direkte tilknytning til arbeidet",
      "En skade som kun gjelder håndverkere og industriarbeidere"
    ],
    answer: 2,
    explanation: "Yrkesskade er en skade du påføres i arbeid. Dette gir deg rettigheter til særskilt erstatning. Arbeidsgiver er pliktig til å ha yrkesskadeforsikring for alle ansatte."
  },
  {
    id: "r-m-11", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'arbeidsgiverperioden' ved sykdom?",
    options: [
      "Den totale perioden du er ansatt hos én arbeidsgiver",
      "De første 16 dagene av sykefraværet der arbeidsgiver betaler sykepenger",
      "Den perioden arbeidsgiver kan prøve deg ut i ny stilling",
      "Den perioden du har nedsatt lønn ved sykdom"
    ],
    answer: 1,
    explanation: "Arbeidsgiverperioden er de første 16 kalenderdagene av sykefraværet. I denne perioden betaler arbeidsgiver sykepengene. Etter 16 dager overtar NAV betalingen."
  },
  {
    id: "r-m-12", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'oppsigelsesvern under sykdom'?",
    options: [
      "Du kan ikke si opp jobben selv de første 12 månedene av sykdommen",
      "Arbeidsgiver kan ikke si deg opp de første 12 månedene av sykdommen",
      "Du er fullstendig beskyttet mot oppsigelse for alltid ved sykdom",
      "Verneombudet overtar ansvaret for deg når du er syk"
    ],
    answer: 1,
    explanation: "Arbeidsmiljøloven forbyr oppsigelse de første 12 månedene av sykefravær. Etter dette er man ikke lenger automatisk vernet, men oppsigelsen må fortsatt ha saklig grunn."
  },
  {
    id: "r-m-13", category: "rettigheter", difficulty: "medium",
    question: "Hva betyr 'rett til innsyn' i egne personopplysninger på jobben?",
    options: [
      "At du kan lese alle kollegers personopplysninger",
      "At du kan kreve å se hvilke opplysninger arbeidsgiver har lagret om deg",
      "At du har tilgang til alle interne bedriftsdokumenter",
      "At du kan slette alle opplysninger arbeidsgiver har om deg"
    ],
    answer: 1,
    explanation: "GDPR (personvernforordningen) gir deg rett til å se hvilke personopplysninger arbeidsgiver har om deg og kreve retting av eventuelle feil opplysninger."
  },
  {
    id: "r-m-14", category: "rettigheter", difficulty: "medium",
    question: "Hva er 'AFP' (avtalefestet pensjon)?",
    options: [
      "En statlig pensjon for alle arbeidstakere",
      "En frivillig tilleggspensjon du kjøper selv via forsikringsselskap",
      "En tidligpensjonsordning i privat sektor forhandlet frem gjennom tariffavtaler",
      "En utenlandsk pensjonsordning for innvandrere"
    ],
    answer: 2,
    explanation: "AFP er en avtalefestet pensjonsordning som gir rett til pensjon fra 62 år i privat sektor. Ordningen finansieres av arbeidsgiver og staten og er tilgjengelig via tariffavtaler."
  },

  // HARD
  {
    id: "r-h-7", category: "rettigheter", difficulty: "hard",
    question: "Hva er vilkårene for lovlig midlertidig ansettelse etter arbeidsmiljøloven?",
    options: [
      "Midlertidig ansettelse er alltid lovlig uansett begrunnelse",
      "Lovlig kun i spesifikke situasjoner: vikariat, sesongarbeid eller arbeid av særlig karakter",
      "Alle nye ansatte starter automatisk midlertidig de første 2 årene",
      "Det finnes ingen regler for midlertidig ansettelse i Norge"
    ],
    answer: 1,
    explanation: "Arbeidsmiljøloven krever at midlertidig ansettelse har en konkret begrunnelse, som vikariat, sesong eller prosjekt. Etter 3 år sammenhengende midlertidig ansettelse har du rett til fast stilling."
  },
  {
    id: "r-h-8", category: "rettigheter", difficulty: "hard",
    question: "Hva er 'varslervern' (whistleblower protection)?",
    options: [
      "Vern av arbeidsgivers forretningshemmeligheter mot lekkasje",
      "Lovbeskyttelse for ansatte som melder fra om kritikkverdige eller ulovlige forhold",
      "Et forsikringsprogram for skader på arbeidsplassen",
      "Regler for hvem som lovlig kan si opp ansatte"
    ],
    answer: 1,
    explanation: "Varslervernet beskytter ansatte som varsler om kritikkverdige forhold mot gjengjeldelse. Bedrifter med 5 eller flere ansatte har plikt til å etablere rutiner for intern varsling."
  },
  {
    id: "r-h-9", category: "rettigheter", difficulty: "hard",
    question: "Hva er rettighetene til arbeidstakere fra andre EØS-land som jobber i Norge?",
    options: [
      "De har ingen rettigheter i Norge – kun hjemlandets lover gjelder",
      "De har fulle rettigheter etter norsk lov og kan ikke behandles dårligere enn norske arbeidstakere",
      "De har kun halve norske rettigheter det første året i Norge",
      "De dekkes kun av hjemlandets trygde- og pensjonssystem"
    ],
    answer: 1,
    explanation: "Arbeidstakere fra EØS-land som jobber i Norge har de samme rettighetene som norske arbeidstakere etter norsk arbeidsmiljølov og allmenngjorte tariffavtaler."
  },
  {
    id: "r-h-10", category: "rettigheter", difficulty: "hard",
    question: "Hva er 'nedbemanning' og hvilke regler gjelder?",
    options: [
      "Nedbemanning er ulovlig i Norge og kan aldri skje",
      "Arbeidsgiver kan si opp hvem som helst uten spesiell begrunnelse",
      "Nedbemanning krever saklig begrunnelse, og ansatte har rettigheter som fortrinnsrett",
      "Nedbemanning bestemmes alltid av fagforeningene alene"
    ],
    answer: 2,
    explanation: "Ved nedbemanning skal arbeidsgiver ha saklig grunn, følge korrekt prosedyre, konsultere tillitsvalgte og vurdere alternativer. Ansatte har fortrinnsrett til nye stillinger i ett år etter fratreden."
  },
  {
    id: "r-h-11", category: "rettigheter", difficulty: "hard",
    question: "Hva er 'AAP' (arbeidsavklaringspenger)?",
    options: [
      "En bonus for arbeidsgivere som ansetter personer med nedsatt arbeidsevne",
      "En ytelse fra NAV til personer med nedsatt arbeidsevne som trenger hjelp for å komme tilbake i arbeid",
      "En skatteordning for deltidsarbeidende",
      "En form for lønnstillegg for skiftarbeidere"
    ],
    answer: 1,
    explanation: "AAP er en midlertidig ytelse fra NAV til deg som har redusert arbeidsevne med minst 50 %, og som er under medisinsk behandling eller arbeidsrettet tiltak for å komme tilbake i jobb."
  },
  {
    id: "r-h-12", category: "rettigheter", difficulty: "hard",
    question: "Hva betyr 'solidaransvar' ved innleie av arbeidskraft?",
    options: [
      "At alle ansatte i en bedrift er solidariske med hverandre ved streik",
      "At oppdragsgiver kan holdes ansvarlig for lønn dersom bemanningsbyrået ikke betaler",
      "At fagforeningen garanterer lønn til innleide arbeidstakere",
      "At staten alltid dekker manglende lønn ved konkurs"
    ],
    answer: 1,
    explanation: "Solidaransvar innebærer at dersom bemanningsbyrået ikke betaler lønn, kan arbeidstakeren kreve dette av oppdragsgiver (innleier). Dette er en viktig beskyttelse for innleide arbeidstakere."
  },

  /* ───────────── KOMMUNIKASJON – nye ───────────── */
  // EASY
  {
    id: "k-e-9", category: "kommunikasjon", difficulty: "easy",
    question: "Hvordan hilser du på en ny kollega i Norge?",
    options: [
      "Du bukker og unngår øyekontakt",
      "Du gir et kyss på kinnet slik det er vanlig i mange land",
      "Du håndhilser og sier 'Hei, jeg heter [navn]'",
      "Du venter til de henvender seg til deg"
    ],
    answer: 2,
    explanation: "I norsk arbeidsliv er det vanlig å håndhilse og presentere seg med navn. Håndtrykket skal være fast men ikke for hardt. Øyekontakt viser åpenhet og respekt."
  },
  {
    id: "k-e-10", category: "kommunikasjon", difficulty: "easy",
    question: "Hva er en 'arbeidsinstruks'?",
    options: [
      "En klage fra sjefen om dårlig utførelse av arbeidet",
      "En skriftlig beskrivelse av hvordan du skal utføre en arbeidsoppgave",
      "En type arbeidskontrakt med ekstra betingelser",
      "En rapport du skriver til sjefen etter avsluttet oppgave"
    ],
    answer: 1,
    explanation: "En arbeidsinstruks er en veiledning som forklarer steg for steg hvordan en oppgave skal utføres. Det er viktig å lese og følge instrukser nøye på arbeidsplassen."
  },
  {
    id: "k-e-11", category: "kommunikasjon", difficulty: "easy",
    question: "Hva gjør du når jobbtelefonen ringer?",
    options: [
      "Lar den ringe og svarer kun på SMS",
      "Svarer med 'Hei' og oppgir navn, for eksempel 'Hei, dette er [navn]'",
      "Svarer alltid på engelsk for å virke profesjonell",
      "Videresender alltid samtalen til sjefen"
    ],
    answer: 1,
    explanation: "Profesjonell telefonetikette i Norge innebærer å si 'Hei' og oppgi navn. På mer formelle arbeidsplasser sier man også bedriftens navn når man svarer."
  },
  {
    id: "k-e-12", category: "kommunikasjon", difficulty: "easy",
    question: "Hva betyr 'å følge opp' en oppgave?",
    options: [
      "Å løpe etter en kollega for å spørre om noe",
      "Å sjekke at oppgaven gjøres og gi statusoppdatering",
      "Å avvise oppgaven og overlate den til noen andre",
      "Å begynne på en helt ny oppgave i stedet"
    ],
    answer: 1,
    explanation: "Å følge opp betyr å sjekke status på en oppgave eller avtale og sørge for at den fullføres. Dette er en viktig del av norsk arbeidskultur – å holde det man lover."
  },
  {
    id: "k-e-13", category: "kommunikasjon", difficulty: "easy",
    question: "Hva bør du si hvis du gjør en feil på jobben?",
    options: [
      "Skjul feilen og håp at ingen legger merke til det",
      "Si 'Det er ikke min feil, det er systemets feil'",
      "Erkjenn feilen, beklage og spør om hjelp til å rette den opp",
      "Si ingenting og vent til noen spør deg"
    ],
    answer: 2,
    explanation: "I norsk arbeidskultur verdsettes ærlighet og ansvarlighet. Å erkjenne feil, beklage og aktivt rette dem bygger tillit hos kolleger og ledere."
  },
  {
    id: "k-e-14", category: "kommunikasjon", difficulty: "easy",
    question: "Hva betyr 'å delegere' på jobben?",
    options: [
      "Å nekte å utføre oppgaver du er tildelt",
      "Å gi oppgaver eller ansvar videre til en annen person",
      "Å klage på sjefen for urettferdig fordeling",
      "Å ta på seg for mye arbeid for å vise initiativ"
    ],
    answer: 1,
    explanation: "Å delegere betyr å gi en oppgave eller ansvar til en annen person. Det er en viktig ledelsesferdighet, men alle kan delegere hensiktsmessige oppgaver til kolleger."
  },
  {
    id: "k-e-15", category: "kommunikasjon", difficulty: "easy",
    question: "Hva er 'morgenmøte' eller 'parole' på arbeidsplassen?",
    options: [
      "En type politisk demonstrasjon som holder deg fra jobb",
      "Et kort møte ved starten av arbeidsdagen for å fordele oppgaver og gi informasjon",
      "En lang lunsjpause tidlig på dagen",
      "En krevende rapport som skrives hver morgen"
    ],
    answer: 1,
    explanation: "Morgenmøtet er et kort møte der teamet samles for å gjennomgå dagens oppgaver og dele viktig informasjon. Det er vanlig i mange norske bedrifter og kan gjennomføres stående."
  },
  {
    id: "k-e-16", category: "kommunikasjon", difficulty: "easy",
    question: "Hva er 'informasjonstavle' på arbeidsplassen?",
    options: [
      "Et kunstmaleri som henger i kantinen",
      "En tavle med viktig informasjon, regler og beskjeder til alle ansatte",
      "Et verktøy for å henge opp personlige klær og eiendeler",
      "En tavle kun for private beskjeder mellom kolleger"
    ],
    answer: 1,
    explanation: "Informasjonstavlen er et sted der viktig informasjon henges opp for alle ansatte. Det kan være HMS-regler, vaktplaner, møtereferater og andre beskjeder fra ledelsen."
  },

  // MEDIUM
  {
    id: "k-m-9", category: "kommunikasjon", difficulty: "medium",
    question: "Hva er et 'møtereferat'?",
    options: [
      "En formell invitasjon til et møte sendt på e-post",
      "Et skriftlig sammendrag av hva som ble diskutert og besluttet i møtet",
      "En faktura for tid brukt i møte",
      "En liste over hvem som var til stede"
    ],
    answer: 1,
    explanation: "Et møtereferat oppsummerer hva som ble diskutert, hvem som var til stede, hvilke beslutninger som ble tatt og hvem som har ansvar for oppfølgingsoppgavene."
  },
  {
    id: "k-m-10", category: "kommunikasjon", difficulty: "medium",
    question: "Hva betyr 'å kommunisere direkte' i norsk arbeidskultur?",
    options: [
      "Å snakke høyt og avbryte andre for å bli hørt",
      "Å si meningen sin tydelig og ærlig uten å pakke det inn i for mange omsvøp",
      "Å kun kommunisere skriftlig via e-post for å unngå misforståelser",
      "Å alltid snakke norsk selv om kolleger foretrekker engelsk"
    ],
    answer: 1,
    explanation: "Nordmenn er kjent for direkte kommunikasjon – å si hva man mener uten store omsvøp. Det kan virke mer direkte enn i noen andre kulturer, men anses som respektfullt og effektivt."
  },
  {
    id: "k-m-11", category: "kommunikasjon", difficulty: "medium",
    question: "Hva er 'aktiv lytting'?",
    options: [
      "Å lytte til musikk mens du jobber for å bli mer produktiv",
      "Å gi full oppmerksomhet, stille spørsmål og bekrefte at du forstår den andre",
      "Å notere ned absolutt alt som sies i et møte",
      "Å avbryte med egne meninger og erfaringer underveis"
    ],
    answer: 1,
    explanation: "Aktiv lytting innebærer å gi full oppmerksomhet, nikke bekreftende, stille oppklarende spørsmål og oppsummere det du hørte. Dette er en sentral kommunikasjonsferdighet i norsk arbeidsliv."
  },
  {
    id: "k-m-12", category: "kommunikasjon", difficulty: "medium",
    question: "Hva er 'toveiskommunikasjon' i arbeidslivet?",
    options: [
      "Å snakke to ulike språk flytende på jobben",
      "Kommunikasjon der begge parter sender og mottar informasjon og kan stille spørsmål",
      "Å kommunisere med to sjefer om samme sak",
      "Å bruke to ulike kommunikasjonskanaler som e-post og telefon"
    ],
    answer: 1,
    explanation: "Toveiskommunikasjon betyr at kommunikasjonen går begge veier – begge parter kan snakke, lytte og stille spørsmål. Det gir bedre forståelse enn enveiskommunikasjon."
  },
  {
    id: "k-m-13", category: "kommunikasjon", difficulty: "medium",
    question: "Hva er god 'e-postetikette' på norsk arbeidsplass?",
    options: [
      "Skrive i STORE BOKSTAVER for å understreke viktighet",
      "Tydelig emne, hilsen, kortfattet innhold og profesjonell avslutning med navn",
      "Svare på alle e-poster med kun ett ord for effektivitets skyld",
      "Videresende alle e-poster til hele teamet så ingen går glipp av noe"
    ],
    answer: 1,
    explanation: "God e-postetikette: tydelig emnefelttittel, høflig hilsen, kortfattet og tydelig innhold, og profesjonell avslutning. Svar innen rimelig tid, vanligvis innen én arbeidsdag."
  },
  {
    id: "k-m-14", category: "kommunikasjon", difficulty: "medium",
    question: "Hva gjør du for å forberede deg godt til et arbeidsmøte?",
    options: [
      "Du møter opp uten forberedelse og tar det som det kommer",
      "Du leser sakslisten, tenker gjennom punktene og tar med nødvendig informasjon",
      "Du sørger for å sove godt natten før møtet",
      "Du ber sjefen sende deg et sammendrag dagen etter"
    ],
    answer: 1,
    explanation: "God møteforberedelse innebærer å lese sakslisten på forhånd, tenke gjennom temaene og samle relevant informasjon. Dette gjør møtene mer effektive for alle deltakere."
  },

  // HARD
  {
    id: "k-h-7", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er 'interkulturell kommunikasjon' i et norsk arbeidsmiljø?",
    options: [
      "Kommunikasjon mellom ulike avdelinger internt i bedriften",
      "Å forstå og tilpasse kommunikasjonsstilen til kolleger med ulik kulturell bakgrunn",
      "Å bruke tolk på alle møter der det er utenlandske deltakere",
      "Å ha engelsk som eneste arbeidsspråk i bedriften"
    ],
    answer: 1,
    explanation: "Interkulturell kommunikasjon handler om å forstå kulturelle forskjeller i kommunikasjonsstil, som direkthet, hierarki og høflighetsformer, og tilpasse seg disse."
  },
  {
    id: "k-h-8", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er 'konstruktiv kritikk' og hvordan gis den i norsk arbeidsliv?",
    options: [
      "Kritikk knyttet til konstruksjons- og byggarbeid",
      "Tilbakemelding som peker på forbedringsområder med respekt, fokus på atferd og konkrete forslag",
      "En kritikk som er ekstremt direkte og gitt åpent foran hele teamet",
      "Kritikk som alltid skal gis skriftlig og aldri muntlig"
    ],
    answer: 1,
    explanation: "Konstruktiv kritikk gis gjerne privat, fokuserer på spesifikk atferd (ikke personen), inkluderer positive aspekter og konkrete forbedringsforslag. Norsk kultur verdsetter ærlighet kombinert med respekt."
  },
  {
    id: "k-h-9", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er 'profesjonell nettverksbygging' i norsk arbeidsliv?",
    options: [
      "Å installere og vedlikeholde datanett og infrastruktur på arbeidsplassen",
      "Å bygge gode relasjoner med kolleger, kunder og samarbeidspartnere over tid",
      "Å samle inn flest mulig visittkort på konferanser",
      "Å legge til flest mulig kontakter på LinkedIn uten personlig kjennskap"
    ],
    answer: 1,
    explanation: "Nettverksbygging handler om å etablere og vedlikeholde gode profesjonelle relasjoner. I norsk arbeidsliv er dette gjerne uformelt og basert på gjensidig tillit og respekt over tid."
  },
  {
    id: "k-h-10", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er 'non-verbal kommunikasjon' og hvorfor er det viktig?",
    options: [
      "Kommunikasjon som ikke inneholder verb – altså kun substantiver og adjektiver",
      "Kroppsspråk, ansiktsuttrykk, øyekontakt og toneleie som sender signaler utover selve ordene",
      "Kommunikasjon som foregår uten lyd, kun via skrift og symboler",
      "Tegn og faresymboler på arbeidsplassen"
    ],
    answer: 1,
    explanation: "Non-verbal kommunikasjon inkluderer kroppsspråk, ansiktsuttrykk, øyekontakt og stemmetone. En stor del av all kommunikasjon er non-verbal, og det er viktig å være bevisst på dette i jobbsammenheng."
  },
  {
    id: "k-h-11", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er en 'formell klage' i arbeidslivet og når brukes den?",
    options: [
      "En klage du skriver i en personlig dagbok",
      "En skriftlig og offisiell klage til rett instans når uformell dialog ikke har løst problemet",
      "En klage du sender til avisene for å skape oppmerksomhet",
      "En muntlig klage til sjefen under medarbeidersamtalen"
    ],
    answer: 1,
    explanation: "En formell klage brukes når uformelle forsøk på løsning har mislyktes. Den rettes til rett instans (HR, leder, Arbeidstilsynet), er skriftlig, konkret og saklig."
  },
  {
    id: "k-h-12", category: "kommunikasjon", difficulty: "hard",
    question: "Hva er 'taushetsplikt' og hva betyr den for kommunikasjon på jobben?",
    options: [
      "At du ikke kan snakke med kolleger i arbeidstiden",
      "En plikt til å holde visse opplysninger hemmelig, for eksempel om kunder eller bedriftens forretningshemmeligheter",
      "At du ikke skal kritisere sjefen offentlig",
      "En avtale om å jobbe stille i kontorlandskapet"
    ],
    answer: 1,
    explanation: "Taushetsplikten innebærer at du ikke kan dele konfidensiell informasjon du får tilgang til i jobben. Den gjelder typisk for personopplysninger, forretningshemmeligheter og sensitive klientopplysninger."
  },

  /* ───────────── HMS – nye ───────────── */
  // EASY
  {
    id: "h-e-9", category: "hms", difficulty: "easy",
    question: "Hva er nødnummeret til ambulansen i Norge?",
    options: ["110", "112", "113", "116117"],
    answer: 2,
    explanation: "113 er nødnummeret til ambulansen i Norge. Husk de tre viktigste: 110 (brann), 112 (politi), 113 (ambulanse)."
  },
  {
    id: "h-e-10", category: "hms", difficulty: "easy",
    question: "Hva brukes et brannslokkingsapparat til?",
    options: [
      "Å starte en kontrollert brann",
      "Å slukke en begynnende brann",
      "Å varsle andre om brann",
      "Å ringe brannvesenet automatisk"
    ],
    answer: 1,
    explanation: "Et brannslokkingsapparat brukes til å slukke en begynnende brann. Du bør vite hvor de befinner seg på arbeidsplassen og ha grunnleggende opplæring i bruk."
  },
  {
    id: "h-e-11", category: "hms", difficulty: "easy",
    question: "Hva betyr 'førstehjelp' på arbeidsplassen?",
    options: [
      "Å ringe en lege og vente på at han/hun ankommer",
      "Umiddelbar hjelp til en skadet person inntil faglig medisinsk hjelp ankommer",
      "Å gi den skadede en pause og kaffe",
      "Å fylle ut et HMS-skjema etter en ulykke"
    ],
    answer: 1,
    explanation: "Førstehjelp er den umiddelbare hjelpen en skadet person trenger inntil kvalifisert medisinsk hjelp ankommer. Grunnleggende kunnskap om førstehjelp er viktig på alle arbeidsplasser."
  },
  {
    id: "h-e-12", category: "hms", difficulty: "easy",
    question: "Hva er en 'rømningsvei'?",
    options: [
      "Den vanlige veien du bruker til og fra jobb",
      "En merket vei du bruker for å forlate bygningen raskt ved nødsituasjon",
      "En intern gang mellom avdelingene i bygget",
      "Et rør i veggen for kabling og ledninger"
    ],
    answer: 1,
    explanation: "Rømningsveier er merkede utganger brukt i nødsituasjoner som brann. Det er svært viktig å kjenne til rømningsveiene og møtestedet for evakuering på din arbeidsplass."
  },
  {
    id: "h-e-13", category: "hms", difficulty: "easy",
    question: "Hva gjør du hvis en kollega mister bevisstheten på jobben?",
    options: [
      "Lar vedkommende sove det av seg",
      "Prøver å gi mat og drikke for å hjelpe",
      "Ringer 113 og starter HLR hvis personen ikke puster",
      "Venter til de våkner av seg selv"
    ],
    answer: 2,
    explanation: "Ring 113 umiddelbart. Sjekk om personen puster. Hvis ikke, start HLR (hjerte-lunge-redning). Bruk hjertestarter (AED) hvis tilgjengelig og du har opplæring."
  },
  {
    id: "h-e-14", category: "hms", difficulty: "easy",
    question: "Hva er 'sikkerhetsdatablad' (SDB)?",
    options: [
      "Et skjema du fyller ut etter en ulykke på jobben",
      "Et dokument med informasjon om farlige kjemikalier og hvordan de håndteres trygt",
      "En liste over alt verneutstyr som finnes på arbeidsplassen",
      "Et HMS-sertifikat du viser til myndighetene"
    ],
    answer: 1,
    explanation: "Sikkerhetsdatabladet gir viktig informasjon om kjemikalier: innhold, farer, verneutstyr som trengs, og hva du gjør ved uhell. Alle kjemikalier på jobb skal ha SDB lett tilgjengelig."
  },
  {
    id: "h-e-15", category: "hms", difficulty: "easy",
    question: "Hva betyr 'tilrettelegging' i arbeidslivet?",
    options: [
      "En type straff for ansatte som gjør dårlig arbeid",
      "Tilpasning av arbeidsoppgaver eller arbeidsplass slik at ansatte med helseutfordringer kan jobbe",
      "En ekstra bonus til ledere med mange ansatte",
      "En form for ekstra opplæring for nye ansatte"
    ],
    answer: 1,
    explanation: "Tilrettelegging betyr at arbeidsgiver tilpasser arbeidet til den ansattes helsetilstand. Arbeidsgiver har plikt til å tilrettelegge så langt det er mulig for å hindre sykefravær."
  },
  {
    id: "h-e-16", category: "hms", difficulty: "easy",
    question: "Hva er 'APK' (arbeidsplassvurdering)?",
    options: [
      "En type arbeidskontrakt for korte oppdrag",
      "En gjennomgang av arbeidsplassen for å vurdere ergonomi og fysisk tilrettelegging",
      "En obligatorisk daglig kaffepause",
      "En test av arbeidstakers faglige kunnskap"
    ],
    answer: 1,
    explanation: "APK er en systematisk gjennomgang av arbeidsplassen for å vurdere om den er ergonomisk riktig tilrettelagt. Det er spesielt viktig ved kontorarbeidsplasser for å forebygge belastningsskader."
  },

  // MEDIUM
  {
    id: "h-m-7", category: "hms", difficulty: "medium",
    question: "Hva er 'bedriftshelsetjeneste' (BHT)?",
    options: [
      "En sykehusavdeling dedikert til bedriftens ansatte",
      "En ekstern faglig tjeneste som hjelper bedriften med HMS og arbeidsmiljø",
      "En intern lege som er fast ansatt i bedriften",
      "NAVs helsetjeneste spesielt for bedrifter og næringsliv"
    ],
    answer: 1,
    explanation: "BHT er et eksternt faglig team med helsepersonell og HMS-rådgivere som hjelper bedriften med forebyggende arbeid, risikovurderinger og oppfølging av sykefravær."
  },
  {
    id: "h-m-8", category: "hms", difficulty: "medium",
    question: "Hva er 'støyskade' og hvordan forebygges den?",
    options: [
      "En skade fra fall, forebygges med hjelm og fallsikring",
      "Hørselsskade fra vedvarende støy, forebygges med hørselsvern og støyreduserende tiltak",
      "Psykisk skade fra hard kritikk, forebygges med samtaleterapi",
      "En type ryggskade fra tunge løft"
    ],
    answer: 1,
    explanation: "Støyskade er permanent hørselsskade fra langvarig eksponering for høy støy. Det forebygges med hørselsvern (øreklokker/propper), støyisolering og begrensning av eksponeringstid."
  },
  {
    id: "h-m-9", category: "hms", difficulty: "medium",
    question: "Hva er riktig løfteteknikk for å unngå ryggskader?",
    options: [
      "Bøy knærne, rett rygg, hold lasten nær kroppen og løft med bena",
      "Bøy deg ned i ryggen og løft raskt for å spare tid",
      "Løft alltid over hodet for best mulig kontroll over lasten",
      "Det spiller ingen rolle hvordan du løfter – det er bare vanetenkning"
    ],
    answer: 0,
    explanation: "Riktig løfteteknikk: Bøy knærne, hold ryggen rett, hold lasten nær kroppen og løft med bena. Unngå å vri kroppen mens du løfter. Be om hjelp eller bruk hjelpemidler ved tunge løft."
  },
  {
    id: "h-m-10", category: "hms", difficulty: "medium",
    question: "Hva er en 'HMS-handlingsplan'?",
    options: [
      "En beredskapsplan som kun brukes ved brann",
      "Et dokument med konkrete HMS-tiltak, ansvarlige og frister for gjennomføring",
      "En oversikt over alle ansattes sykefravær gjennom året",
      "En plan for å redusere bedriftens kostnader til HMS"
    ],
    answer: 1,
    explanation: "HMS-handlingsplanen beskriver hvilke HMS-tiltak bedriften skal gjennomføre, hvem som er ansvarlig og innen hvilken frist. Den er et viktig styringsverktøy i internkontrollarbeidet."
  },
  {
    id: "h-m-11", category: "hms", difficulty: "medium",
    question: "Hva er 'forebyggende HMS-arbeid'?",
    options: [
      "Å behandle sykdommer og skader etter at de har oppstått",
      "Tiltak for å hindre at ulykker, skader og sykdom oppstår på arbeidsplassen",
      "Å dekke over farlige forhold slik at ingen oppdager dem",
      "Å registrere og arkivere alle ulykker som skjer"
    ],
    answer: 1,
    explanation: "Forebyggende HMS-arbeid handler om å avdekke og fjerne risikofaktorer før de fører til skade eller sykdom. Det inkluderer opplæring, risikovurderinger og tilrettelegging av arbeidsplassen."
  },
  {
    id: "h-m-12", category: "hms", difficulty: "medium",
    question: "Hva er en 'hjertestarter' (AED) og når brukes den?",
    options: [
      "Et apparat for å måle blodtrykk og puls",
      "En medisinsk enhet som gir elektrisk støt for å gjenopprette hjerterytmen ved hjertestans",
      "En type pacemaker som opereres inn kirurgisk",
      "Et apparat for å gi oksygen ved pusteproblemer"
    ],
    answer: 1,
    explanation: "En hjertestarter (AED) kan gjenopprette normal hjerterytme ved hjertestans. Den er enkel å bruke og gir tydelige taleinstruksjoner. Mange arbeidsplasser er anbefalt eller pålagt å ha den."
  },

  // HARD
  {
    id: "h-h-5", category: "hms", difficulty: "hard",
    question: "Hva er en 'HMS-revisjon' og hva innebærer den?",
    options: [
      "En finansiell revisjon av bedriftens HMS-budsjett",
      "En systematisk gjennomgang av HMS-systemet for å sjekke samsvar med lovkrav og faktisk praksis",
      "En uanmeldt kontroll utført av Arbeidstilsynet",
      "En revisjon av lønn og arbeidsforhold for alle ansatte"
    ],
    answer: 1,
    explanation: "En HMS-revisjon er en strukturert gjennomgang av bedriftens HMS-arbeid. Den sjekker at dokumentasjon er på plass, at tiltak er iverksatt og at systemet fungerer etter hensikten."
  },
  {
    id: "h-h-6", category: "hms", difficulty: "hard",
    question: "Hva skjer ved et tilsyn fra Arbeidstilsynet?",
    options: [
      "Bedriften stenger midlertidig mens inspeksjonen pågår",
      "Arbeidstilsynet kontrollerer at bedriften overholder arbeidsmiljøloven og kan gi pålegg om forbedringer",
      "Alle ansatte intervjues av politiet",
      "Bedriften betaler automatisk bøter uansett funn"
    ],
    answer: 1,
    explanation: "Ved tilsyn besøker Arbeidstilsynet arbeidsplassen for å kontrollere at loven overholdes. De kan gi pålegg (krav om retting), tvangsmulkt eller i alvorlige tilfeller stanse virksomheten."
  },
  {
    id: "h-h-7", category: "hms", difficulty: "hard",
    question: "Hva kan arbeidsgiver gjøre for å ivareta ansattes psykiske helse?",
    options: [
      "Det er ikke arbeidsgivers ansvar å tenke på ansattes psykiske helse",
      "Sikre rimelig arbeidsmengde, god ledelse, klare forventninger og et støttende sosialt miljø",
      "Ansatte med psykiske problemer bør sies opp for å beskytte bedriften",
      "Psykisk helse handler utelukkende om private forhold utenfor jobben"
    ],
    answer: 1,
    explanation: "Arbeidsgiver kan forebygge stress og utbrenthet gjennom rimelig arbeidsmengde, tydelig kommunikasjon, anerkjennelse og støttende ledelse. Arbeidsmiljøloven stiller krav til det psykososiale arbeidsmiljøet."
  },
  {
    id: "h-h-8", category: "hms", difficulty: "hard",
    question: "Hva krever 'kjemikalieforskriften' av bedrifter?",
    options: [
      "En forskrift som kun regulerer import av kjemikalier fra utlandet",
      "Krav til kartlegging, merking, sikkerhetsdatablad og verneutstyr ved bruk av farlige kjemikalier",
      "En lov om matlaging og bruk av kjøkkenkjemikalier",
      "Regler som kun gjelder for kjemiske laboratorier"
    ],
    answer: 1,
    explanation: "Kjemikalieforskriften stiller krav til bedrifter som bruker farlige kjemikalier: risikovurdering, opplæring av ansatte, tilgjengelige sikkerhetsdatablad og bruk av egnet verneutstyr."
  },
  {
    id: "h-h-9", category: "hms", difficulty: "hard",
    question: "Hva er 'sikkerhetskultur' i en bedrift?",
    options: [
      "Antall HMS-sertifikater og kurs bedriften har gjennomført",
      "Felles holdninger, verdier og atferder som påvirker hvordan sikkerhetsarbeid prioriteres",
      "De konkrete reglene som er skrevet ned i HMS-håndboken",
      "Antall ulykker og nestenulykker bedriften har registrert"
    ],
    answer: 1,
    explanation: "Sikkerhetskultur handler om de felles holdningene og atferdene som preger HMS-arbeidet. En sterk sikkerhetskultur kjennetegnes av at alle tar ansvar for sikkerheten, ikke bare HMS-ansvarlig."
  },
  {
    id: "h-h-10", category: "hms", difficulty: "hard",
    question: "Hva er 'arbeidsrelaterte muskel- og skjelettlidelser' og hvordan forebygges de?",
    options: [
      "En type yrkessykdom som kun rammer ansatte i tung industri",
      "Smerter i muskler og ledd forårsaket av arbeidsforhold – forebygges med ergonomi og pauser",
      "Mentale helseproblemer knyttet til stress på arbeidsplassen",
      "Lidelser som utelukkende behandles med kirurgi og medisinering"
    ],
    answer: 1,
    explanation: "Muskel- og skjelettlidelser er de vanligste arbeidsrelaterte plagene i Norge. De skyldes statisk arbeid, tunge løft og repetitive bevegelser. Ergonomisk tilpasning og variasjon forebygger dette."
  },

  /* ───────────── LØNN & ØKONOMI – nye ───────────── */
  // EASY
  {
    id: "l-e-9", category: "lonn", difficulty: "easy",
    question: "Hva er forskjellen på timelønn og månedslønn?",
    options: [
      "Det er ingen praktisk forskjell mellom de to",
      "Timelønn betales per time jobbet; månedslønn er et fast beløp per måned",
      "Månedslønn er alltid høyere enn timelønn",
      "Timelønn er kun for deltidsansatte"
    ],
    answer: 1,
    explanation: "Med timelønn betales du per time du faktisk jobber. Med månedslønn får du et fast beløp per måned uavhengig av eksakt timetall. De fleste fast ansatte i Norge har månedslønn."
  },
  {
    id: "l-e-10", category: "lonn", difficulty: "easy",
    question: "Hva er 'NHO' i norsk arbeidsliv?",
    options: [
      "Et statlig HMS-organ under Arbeidsdepartementet",
      "Norges Handelshøyskole i Bergen",
      "En fagforening som representerer arbeidstakere",
      "Næringslivets Hovedorganisasjon – den største arbeidsgiverorganisasjonen i Norge"
    ],
    answer: 3,
    explanation: "NHO (Næringslivets Hovedorganisasjon) er den største arbeidsgiverorganisasjonen i Norge. NHO forhandler med fagforeninger (som LO) om lønn og arbeidsvilkår."
  },
  {
    id: "l-e-11", category: "lonn", difficulty: "easy",
    question: "Hva er 'lønnstrekk'?",
    options: [
      "En lønnsøkning du får etter vellykket lønnsforhandling",
      "Et beløp som trekkes fra lønnen din, for eksempel skatt eller fagforeningskontingent",
      "En bonusutbetaling på toppen av ordinær lønn",
      "En type forsikring arbeidsgiver betaler for deg"
    ],
    answer: 1,
    explanation: "Lønnstrekk er beløp som trekkes fra bruttolønnen din. Skattetrekket er det vanligste. Andre trekk kan være fagforeningskontingent eller pensjonsandel."
  },
  {
    id: "l-e-12", category: "lonn", difficulty: "easy",
    question: "Hva er 'årsoppgaven' du mottar fra arbeidsgiver?",
    options: [
      "En oversikt over dine planlagte arbeidsoppgaver neste år",
      "Et dokument som viser din totale inntekt og skattetrekk for hele kalenderåret",
      "En søknad om lønnsøkning til neste år",
      "En kontrakt du signerer og fornyer hvert år"
    ],
    answer: 1,
    explanation: "Årsoppgaven (nå kalt a-melding-sammendrag) viser din totale lønn, feriepenger og skattetrekk for hele kalenderåret. Du bruker den til å kontrollere skattemeldingen."
  },
  {
    id: "l-e-13", category: "lonn", difficulty: "easy",
    question: "Hva er 'kvelds- og nattillegg'?",
    options: [
      "En type feriepenger som utbetales om kvelden",
      "Ekstra betaling for arbeid på kveld og natt utover normal arbeidstid",
      "En bonus for å jobbe raskt og effektivt",
      "Godtgjørelse for reisetid til og fra jobb"
    ],
    answer: 1,
    explanation: "Kvelds- og nattillegg er ekstra betaling for arbeid på ubekvemme tidspunkter. Størrelsen varierer mellom tariffavtaler, men gir deg mer betalt for jobb utenom normal dagtid."
  },
  {
    id: "l-e-14", category: "lonn", difficulty: "easy",
    question: "Hva er 'diettgodtgjørelse'?",
    options: [
      "Penger du mottar for å følge en sunn diett på jobb",
      "Dekning av matutgifter når du jobber borte fra din vanlige arbeidsplass",
      "En bonus for å fremme sunt arbeidsmiljø",
      "Godtgjørelse for overtidsarbeid"
    ],
    answer: 1,
    explanation: "Diettgodtgjørelse dekker matutgifter når du reiser i jobbsammenheng og er borte fra din vanlige arbeidsplass eller hjem. Statens satser regulerer skattefrie grenser."
  },
  {
    id: "l-e-15", category: "lonn", difficulty: "easy",
    question: "Hva er 'reisegodtgjørelse'?",
    options: [
      "Penger du sparer selv til jobbkurs og konferanser",
      "Dekning av reiseutgifter du har i forbindelse med jobbreiser",
      "En rabatt på kollektivtransport som bedriften forhandler frem",
      "En bonus for ansatte som sykler til jobb"
    ],
    answer: 1,
    explanation: "Reisegodtgjørelse er dekning av reiseutgifter i jobbsammenheng – fly, tog eller kjøregodtgjørelse per kilometer ved bruk av privatbil. Det er ikke skattepliktig inntekt innenfor fastsatte satser."
  },
  {
    id: "l-e-16", category: "lonn", difficulty: "easy",
    question: "Hva skjer om du ikke leverer skattemeldingen innen fristen?",
    options: [
      "Ingenting – skattemeldingen er frivillig å levere",
      "Du kan få forsinkelsesgebyr og skatten kan fastsettes skjønnsmessig av Skatteetaten",
      "Du mister automatisk jobben din",
      "Du får refundert all skatt som er trukket"
    ],
    answer: 1,
    explanation: "Fristen for skattemeldingen er vanligvis 30. april. Leverer du ikke, kan Skatteetaten fastsette skatten skjønnsmessig og ilegge forsinkelsesgebyr."
  },

  // MEDIUM
  {
    id: "l-m-7", category: "lonn", difficulty: "medium",
    question: "Hva er 'lønnsoppgjør' og hvem deltar?",
    options: [
      "Et oppgjør mellom enkeltansatte og den direkte sjefen",
      "En forhandling mellom fagforeninger og arbeidsgiverorganisasjoner om lønn og arbeidsvilkår",
      "En statlig fastsettelse av alle lønninger i privat sektor",
      "En årslig rangering av ansattes prestasjoner"
    ],
    answer: 1,
    explanation: "Lønnsoppgjøret er forhandlinger mellom fagforeninger (f.eks. LO) og arbeidsgiverorganisasjoner (f.eks. NHO) om lønnsnivå og vilkår. Det foregår vanligvis hvert år eller hvert andre år."
  },
  {
    id: "l-m-8", category: "lonn", difficulty: "medium",
    question: "Hva er 'skattefrie goder' på arbeidsplassen?",
    options: [
      "Goder arbeidsgiver gir i stedet for lønn for å unngå skatt ulovlig",
      "Fordeler fra arbeidsgiver som ikke skattlegges, innenfor bestemte grenser fastsatt av Skatteetaten",
      "Penger du tjener på hobbyer ved siden av jobben",
      "Alle typer bonuser og tillegg er skattefrie"
    ],
    answer: 1,
    explanation: "Skattefrie goder er fordeler fra arbeidsgiver som ikke regnes som skattepliktig inntekt, innenfor fastsatte grenser. Eksempler: bedriftskantine, treningsfasiliteter og gaver til en viss verdi."
  },
  {
    id: "l-m-9", category: "lonn", difficulty: "medium",
    question: "Hva er 'arbeidsgiveravgift'?",
    options: [
      "En avgift ansatte betaler for privilegiet av å ha jobb",
      "En avgift arbeidsgiver betaler til staten basert på de ansattes lønn",
      "En avgift du betaler for å opprette en bedrift",
      "En type obligatorisk forsikring arbeidsgiver betaler"
    ],
    answer: 1,
    explanation: "Arbeidsgiveravgiften er en avgift arbeidsgiver betaler til staten, beregnet som en prosentandel av lønnsutbetalingen. Den finansierer trygdeordningene i Norge og varierer etter geografisk plassering."
  },
  {
    id: "l-m-10", category: "lonn", difficulty: "medium",
    question: "Hva er 'sykepengegrunnlaget'?",
    options: [
      "Antall sykedager du totalt har rett til i løpet av et år",
      "Inntekten som legges til grunn for å beregne sykepengene dine",
      "Legens vurdering av hvor alvorlig sykdommen din er",
      "NAVs krav til dokumentasjon og legeerklæring ved sykdom"
    ],
    answer: 1,
    explanation: "Sykepengegrunnlaget er din gjennomsnittlige inntekt og brukes til å beregne where mye sykepenger du har krav på. Maksimumsgrensen er 6 G (grunnbeløpet i Folketrygden)."
  },
  {
    id: "l-m-11", category: "lonn", difficulty: "medium",
    question: "Hva er 'fradrag' i skattemeldingen?",
    options: [
      "Ekstra inntekter og goder du har fått i løpet av året",
      "Utgifter du kan trekke fra inntekten slik at du betaler mindre skatt",
      "En bot fra Skatteetaten for sen levering",
      "En type tillegg til lønnen du kan kreve fra arbeidsgiver"
    ],
    answer: 1,
    explanation: "Fradrag er utgifter du kan trekke fra skattepliktig inntekt, slik at du betaler mindre skatt. Eksempler: minstefradrag, fagforeningskontingent, renteutgifter og pendlerkostnader."
  },
  {
    id: "l-m-12", category: "lonn", difficulty: "medium",
    question: "Hva er 'overgangsstønad'?",
    options: [
      "Støtte ved overgang fra en jobb til en annen",
      "En ytelse fra NAV til enslige foreldre med barn under 8 år som er i en vanskelig situasjon",
      "En type dagpenger for sesongarbeidere",
      "Ekstra lønn i oppsigelsestiden"
    ],
    answer: 1,
    explanation: "Overgangsstønaden er en inntektssikringsytelse fra NAV for enslige forsørgere som har omsorg for barn. Den skal hjelpe å sikre inntekt mens man er i utdanning eller på vei ut i arbeid."
  },

  // HARD
  {
    id: "l-h-5", category: "lonn", difficulty: "hard",
    question: "Hva er 'lønnsgarantiordningen'?",
    options: [
      "En garanti fra arbeidsgiver om at lønnen aldri kan kuttes",
      "En statlig ordning som sikrer at ansatte får lønn og feriepenger hvis arbeidsgiver går konkurs",
      "En privat forsikring du kjøper selv for å sikre lønnen",
      "En fagforeningsordning som garanterer lønnsøkning hvert år"
    ],
    answer: 1,
    explanation: "Lønnsgarantiordningen er en statlig ordning som sikrer at ansatte mottar utestående lønn, feriepenger og arbeidsgodtgjørelse hvis arbeidsgiver går konkurs. NAV administrerer ordningen."
  },
  {
    id: "l-h-6", category: "lonn", difficulty: "hard",
    question: "Når kan du ta ut alderspensjon fra Folketrygden?",
    options: [
      "Du må vente til du er 70 år for å ta ut full pensjon",
      "Du kan ta ut fleksibelt fra 62 år, men beløpet øker jo lenger du venter",
      "Pensjonsalderen er fast 67 år for alle uten unntak",
      "Pensjonsalderen er 65 år og kan ikke endres"
    ],
    answer: 1,
    explanation: "Alderspensjon fra Folketrygden kan tas ut fra du er 62 år, forutsatt at du oppfyller visse krav. Jo lenger du venter, jo høyere blir den månedlige pensjonen du mottar."
  },
  {
    id: "l-h-7", category: "lonn", difficulty: "hard",
    question: "Hva er 'trygdeavgift' og hvem betaler den?",
    options: [
      "En avgift som kun gjelder selvstendig næringsdrivende",
      "En avgift som trekkes fra lønn og bidrar til å finansiere trygdeordninger som sykepenger og pensjon",
      "En frivillig forsikringsordning du kan velge å delta i",
      "En kommunal avgift som varierer mellom kommunene"
    ],
    answer: 1,
    explanation: "Trygdeavgiften er en obligatorisk avgift som trekkes fra alle typer inntekt. Den er lavere for lønnstakere (7,7 %) enn for selvstendig næringsdrivende (11 %) og finansierer Folketrygden."
  },
  {
    id: "l-h-8", category: "lonn", difficulty: "hard",
    question: "Hva er 'allmenngjøring av tariffavtaler'?",
    options: [
      "At tariffavtaler gjøres gjeldende i alle land verden over",
      "At tariffavtalens minimumsvilkår gjelder alle i bransjen, også de som ikke er organisert",
      "En prosess for å avslutte og avvikle en tariffavtale",
      "At alle ansatte automatisk meldes inn i en fagforening"
    ],
    answer: 1,
    explanation: "Allmenngjøring innebærer at tariffavtalens minimumslønn og arbeidsvilkår gjelder for alle i bransjen, uavhengig av organisering. Dette hindrer sosial dumping og brukes bl.a. i bygg og renhold."
  },
  {
    id: "l-h-9", category: "lonn", difficulty: "hard",
    question: "Hva er 'frontfagsmodellen' i norsk lønnsfastsettelse?",
    options: [
      "En modell der staten fastsetter alle lønninger",
      "En modell der konkurranseutsatt industri forhandler lønn først og setter normen for resten",
      "En modell der fagforeningene alltid får viljen sin",
      "En modell der alle tjener det samme uansett bransje"
    ],
    answer: 1,
    explanation: "Frontfagsmodellen betyr at konkurranseutsatt industri (frontfaget) forhandler lønn først. Resultatet setter normen for øvrige sektorer. Slik sikres konkurransedyktige bedrifter og stabil lønnsvekst."
  },
  {
    id: "l-h-10", category: "lonn", difficulty: "hard",
    question: "Hva er 'sykepenger til selvstendig næringsdrivende'?",
    options: [
      "Selvstendig næringsdrivende har ingen rett til sykepenger fra NAV",
      "De får sykepenger fra NAV fra dag 17, men kan tegne frivillig forsikring for dekning fra dag 1",
      "De mottar nøyaktig det samme som vanlige lønnstakere fra dag 1",
      "De får sykepenger kun de første 3 månedene av sykdommen"
    ],
    answer: 1,
    explanation: "Selvstendig næringsdrivende har rett til sykepenger fra NAV fra og med dag 17, med lavere dekningsgrad enn lønnstakere. De kan tegne frivillig tilleggsforsikring hos NAV for dekning fra dag 1."
  },

  /* ───────────── ARBEIDSKULTUR – nye ───────────── */
  // EASY
  {
    id: "ku-e-9", category: "kultur", difficulty: "easy",
    question: "Hva er 'kaffepause' i norsk arbeidsliv?",
    options: [
      "En obligatorisk pause der alle ansatte må drikke kaffe",
      "En uformell sosial pause der kolleger samles, drikker kaffe og prater",
      "Et kort faglig møte holdt over kaffe",
      "En betalt pause på to timer midt på dagen"
    ],
    answer: 1,
    explanation: "Kaffepausen er en viktig sosial arena på norske arbeidsplasser. Det er en uformell stund for samvær og uformell kommunikasjon. Kaffe er svært populært i Norge og gratis på mange arbeidsplasser."
  },
  {
    id: "ku-e-10", category: "kultur", difficulty: "easy",
    question: "Hva er 'dugnad'?",
    options: [
      "En tradisjonell norsk folkedans",
      "En type fagforeningsstreik",
      "En tradisjon med frivillig felles innsats for et felles mål",
      "En form for ekstraarbeid betalt av kommunen"
    ],
    answer: 2,
    explanation: "Dugnad er en norsk tradisjon der folk hjelper hverandre frivillig og uten betaling. På arbeidsplassen kan det for eksempel være å rydde fellesarealer eller delta i sosiale prosjekter."
  },
  {
    id: "ku-e-11", category: "kultur", difficulty: "easy",
    question: "Hva betyr 'å ta ansvar' i norsk arbeidskultur?",
    options: [
      "Å skylde på kolleger eller systemet når noe går galt",
      "Å ta eierskap til arbeidsoppgaver og følge dem til de er fullført",
      "Å alltid be om hjelp fra sjefen til alle avgjørelser",
      "Å alltid gjøre akkurat det sjefen sier uten å tenke selv"
    ],
    answer: 1,
    explanation: "I norsk arbeidskultur er det å ta ansvar svært verdsatt. Det betyr å eie sine oppgaver, levere til rett tid og si fra dersom noe ikke lar seg gjøre som planlagt."
  },
  {
    id: "ku-e-12", category: "kultur", difficulty: "easy",
    question: "Hva er 'julebord' i norsk arbeidsliv?",
    options: [
      "En obligatorisk julefest alle ansatte må delta på",
      "En lunsjordning i desember der julematen serveres i kantinen",
      "En sosial firmafest som arrangeres i desember",
      "En julebonus alle ansatte mottar automatisk"
    ],
    answer: 2,
    explanation: "Julebordet er en norsk arbeidsplass-tradisjon der bedriften arrangerer en sosial fest for de ansatte i desember. Det er en viktig arena for samvær og bidrar til samhold i teamet."
  },
  {
    id: "ku-e-13", category: "kultur", difficulty: "easy",
    question: "Hva betyr 'åpen dør-politikk' på arbeidsplassen?",
    options: [
      "At alle kontordørene fysisk alltid er åpne",
      "En kultur der ledere er tilgjengelige og ansatte kan komme med spørsmål og tilbakemeldinger",
      "En sikkerhetsregel om at nødutganger aldri låses",
      "En regel om at alle kan gå inn og ut av bedriftslokalet fritt"
    ],
    answer: 1,
    explanation: "Åpen dør-politikk betyr at ledere er tilgjengelige for ansatte. Det er en viktig del av norsk, flat arbeidskultur der dialog mellom ledere og ansatte verdsettes høyt."
  },
  {
    id: "ku-e-14", category: "kultur", difficulty: "easy",
    question: "Hva er 'fadderordning' for nyansatte?",
    options: [
      "En religiøs seremoni som gjennomføres ved ansettelse",
      "En ordning der en erfaren kollega hjelper en ny ansatt med å bli kjent med arbeidsplassen",
      "Et prøvesystem der nyansatte evalueres av erfarne kolleger",
      "En ordning der nyansatte betaler for sin egen opplæring"
    ],
    answer: 1,
    explanation: "Fadderordningen gir nye ansatte en erfaren kollega som kan vise dem rundt, svare på spørsmål og hjelpe dem inn i kulturen. Det gjør onboarding lettere og tryggere."
  },

  // MEDIUM
  {
    id: "ku-m-7", category: "kultur", difficulty: "medium",
    question: "Hva er 'psykologisk trygghet' på arbeidsplassen?",
    options: [
      "At arbeidsplassen er fysisk sikker og uten farlige maskiner",
      "En kultur der ansatte tør å si meningen sin og innrømme feil uten frykt for negative konsekvenser",
      "Et forsikringsprogram mot psykisk sykdom for alle ansatte",
      "Tilgang til bedriftspsykolog for alle ansatte"
    ],
    answer: 1,
    explanation: "Psykologisk trygghet betyr at ansatte føler seg trygge til å ta risiko, stille spørsmål og dele ideer uten frykt for å bli latterliggjort. Det er avgjørende for innovative og effektive team."
  },
  {
    id: "ku-m-8", category: "kultur", difficulty: "medium",
    question: "Hva er 'teambuilding' i norsk arbeidsliv?",
    options: [
      "Prosessen med å ansette og sette sammen et nytt team fra bunnen av",
      "Aktiviteter som styrker samarbeid, tillit og relasjoner mellom kolleger",
      "En idrettsaktivitet kun for sportsinteresserte ansatte",
      "Et kurs om ledelse av team"
    ],
    answer: 1,
    explanation: "Teambuilding er aktiviteter der kolleger samarbeider om oppgaver utenfor den daglige jobben. Hensikten er å styrke relasjoner, kommunikasjon og samholdet i teamet."
  },
  {
    id: "ku-m-9", category: "kultur", difficulty: "medium",
    question: "Hva er 'onboarding'?",
    options: [
      "En prosess for å avslutte og si opp ansatte på en god måte",
      "En strukturert introduksjonsprosess for nye ansatte",
      "Et kurs i digital kompetanse og datasystemer",
      "En type HMS-trening for alle ansatte"
    ],
    answer: 1,
    explanation: "Onboarding er prosessen der en ny ansatt introduseres til arbeidsplassen, kollegaene, kulturen, systemene og arbeidsoppgavene. God onboarding øker trivsel og reduserer turnover."
  },
  {
    id: "ku-m-10", category: "kultur", difficulty: "medium",
    question: "Hva er 'interkulturell kompetanse' i norsk arbeidsliv?",
    options: [
      "Å beherske flere utenlandske språk flytende",
      "Evnen til å forstå og arbeide effektivt med mennesker fra ulike kulturer",
      "Å ha bodd og jobbet i utlandet",
      "Å ha utdanning fra et utenlandsk universitet"
    ],
    answer: 1,
    explanation: "Interkulturell kompetanse er evnen til å forstå og tilpasse seg kulturelle forskjeller i kommunikasjon og samarbeid. Dette er stadig viktigere i det mangfoldige norske arbeidslivet."
  },
  {
    id: "ku-m-11", category: "kultur", difficulty: "medium",
    question: "Hva er 'bærekraft' i næringslivet?",
    options: [
      "Et begrep som kun er relevant for miljøorganisasjoner og NGO-er",
      "At bedriften driver på en måte som tar hensyn til miljø, sosiale forhold og økonomi på lang sikt",
      "Å kutte kostnader og effektivisere bedriftens drift",
      "En type miljøsertifisering for matvarer"
    ],
    answer: 1,
    explanation: "Bærekraft i næringslivet handler om at bedriften tar hensyn til klima og miljø, sosiale forhold (arbeidsforhold, mangfold) og langsiktig lønnsomhet. Dette kalles gjerne ESG eller 'triple bottom line'."
  },
  {
    id: "ku-m-12", category: "kultur", difficulty: "medium",
    question: "Hva er 'kompetanseutvikling' i arbeidslivet?",
    options: [
      "Å bytte jobb for å lære noe nytt i et annet miljø",
      "Opplæring og kurs for å bli bedre i jobben og utvikle ferdigheter",
      "En type lønnsøkning du får automatisk etter antall år i jobben",
      "En HR-prosess for å evaluere og rangere ansattes prestasjoner"
    ],
    answer: 1,
    explanation: "Kompetanseutvikling handler om kontinuerlig læring gjennom kurs, etterutdanning og arbeidserfaring. Norske arbeidsgivere investerer ofte i dette fordi det gagner både ansatt og bedrift."
  },

  // HARD
  {
    id: "ku-h-5", category: "kultur", difficulty: "hard",
    question: "Hva er 'bedriftsdemokrati' i norsk arbeidsliv?",
    options: [
      "At ansatte stemmer over bedriftens produkter og tjenester",
      "Ansattes rett til medbestemmelse og innflytelse over beslutninger som angår arbeidsplassen",
      "At alle ansatte eier like andeler av bedriften",
      "En form for direkte demokrati der alle beslutninger stemmes over"
    ],
    answer: 1,
    explanation: "Bedriftsdemokrati i Norge innebærer at ansatte har rett til representasjon i styret i større bedrifter, og at tillitsvalgte har en formell rolle i å påvirke beslutninger. Det er forankret i aksjeloven og arbeidsmiljøloven."
  },
  {
    id: "ku-h-6", category: "kultur", difficulty: "hard",
    question: "Hva er en 'tillitsvalgt' og hva er dennes rolle?",
    options: [
      "En person utpekt av sjefen til å passe på sikkerheten",
      "En ansatt valgt av kolleger for å representere dem overfor arbeidsgiver i lønns- og arbeidsspørsmål",
      "En leder utpekt av sjefen med særlig ansvar for HR",
      "En representant fra Arbeidstilsynet stasjonert på arbeidsplassen"
    ],
    answer: 1,
    explanation: "Tillitsvalgte er valgt av og blant de ansatte for å representere dem overfor arbeidsgiver. De deltar i lønnsforhandlinger og saker som angår arbeidsmiljøet. De er beskyttet mot oppsigelse på grunn av vervet."
  },
  {
    id: "ku-h-7", category: "kultur", difficulty: "hard",
    question: "Hva kjennetegner 'norsk lederstil'?",
    options: [
      "Autoritær toppdown-styring der lederen alltid har siste og endelige ord",
      "Deltakende, coachende lederstil med fokus på autonomi, dialog og medarbeidernes velvære",
      "Minimal kontakt mellom ledere og ansatte for å opprettholde respekt",
      "Streng hierarki og bruk av formelle titler i all kommunikasjon"
    ],
    answer: 1,
    explanation: "Norsk lederstil kjennetegnes av flatere hierarki, høy autonomi, åpen kommunikasjon og fokus på medarbeidernes trivsel. Ledere forventes å inkludere ansatte i beslutninger og vise omsorg for teamet."
  },
  {
    id: "ku-h-8", category: "kultur", difficulty: "hard",
    question: "Hva er 'sosial dumping' og hvorfor er det et problem?",
    options: [
      "At ansatte forlater bedriften raskt – høy turnover",
      "Bruk av arbeidsinnvandrere med dårligere lønn og vilkår enn norske standarder tilsier",
      "En form for diskriminering av eldre arbeidstakere",
      "At bedrifter selger produkter til under markedspris"
    ],
    answer: 1,
    explanation: "Sosial dumping oppstår når arbeidstakere, gjerne innvandrere, tilbys vesentlig dårligere lønn og vilkår enn norske standarder. Det undergraver seriøse bedrifter og norsk arbeidslivsmodell. Tiltak: allmenngjøring av tariffavtaler."
  },
  {
    id: "ku-h-9", category: "kultur", difficulty: "hard",
    question: "Hva er 'arbeidsgivers styringsrett'?",
    options: [
      "Retten til å ansette og si opp hvem som helst uten begrunnelse",
      "Arbeidsgivers rett til å lede, fordele og organisere arbeidet innenfor lovens og avtalens rammer",
      "Retten til å bestemme alle ansattes lønn uten forhandlinger",
      "En rett som kun gjelder i prøvetiden"
    ],
    answer: 1,
    explanation: "Styringsretten er arbeidsgivers rett til å lede virksomheten, fordele arbeid og ta beslutninger. Den begrenses av arbeidsmiljøloven, tariffavtaler og den individuelle arbeidsavtalen."
  },
  {
    id: "ku-h-10", category: "kultur", difficulty: "hard",
    question: "Hva er 'medvirkning' i norsk arbeidsliv og hvordan praktiseres det?",
    options: [
      "At ansatte kan nekte alle beslutninger de er uenige i",
      "Ansattes rett til å delta aktivt i å utvikle arbeidsplassen gjennom AMU og tillitsvalgte",
      "At ansatte stemmer over alle bedriftsbeslutninger direkte",
      "At ledere alltid er enige med ansattes ønsker"
    ],
    answer: 1,
    explanation: "Medvirkning er en grunnleggende rettighet i norsk arbeidsliv. Ansatte skal påvirke sin arbeidssituasjon gjennom AMU (Arbeidsmiljøutvalget), verneombud og tillitsvalgte."
  }
];

/* ── Hjelpefunksjoner ── */

/**
 * Hent spørsmål filtrert på kategori og vanskelighetsgrad, i tilfeldig rekkefølge.
 */
function shuffleOptions(q) {
  const options = [...q.options];
  const correctText = options[q.answer];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return { ...q, options, answer: options.indexOf(correctText) };
}

function getQuestions(category = "all", difficulty = "easy", count = 10) {
  let pool = QUESTIONS.filter(q => q.difficulty === difficulty);
  if (category !== "all") {
    pool = pool.filter(q => q.category === category);
  }
  // Fisher-Yates shuffle (spørsmålrekkefølge)
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  // Stokk svaralternativene for hvert spørsmål slik at riktig svar
  // fordeles jevnt mellom A, B og C
  return pool.slice(0, Math.min(count, pool.length)).map(shuffleOptions);
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
