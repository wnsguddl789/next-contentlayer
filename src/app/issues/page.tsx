import octokitClient from "@/src/utils/octokitClient";
import type { Issue } from "@/src/types/github.type";
import { formatDate } from "pliny/utils/formatDate";
import Link from "next/link";

export default async function Issue() {
	const { data: issues } = await getIssueList();

	return (
		<div className="prose dark:prose-invert">
			<h2>Issue List</h2>
			{issues.map((issue) => (
				<article key={issue.id}>
					<time dateTime={issue.created_at}>{formatDate(issue.created_at)}</time>
					<Link href={`/issues/${issue.number}`}>
						<h2>{issue.title}</h2>
					</Link>

					{issue.body && <p>{issue.body}</p>}
				</article>
			))}
		</div>
	);
}

const getIssueList = async () => {
	return await octokitClient.get<Issue[]>("issues");
};
