
export type Item = {
  "en-GB": string;
  "de-AT": string;
};

const dict = {
  theWeddingOf: {
    "en-GB": "The wedding of Ms Joanna Stuiver and Mr Julian Krispel",
    "de-AT": "Joanna's und Julian's Hochzeit",
  },
  home: {
    "en-GB": "Welcome to Joanna's and Julian's wedding website.",
    "de-AT": "Willkommen auf Joannas und Julians Hochzeitswebseite.",
  },
  ifYouDontHaveAnInvite: {
    "en-GB":
      "If you don't have an invite and believe this is a mistake, please contact us and we will send you one.",
    "de-AT":
      "Falls du keinen Einladungslink erhalten ast, kontaktiere uns bitte und wir schicken dir einen.",
  },
  ifYouHaveAnInvite: {
    "en-GB":
      "If you have an invite, please enter your code below to access the website.",
    "de-AT":
      "Falls du eine Einladung erhalten hast, gib bitte deinen Code unten ein, um auf die Webseite zuzugreifen.",
  },
  yourCode: {
    "en-GB": "Your code",
    "de-AT": "Dein Code",
  },
  submit: {
    "en-GB": "Submit",
    "de-AT": "Absenden",
  },
  and: {
    "de-AT": "und",
    "en-GB": "and",
  },
  wonderful: {
    "de-AT":
      "Wunderbar! Bitte fülle zutreffendes aus, damit wir alles für dich/euch vorbeireiten können.",
    "en-GB":
      "Wonderful! Please fill out the following so we can prepare everything for you.",
  },
  dear: {
    "de-AT": "Liebe",
    "en-GB": "Dear",
  },
  dearMale: {
    "de-AT": "Lieber",
    "en-GB": "Dear",
  },
  invitePlural: {
    "de-AT":
      "Wir laden euch herzlich dazu ein bei unserer Hochzeit dabei zu sein. Sie findet am 15ten August 2024 statt, bei Ashton Memorial in Williamson Park, Lancaster, England.",
    "en-GB": `We would love to invite you to our wedding on the 15th of August 2024 at Ashton Memorial, Williamson Park, Quernmore Road, Lancaster.`,
  },
  inviteSingular: {
    "de-AT":
      "Wir laden dich herzlich dazu ein bei unserer Hochzeit dabei zu sein. Sie findet am 15ten August 2024 statt, bei Ashton Memorial in Williamson Park, Lancaster, England.",
    "en-GB": `We would love to invite you to our wedding on the 15th of August 2024 at Ashton Memorial, Williamson Park, Quernmore Road, Lancaster.`,
  },
  yourMessage: {
    "de-AT":
      "Falls du uns noch eine Nachricht schicken willst, kannst du das hier tun.",
    "en-GB": "If you would like to send us a message you can do so here.",
  },
  inviteMessageSingle: {
    "en-GB": `we'd love to invite you to our wedding on the 15th of August 2024. 

Please use the link below to access your digital invitation and provide your response by the 11th of May at the latest:

joandjulian.com/`,

    "de-AT": `wir laden dich herzlich ein bei unserer Hochzeit am 15ten August 2024 dabei zu sein.

Deine Einladung kann auf der folgenden Webseite abgerufen werden. Bitte melde dich bis spätestens 11ten Mai: joandjulian.com/`,
  },
  inviteMessagePlural: {
    "en-GB": `we'd love to invite you to our wedding on the 15th of August 2024. 

Please use the link below to access your digital invitation and provide your response by the 11th of May at the latest:

joandjulian.com/`,
    "de-AT": `wir laden euch herzlich ein bei unserer Hochzeit am 15ten August 2024 dabei zu sein.

Eure Einladung kann auf der folgenden Webseite abgerufen werden. Bitte meldet euch bis spätestens 11ten Mai: joandjulian.com/`,
  },
  pleaseRespondSingle: {
    "en-GB": "Please respond as soon as possible and by 11th May.",
    "de-AT": "Bitte schicke uns deine Rückmeldung bis spätestens 11ten Mai",
  },
  pleaseRespondPlural: {
    "en-GB": "Please respond as soon as possible and by 11th May.",
    "de-AT": "Bitte schickt uns eure Rückmeldung bis spätestens 11ten Mai",
  },
  weAreTryingSingle: {
    "en-GB":
      "We are trying to do our bit for the planet so all invites and RSVPs are digital. Please let us know if you have any difficulties in accessing or responding to your invite.",
    "de-AT": `Wir haben uns dazu entschieden digitale Einladungen auszusenden um die Umwelt du schonen. Bitte melde dich, falls du Probleme hast, auf deine Einladung zuzugreifen.`,
  },
  weAreTryingPlural: {
    "en-GB":
      "We are trying to do our bit for the planet so all invites and RSVPs are digital. Please let us know if you have any difficulties in accessing or responding to your invite.",
    "de-AT": `Wir haben uns dazu entschieden digitale Einladungen auszusenden um die Umwelt du schonen. Bitte meldet euch, falls ihr Probleme habt, auf eure Einladung zuzugreifen.`,
  },

  withLove: {
    "en-GB": `Lots of love,
    
Joanna and Julian`,
    "de-AT": `Mit herzlichen Grüßen,
    
Joanna und Julian`,
  },
  thatsAShame: {
    "de-AT":
      "Schade! Natürlich verstehen wir das nicht jeder Zeit haben kann. Falls du uns eine Nachricht hinterlassen möchtest würden wir uns freuen.",
    "en-GB":
      "That's a shame. Of course we understand that not everyone can make it. If you would like to leave us a message we would love to hear from you.",
  },
  date: {
    "de-AT": "15ten August 2024",
    "en-GB": "15th of August 2024",
  },
  attendance: {
    "en-GB":
      "If anyone named on your invitation is not able to attend, please provide details here.",
    "de-AT":
      "Falls jemand von euch nicht teilnehmen kann, gebt bitte hier Bescheid.",
  },
  timeAndLocation: {
    "de-AT":
      "um 14 Uhr, Ashton Memorial, Williamson Park, Quernmore Road, Lancaster.",
    "en-GB":
      "at 2pm, Ashton Memorial, Williamson Park, Quernmore Road, Lancaster.",
  },
  noPlusOne: {
    "de-AT":
      "Wegen Platzmangel können wir momentan leider keine Begleitung einladen. Das könnte sich aber noch ändern wenn wir die Anzahl der Gäste wissen. Bitte melde dich bei uns falls du eine Begleitung mitbringen möchtest und wir werden uns nach dem 11ten Mai bei dir melden.",
    "en-GB":
      "Unfortunately due to limited capacity at the ceremony venue we are not able to invite plus ones at the moment. This may change nearer to the event. Please get in touch if you would like to bring a plus one and we will get back to you after the 11th of May.",
  },
  sorryToMissYou: {
    "de-AT":
      "Es tut uns leid dass du nicht dabei sein kannst. Wir verstehen natürlich dass nicht jeder Zeit haben kann bzw. so eine weite Reise auf sich nehmen kann. Wir werden dich vermissen. Falls du deine Antwort ändern möchtest, kannst du das bis zum 11ten Mai tun.",
    "en-GB":
      "We're sorry to miss you. Of course we understand that not everyone can make it or travel so far. If you would like to change your answer you can do so until the 11th of May.",
  },
  contactHeading: {
    "de-AT": "Wie ihr uns erreichen könnt",
    "en-GB": "How you can contact us",
  },
  contactUs: {
    "en-GB": `Please feel free to contact us if there is anything you need help with. We are available via call, text or Whatsapp at the following numbers:`,
    "de-AT": `Falls wir dir irgendwie helfen können, melde dich bitte. Wir sind erreichbar per Anruf, SMS oder Whatsapp unter folgenden Nummern:`,
  },

  changeYourAnswer: {
    "de-AT": "Um deine Antwort zu ändern bitte ",
    "en-GB": "To change your answer please ",
  },
  withReception: {
    "de-AT": "Mit anschließendem Hochzeitsfest in Arkholme Village Hall.",
    "en-GB": "With a reception to follow at Arkholme Village Hall",
  },
  rsvp: {
    "de-AT": "Wir bitten um Antwort bis zum 11ten Mai 2024.",
    "en-GB": "Please RSVP by the 11th of May 2024.",
  },
  gettingHere: {
    "de-AT": "Anreise",
    "en-GB": "Getting here",
  },
  ifYouAreDriving: {
    "en-GB": "If you are driving, the M6 is the closest motorway to Arkholme.",
    "de-AT": "Für Autofahrer ist die M6 die näheste Autobahn zu Arkholme.",
  },
  ifYouComeFromAbroad: {
    "de-AT":
      "Für jene die von weiter weg kommen ist der Manchester Flughafen zu empfehlen.",
    "en-GB":
      "For those who are coming to us from abroad, the closest airport is Manchester Airport.",
  },
  ifYouComeByTrain: {
    "de-AT":
      "Für Zugfahrende ist der Lancaster Bahnof am nähesten, welcher auch Verbindungen zum Manchester Flughafen hat.",
    "en-GB":
      "If you are traveling by train, the closest train station is Lancaster, which also has connections to Manchester Airport.",
  },
  answer: {
    "de-AT": "Deine Antwort:",
    "en-GB": "Your Answer:",
  },
  ceremonyWillBegin: {
    "de-AT":
      "Euer Transport wird zwischen 13:15 Uhr und 13:30 Uhr bei Williamson Park ankommen. Ashton Memorial wird ab 13:30 Uhr unseren Gästen zur Verfügung stehen, wo die Zeremonie um um 14 Uhr beginnen wird. Anschließend gibt es Getränke und ein paar Fotos.",
    "en-GB": `The coaches will arive at Williamson Park between 1:15 and 1:30pm and Ashton Memorial will be available to our guests from 1:30pm. The ceremony will begin at 2pm and will be followed by drinks and photographs.`,
  },
  theCoachWillCollect: {
    "de-AT":
      "Um 15:45 Uhr wird der Transport euch von Williamson Park abholen und zurück zu Arkholme Village Hall bringen, wo die Festlichkeiten um 16:30 Uhr beginnen.",
    "en-GB":
      "The coaches will collect guests from Williamson Park at 3:45pm to return you to Arkholme Village Hall for the reception at 4:30pm.",
  },
  musicForm: {
    "en-GB":
      "There will be an open stage for live music where anyone is welcome to perform. If you would like to perform, please let us know approximately how much time you will need so we can plan accordingly.",
    "de-AT":
      "Es wird eine offene Bühne für Live-Musik geben, wo jeder willkommen ist. Falls du etwas spielen willst, lass uns bitte wissen wie viel Zeit dein Spiel in Anspruch nimmt, damit wir das einplanen können.",
  },
  foodWillBeServed: {
    "de-AT":
      "Um 17 Uhr wird das Essen serviert und musiziert wird ab 19:30 Uhr.",
    "en-GB":
      "Food will be served between 5 and 7pm and live music will start from 7:30pm.",
  },
  parkingHeading: {
    "de-AT": "Parkmöglichkeiten",
    "en-GB": "Parking",
  },
  parking: {
    "de-AT":
      "Es gibt genügend Parkplätze bei Arkholme Village Hall. Wir bitten euch jedoch, wenn möglich, Fahrgemeinschaften zu bilden und Platz zu sparen beim Parken.",
    "en-GB":
      "There is ample parking at Arkolme Village Hall but please car-share where you can and park responsibly.",
  },
  accomodationHeacding: {
    "de-AT": "Unterkunft",
    "en-GB": "Accomodation",
  },
  variousHolidayCottages: {
    "de-AT": "Ferienhäuser in Bentham können gefunden werden auf",
    "en-GB":
      "Various holiday cottages can be found in both High and Low Bentham on",
  },
  theClosestTown: {
    "de-AT":
      "Die näheste Ortschaft zum Hochzeitslokal ist Kirby Lonsdale wo ihr ebenfalls Unterkunftsmöglichkeiten finden könntet.",
    "en-GB":
      "The closest town to the reception venue is Kirby Lonsdale which has various accomodation options.",
  },
  otherPlacesYouCanStay: {
    "de-AT":
      "Andere Orte in der Nähe sind Ingleton, Clapham, Austwick, Caton und Wray. Lancaster bietet weitere Übernachtungsmöglichkeiten, wo es eine vielzahl an Hotels gibt.",
    "en-GB":
      "Other places you can stay close to Bentham include Ingleton, Clapham, Austwick, Caton and Wray. You could also stay in Lancaster which has a range of Hotels including chain Hotels.",
  },
  giftsHeading: {
    "de-AT": "Geschenke",
    "en-GB": "Gifts",
  },
  giftsText: {
    "en-GB":
      "We already have everything that we could possibly need so please don't feel that you need to bring any gifts. Your company is gift enough.",
    "de-AT":
      "Wir haben bereits alles was wir brauchen, also bitte bringt keine Geschenke mit. Eure Anwesenheit ist Geschenk genug, vor allem da viele von euch von weit her kommen.",
  },
  taxiToAndFrom: {
    "en-GB":
      "If you would like to arrange a taxi to get you to and/or from Arkholme Village Hall, here are some local taxi services. However there are more in the area if you would like to find one closer to where you'll be staying.",
    "de-AT":
      "Hier sind ein paar lokale Taxiunternehmen falls ihr ein Taxi zu Arkholme Village Hall nehmen möchtet.",
  },
  forThoseWithCaravans: {
    "de-AT": "für Gäste mit Wohnwägen",
    "en-GB": "for those with caravans",
  },
  accomodationText: {
    "de-AT":
      "Es gibt viele Übernachtungsmöglichkeiten in der Umgebung. Wir werden bei Familie in High Bentham übernachten. Hier sind ein paar Vorschläge in Nähe Bentham:",
    "en-GB":
      "There are various options in the local area. We will be staying with family in High Bentham. High Bentham accomodation includes:",
  },
  receptionWillEnd: {
    "de-AT": "Die Feier endet um 23 Uhr.",
    "en-GB": "The reception will end at 11pm.",
  },
  arrivingAtAshtonMemorial: {
    "de-AT": "Ankunft bei Ashton Memorial 13:30 Uhr",
    "en-GB": "Arriving at Ashton Memorial 1:30pm",
  },
  pleaseArriveAtSingular: {
    "de-AT": "Bitte sei bei ",
    "en-GB": "Please arrive at ",
  },
  pleaseArriveAtPlural: {
    "de-AT": "Bitte seid bei ",
    "en-GB": "Please arrive at ",
  },
  coachesWillLeaveAt: {
    "de-AT":
      "Der Gästetransport wird um 12:45 Uhr von der Arkholme Village Hall abfahren, um euch zur Zeremonie bei Ashton Memorial, Williamson Park, Quernmore Road, Lancaster LA1 1UX zu bringen.",
    "en-GB":
      "Coaches will be leaving from Arkholme Village Hall at 12:45 noon to take guests to the ceremony venue at Ashton Memorial, Williamson Park, Quernmore Road, Lancaster LA1 1UX.",
  },
  at12Pm: {
    "de-AT": "um 12:30, am Donnerstag den 15ten August",
    "en-GB": "at 12:30 noon on Thursday 15th of August",
  },
  theEvent: {
    "de-AT": "Die Veranstaltung",
    "en-GB": "The Event",
  },
  yes: {
    "de-AT": "Ja natürlich!",
    "en-GB": "Yes I'd love to!",
  },
  no: {
    "de-AT": "Leider nein",
    "en-GB": "Unfortunately not",
  },
  nachricht: {
    "de-AT": "Deine Nachricht an uns",
    "en-GB": "Your message to us",
  },
  inviteAccepted: {
    "de-AT": "Einladung angenommen: Ja",
    "en-GB": "Invite accepted: Yes",
  },
  submitAnswer: {
    "de-AT": "Antwort speichern",
    "en-GB": "Submit answer",
  },
  notFoundHeader: {
    "de-AT": "Zugang nur für geladene Gäste",
    "en-GB": "Access only for invited guests",
  },
  notFoundText: {
    "de-AT":
      "Falls du eine Einladung erhalten hast, benutze bitte den originalen Link oder meld dich bei uns.",
    "en-GB":
      "If you have received an invitation, please use the original link or contact us.",
  },
  plusOne: {
    "de-AT": "Begleitung",
    "en-GB": "Plus one",
  },
  musicHeading: {
    "de-AT": "Musik",
    "en-GB": "Music",
  },
  musicInfo: {
    "en-GB": `There will be an open stage for live music or acts of any other kind and we encourage anyone who wishes to perform to do so! If you would like to perform, please let us know approximately how much time you will need so we can plan accordingly.

An e-piano, a drum-kit, a guitar and a bass-guitar will be available as well as a few microphones.`,
    "de-AT": `Es wird eine offene Bühne für Live-Musik oder Aufführungen anderer Art geben, wo jeder willkommen ist. Wir bitten darum das ihr uns im vorhinein bescheid sagt über die Länge eurer Aufführung damit wir das einplanen können.

Ein E-Piano, ein Schlagzeug, eine Gitarre und eine Bass-Gitarre stehen zur Verfügung, sowie ein paar Standmikrofone.`,
  },
  dietaryRequirementsSingle: {
    "de-AT":
      "Falls du gewisse Ernährungsbedürfnisse hast, gib diese bitte hier ein.",
    "en-GB": "If you have any dietary requirements, please enter them here.",
  },
  dietaryRrequirementsPlural: {
    "en-GB":
      "If any of you have any dietary requirements please detail them here.",
    "de-AT":
      "Falls ihr gewisse Ernährungsbedürfnisse habt, gebt diese bitte hier ein.",
  },
  allergiesSingle: {
    "de-AT": "Falls du Allergien hast, gib diese bitte hier ein.",
    "en-GB": "If you have any allergies, please enter them here.",
  },
  allergiesPlural: {
    "en-GB": "If any of you have any allergies please detail them here.",
    "de-AT": "Falls ihr Allergien habt, gebt diese bitte hier ein.",
  },
  hello: {
    "de-AT": "Hallo",
    "en-GB": "Hello",
  },
  acceptedSingle: {
    "en-GB":
      "We are so pleased you can make it to our wedding and are looking forward to sharing our day with you.",
    "de-AT":
      "Wir freuen uns sehr das du es schaffst dabei zu sein und mit uns feiern wirst.",
  },
  infoSingle: {
    "de-AT":
      "Wir freuen uns, dich bei unserer Hochzeit dabei zu haben. Wir werden dich in den nächsten Monaten auf dem Laufenden halten.",
    "en-GB":
      "We are happy to have you at our wedding. We will keep you posted in the coming months.",
  },
  acceptedPlural: {
    "de-AT":
      "Wir freuen uns sehr das ihr es schafft dabei zu sein und mit uns feiern werdet.",
    "en-GB":
      "We are so pleased you can make it to our wedding and are looking forward to sharing our day with you.",
  },
  infoPlural: {
    "de-AT":
      "Wir freuen uns, euch bei unserer Hochzeit dabei zu haben. Wir werden euch in den nächsten Monaten auf dem Laufenden halten.",
    "en-GB":
      "We are happy to have you at our wedding. We will keep you posted in the coming months.",
  },
  yourAnswersSingle: {
    "de-AT": "Falls du etwas an deiner Antwort ändern möchest, bitte ",
    "en-GB": "If you would like to change anything about your answer, please ",
  },
  yourAnswersPlural: {
    "de-AT": "Falls ihr etwas an eurer Antwort ändern möchtet, bitte ",
    "en-GB": "If you would like to change anything about your answer, please ",
  },
  yourAllergies: {
    "de-AT": "Allergien",
    "en-GB": "allergies",
  },
  yourDietaryRequirements: {
    "de-AT": "Ernährungsbedürfnisse",
    "en-GB": "Dietary requirements",
  },
  yourPlusOne: {
    "de-AT": "Begleitung",
    "en-GB": "Plus one",
  },
  edit: {
    "de-AT": "hier klicken.",
    "en-GB": "click here.",
  },
} as const;

export const lang = (key: keyof typeof dict, locale: keyof Item) => {
  return dict[key][locale];
};