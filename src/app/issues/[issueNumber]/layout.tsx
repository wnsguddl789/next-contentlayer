type Props = {
	children: React.ReactNode;
};

export default function IssueDetailPage({ children }: Props) {
	return (
		<div className="max-w-2xl mx-auto py-10 px-4">
			<header>
				<div className="flex items-center justify-between"></div>
			</header>
			<main>{children}</main>
		</div>
	);
}
