import React from 'react';
import ICategory from '../types/car';
import Image from '../images/favicon-32x32.png';

interface Props {
	category: ICategory;
}

const Card = (props: Props): JSX.Element => {
	const { category } = props;

	return (
		<div className="card" style={{ backgroundColor: category.color }}>
			<img src={Image} className="card-img-top" alt="Icon" />
			<div className="card-body">
				<h2 className="card-title">{category.title.toUpperCase()}</h2>
				<p className="card-text">{category.description}</p>
				<a
					href="#"
					className="btn btn-primary"
					style={{ color: category.color }}>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default Card;
