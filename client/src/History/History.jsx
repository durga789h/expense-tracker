import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext();

    const [...history] = transactionHistory();

    return (
        <HistoryStyled>
            <h2 className="text-xl sm:text-2xl">Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p
                            className={
                                type === 'expense'
                                    ? 'text-red-500'
                                    : 'text-green-500'
                            }
                        >
                            {title}
                        </p>

                        <p
                            className={
                                type === 'expense'
                                    ? 'text-red-500'
                                    : 'text-green-500'
                            }
                        >
                            {type === 'expense'
                                ? `-${amount <= 0 ? 0 : amount}`
                                : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History;
