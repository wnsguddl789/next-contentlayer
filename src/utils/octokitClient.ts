import { Octokit } from "@octokit/core";
import { RequestParameters, OctokitResponse } from "@octokit/types";

type OctokitClientConfig = {
	pat: string;
	owner: string;
	repo: string;
};

const defaultOptions = {
	owner: "OWNER",
	repo: "REPO",
	headers: {
		"X-GitHub-Api-Version": "2022-11-28",
	},
};

class OctokitClient {
	octokit: Octokit;
	constructor(private config: OctokitClientConfig) {
		this.octokit = new Octokit({ auth: `${this.config.pat}` });
	}

	public async get<T>(
		endpoint: string,
		options: RequestParameters = defaultOptions
	): Promise<OctokitResponse<T>> {
		return await this.octokit.request(
			`GET /repos/${this.config.owner}/${this.config.repo}/${endpoint}`,
			{ ...defaultOptions, ...options }
		);
	}
}

export default new OctokitClient({
	pat: `${process.env.NEXT_PUBLIC_OCTOKIT_PERSONAL_ACCESS_TOKEN}`,
	owner: `${process.env.NEXT_PUBLIC_OCTOKIT_OWNER}`,
	repo: `${process.env.NEXT_PUBLIC_OCTOKIT_REPO}`,
});
