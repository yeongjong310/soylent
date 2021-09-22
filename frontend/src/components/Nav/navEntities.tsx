export interface navItemType {
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

export interface dropdownItemType {
  text: string;
  description?: string;
  href: string;
  src?: string;
}

interface dropdownContentsType {
  [key: string]: {
    [key: string]: dropdownItemType
  }
}
const dropdownContents: dropdownContentsType = {
  'drinks': {
    'shopAll': {
      text: 'Shop All', href: '/collections/all-drinks'
    },
    'completeMeal': {
      text: 'Complete Meal', 
      description: 'No time, no problem! Complete, drinkable meal.',
      href: '/collections/all-drinks/complete-meal', 
      src: '/assets/images/nav/drinks/complete_meal.png'
    },
    'completeProtein': {
      text: 'Complete Protein', 
      description: 'Smooth and creamy high protein + nutrition.',
      href: '/collections/complete-protein',
      src: '/assets/images/nav/drinks/complete_protein.png'
    },
    'completeEnergy': {
      text: 'Complete Energy', 
      description: 'Brain and body boost without the crash.',
      href: '/collections/complete-energy',
      src: '/assets/images/nav/drinks/complete_energy.png'
    },
    'varietySamplerPacks': {
      text: 'Variety / Sampler Packs', href: '/pages/bundles'
    },
  },
  'powders': {
    'shopAll': {
      text: 'Shop All', href: '/collections/all-powder'
    },
    'giftCards': {
      text: 'Gift Cards', href: '/products/gift-card'
    },
    'soylentPowder': {
      text: 'Soylent Powder', href: '/collections/all-powder',
      src: 'https://cdn.shopify.com/s/files/1/0003/5933/3902/files/Kitchen_IMG_8200-_January_1_500x.png?v=1618525087)'
    },
    'blenderBottle': {
      text: 'Blender Bottle', href: '/products/blender-bottle-24',
      src: 'https://cdn.shopify.com/s/files/1/0003/5933/3902/files/BB_1_Final_500x.png?v=1627317644'
    },
    'powderScoop': {
      text: 'Powder Scoop', href: '/products/scoop',
      src: 'https://cdn.shopify.com/s/files/1/0003/5933/3902/files/scoop_image_500x.png?v=1618939580'
    },
  },
  'learn': {
    'insights': {
      text: 'Insights', href: '/collections/all-powders',
      src: 'https://cdn.shopify.com/s/files/1/0003/5933/3902/files/1110-Soylent_Lifestyle_4_1_500x.png?v=1618525157'
    },
    'story': {
      text: 'Story', href: '/collections/all-drinks/complete-meal',
      src: 'https://cdn.shopify.com/s/files/1/0003/5933/3902/files/Story_500x.png?v=1618936850'
      
    },
    'science': {
      text: 'Science', href: '/collections/complete-protein',
      src: 'https://cdn.shopify.com/s/files/1/0003/5933/3902/files/soy_image_500x.png?v=1618940712'
    },
    'mission': {
      text: 'Mission', href: '/collections/complete-energy',
      src: '	https://cdn.shopify.com/s/files/1/0003/5933/3902/files/Donation_January_IMG_0305-Edit_1_500x.png?v=1618525196'

    },
  },
}

export { navItems, dropdownContents };