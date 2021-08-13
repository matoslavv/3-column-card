import React, { useState } from 'react';
import Card from './app/Card';
import ICategory from './types/car';

const App = (): JSX.Element => {
	const [categories, setCategories] = useState<ICategory[]>([
		{
			title: 'Sedans',
			description:
				'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
			color: 'hsl(31, 77%, 52%)',
		},
		{
			title: 'Suvs',
			description:
				'Take an SUV for its spacious interior, power, and vesatility. Perfect for your next family vacation and off-road adventures.',
			color: 'hsl(184, 100%, 22%)',
		},
		{
			title: 'Luxury',
			description:
				'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
			color: 'hsl(179, 100%, 13%)',
		},
	]);

	return (
		<div className="card-wrapper">
			{categories.map((category: ICategory) => (
				<Card key={category.title} category={category} />
			))}
		</div>
	);
};

export default App;
