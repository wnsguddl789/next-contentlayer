import octokitClient from "@/src/utils/octokitClient";
import type { Issue } from "@/src/types/github.type";

import MarkDown from "react-markdown";

type Props = {
	params: { issueNumber: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Issue({ params }: Props) {
	const { data: issue } = await fetchIssueDetail(params.issueNumber);

	return (
		<div className="prose dark:prose-invert">
			<p>Issue Detail</p>
			<p>작성자 : {issue.user.login}</p>
			<img src={issue.user.avatar_url} />
			<MarkDown>{issue.body}</MarkDown>
		</div>
	);
}

const fetchIssueDetail = async (issueNumber: string) => {
	return await octokitClient.get<Issue>(`issues/${issueNumber}`, {
		issue_number: "ISSUE_NUMBER",
	});
};
