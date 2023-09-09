import octokitClient from "@/src/utils/octokitClient";

export default async function ReleasePage() {
	const res = await getReleaseList();

	console.log(res.data);

	return <div className="prose dark:prose-invert">Release Note List</div>;
}

const getReleaseList = async () => {
	return await octokitClient.get("releases");
};
