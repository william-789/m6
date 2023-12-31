const [user_data] =
  [{
  data: {
    id: 1,
    name: "João"
  },
  favorites: [
    {
      type: "event",
      id: 5,
      image: "assets/images/sonar_24.jpg",
      name: "SONAR 2024",
      date: "sábado 30 set.",
      location: "Pavilhão Carlos Lopes",
    },
    {
      type: "event",
      id: 3,
      image: "assets/images/tomorrowland.jpg",
      name: "Tomorrowland",
      date: "23 Julho 2024, 23h00",
      location: "Main Stage",
    },
    {
      type: "artist",
      id: 1,
      image: "assets/images/amelie.jpg",
      name: "Amelie Lens",
    }
  ],
  payments: [
    {
    id: 11,
    type: "",
    value: 20.00,
    date: "10 setembro 2023",
    state: "Pendente",
    entidade: 21230,
    referencia: "240 210 304"
    },
    {
      id: 10,
      type: "Bilhete",
      value: 35.00,
      date: "15 agosto 2023",
      state: "Completo",
      entidade: 21230,
      referencia: "999 999 999"
    },
    {
      id: 10,
      type: "Carregamento",
      value: 25.00,
      date: "23 março 2023",
      state: "Completo",
      entidade: 21230,
      referencia: "999 999 999"
    },
    {
      id: 10,
      type: "Bilhete",
      value: 45.00,
      date: "8 fevereiro 2023",
      state: "Completo",
      entidade: 21230,
      referencia: "999 999 999"
    }
  ],
  currentEvent: [{
    image: 'assets/images/brunch.jpg',
    name: 'brunch electronik',
    date: 'domingo 17 set.',
    location: 'Tapada da Ajuda',
  }],
  cashless: {
    saldo: 0
  },
  suggestion: [
    {
      image: 'assets/images/brunch.jpg',
      name: 'brunch electronik',
      date: 'domingo 17 set.',
      location: 'Tapada da Ajuda',
      price: 35,
      liked: false
    },
    {
      image: 'assets/images/somnii_23.jpg',
      name: 'somnii 2023',
      date: '14 de dezembro 2023',
      location: 'A definir',
      price: 25,
      liked: false
    }
  ]
}]

export default user_data;