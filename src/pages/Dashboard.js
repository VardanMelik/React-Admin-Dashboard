import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';


import StatusCard from '../components/status-card/StatusCard';

import statusCards from '../assets/JsonData/status-card-data.json'

import Table from '../components/table/Table';

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "John Doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "Frank Iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "Anthony Baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "FRank Iva",
            "order": "110",
            "price": "$10,810"
        },
       
    ]
};

const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => {
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
}


const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enebled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

function Dashboard() {
    return (
        <div>
            <h2 className="page-header">
                Dashboard
            </h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map( (item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}  
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card.full-height">
                        {/* chart */}
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                    

                </div>
                <div className="col-4">
                        <div className="card">
                            <div className="card__header">
                                <h3>
                                    Top customers
                                </h3>
                            </div>
                            <div className="card__body">
                                <Table
                                    headDat={topCustomers.head}
                                    renderHead={(item, index) => renderCustomerHead(item, index)}
                                    bodyData={topCustomers.body}
                                    renderBody={(item, index) => renderCustomerBody(item, index)}
                                />
                            </div>
                            <div className="card__footer">
                                <Link to='/'>View all</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Dashboard
