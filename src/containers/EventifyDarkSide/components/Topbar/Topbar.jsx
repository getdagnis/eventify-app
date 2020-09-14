import React from 'react';
import { Link } from 'react-router-dom';

import css from './Topbar.css';
import { SearchField } from '../SearchField/SearchField.jsx';
import { Button } from '../Button/Button';

export class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoIsOpen: false,
    };
    this.toggleBtn = this.toggleBtn.bind(this);
  }
  toggleBtn() {
    console.log('toggle');
    this.setState({
      todoIsOpen: !this.state.todoIsOpen,
    });
  }
  render() {
    const { message, title, searchHandle } = this.props;
    const btnLink = this.state.todoIsOpen === false ? '/darkside/todo' : '/darkside';
    const btnTitle = this.state.todoIsOpen === false ? 'TODOs' : 'Categories';
    return (
      <div className={css.darkTopbar}>
        <div className={css.darkTopLeft}>
          <p>
            {message}
            <Link to="/darkside">
              <span className="darkEventifyYellow">{title}</span>
            </Link>
          </p>
        </div>
        <div className={css.darkTopCenter}>
          <SearchField placeHolder="Meklē kategorijās..." handleChange={searchHandle} />
        </div>
        <div className={css.darkTopRight}>
          <Link to={btnLink}>
            <Button title={btnTitle} className={css.smallDarkBtn} onChange={this.toggleBtn} />
          </Link>
        </div>
      </div>
    );
  }
}
