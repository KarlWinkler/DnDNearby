import FrozenArcher from '../Art/Frozen_Archer.jpg';
import Goats from '../Art/Goats.jpg';
import king from '../Art/king.jpeg';
import Knights from '../Art/Knights.jpeg';
import Warlock from '../Art/Warlock.jpeg';
import Druid from '../Art/Druid.jpeg';
import Mage from '../Art/Mage.jpeg';
import Dwarves from '../Art/Dwarves.jpeg';

export const rows = [
  { "id": 1, 
    "groupName": "We the North", 
    "owner": "Karl Winkler", 
    "created": "December 11th 2024", 
    "fullness": "5 / 6", 
    "edition": "3.5e", 
    "size": "medium",
    "backgroundImage": FrozenArcher,
    "description": "Hailing from the frostbitten realms of the Icewind Dale, this band of adventurers prides itself on braving the harshest climates to uncover ancient secrets frozen in time.", 
    "experienceLevel": "Intermediate", 
    "campaignType": "combat"
  },

  { "id": 2, 
    "groupName": "Goats Are Us",
    "owner": "Victor Campos", 
    "created": "Ocotber 10th 2010", 
    "fullness": "6 / 7", 
    "size": "medium",
    "edition": "5e",
    "backgroundImage": Goats, 
    "description": "A quirky crew known for their mountainous exploits and affinity for caprine companions, they navigate treacherous peaks with the surefootedness of the goats they befriend.", 
    "experienceLevel": "Intermediate", 
    "campaignType": "mixed"
  },

  { "id": 3, 
    "groupName": "Group 3 the Best Team", 
    "owner": "Braden Benner", 
    "created": "September 9th 2009", 
    "fullness": "8 / 8", 
    "size": "large",
    "edition": "3.5e",
    "backgroundImage": king,
    "description": "With a camaraderie as legendary as their collective skill, this elite assembly of heroes is renowned across lands for completing quests with unparalleled teamwork and strategy.", 
    "experienceLevel": "Beginner", 
    "campaignType": "mixed"
  },

  { "id": 4, 
    "groupName": "Victors People", 
    "owner": "Thamanina Chowdury", 
    "created": "April 3rd 2004", 
    "fullness": "6 / 10", 
    "size": "large",
    "edition": "5e",
    "backgroundImage": Knights,
    "description": " Bound by the leadership of the charismatic Victor, this diverse group unites under one cause—victory over darkness and a steadfast pursuit of justice in a world rife with chaos.", 
    "experienceLevel": "Expert", 
    "campaignType": "combat" 
  },

  { "id": 5, 
    "groupName": "DM the only role", 
    "owner": "Lebron James", 
    "created": "January 2nd 2009", 
    "fullness": "4 / 4", 
    "size": "small",
    "edition": "1e",
    "backgroundImage": Warlock, 
    "description": "This circle of dedicated Dungeon Masters specializes in crafting the most intricate and immersive campaigns, where every twist of fate is more unpredictable than the last.", 
    "experienceLevel": "Beginner", 
    "campaignType": "roleplay"
  },

  { "id": 6, 
    "groupName": "United Druids", 
    "owner": "Cristiano Ronaldo", 
    "created": "June 6th 2001", 
    "fullness": "2 / 3", 
    "size": "small",
    "edition": "1e",
    "backgroundImage": Druid,
    "description": "As protectors of the natural order, the United Druids convene from various groves to channel their ancient magics and preserve the balance of the wilds.",  
    "experienceLevel": "Expert", 
    "campaignType": "roleplay"
  },

  { "id": 7, 
    "groupName": "Spell Casters", 
    "owner": "Todd Howard", 
    "created": "May 18th 2013", 
    "fullness": "11 / 11", 
    "size": "large",
    "edition": "5e",
    "backgroundImage": Mage,
    "description": "Masters of the arcane, this society of mages and sorcerers delves into the fabric of magic to wield spells capable of bending reality to their collective will.", 
    "experienceLevel": "beginner", 
    "campaignType": "mixed"
  },

  { "id": 8, 
    "groupName": "Hell-Divers", 
    "owner": "Elon Musk", 
    "created": "August 209th 2029", 
    "fullness": "3 / 7", 
    "size": "medium",
    "edition": "3.5e",
    "backgroundImage": Dwarves,
    "description": "Fearless to a fault, the Hell-Divers descend into the deepest abysses to confront demonic forces, often returning with tales that tread the line between epic and infernal.",  
    "experienceLevel": "Intermediate", 
    "campaignType": "combat"
  }
]

export default rows;