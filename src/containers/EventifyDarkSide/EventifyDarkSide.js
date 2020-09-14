import React, { Component } from 'react';
import css from './EventifyDarkSide.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from './EventifyDarkSide.routes';
import { Topbar } from './components/Topbar/Topbar';
import { Categories } from '../../categories';

const EventifyDarkSide = () => {
  const message = 'the.dark.side.of.';
  const title = 'eventify';
  const searchValue = '';
  const categories = Categories;
  const searchHandle = e => this.setState({ searchValue: e.target.value });
  const filteredCategories = categories.filter(
    category =>
      JSON.stringify(category)
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    () => console.log(filteredCategories)
  );

  return (
    <div className={css.darkSideRoot}>
      <BrowserRouter>
        <Topbar searchHandle={searchHandle} message={message} title={title} />
        <Switch>
          {routes.map(({ path, component: C, categories }) => (
            <Route
              exact
              path={path}
              render={props => <C {...props} categories={categories} search={searchValue} />}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// class EventifyDarkSide extends Component {
//   constructor() {
//     super();

//     this.state = {
//       categories: [],
//       message: 'the.dark.side.of.',
//       title: 'eventify',
//       searchValue: '',
//     };
//   }

//   // Local: http://localhost:3000/categories.json
//   // Remote: https://api.jsonbin.io/b/5ef0da8e97cb753b4d15b347
//   // componentDidMount() {
//   //   fetch("http://localhost:3000/categories.json")
//   //     .then((response) => response.json())
//   //     .then((categories) => this.setState({ categories: categories }));
//   // }

//   render() {
// const { searchValue } = this.state;
// const categories = Categories;
// const filteredCategories = categories.filter(
//   category =>
//     JSON.stringify(category)
//       .toLowerCase()
//       .includes(searchValue.toLowerCase()),
//   () => console.log(filteredCategories)
// );
// const searchHandle = e => this.setState({ searchValue: e.target.value });

// const routes = [
//   {
//     path: '/',
//     component: AllCategories,
//     categories: filteredCategories,
//   },
//   {
//     path: '/react-dark-event',
//     component: AllCategories,
//     categories: filteredCategories,
//   },
//   {
//     path: '/categories',
//     component: AllCategories,
//     categories: filteredCategories,
//   },
//   {
//     path: '/singlecategory/:id',
//     component: SingleCategory,
//     categories: filteredCategories,
//   },
//   {
//     path: '/todo',
//     component: Todos,
//     categories: filteredCategories,
//   },
// ];

//     return (
//       <BrowserRouter>
//         <div className="app">
//           <Topbar
//             searchHandle={searchHandle}
//             message={this.state.message}
//             title={this.state.title}
//           />
//           <Switch>
//             {routes.map(({ path, component: C, categories }) => (
//               <Route
//                 exact
//                 path={path}
//                 render={props => (
//                   <C {...props} categories={categories} search={this.state.searchValue} />
//                 )}
//               />
//             ))}
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

export default EventifyDarkSide;

//               <AllCategories categories={ filteredCategories } searchValue= { searchValue } />
