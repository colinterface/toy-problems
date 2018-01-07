const taxonomy = {
  animalia: {
    chordata: {
      mammalia: {
        carnivoria: {
          felidae: {
            felis: {
              'f. catus': {
                commonName: 'cat',
                domesticated: true,
                cuteness: 11,
                parasites: [
                  'toxoplasmosis'
                ],
              },
            },
          },
        },
      },
    },
  },
  plantae: {
    angiosperms: {
      eudicots: {
        asterids: {
          lamiales: {
            lamiaceae: {
              nepeta: {
                'n. cataria': {
                  commonName: 'catnip'
                }
              }
            }
          }
        }
      }
    }
  },
  fungi: {
    basidiomycota: {
      agaricomycetes: {
        agaricales: {
          humenogastraceae: {
            psilocybe: {
              'p. cubensis': {
                edible: true,
                psychoactive: true,
              },
            },
          },
        },
      },
    },
  },
};

function getNodeOptions(node = {}) {
  return Object.keys(node);
}

function selectNode(tree = {}, selectionArray = []) {
  return selectionArray.reduce((node, key) => {
    return node[key];
  }, tree);
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const selection = [];
let options = getNodeOptions(selectNode(taxonomy, []));
while (options.length) {
  console.log(`current options: ${options}`);
  console.log('selecting random item');
  selection.push(randomItem(options))
  console.log(`current selection: ${selection}`);
  options = getNodeOptions(selectNode(taxonomy, selection));
}
