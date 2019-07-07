import React, { Suspense, lazy } from 'react';

import PhotoDisplay from './PhotoDisplay';
const SearchPageHeader = lazy(() => import('./SearchPageHeader'));

const FormView = (props) => {
  /*if (props.match.path === '/FormViewRecipe') {
    return (
      <div>
        <Suspense fallback={<div></div>}>
          <SearchPageHeader />
        </Suspense>
        <h1 className={'form__h1'}>Add New Recipe</h1>
        <Form inputs={['img', 'Recipe name']} btnLabel={'Add recipe'}/>
      </div>
    )
  }*/

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <SearchPageHeader />
      </Suspense>
      <h1 className={'form__h1'}>Sign Up</h1>
      <PhotoDisplay 
        inputs={['name', 'email', 'password', 'confirmpassword']}
        btnLabel={'Sign up'}/>
    </div>
  )
}

export default FormView;