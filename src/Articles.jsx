import React from "react";

const articles = [
	{
		key: 0,
		title: "Can we assess span-level relevance with dense embedding models?",
		url: "/articles/qwen3_span_extraction",
		date: "2024-06-01",
	},
];

function Articles() {
	return (
		<div className="flex flex-col gap-4 sm:mt-2">
			{articles.map((article) => (
				<div key={article.key}>
					<a
						href={article.url}
						className="block text-left text-base font-semibold text-white hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{article.title}
					</a>
					<div className="text-left text-xs text-gray-200 mt-1 opacity-70">
						{article.date}
					</div>
				</div>
			))}
		</div>
	);
}

export default Articles;
