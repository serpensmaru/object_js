import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Character from '../Character';

const nameCharacter = 'Vova';
const bowerman = new Bowerman(nameCharacter, 'Bowerman');
const daemon = new Daemon(nameCharacter, 'Daemon');
const magician = new Magician(nameCharacter, 'Magician');
const swordsman = new Swordsman(nameCharacter, 'Swordsman');
const undead = new Undead(nameCharacter, 'Undead');
const zombie = new Zombie(nameCharacter, 'Zombie');

const listCharacter = [[bowerman, nameCharacter],
  [daemon, nameCharacter],
  [magician, nameCharacter],
  [swordsman, nameCharacter],
  [undead, nameCharacter],
  [zombie, nameCharacter],
];

test.each(listCharacter)('testing name Characters', (character, nameCharacter) => {
  expect(character.name).toBe(nameCharacter);
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
});

test('test level up', () => {
  const c = new Character(nameCharacter, 'Bowerman');
  c.levelUp();
  expect(c.level).toBe(2);
});
test('test damage', () => {
  swordsman.damage(10);
  expect(swordsman.health).toEqual(91);
});

test('test attack+ on level up', () => {
  bowerman.levelUp();
  expect(bowerman.attack).toBe(30);
});

test('test dead', () => {
  swordsman.health = 0;
  expect(swordsman.levelUp).toThrow();
});

test('test hp<0', () => {
  bowerman.damage(999);
  expect(bowerman.health).toBe(0);
});
