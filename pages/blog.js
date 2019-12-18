import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => (
	<li>
		<Link as={slug} href={`/post?title=${title}`}>
			<a>{title}</a>
		</Link>
	</li>
)

export default () => (
	<Layout title="Blog">
		<ul>
			<PostLink slug="isomorphic-react" title="Isomorphic React" />
			<PostLink slug="server-side-rendering" title="Server-Side Rendering" />
			<PostLink slug="good-seo" title="Good SEO" />
		</ul>
	</Layout>
)