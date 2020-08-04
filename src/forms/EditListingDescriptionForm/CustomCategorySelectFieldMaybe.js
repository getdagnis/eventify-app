import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomCategorySelectFieldMaybe = props => {
  const { name, id, categories, intl, changeHandle } = props;
  const categoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.categoryLabel',
  });
  const categoryPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.categoryPlaceholder',
  });
  const categoryRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.categoryRequired',
    })
  );

  return categories ? (
    <FieldSelect
      className={css.category}
      name={name}
      id={id}
      label={categoryLabel} // Virsraksts virs kategorijas
      validate={categoryRequired}
      onChange={changeHandle}
    >
      <option disabled value="">
        {props.selectedCategory}
      </option>
      {categories.map(c => (
        <option key={c.key} value={c.key}>
          {c.name}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomCategorySelectFieldMaybe;
