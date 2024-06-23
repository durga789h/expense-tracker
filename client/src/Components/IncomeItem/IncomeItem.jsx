import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../../utils/dateFormat';
import { dollar, calender, comment, trash } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
    const categoryIcon = () => {
        // Category Icon function remains the same
    };

    const expenseCatIcon = () => {
        // Expense Category Icon function remains the same
    };

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">{type === 'expense' ? expenseCatIcon() : categoryIcon()}</div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>
                            {dollar} {amount}
                        </p>
                        <p>
                            {calender} {dateFormat(date)}
                        </p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    );
}

const IncomeItemStyled = styled.div`
    /* Tailwind classes integrated into styled-components */
    @media (min-width: 640px) {
        /* Medium screens and up */
        .icon {
            width: 10rem;
            height: 10rem;
        }
        .content {
            h5 {
                font-size: 1.5rem;
            }
        }
    }

    /* Remaining styled-components CSS */
`;

export default IncomeItem;
