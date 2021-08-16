const mockData = [
  {
    id: 1,
    parentId: 0,
    isActive: true,
    balance: '$3,655.34',
    name: 'Yolanda Chavez',
    email: 'yolandachavez@isoplex.com',
  },
  {
    id: 2,
    parentId: 0,
    isActive: true,
    balance: '$1,247.87',
    name: 'Navarro Levy',
    email: 'navarrolevy@isoplex.com',
  },
  {
    id: 3,
    parentId: 2,
    isActive: true,
    balance: '$2,559.85',
    name: 'Wooten Hartman',
    email: 'wootenhartman@isoplex.com',
  },
  {
    id: 4,
    parentId: 3,
    isActive: false,
    balance: '$3,474.20',
    name: 'Mack Hess',
    email: 'mackhess@isoplex.com',
  },
  {
    id: 5,
    parentId: 0,
    isActive: false,
    balance: '$2,231.49',
    name: 'Jocelyn Burch',
    email: 'jocelynburch@isoplex.com',
  },
  {
    id: 6,
    parentId: 5,
    isActive: false,
    balance: '$3,955.44',
    name: 'Prince Daniel',
    email: 'princedaniel@isoplex.com',
  },
  {
    id: 7,
    parentId: 5,
    isActive: false,
    balance: '$1,994.83',
    name: 'Newton Medina',
    email: 'newtonmedina@isoplex.com',
  },
  {
    id: 8,
    parentId: 0,
    isActive: true,
    balance: '$1,311.17',
    name: 'Arnold Steele',
    email: 'arnoldsteele@isoplex.com',
  },
  {
    id: 9,
    parentId: 0,
    isActive: false,
    balance: '$2,313.46',
    name: 'Kitty Glover',
    email: 'kittyglover@isoplex.com',
  },
  {
    id: 10,
    parentId: 9,
    isActive: false,
    balance: '$3,314.14',
    name: 'Pruitt Spencer',
    email: 'pruittspencer@isoplex.com',
  },
  {
    id: 11,
    parentId: 0,
    isActive: false,
    balance: '$1,778.44',
    name: 'Stefanie Quinn',
    email: 'stefaniequinn@isoplex.com',
  },
  {
    id: 12,
    parentId: 0,
    isActive: true,
    balance: '$1,141.37',
    name: 'Fox Mcpherson',
    email: 'foxmcpherson@isoplex.com',
  },
  {
    id: 13,
    parentId: 0,
    isActive: false,
    balance: '$2,662.03',
    name: 'Rodriquez Young',
    email: 'rodriquezyoung@isoplex.com',
  },
  {
    id: 14,
    parentId: 0,
    isActive: false,
    balance: '$2,573.84',
    name: 'Love Byers',
    email: 'lovebyers@isoplex.com',
  },
  {
    id: 15,
    parentId: 14,
    isActive: false,
    balance: '$1,254.07',
    name: 'Banks Short',
    email: 'banksshort@isoplex.com',
  },
  {
    id: 16,
    parentId: 14,
    isActive: true,
    balance: '$3,820.34',
    name: 'Guthrie Brown',
    email: 'guthriebrown@isoplex.com',
  },
  {
    id: 17,
    parentId: 16,
    isActive: true,
    balance: '$2,884.74',
    name: 'Kirsten Mcmahon',
    email: 'kirstenmcmahon@isoplex.com',
  },
  {
    id: 18,
    parentId: 1,
    isActive: false,
    balance: '$1,694.76',
    name: 'Mcbride Sykes',
    email: 'mcbridesykes@isoplex.com',
  },
  {
    id: 19,
    parentId: 1,
    isActive: true,
    balance: '$3,644.56',
    name: 'Juanita Camacho',
    email: 'juanitacamacho@isoplex.com',
  },
  {
    id: 20,
    parentId: 17,
    isActive: false,
    balance: '$1,179.25',
    name: 'Carlene Little',
    email: 'carlenelittle@isoplex.com',
  },
  {
    id: 21,
    parentId: 0,
    isActive: true,
    balance: '$3,506.90',
    name: 'Caitlin Bernard',
    email: 'caitlinbernard@isoplex.com',
  },
  {
    id: 22,
    parentId: 21,
    isActive: false,
    balance: '$2,924.31',
    name: 'Vargas Lowe',
    email: 'vargaslowe@isoplex.com',
  },
  {
    id: 23,
    parentId: 22,
    isActive: false,
    balance: '$1,211.95',
    name: 'Mae Santiago',
    email: 'maesantiago@isoplex.com',
  },
  {
    id: 24,
    parentId: 22,
    isActive: true,
    balance: '$2,959.37',
    name: 'Gallagher Burnett',
    email: 'gallagherburnett@isoplex.com',
  },
  {
    id: 25,
    parentId: 0,
    isActive: false,
    balance: '$1,880.20',
    name: 'Reyna Mayo',
    email: 'reynamayo@isoplex.com',
  },
  {
    id: 26,
    parentId: 0,
    isActive: false,
    balance: '$1,639.69',
    name: 'Hardy Townsend',
    email: 'hardytownsend@isoplex.com',
  },
  {
    id: 27,
    parentId: 0,
    isActive: false,
    balance: '$3,211.26',
    name: 'Cohen Best',
    email: 'cohenbest@isoplex.com',
  },
  {
    id: 28,
    parentId: 27,
    isActive: true,
    balance: '$2,270.94',
    name: 'Sherrie Berger',
    email: 'sherrieberger@isoplex.com',
  },
  {
    id: 29,
    parentId: 27,
    isActive: false,
    balance: '$2,049.45',
    name: 'Gentry Robbins',
    email: 'gentryrobbins@isoplex.com',
  },
  {
    id: 30,
    parentId: 0,
    isActive: true,
    balance: '$1,177.86',
    name: 'Etta Sampson',
    email: 'ettasampson@isoplex.com',
  },
];

const serializeData = mockData.reduce((acc, value) => {
  const { parentId } = value;
  acc[parentId] ? acc[parentId].push(value) : (acc[parentId] = [value]);

  return acc;
}, {});

const table = document.getElementById('example');
const tbody = document.createElement('tbody');

const renderTableRows = (data, className) => {
  return data
    .map((row) => {
      const { id, name, email, balance, isActive, parentId } = row;
      const isHasChild = serializeData.hasOwnProperty(id);

      const trDataAtr = `data-isActive=${isActive} data-parentId=${parentId}`;
      const tdDataAtr = `data-child=${isHasChild} data-id=${id}`;
      const renderChild = isHasChild
        ? renderTableRows(serializeData[id], 'nested hidden')
        : '';

      return `<tr ${trDataAtr} class="${className}">
                <td>${id}</td> 
                <td ${tdDataAtr}>${isHasChild ? '+' : ''}</td> 
                <td>${name}</td>
                <td>${email}</td>
                <td>${balance}</td>
              </tr>
              ${renderChild}`;
    })
    .join('');
};

tbody.innerHTML = renderTableRows(serializeData[0], 'parent');
table.append(tbody);

const checkIsActive = document.getElementById('scales');
const inactiveRowsTable = document.querySelectorAll('tr[data-isactive=false]');

const handlerCheckIsActive = () => {
  inactiveRowsTable.forEach((el) => {
    el.classList.toggle('inactive');
  });
};

checkIsActive.addEventListener('click', handlerCheckIsActive);

const rowsTable = document.querySelectorAll('tr');

const handlerClickRows = (e) => {
  const value = e.currentTarget.dataset.id;

  e.target.innerHTML = e.target.innerHTML === '+' ? '-' : '+';

  rowsTable.forEach((el) => {
    if (el.dataset.parentid === value) {
      el.classList.toggle('hidden');
    }
  });
};

const childRows = document.querySelectorAll('td[data-child=true]');

childRows.forEach((el) => el.addEventListener('click', handlerClickRows));
