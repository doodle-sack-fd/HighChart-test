import React from 'react'
import MyChart from './MyChart'
import { generateSineData, chartOptions, generateData } from './data'
import SineChart from './Sin'

const App = () => {
	const lineData = generateData(10000)
	const scatterData = generateData(50000)
	const areaData = generateData(10000)
	const sineData = generateSineData(0, 10, 0.1)

	return (
		<div>
			<h1>Highcharts с GPU Ускорением</h1>
			<SineChart />
			<MyChart options={chartOptions('line', sineData)} />
			<MyChart options={chartOptions('scatter', sineData)} />
			<MyChart options={chartOptions('area', sineData)} />
			<MyChart options={chartOptions('line', scatterData)} />
			<MyChart options={chartOptions('line', lineData)} />
			<MyChart options={chartOptions('line', lineData)} />
			<MyChart options={chartOptions('line', areaData)} />
		</div>
	)
}

export default App
