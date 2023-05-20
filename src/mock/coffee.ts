const coffees: {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
  modal: {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
  }
}[] = [
    {
      id: 1,
      tags: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      photo: 'tradicional.png',
      price: 9.9,
      modal: {
        id: 1,
        tags: ['tradicional'],
        name: 'Expresso Tradicional',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'tradicional.png',
        price: 9.9,
      }
    },
    {
      id: 2,
      tags: ['tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      photo: 'americano.png',
      price: 9.9,
      modal: {
        id: 2,
        tags: ['tradicional'],
        name: 'Expresso Americano',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'americano.png',
        price: 9.9,
      }
    },
    {
      id: 3,
      tags: ['tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      photo: 'cremoso.png',
      price: 9.9,
      modal: {
        id: 3,
        tags: ['tradicional'],
        name: 'Expresso Cremoso',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'cremoso.png',
        price: 9.9,
      }
    },
    {
      id: 4,
      tags: ['tradicional', 'gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      photo: 'gelado.png',
      price: 9.9,
      modal: {
        id: 4,
        tags: ['tradicional', 'gelado'],
        name: 'Expresso Gelado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'gelado.png',
        price: 9.9,
      }
    },
    {
      id: 5,
      tags: ['tradicional', 'com leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      photo: 'leite.png',
      price: 9.9,
      modal: {
        id: 5,
        tags: ['tradicional', 'com leite'],
        name: 'Café com Leite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'leite.png',
        price: 9.9,
      }
    },
    {
      id: 6,
      tags: ['tradicional', 'com leite'],
      name: 'Latte',
      description: 'Café com leite quente.',
      price: 9.9,
      photo: 'latte.png',
      modal: {
        id: 6,
        tags: ['tradicional', 'com leite'],
        name: 'Latte',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'latte.png',
        price: 9.9,
      }
    },
    {
      id: 7,
      tags: ['tradicional', 'com leite'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      photo: 'capuccino.png',
      price: 9.9,
      modal: {
        id: 7,
        tags: ['tradicional', 'com leite'],
        name: 'Capuccino',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'capuccino.png',
        price: 9.9,
      }
    },
    {
      id: 8,
      tags: ['tradicional', 'com leite'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      photo: 'macchiato.png',
      price: 9.9,
      modal: {
        id: 8,
        tags: ['tradicional', 'com leite'],
        name: 'Macchiato',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'macchiato.png',
        price: 9.9,
      }
    },
    {
      id: 9,
      tags: ['tradicional', 'com leite'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      photo: 'mocaccino.png',
      price: 9.9,
      modal: {
        id: 9,
        tags: ['tradicional', 'com leite'],
        name: 'Mocaccino',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'mocaccino.png',
        price: 9.9,
      }
    },
    {
      id: 10,
      tags: ['especial', 'com leite'],
      name: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      photo: 'chocolate.png',
      price: 9.9,
      modal: {
        id: 10,
        tags: ['especial', 'com leite'],
        name: 'Chocolate Quente',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'chocolate.png',
        price: 9.9,
      }
    },
    {
      id: 11,
      tags: ['especial', 'alcoólico', 'gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      photo: 'cubano.png',
      price: 9.9,
      modal: {
        id: 11,
        tags: ['especial', 'alcoólico', 'gelado'],
        name: 'Cubano',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'cubano.png',
        price: 9.9,
      },
    },
    {
      id: 12,
      tags: ['especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      photo: 'havaiano.png',
      price: 9.9,
      modal: {
        id: 12,
        tags: ['especial'],
        name: 'Havaiano',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'havaiano.png',
        price: 9.9,
      },
    },
    {
      id: 13,
      tags: ['especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      photo: 'arabe.png',
      price: 9.9,
      modal: {
        id: 13,
        tags: ['especial'],
        name: 'Árabe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'arabe.png',
        price: 9.9,
      },
    },
    {
      id: 14,
      tags: ['especial', 'alcoólico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      photo: 'irlandes.png',
      price: 9.9,
      modal: {
        id: 14,
        tags: ['especial', 'alcoólico'],
        name: 'Irlandês',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
        photo: 'irlandes.png',
        price: 9.9,
      },
    },
  ]

const cappuccinos = [
  {
    id: 1,
    tags: ['tradicional'],
    name: 'Cappuccino Tradicional',
    description: 'O tradicional cappuccino feito com água quente e grãos moídos',
    photo: '../cappuccinos/cappuccino.png',
    price: 12.9,
    modal: {
      id: 1,
      tags: ['tradicional'],
      name: 'Cappuccino Tradicional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
      photo: '../cappuccinos/cappuccino.png',
      price: 12.9,
    },
  },
  {
    id: 2,
    tags: ['tradicional'],
    name: 'Machiato Americano',
    description: 'Machiato diluído, menos intenso que o tradicional',
    photo: '../cappuccinos/machiato.png',
    price: 13.9,
    modal: {
      id: 2,
      tags: ['tradicional'],
      name: 'Machiato Americano',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
      photo: '../cappuccinos/machiato.png',
      price: 13.9,
    },
  },
  {
    id: 3,
    tags: ['tradicional'],
    name: 'Frapuccino Cremoso',
    description: 'frapuccino expresso tradicional com espuma cremosa',
    photo: '../cappuccinos/frapuccino.png',
    price: 4.9,
    modal: {
      id: 3,
      tags: ['tradicional'],
      name: 'Frapuccino Cremoso',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
      photo: '../cappuccinos/frapuccino.png',
      price: 4.9,
    },
  },
]

const cookies = [
  {
    id: 1,
    tags: ['tradicional'],
    name: 'Banana Tradicional',
    description: 'O tradicional cookie',
    photo: '../cookies/banana.png',
    price: 2.9,
    modal: {
      id: 1,
      tags: ['tradicional'],
      name: 'Banana Tradicional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
      photo: '../cookies/banana.png',
      price: 2.9,
    },
  },
  {
    id: 2,
    tags: ['tradicional'],
    name: 'Chocolate Americano',
    description: 'Chocolate menos intenso que o tradicional',
    photo: '../cookies/chocolatee.png',
    price: 5.9,
    modal: {
      id: 2,
      tags: ['tradicional'],
      name: 'Chocolate Americano',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
      photo: '../cookies/chocolatee.png',
      price: 5.9,
    }
  },
  {
    id: 3,
    tags: ['tradicional'],
    name: 'Oreo Cremoso',
    description: 'oreo com espuma cremosa',
    photo: '../cookies/oreo.png',
    price: 8.9,

    modal: {
      id: 3,
      tags: ['tradicional'],
      name: 'Oreo Cremoso',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna nec leo semper, sit amet imperdiet est elementum. Duis ut lacus vitae ante faucibus elementum. Suspendisse potenti. Nunc at odio eu magna consectetur faucibus.',
      photo: '../cookies/oreo.png',
      price: 8.9,
    }
  },
]

const todos = [...coffees, ...cappuccinos, ...cookies]

export const options = [todos, coffees, cappuccinos, cookies]
