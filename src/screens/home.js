import React from "react";
import { List } from 'antd';
import { Link } from 'react-router-dom';

import Scaffold from "../components/shared/Scaffold"
import HeroCards from "../components/HeroCardList"
import ActionCard from "../components/RoundedCard"

const data = [
	{
		title: 'Design Title 1',
	},
	{
		title: 'Design Title 2',
	},
	{
		title: 'Design Title 3',
	},
	{
		title: 'Design Title 4',
	},
	{
		title: 'Design Title 4',
	},
	{
		title: 'Design Title 4',
	},
	{
		title: 'Design Title 4',
	},
];
export default function () {
	return (
		<Scaffold>
			<HeroCards />
			<Link to="/orders">
				<ActionCard title="Order status variants" message="Click here to see more" fill={true} bg="secondry" />
			</Link>
			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={item => (
					<List.Item>
						<List.Item.Meta
							title={<a href="https://ant.design">{item.title}</a>}
							description="Design, a design language for background applications, is refined by UED Team"
						/>
					</List.Item>
				)}
			/>
		</Scaffold >)
}