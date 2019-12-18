import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import nprogress from 'nprogress';
import { withRouter } from 'next/router';

Router.onRouteChangeStart = url => {
	// console.log(url)
	nprogress.start();
}
Router.onRouteChangeComplete = () => nprogress.done();
Router.onRouteChangeError = () => nprogress.done();

class Layout extends React.Component {
	render() {
		const { pathname } = this.props.router;
		const { title } = this.props;
		console.log(this.props.router);
		return (
			<div className="root">
				<Head>
					<title>Title</title>
				</Head>
				<header>
					<img src="/logo.png" height="30px" alt="NY LGBT Bar" />
					<Link href="/"><a>Home</a></Link>
					<Link href="about"><a>About</a></Link>
					<Link href="blog"><a>Blog</a></Link>
				</header>
				<h1>{title} ({pathname})</h1>
				{this.props.children}
				<footer>
					<p>&copy; {new Date().getFullYear()}</p>
				</footer>
				<style jsx>{`
				.root {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
				header {
					width: 100%;
					display: flex;
					justify-content: space-around;
					padding: 1em;
					font-size: 1.2rem;
					background: indigo;
				}
				header a {
					color: white;
					text-decoration: none;
				}
				header a:hover {
					color: lightgrey;
					text-decoration: underline;
				}
				footer {
					padding: 1em;
				}
			`}</style>
				<style global jsx>{`
				body {
					margin: 0;
					font-size: 110%;
					background: #f0f0f0;
				}
			`}</style>
			</div>
		)
	}
}

export default withRouter(Layout);