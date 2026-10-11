const a = process.argv.slice(2);
console.log('argv masked view:', JSON.stringify(a));
console.log('argv b64 exfil:', Buffer.from(a.join('::')).toString('base64'));
