import db from '../db/client.js';

export async function seedProperties() {
  try {
    await db.query('TRUNCATE properties RESTART IDENTITY CASCADE');
    await db.query(`
      INSERT INTO properties (index, name, description)
      VALUES
        (
          'ammunition', 'Ammunition',
          ARRAY[
            'You can use this weapon to make a ranged attack only if you have ammunition to fire.',
            'Drawing the ammunition is part of the attack.',
            'At the end of the battle, you can recover half your expended ammunition.'
          ]
        ),
        (
          'finesse', 'Finesse',
          ARRAY[
            'When making an attack with a finesse weapon, you use your choice of Strength or Dexterity for the attack and damage rolls.',
            'You must use the same ability for both rolls.'
          ]
        ),
        (
          'heavy', 'Heavy',
          ARRAY[
            'Small creatures have disadvantage on attack rolls with heavy weapons.',
            'A heavy weapon is too large for a Small creature to use effectively.'
          ]
        ),
        (
          'light', 'Light',
          ARRAY[
            'A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.'
          ]
        ),
        (
          'loading', 'Loading',
          ARRAY[
            'Because of the time required to load this weapon, you can fire only one piece of ammunition when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.'
          ]
        ),
        (
          'reach', 'Reach',
          ARRAY[
            'This weapon adds 5 feet to your reach when you attack with it.',
            'This property also determines your reach for opportunity attacks with the weapon.'
          ]
        ),
        (
          'special', 'Special',
          ARRAY[
            'A weapon with the special property has unusual rules governing its use, explained in the weapon’s description.'
          ]
        ),
        (
          'thrown', 'Thrown',
          ARRAY[
            'If a weapon has the thrown property, you can throw the weapon to make a ranged attack.',
            'If the weapon is a melee weapon, use the same ability modifier for that attack and damage roll that you would use for a melee attack with the weapon.'
          ]
        ),
        (
          'two-handed', 'Two-Handed',
          ARRAY[
            'This weapon requires two hands when you attack with it.'
          ]
        ),
        (
          'versatile', 'Versatile',
          ARRAY[
            'This weapon can be used with one or two hands.',
            'A damage value in parentheses appears with the property — this is the damage when the weapon is used with two hands.'
          ]
        )
    `);
    console.log('✅ Properties seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding properties: ', err);
  }
}

seedProperties();