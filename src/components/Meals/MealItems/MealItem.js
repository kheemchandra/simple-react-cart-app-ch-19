import Card from '../../UI/Card';

import classes from './MealItem.module.css';

const MealItem = props => {
  return <li>
    <Card className={classes['meal-item']}>
      <div className={classes['item-left']}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className={classes['item-right']}>
        <span className={classes.price}>${props.price.toFixed(2)}</span>
        <button>Add to Cart</button>
      </div>
    </Card>
  </li>;
};

export default MealItem;