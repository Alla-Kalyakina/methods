import { Daemon } from '../classes/daemon';

test('classDaemon', () => {
  const daemon = new Daemon('testName', 'Daemon');
  expect(daemon).toEqual({
    name: 'testName',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
