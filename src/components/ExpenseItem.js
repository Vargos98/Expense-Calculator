import React from 'react'

import './ExpenseItem.css';

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>October 23rd 2023</div>
            <div className='expense-item__description'>
                <h2>Car insurance</h2>
                <div className='expense-item__price'>$249.67</div>
            </div>
        </div>
    )
}

export default ExpenseItem