async function main() {
	// Get repo and workflow id from args
	const repo = process.argv[2];
	const workflow_id = process.argv[3];

	const results = await fetch(
		`https://api.github.com/repos/jakeklassen/${repo}/actions/workflows/${workflow_id}/runs`,
		{
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
		},
	).then((res) => res.json());

	console.log(results);
}

main();
