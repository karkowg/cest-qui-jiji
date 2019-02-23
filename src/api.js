const stub = [
  {
    title:
      "Studio 1 1/2 &#8211; m&#233;tro St. Michel &#8211; meubl&#233;, r&#233;nov&#233;, rez-de-chauss&#233;",
    link:
      "https://www.kijiji.ca/v-appartement-condo/ville-de-montreal/studio-1-1-2-metro-st-michel-meuble-renove-rez-de-chausse/1416897993",
    description:
      "&#192; louer beau et tranquille 1 &#189; situ&#233; &#224; 5 minutes &#224; pied de la station de m&#233;tro St. Michel. Just vient d&#8217;&#234;tre compl&#232;tement r&#233;nov&#233; avec flambant neuve salle de bain et cuisine! Inclus dans le loyer: &#8226; ...",
    enclosure: {
      $: {
        url:
          "https://i.ebayimg.com/00/s/ODAwWDYwMA==/z/0uIAAOSwJVBccK8Z/$_59.JPG",
        length: "14",
        type: "image/jpeg"
      }
    },
    pubDate: "Sat, 23 Feb 2019 02:28:47 GMT",
    guid:
      "https://www.kijiji.ca/v-appartement-condo/ville-de-montreal/studio-1-1-2-metro-st-michel-meuble-renove-rez-de-chausse/1416897993",
    "dc:date": "2019-02-23T02:28:47Z",
    "geo:lat": "45.55837469999999",
    "geo:long": "-73.5957578",
    "g-core:price": "650.0"
  },
  {
    title: "3 &#189; (chauffage/eau chaude inclus) (Montr&#233;al/Rosemont)",
    link:
      "https://www.kijiji.ca/v-appartement-condo/ville-de-montreal/3-chauffage-eau-chaude-inclus-montreal-rosemont/1416897906",
    description:
      "1 chambre &#224; coucher ferm&#233;e 3i&#232;me &#233;tage (&#233;tage sup&#233;rieur du b&#226;timent) Balcon Bien &#233;clair&#233; Chauffage et eau chaude inclus Cusini&#232;re et r&#233;frig&#233;rateur disponible Buanderie disponible dans l&apos;immeuble ...",
    enclosure: {
      $: {
        url:
          "https://i.ebayimg.com/00/s/ODAwWDQ1MA==/z/iCEAAOSw-1ZccK-Y/$_59.JPG",
        length: "14",
        type: "image/jpeg"
      }
    },
    pubDate: "Sat, 23 Feb 2019 02:28:08 GMT",
    guid:
      "https://www.kijiji.ca/v-appartement-condo/ville-de-montreal/3-chauffage-eau-chaude-inclus-montreal-rosemont/1416897906",
    "dc:date": "2019-02-23T02:28:08Z",
    "geo:lat": "45.5463578",
    "geo:long": "-73.57220099999999",
    "g-core:price": "900.0"
  },
  {
    title: "51/2 for rent",
    link:
      "https://www.kijiji.ca/v-appartement-condo/ville-de-montreal/51-2-for-rent/1416897890",
    description:
      "51/2 for rent , 3 closed bedroom. stove , dryer and washer fridge include. big living room , very quiet no furniture . 900$/ month please call emily 438-9247875 for visiting",
    enclosure: {
      $: {
        url:
          "https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/o0EAAOSwsnNccK8V/$_59.JPG",
        length: "14",
        type: "image/jpeg"
      }
    },
    pubDate: "Sat, 23 Feb 2019 02:28:01 GMT",
    guid:
      "https://www.kijiji.ca/v-appartement-condo/ville-de-montreal/51-2-for-rent/1416897890",
    "dc:date": "2019-02-23T02:28:01Z",
    "geo:lat": "45.4582015",
    "geo:long": "-73.59576659999999",
    "g-core:price": "900.0"
  }
];

export async function fetchListings() {
  return new Promise(resolve => {
    setTimeout(() => resolve(stub), 1500);
  });
}
