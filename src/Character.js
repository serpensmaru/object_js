export default class Character {
  constructor(name, type) {
    const listType = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    this.name = (name.length >= 2 || name.length < 10) ? name : (() => {throw new Error("Длина имени должна быть от 3 до 10 символов");})
    this.type = (listType.includes(type)) ? type : (() => { throw new Error('type: Неизвестный тип персонажа'); })();
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error("Dead Character");
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    this.health = (this.health < 0) ? 0 : this.health;
  }
}
