import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { chartOptions, generateSineData } from './data'

// Функция для генерации одной точки синусоиды
const generateSinePoint = x => {
	return [x, Math.sin(x)]
}

const SineChart = () => {
	const [sineData, setSineData] = useState(generateSineData(0, 10, 0.1))
	const [xValue, setXValue] = useState(0) // Начальное значение x для новых точек

	useEffect(() => {
		const interval = setInterval(() => {
			setXValue(x => x + 1) // Увеличиваем x на 0.1
			setSineData(sineData => [...sineData, generateSinePoint(xValue)])
		}, 500)

		return () => clearInterval(interval)
	}, [xValue])

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={chartOptions('line', sineData)}
		/>
	)
}

export default SineChart
