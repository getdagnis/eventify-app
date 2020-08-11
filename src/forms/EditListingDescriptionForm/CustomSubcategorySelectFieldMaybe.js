import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomSubcategorySelectFieldMaybe = props => {
  const { name, id, subcategories, intl } = props;
  const subcategoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.subcategoryLabel',
  });
  const subcategoryPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.subcategoryPlaceholder',
  });
  const subcategoryRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.subcategoryRequired',
    })
  );

  return subcategories ? (
    <FieldSelect
      className={css.category}
      name={name}
      id={id}
      label={subcategoryLabel} // Virsraksts virs kategorijas
      validate={subcategoryRequired}
    >
      <option disabled value="">
        {subcategoryPlaceholder}
      </option>
      {subcategories.map(c => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomSubcategorySelectFieldMaybe;
