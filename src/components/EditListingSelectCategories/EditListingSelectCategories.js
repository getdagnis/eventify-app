import React, { Component } from 'react';
import { Form as FinalForm } from 'react-final-form';
import CustomCategorySelectFieldMaybe from '../../forms/EditListingDescriptionForm/CustomCategorySelectFieldMaybe';
import { Categories as eventifyCategories } from '../../categories';

class SelectCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: eventifyCategories,
      subCategories: [],
      selectedCategory: 'Izvēlies lielo kategoriju...',
    };
    this.changeHappened = this.changeHappened.bind(this);
  }

  changeHappened(e) {
    this.setState({ selectedCategory: e.target.value });
    console.log('change happened');
    console.log('event', e.target.value);
  }

  render() {
    const {
      categories,
      className,
      disabled,
      ready,
      handleSubmit,
      intl,
      invalid,
      pristine,
      saveActionMsg,
      updated,
      updateInProgress,
      fetchErrors,
    } = this.props;

    return this.state.subCategories.length < 1 ? (
      <CustomCategorySelectFieldMaybe
        id="category"
        name="category"
        categories={this.state.categories}
        changeHandle={this.changeHappened}
        selectedCategory={this.state.selectedCategory}
        intl={intl}
      />
    ) : (
      <React.Fragment>
        <CustomCategorySelectFieldMaybe
          id="category"
          name="category"
          categories={this.state.categories}
          changeHandle={this.changeHappened}
          selectedCategory={this.state.selectedCategory}
          intl={intl}
        />
        <CustomCategorySelectFieldMaybe
          id="subcategory"
          name="subcategory"
          categories={this.state.subCategories}
          intl={intl}
        />
      </React.Fragment>
    );
  }
}

export default SelectCategories;

// {subCat.length > 0 ? (
//   <CustomCategorySelectFieldMaybe id="subcategories" name="subcategories" intl={intl} />
//   ) : (
//   ''
//   )}
//   );
