import React, { Suspense, lazy } from 'react';

import Form from './Form';
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

const FormView = (props) => {
  if (props.match.path === '/FormViewRecipe') {
    return (
      <div>
        <Suspense fallback={<div></div>}>
          <SearchPageHeader />
        </Suspense>
        <h1 className={'form__h1'}>Add New Recipe</h1>
        <Form inputs={['img', 'Recipe name']} btnLabel={'Add recipe'}/>
      </div>
    )
  }

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <SearchPageHeader />
      </Suspense>
      <h1 className={'form__h1'}>Become a cook</h1>
      <Form inputs={['img', 'Job Title', 'price']} btnLabel={'Submit'}/>
    </div>
  )
}

export default FormView;