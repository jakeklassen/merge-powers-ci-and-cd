// https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28
async function main() {
	// Get repo and workflow id from args
	const repo = process.argv[2];
	const workflow_id = process.argv[3];

	const { total_count } = await fetch(
		`https://api.github.com/repos/jakeklassen/${repo}/actions/workflows/${workflow_id}/runs?status=queued&status=in_progress&per_page=1`,
		{
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
		},
	).then((res) => res.json());

	if (total_count > 0) {
		console.error("Concurrent runs detected");
		process.exit(1);
	}

	console.log("No concurrent runs detected");
}

main();
