
export type Item = {
  "en-GB": string;
  "de-AT": string;
};

const dict = {
  and: {
    "de-AT": "und",
    "en-GB": "and",
  },
  dear: {
    "de-AT": "Liebe",
    "en-GB": "Dear",
  },
  invitePlural: {
    "de-AT": "Wir würden uns freuen, dich zu unserer Hochzeit einzuladen",
    "en-GB": "We would love to invite you to our wedding on the",
  },
  inviteSingular: {
    "de-AT": "Wir würden uns freuen, dich zu unserer Hochzeit einzuladen",
    "en-GB": "We would love to invite you to our wedding on the",
  },
  date: {
    "de-AT": "15. August 2024",
    "en-GB": "15th of August 2024",
  },
  timeAndLocation: {
    "de-AT": "um 14 Uhr, Ashton Memorial, Williamson Road, Lancaster LA1 3QA.",
    "en-GB": "at 2pm, Ashton Memorial, Williamson Road, Lancaster LA1 3QA.",
  },
  rsvp: {
    "de-AT": "Bitte bestätige deine Teilnahme bis zum 20. Februar 2024",
    "en-GB": "Please RSVP by the 20th of Febuary 2024",
  },
  answer: {
    "de-AT": "Antwort",
    "en-GB": "Answer",
  },
  yes: {
    "de-AT": "Ja",
    "en-GB": "Yes",
  },
  no: {
    "de-AT": "Nein",
    "en-GB": "No",
  },
  nachricht: {
    "de-AT": "Nachricht",
    "en-GB": "Message",
  },
  submitAnswer: {
    "de-AT": "Antwort senden",
    "en-GB": "Submit Answer",
  },
} as const;

export const lang = (key: keyof typeof dict, locale: keyof Item) => {
  return dict[key][locale];
};