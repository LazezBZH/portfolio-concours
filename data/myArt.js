let myArts = [
  {
    title: "Joie de vivre",
    artName: "happiness",
    artCat: "benefits",
    text: "Ce magnifique sourire sur ce radieux visage est mon oeuvre.",
    effect: "J'existe et l'humain est heureux.",
    tags: ["benefits", "petting", "living", "presence"],
  },
  {
    title: "Source de lien social",
    artName: "social",
    artCat: "benefits",
    text: "Mes humains aiment publier à propos de moi sur les réseaux sociaux.",
    effect: "La popularité de l'humain augmente.",
    tags: ["benefits", "living", "presence"],
  },
  {
    title: "Bien être",
    artName: "wellness",
    artCat: "benefits",
    text: "J'apporte un bien-être fou à mes humains.",
    effect: "Admirez la détente, la zénitude.",
    tags: ["benefits", "petting", "presence"],
  },
  {
    title: "Carton en miettes",
    artName: "cardboard",
    artCat: "destroy",
    text: "J'adore les livraisons Amazon.",
    effect: "Mes humains râlent de devoir nettoyer!",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Cigarette inutilisable",
    artName: "cigarette",
    artCat: "destroy",
    text: "Beurk ça n'était pas bon!",
    effect:
      "L'humain a crié! Je ne comprends pas, une de moins c'est bon pour sa santé!",
    tags: ["destroy", "claws"],
  },
  {
    title: "Décoration cassée",
    artName: "decoration",
    artCat: "destroy",
    text: "Vase hérité de mamy Josette en miette.",
    effect: 'Cris, pleurs..."il valait 300.000€!"',
    tags: ["destroy", "living", "tail"],
  },
  {
    title: "Vaisselle foutue",
    artName: "dishes",
    artCat: "destroy",
    text: "J'aime la destruction de masse.",
    effect: "Pas vraiment content, vous pouvez le deviner.",
    tags: ["destroy", "living", "tail"],
  },
  {
    title: "Révolution!",
    artName: "flag",
    artCat: "destroy",
    text: "Parfois je m'attaque à une nation entière.",
    effect: "On a frolé un confit mondial ce jour-là.",
    tags: ["destroy", "claws"],
  },
  {
    title: "Tu m'as bien vu?",
    artName: "glasses",
    artCat: "destroy",
    text: "Il est fou Aff le Loup!",
    effect: "Heu, ben, pas content.",
    tags: ["destroy", "health", "teeth"],
  },
  {
    title: "Document'Art",
    artName: "paper",
    artCat: "destroy",
    text: "Je ne sais pas lire mais je sais détruire!",
    effect:
      "Ils étaient heureux en fait, c'était le testament de many Josette les déshéritant.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Non mais Allo quoi!",
    artName: "phone",
    artCat: "destroy",
    text: "Savez-vous que mes dents sont plus fortes qu'un écran?",
    effect: "Sa vie était foutue.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Adieu souvenirs",
    artName: "picture",
    artCat: "destroy",
    text: "Destruct'Art photographique.",
    effect: "L'humain a râlé comme toujours.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Quand j'étais petit...",
    artName: "toy",
    artCat: "destroy",
    text: "Je croyais que ça se mangeait!",
    effect: "Le petit humain a beaucoup pleuré.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Another break in the wall",
    artName: "wall",
    artCat: "destroy",
    text: "Cela m'a demandé beaucoup de travail.",
    effect: "Triste, il a ENCORE crié.",
    tags: ["destroy", "claws"],
  },
  {
    title: "Atchoummm!...",
    artName: "allergy",
    artCat: "health",
    text: "Il parait que je suis source d'allergie.",
    effect: 'Il dit un mot bizarre "Atchoummm!" et ses yeux deviennent rouges.',
    tags: ["health", "living", "fur"],
  },
  {
    title: "Aïe!",
    artName: "fracture",
    artCat: "health",
    text: "Parfois, je ne tue pas, je blesse juste.",
    effect: "Je ne l'ai jamais entendu crier autant.",
    tags: ["health", "destroy", "living"],
  },
  {
    title: "à vous rendre fou!",
    artName: "madness",
    artCat: "health",
    text: "Il parait qu'on ne peut pas entrer et sortir en même temps. ",
    effect: "Il va voir un ami à lui qui s'appelle Psy.",
    tags: ["health", "door", "wake"],
  },
  {
    title: "toxo panic!.",
    artName: "pregant",
    artCat: "health",
    text: "Je me demande pourquoi quand l'humaine est pleine elle ne s'occupe plus de moi.",
    effect: "Je lui fais peur.",
    tags: ["health", "poo"],
  },
  {
    title: "je veux dormir",
    artName: "tired",
    artCat: "health",
    text: "J'aime réveiller toute la maison bien avant le lever du soleil.",
    effect: 'Il essaye de faire le lion enfin, il appelle ça "bailler".',
    tags: ["health", "wake"],
  },
  {
    title: "Bob le dob des voisins",
    artName: "dog",
    artCat: "kill",
    text: "M'attaquer à plus gros que moi? No problem.",
    effect: "On a dû déménager.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Pas encore né, déjà tué!",
    artName: "egg",
    artCat: "kill",
    text: "Quelque soit son âge, un bon met est un bon met.",
    effect: "Vous croyez quoi? Il a râlé comme souvent.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Où sont les chips?",
    artName: "fishes",
    artCat: "kill",
    text: "On m'a dit que les anglais aimaient le fish and chips.",
    effect: "En colère, il voulait débuter un élevage.",
    tags: ["kill", "teeth", "claws"],
  },
  {
    title: "R.I.P. Mamy Josette",
    artName: "mamy",
    artCat: "kill",
    text: "Elle était dans l'escalier...moi aussi!",
    effect: "Mamy n'a pas râlé, les héritiers, contents, ont hérité.",
    tags: ["kill", "living"],
  },
  {
    title: "Une souris pas verte...",
    artName: "mouse",
    artCat: "kill",
    text: "Une proie de choix.",
    effect: "Tiens là ils sont contents.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Variations sur un rongeur, la musaraigne.",
    artName: "musaraigne",
    artCat: "kill",
    text: "Ne pas confondre avec une souris!",
    effect: "Ils sont également contents.",
    tags: ["kill", "teeth"],
  },
  {
    title: "J'accepte les cookies",
    artName: "cookie",
    artCat: "rob",
    text: "Hum croquer dans un gâteau que l'humain a fait pour lui.",
    effect: "Pas content, comme d'hab.",
    tags: ["rob", "teeth"],
  },
  {
    title: "carnivore avant tout",
    artName: "meat",
    artCat: "rob",
    text: "La viande, c'est la vie!",
    effect: "Il a crié, il parait que ça n'était pas pour moi.",
    tags: ["rob", "teeth"],
  },
  {
    title: "délice blanc",
    artName: "milk",
    artCat: "rob",
    text: "Manger c'est bien, mais parfois il faut boire.",
    effect:
      "Le petit humain a bien voulu partage et terminé le verre que j'avais commencé.",
    tags: ["rob", "tongue"],
  },
  {
    title: "fan de charcuterie",
    artName: "sausage",
    artCat: "rob",
    text: "Charcuterie, roti, même combat!",
    effect: "Toujours des cris.",
    tags: ["rob", "teeth"],
  },
  {
    title: "mais où s'en vont les chaussettes qu'on ne retrouve jamais?",
    artName: "socks",
    artCat: "rob",
    text: "Text 05",
    effect: "JL'humain les cherche encore...",
    tags: ["rob", "paw"],
  },
];
