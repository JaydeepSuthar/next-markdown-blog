import { PostMetadata } from "@/types/PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
	const data = props;

	return (
		<div className="border border-slate-200 p-4 rounded-md shadow-md bg-white">
			<Link href={`posts/${data.slug}`}>
				<h3 className="font-bold text-violet-600 hover:underline">
					{data.title}
				</h3>
			</Link>
			<p className="text-slate-700">{data.date}</p>
			<p className="text-sm text-slate-400">{data.title}</p>
		</div>
	);
};

export default PostPreview;
