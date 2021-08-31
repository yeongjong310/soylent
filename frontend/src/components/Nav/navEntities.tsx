interface dropdownContentsType {
  [key: string]: {
    [key: string]: {
      text: string,
      href: string
    }
  }
}

const dropdownContents: dropdownContentsType = {
  'drinks': {
    'shopAll': {
      text: 'Shop All', href: '/collections/all-drinks'
    },
    'completeMeal': {
      text: 'Complete Meal', href: '/collections/all-drinks/complete-meal'
    },
    'completeProtein': {
      text: 'Complete Protein', href: '/collections/complete-protein'
    },
    'completeEnergy': {
      text: 'Complete Energy', href: '/collections/complete-energy'
    },
    'varietySamplerPacks': {
      text: 'Variety / Sampler Packs', href: '/pages/bundles'
    },
  },
  'powders': {
    'shopAll': {
      text: 'Shop All', href: '/collections/all-drinks'
    },
    'giftCards': {
      text: 'Complete Meal', href: '/collections/all-drinks/complete-meal'
    },
    'soylentPowder': {
      text: 'Complete Protein', href: '/collections/complete-protein'
    },
    'blenderBottle': {
      text: 'Complete Energy', href: '/collections/complete-energy'
    },
    'powderScoop': {
      text: 'Variety / Sampler Packs', href: '/pages/bundles'
    },
  },
  'learn': {
    'insights': {
      text: 'Shop All', href: '/collections/all-powders'
    },
    'story': {
      text: 'Complete Meal', href: '/collections/all-drinks/complete-meal'
    },
    'science': {
      text: 'Complete Protein', href: '/collections/complete-protein'
    },
    'mission': {
      text: 'Complete Energy', href: '/collections/complete-energy'
    },
  },
}

type navItemType= {
  id: string,
  text: string,
  href?: string,
  dropdownIds?: {
    imageIds: string[]; // keyof typeof dropdownContents
    textIds: string[]; // keyof typeof dropdownContents;
  }
}

const navItems: navItemType[] = [
  {
    id: 'drinks',
    text: 'DRINKS',
    dropdownIds: {
      imageIds: ['completeMeal', 'completeProtein', 'completeEnergy'],
      textIds: ['shopAll', 'completeMeal', 'completeProtein', 'completeEnergy', 'varietySamplerPacks'],
    }
  },
  {
    id: 'powders',
    text: 'POWDERS',
    dropdownIds: {
      imageIds: ['soylentPowder', 'blenderBottle', 'powderScoop'],
      textIds: ['shopAll', 'giftCards'],
    }
  },
  { id: 'bars', text: 'BARS', href: '#' },
  { id: 'merch', text: 'MERCH', href: '#' },
  { id: 'shopAll', text: 'SHOP ALL', href: '#' },
  {
    id: 'learn',
    text: 'LEARN',
    dropdownIds: {
      imageIds: ['insights', 'story', 'science', 'mission'],
      textIds: [],
    }
  },
]

export default { navItems, dropdownContents };
