import { getPostContent, getPostsMetaData } from "@/helpers";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
	const posts = getPostsMetaData();
	return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = (props: any) => {
	const slug = props.params.slug;
	const post = getPostContent(slug);

	return (
		<>
			<h1>{post.data.title}</h1>
			<article className="prose prose-xl">
				<Markdown>{post.content}</Markdown>
			</article>
		</>
	);
};

export default PostPage;
