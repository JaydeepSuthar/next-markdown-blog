import matter from "gray-matter";
import { readdirSync, readFileSync } from "node:fs";

import { PostMetadata } from "@/types/PostMetadata";

export const getFrontMatter = (fileContent: string) => {
	return matter(fileContent);
};

export const getPostsMetaData = (): PostMetadata[] => {
	const folder = "posts/";
	const files = readdirSync(folder);
	const markdownPosts = files.filter((file) => file.endsWith(".md"));

	const posts = markdownPosts.map((fileName) => {
		const fileContent = readFileSync(`${folder}${fileName}`, "utf-8");
		const matterResult = getFrontMatter(fileContent);

		return {
			title: matterResult.data.title,
			date: matterResult.data.date,
			subtitle: matterResult.data.subtitle,
			slug: fileName.replace(".md", ""),
		};
	});

	return posts;
};

export const getPostContent = (slug: string) => {
	const folder = `posts/`;
	const file = `${folder}${slug}.md`;
	const content = readFileSync(file, "utf-8");

	const result = getFrontMatter(content);

	return result;
};
