type User = {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
};

type Reactions = {
	url: string;
	total_count: number;
	"+1": number;
	"-1": number;
	laugh: number;
	hooray: number;
	confused: number;
	heart: number;
	rocket: number;
	eyes: number;
};

type Issue = {
	url: string;
	repository_url: string;
	labels_url: string;
	comments_url: string;
	events_url: string;
	html_url: string;
	id: number;
	node_id: string;
	number: number;
	title: string;
	user: User;
	labels: string[];
	state: string;
	locked: boolean;
	assignee: null | any; // 이 부분에 assignee의 타입을 정확히 알면 더 좋습니다.
	assignees: any[]; // 이 부분에 assignees의 타입을 정확히 알면 더 좋습니다.
	milestone: null | any; // 이 부분에 milestone의 타입을 정확히 알면 더 좋습니다.
	comments: number;
	created_at: string;
	updated_at: string;
	closed_at: null | string;
	author_association: string;
	active_lock_reason: null | string;
	body: string;
	reactions: Reactions;
	timeline_url: string;
	performed_via_github_app: null | string;
	state_reason: null | string;
};
export type { Issue };
