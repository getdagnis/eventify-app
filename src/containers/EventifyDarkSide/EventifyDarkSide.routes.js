import { AllCategories } from './components/AllCategories/AllCategories.jsx';
import { SingleCategory } from './components/SingleCategory/SingleCategory.jsx';
import { Todos } from './components/Todos/todos';
import { Categories as filteredCategories } from '../../categories';

export const routes = [
  {
    path: '/darkside',
    component: AllCategories,
    categories: filteredCategories,
  },
  {
    path: '/darkside/react-dark-event',
    component: AllCategories,
    categories: filteredCategories,
  },
  {
    path: '/darkside/categories',
    component: AllCategories,
    categories: filteredCategories,
  },
  {
    path: '/darkside/singlecategory/:id',
    component: SingleCategory,
    categories: filteredCategories,
  },
  {
    path: '/darkside/todo',
    component: Todos,
    categories: filteredCategories,
  },
];
