import { Fragment } from 'react/';

import MealList from './MealItems/MealList';

import classes from './Meals.module.css';

const Meals = props => {
  return <Fragment>
    <h2 className={classes.heading}>BUY YOUR FAVORITE PRODUCTS</h2>
    <MealList />
  </Fragment>
};

export default Meals;