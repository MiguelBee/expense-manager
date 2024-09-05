import React from 'react';
// import './ExpenseEntryItem.css';
import styles from './ExpenseEntryItem.module.css';
import FormattedMoney from './FormattedMoney';
import FormattedDate from './FormattedDate';

class ExpenseEntryItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={ styles.itemStyle }>
				<div><b>Item:</b> <em>{this.props.item.name}</em></div>
				<div><b>Amount</b> <em><FormattedMoney value={this.props.item.amount} /></em></div>
				<div><b>Spend Date:</b> <em><FormattedDate value={this.props.item.spendDate.toString()} /></em></div>
				<div><b>Category:</b> <em>{this.props.item.category}</em></div>
			</div>
		);
	}
}

export default ExpenseEntryItem;