#!/usr/bin/env node

if (process.argv.length < 5) {
	const options = {formatid: 'gen7randombattle', send: (_t, _d) => {}}
	const p1Options = {
		name: 'Zach',
	};
	const p2Options = {
		name: 'Sasha',
	}
	const battle = new (require('./.sim-dist/battle').Battle)(options);

	battle.setPlayer('p1', p1Options);
	battle.setPlayer('p2', p2Options);
	process.stdout.write(JSON.stringify(battle.toJSON()));
} else {
    const prevState = process.argv[2];
    const p1move = process.argv[3];
    const p2move = process.argv[4];
    const battle = require('./.sim-dist/battle').Battle.fromJSON(JSON.parse(prevState));

    battle.restart((_t, _d) => {});
    battle.choose('p1', p1move);
    battle.choose('p2', p2move);
    process.stdout.write(JSON.stringify(battle.toJSON()));
}

