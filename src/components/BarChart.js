import React, { Component } from 'react';
import Chart from 'chart.js/auto'
import './BarChart.css'
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined'
import { Bar } from 'react-chartjs-2'
export default class BarChart extends Component {


    render() {
        const data = {
            labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            datasets: [
                {
                    drawBorder: false,
                    barPercentage: 0.2,
                    label: 'Current Week',
                    data: [7, 9, 6, 5, 4, 2, 3],
                    borderColor: ['rgba(197, 230, 237,0.5)', 'rgba(34, 95, 240,0.5)', 'rgba(197, 230, 237,0.5)', 'rgba(197, 230, 237,0.5)', 'rgba(197, 230, 237,0.5)', 'rgba(197, 230, 237,0.5)', 'rgba(197, 230, 237,0.5)'],
                    backgroundColor: ['rgba(197, 230, 237,0.5)', 'rgba(34, 95, 240,0.5)', 'rgba(197, 230, 237,0.5)', 'rgba(197, 230, 237,0.5)', 'rgba(197, 230, 237,0.5)', 'rgba(197, 230, 237,0.5)', 'rgba(197, 230, 237,0.5)'],
                },

            ],

        }
        return (
            <div className="card" style={{ borderRadius: '15px' }}>
                <div className="row row1">
                    <div className="card card1 col-4" style={{ backgroundColor: 'rgb(172, 173, 221)' }}>
                        <AccessTimeOutlinedIcon className="card1Icon" style={{ color: 'rgb(53, 55, 199)' }} />
                        <p className="card1Text">13h <br /><span style={{ color: 'black', fontSize: '10px', fontWeight: 'normal' }}>Time</span></p>
                    </div>
                    <div className="card card1 col-4 offset-3" style={{ backgroundColor: 'rgb(222, 243, 235)' }}>
                        <AccessTimeOutlinedIcon className="card1Icon" style={{ color: 'rgb(10, 134, 93)' }} />
                        <p className="card1Text" style={{ color: 'rgb(10, 134, 93)' }}>188<br /><span style={{ color: 'black', fontSize: '10px', fontWeight: 'normal' }}>Atendeed</span></p>
                    </div>
                </div>
                <div className="row row2">
                    <div className="card card1 col-4" style={{ backgroundColor: 'rgb(248, 232, 250)' }}>
                        <AccessTimeOutlinedIcon className="card1Icon" style={{ color: 'rgb(109, 10, 134)' }} />
                        <p className="card1Text" style={{ color: 'rgb(109, 10, 134)' }}>119 <br /><span style={{ color: 'black', fontSize: '10px', fontWeight: 'normal' }}>Meetings</span></p>
                    </div>
                    <div className="card card1 col-4 offset-3" style={{ backgroundColor: 'rgb(248, 234, 217)' }}>
                        <AccessTimeOutlinedIcon className="card1Icon" style={{ color: 'rgb(226, 124, 29)' }} />
                        <p className="card1Text" style={{ color: 'rgb(226, 124, 29)' }}>41 <br /><span style={{ color: 'black', fontSize: '10px', fontWeight: 'normal' }}>Rejected</span></p>
                    </div>

                </div>

                <Bar data={data} />
            </div>
        )
    }
}
