import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
import { Component } from 'react';

export default class About extends Component {

	static async getInitialProps() {
		const res = await fetch("https://api.github.com/users/baltazarv");
		const data = await res.json();
		const statusCode = res.status > 200 ? res.status : false;
		return { user: data, statusCode };
	}

	render() {
		const { user } = this.props;
		const { statusCode } = this.props;
		if(statusCode) {
			return <Error statusCode={statusCode} />
		}
		return (
			<Layout title="About">
				<p>{user.name}</p>
				<img src={user.avatar_url} alt={user.name} width="100" />
				{/* {JSON.stringify(user)} */}
			</Layout>
		)
	}
}
