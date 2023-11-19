import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Boost from 'highcharts/modules/boost'

Boost(Highcharts)

const MyChart = ({ options }) => {
	return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default MyChart
