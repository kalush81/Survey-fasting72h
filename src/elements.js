const choices = [
  "zdecydownie tak",
  "tak",
  "trudno powiedzieć",
  "nie",
  "zdecydowanie nie",
];
const choices2 = [
 "nie zauważyłem/am",
  "bezpośrednio po poście",
  "7-14 dni",
  "14-30 dni",
  "więcej niż 30 dni",
];

const isRequired = true;

const elements = [
  {
    type: "checkbox",
    name: "wiek",
    title: "Wiek",
    isRequired,
    choices: ["< 18", "18-30", "30-40", "> 40"],
    maxSelectedChoices: 1,
  },
  {
    type: "checkbox",
    name: "płeć",
    title: "Płeć",
    choices: ["mężczyzna", "kobieta"],
    isRequired,
    maxSelectedChoices: 1,
  },
  {
    type: "text",
    inputType: "number",
    name: "waga w kg",
    title: "Waga ciała w kg",
    validators: [
      {
        type: "numeric",
        minValue: 20,
        maxValue: 200,
      },
    ],
    isRequired,
  },
  {
    type: "text",
    inputType: "number",
    name: "wzrost w cm",
    title: "Wzrost ciała w cm",
    isRequired,
  },
  {
    type: "checkbox",
    name: "zakres uprawniania sportu",
    title: "Zaznacz zakres w jakim uprawiasz sport",
    isRequired,
    choices: ["Rekreacyjnie", "Zawodowo"],
  },
  {
    type: "checkbox",
    name: "czas wysilku w ciagu dnia",
    title: "Ile przeciętnie trwa czas Twojego wysiłku fizycznego w ciągu dnia?",
    isRequired,
    choices: [
      "ponizej 15 minut",
      "15-30 minut",
      "ok 45 min",
      "godzinę",
      "więcej niż godzinę",
    ],
    maxSelectedChoices: 1,
  },
  {
    type: "checkbox",
    name: "rodzaj trenowanego sportu",
    title: "Jaki sport trenujesz? (zaznacz wszystkie pasujące)",
    choices: [
      "gry zespołowe",
      "akrobatyka/ gimnastyka",
      "podnoszenie ciężarów",
      "lekkoatletyka",
      "snowboard/narciarstwo",
      "kolarstwo/jazda na rowerze",
      "biegi długodystansowe",
      "biegi sprinterskie",
      "pływanie",
      "sporty walki",
      "taniec/fitness",
      "pięciobój nowoczesny",
      "kulturystyka/sporty sylwetkowe",
      "crossfit/kalistenika",
    ],
    isRequired,
  },
  {
    type: "checkbox",
    name: "dlaczego stosuje post",
    title: "Dlaczego stosujesz post? (zaznacz wszystkie pasujące)",
    hasOther: true,
    otherText: "inny, podaj powód",
    choices: [
      "Aby schudnąć",
      "Dla zdrowia",
      "Dla pobudzenia mentalnego i fizycznego",
      "Aby wejść w stan ketozy",
      "Aby wywołać proces autofagii, apoptozy",
      "Ze względów religijnych",
      "Zalecenie lekarza",
      "Dla oczyszczenia organizmu z toksyn",
      "Dla poprawy wyglądu",
      "Dla poprawy wyników sportowych",
      "Dla satysfakcji osobistej",
      "Dla poprawy samopoczucia",
      "Dla efektu lekkości w układzie trawiennym",
    ],
  },
  {
    type: "checkbox",
    name: "ilosc przebytych postow",
    title: "Ile razy stosowałeś post trwający 72h?",
    choices: [
      "1 raz",
      "mniej niż 5 razy",
      "mniej niż 10 razy",
      "mniej niż 20 razy",
      "więcej niż 20",
    ],
    maxSelectedChoices: 1,
  },
  {
    type: "radiogroup",
    name: "czy regularnie uprawia posty",
    title: "Czy regularnie stosujesz post?",
    choices: ["tak", "nie"],
    isRequired,
    hasToBeEdited: true,
  },
  {
    type: "dropdown",
    name: "odstep czasowy pomiedzy postami",
    title: "W jakich odstępach czasowych?",
    visibleIf: "{częstotliwosc uprawiania postow} ='tak'",
    choices: [
      "minimum co 2 tygodnie lub częściej",
      "3-4 tygodnie",
      "1-3 miesiące",
      "3-6 miesiące",
      "od pół roku do 1 roku",
    ],
  },
  {
    type: "radiogroup",
    name: "czy byly robione badnia specjalistyczne przed i po poscie",
    title: "Czy przed i po poście badałeś się specjalistycznie? ",
    choices: ["tak", "nie"],
    isRequired,
  },
  {
    type: "radiogroup",
    name: "post wplynal na poprawe wynikow badan specjalistycznych",
    title: "Czy wyniki po poście ulegly poprawie?",
    visibleIf:
      "{czy byly robione badnia specjalistyczne przed i po poscie} = 'tak'",
    choices,
  },
  {
    type: "checkbox",
    name: "typ diety na codzien",
    title: "Jaką dietę stosujesz na codzień?",
    choices: [
      "Dieta ketogeniczna",
      "Dieta meal replacement",
      "Dieta eliminacyjna",
      "Dieta białkowa",
      "Dieta monoskładnikowa",
      "Dieta zdrowotna",
      "Dieta Foot map",
      "Dieta Paleo",
      "Dieta wysokotłuszczowa",
      "Dieta wegetariańska",
      "Dieta warzywno-owocowa",
      "Dieta autorska",
      "Dieta Wegańska",
      "Nie zwracam uwagi na to co jem",
      "Nie mam diety ale staram się jeść racjonalnie",
    ],
    hasOther: true,
    otherText: "inna, podaj jaka",
    isRequired,
  },
  {
    type: "radiogroup",
    name: "Czy wczasie trwania postu podejmujesz aktywność fizyczna?",
    title: "Czy w czasie trwania postu podejmujesz aktywność fizyczną?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na wyniki sportowe",
    title: "Kiedy zauważyłeś/aś poprawę osiąganych wyników sportowych?",
    isRequired,
    choices: choices2,
  },
  {
    type: "radiogroup",
    name: "Czy po poscie zwieksza aktywnosc fizyczna",
    title: "Czy po poście zwiększasz ilość aktywności fizycznej?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name:
      "czy zauwazono wplyw postu na zwiekszenie czasu wykonywania cwiczen podczas sesji treningowej",
    title:
      "Kiedy po poście zauważyłeś/aś, zwiekszenie czasu/liczby powtórzeń ćwiczeń podczas sesji treningowej?",
    isRequired,
    choices: choices2,
  },
  {
    type: "radiogroup",
    name: "czy zauwazono wplyw postu na polepszenie odpornosci na zmeczenia podczas sesji treningpwe",
    title:
      "Czy zauważyłeś/aś, że post polepsza Twoją tolerancję na zmęczenie podczas sesji treningowej?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "czy zauwazono wplyw postu na wytrzymalosc fizyczna",
    title:
      "Czy zauważyłeś/aś, że post wpływa na wytrzymałość Twojego organizmu?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na poprawe kondycji fizycznej",
    title: "Czy zauważyłeś/aś, że post wpływa na poprawę Twojej kondycji fizycznej?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na zwiekszenie sily fizycznej",
    title: "Czy zauważyłeś/aś, że post wpływa na zwiększenie Twojej siły fizycznej?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na zwiekszenie szybkosci i reakcji",
    title: "Czy zauważyłeś/aś, że post wpływa na zwiększenie szybkości reakcji?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na zwiekszenie gietkosci",
    title: "Czy po poście czujesz większą gibkość?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wpływ postu na latwosc budowania masy miesniowej",
    title: "Czy zauważyłeś/aś, że post wpływa na łatwiejsze budowanie masy mieśniowej?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na latwosc utrzymywania tkanki tluszczowej w ciele",
    title:
      "Czy bezpośrednio po poście łatwiej Ci jest utrzymywać poziom tkanki tłuszczowej w ciele?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na zwiekszenie redukcje tkanki tluszczowej w ciele",
    title: "Czy zauważyłeś/aś, że post wpływa na łatwiejszą redukcję tkanki tłuszczowej?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "czy zauwazono wplyw postu na efekt jojo",
    title: "Czy bezpośrednio po poście zauważyłeś/aś wzrost masy ciała — „efekt jojo”?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "czy zauwazono wplyw postu na zwiekszenie motywacji do cwiczen i uprawiania sportu",
    title:
      "Zauważyłeś/aś, że post wpływa na większą motywację i entuzjazm podczas aktywności fizycznej?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na koncentracje podczas cwiczen",
    title:
      "Zauważyłeś/aś, że post wpływa na zwiększoną koncentrację/skupienie na szczegółach podczas treningu?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wpływ postu na rozumienie wskazowek podczas wykonywania cwiczen",
    title:
      "Czy wskazówki/polecenia podczas ćwiczeń są dla Ciebie bardziej klarowne/jasne?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na stan umyslu",
    title: "Czy po poście czujesz się pewniejszy siebie?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na poczucie satysfakcji podczas wykonywania cwiczen",
    title:
      "Czy podczas ćwiczeń/po ćwiczeniach czujesz się bardziej szczęśliwy/ usatysfakcjonowany/spełniony?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na nastroj",
    title: "Kiedy po poście Twój ogólny nastrój uległ poprawie?",
    isRequired,
    choices: choices2,
  },

  {
    type: "radiogroup",
    name: "wplyw postu na zapamietywanie",
    title: "Czy Twoja pamięć uległa poprawie?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na decyzyjnosc i rozwiazywanie problemow",
    title:
      "Czy zauważyłeś/aś, że post wpływa na łatwość podejmowania decyzji, rozwiązywania problemów i lepszą kontrole emocji?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na odczuwanie stresu i radzenie sobie z nim",
    title: "Czy przebyty post zwiększył Twoją odporność na stres?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name:
      "wplyw postu na motywacje do podejmowania nowych wyzwan na rzecz ciala i umyslu",
    title:
      "Czy przebyty post motywuje Cię do podejmowania nowych wyzwań na rzecz własnego ciała i umysłu?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na metabolizm",
    title: "Kiedy po poście zauważyłeś/aś uregulowanie metabolizmu?",
    isRequired,
    choices: choices2,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na jakosc snu",
    title: "Czy zauważyłeś/aś, że post wpływa na polepszenie jakości Twojego snu?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na puls i cisnienie krwi",
    title: "Czy bezpośrednio po poście zauważyłeś/aś poprawę w wynikach ciśnienia krwi i pulsu?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na zmniejszenie problemow zdrowotnych",
    title:
      "Czy wszelkie problemy zdrowotne po przebytym poście zmniejszyły się lub ustały?",
    isRequired,
    choices,
  },
  {
    type: "radiogroup",
    name: "wplyw postu na zmiane nawykow zywieniowych",
    title: "Czy bezpośrednio po poście zmieniłeś/aś swoje nawyki żywieniowe?",
    isRequired,
    choices,
  },
  {
    type: "comment",
    name: "suggestions",
    title:
      "Jeżeli na temat postów masz własne spostrzeżenia lub uwagi, których nie uwzglednia ta ankieta i możesz się z nimi podzielić, wpisz je w polu poniżej",
  },
];

export default elements.map(el => {
  return {
    ...el,
    name: el.title
  }
})
