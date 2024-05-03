process.stdout.write('what is your name\n');

if (process.stdin.isTTY) {
	process.stdin.on('data', (data) => {
		process.stdout.write(`your name: ${data.toString()}`);
		process.exit();
	});
} else {
	process.stdin.on('data', (data) => {
		process.stdout.write(`your name 2: ${data.toString()}`);
		process.exit();
	});
	process.on('exit', () => {
		process.stdout.write('ended');
	});
}
