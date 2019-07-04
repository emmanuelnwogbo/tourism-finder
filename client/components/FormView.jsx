import React from 'react';

import Form from './Form';

const FormView = (props) => {
  if (props.match.path === '/FormViewRecipe') {
    return (
      <div>
        <h1 className={'form__h1'}>Add New Recipe</h1>
        <Form inputs={['img', 'Recipe name']} btnLabel={'Add recipe'}/>
      </div>
    )
  }

  return (
    <div>
      <h1 className={'form__h1'}>Become a cook</h1>
      <Form inputs={['img', 'Job Title', 'price']} btnLabel={'Submit'}/>
    </div>
  )
}

export default FormView;