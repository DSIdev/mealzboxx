import React from "react";
import Scaffold from "../components/shared/Scaffold"
import WelcomeImg from "../assets/img/welcome_small.png"

import { Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";

const styles = {
	img: {
		textAlign: "center",
		marginTop: "10px"
	}
}

export default function () {
	return (
		<Scaffold>
			<Form onSubmit={() => { }} className="login-form">
				<Form.Item>
					<div className="imgWrapper" style={styles.img}>
						<img src={WelcomeImg} alt="Welcome" />
					</div>
				</Form.Item>
				<Form.Item>
					<Input
						prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder="Phone number"
					/>
				</Form.Item>

				<Form.Item>
					<Input
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password"
						placeholder="Password"
					/>
					<a className="login-form-forgot" href="http://google.com">
						Forgot password
          </a>
				</Form.Item>

				<Form.Item>
					<Link to="/home">
						<Button block htmlType="submit" className="login-form-button">
							Log in
          </Button>
					</Link>
					<Button block htmlType="submit" className="login-form-button">
						Sign up
          </Button>
				</Form.Item>
			</Form>
		</Scaffold>
	);
}