import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {
        totalExpenses,
        incomes,
        expenses,
        totalIncome,
        totalBalance,
        getIncomes,
        getExpenses,
    } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 mt-8">
                            <div className="income bg-purple-50 border border-white shadow-lg rounded-lg p-6">
                                <h2 className="text-4xl font-semibold">Total Income</h2>
                                <p className="text-6xl font-bold">
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense bg-purple-50 border border-white shadow-lg rounded-lg p-6">
                                <h2 className="text-4xl font-semibold">Total Expense</h2>
                                <p className="text-6xl font-bold">
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance bg-purple-50 border border-white shadow-lg rounded-lg p-6 col-span-2 md:col-span-1">
                                <h2 className="text-4xl font-semibold">Total Balance</h2>
                                <p className="text-6xl font-bold text-green-600 opacity-60">
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con mt-8 md:mt-0">
                        <History />
                        <h2 className="salary-title mb-4 md:mb-6">Min <span>Salary</span>Max</h2>
                        <div className="salary-item bg-purple-50 border border-white shadow-lg rounded-lg p-6 mb-4 md:mb-6">
                            <p className="font-semibold text-lg">
                                ${Math.min(...incomes.map((item) => item.amount))}
                            </p>
                            <p className="font-semibold text-lg">
                                ${Math.max(...incomes.map((item) => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title mb-4 md:mb-6">Min <span>Expense</span>Max</h2>
                        <div className="salary-item bg-purple-50 border border-white shadow-lg rounded-lg p-6">
                            <p className="font-semibold text-lg">
                                ${Math.min(...expenses.map((item) => item.amount))}
                            </p>
                            <p className="font-semibold text-lg">
                                ${Math.max(...expenses.map((item) => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard;
