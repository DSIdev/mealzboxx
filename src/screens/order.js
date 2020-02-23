import React from "react";
import { Link } from "react-router-dom";

import Scaffold from "../components/shared/Scaffold"
import ActionCard from "../components/RoundedCard"

export default function () {
	return (
		<Scaffold>
			<Link to="/home">
				<ActionCard title="Order status" message="Something went wrong" fill={true} bg="#c00" fg="#fff" />
				<ActionCard title="Order status" message="Dispatching" fill={false} bg="#c00" />
				<ActionCard title="Order status" message="Dispatching" fill={true} bg="secondry" />
				<ActionCard title="Order status" message="On the way" fill={true} bg="primary" fg="#fff" />
			</Link>
		</Scaffold >)
}