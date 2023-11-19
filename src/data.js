export const generateSineData = (start, end, step) => {
	const data = []
	for (let x = start; x <= end; x += step) {
		data.push([x, Math.sin(x)])
	}
	return data
}

export const generateData = (count, type = 'random') => {
	const data = []
	for (let i = 0; i < count; i++) {
		data.push(
			type === 'time'
				? [Date.now() + i * 1000, Math.random() * 100]
				: Math.random() * 100
		)
	}
	return data
}
export const chartOptions = (type, data) => {
	return {
		chart: {
			type,
			zoomType: 'x', // Включение горизонтального масштабирования
			panning: true, // Включение панорамирования
			panKey: 'shift', // Панорамирование активируется при удержании клавиши Shift
		},
		series: [{ data }],
		// boost: { useGPUTranslations: true },
	}
}
