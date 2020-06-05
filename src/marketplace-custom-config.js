/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'towels',
    label: 'Towels',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'swimming_pool',
    label: 'Swimming pool',
  },
  {
    key: 'own_drinks',
    label: 'Own drinks allowed',
  },
  {
    key: 'jacuzzi',
    label: 'Jacuzzi',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'barbeque',
    label: 'Barbeque',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];

export const categories = [
  { key: 'teltis', label: 'Teltis un nojumes' },
  { key: 'reklama', label: 'Reklāma un norādes' },
  { key: 'tekstils', label: 'Tekstils' },
  { key: 'galdi', label: 'Galda piederumi un dekori' },
  { key: 'ara', label: 'Āra aprīkojums' },
  { key: 'gridas', label: 'Grīdas' },
  { key: 'mebeles', label: 'Mēbeles' },
  { key: 'gaismas', label: 'Gaismas objekti' },
  { key: 'profi', label: 'Profesionāļu serviss' },
  { key: 'tehnika', label: 'Tehniskais aprīkojums' },
  { key: 'razotaji', label: 'Ražotāji un drukātāji' },
  { key: 'telpas', label: 'Telpas un vietas' },
  { key: 'cita', label: 'Cita' },
];

export const teltisSubcategories = [
  { key: 'teltis_lielas', label: 'Lielas teltis' },
  { key: 'teltis_mazas', label: 'Mazas teltis' },
  { key: 'teltis_caurspidigas', label: 'Caurspīdīgas teltis' },
  { key: 'teltis_nestandarta', label: 'Nestandarta nojumes' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
