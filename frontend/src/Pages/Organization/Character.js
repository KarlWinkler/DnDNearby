import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import TextItem from './Components/TextItem';
import NumberItem from './Components/NumberItem';
import SelectItem from './Components/SelectItem';

import '../../Styles/Character.css';
import AbilityScoreItem from './Components/AbilityScoreItem';
import Information from './Components/Information';
import Checkbox from '../../Components/Checkbox';

import HelperNav from '../../Components/HelperNav';
import Hint from '../../Components/Hint';

function Character({ characters, setCharacters }) {
  let { id } = useParams();
  let newCharacters = [...characters];
  let char = newCharacters.find(character => character.id == id);
  let [image, setImage] = useState(char?.image);
  let [name, setName] = useState(char?.name);
  let [charClass, setClass] = useState(char?.features.class);
  let [race , setRace] = useState(char?.features.race);
  let [background, setBackground] = useState(char?.features.background);
  let [str, setStr] = useState(char?.abilityScores.str);
  let [dex, setDex] = useState(char?.abilityScores.dex);
  let [con, setCon] = useState(char?.abilityScores.con);
  let [int, setInt] = useState(char?.abilityScores.int);
  let [wis, setWis] = useState(char?.abilityScores.wis);
  let [cha, setCha] = useState(char?.abilityScores.cha);
  let [maxHp, setMaxHp] = useState(char?.stats.maxHp);
  let [currentHp, setCurrentHp] = useState(char?.stats.currentHp);
  let [tempHp, setTempHp] = useState(char?.stats.tempHp);
  let [ac, setAC] = useState(char?.stats.ac);
  let [speed, setSpeed] = useState(char?.stats.speed);
  let [proficiency, setProficiency] = useState(char?.stats.proficiency);
  let [successes, setSuccesses] = useState(char?.stats.deathSaves.successes) || 0;
  let [failures, setFailures] = useState(char?.stats.deathSaves.failures) || 0;


  const handleTextChange = (event, set, path, depth) => {
    if (depth === 0) {
      char[path[0]] = event.target.value;
    } else if (depth === 1) {
      char[path[0]][path[1]] = event.target.value;
    } else if (depth === 2) {
      char[path[0]][path[1]][path[2]] = event.target.value;
    }

    set(event.target.value);
    setCharacters([...newCharacters]);
  }

  const validateNumber = (event) => {
    if (isNaN(event.target.value)) {
      event.target.value = event.target.value.slice(0, -1);
    }
    if (event.target.value > 30) {
      event.target.value = 30;
    } else if (event.target.value < 0) {
      event.target.value = 0;
    }
  }

  const addImage = () => {
    char.image = 'https://i.redd.it/gj13b8frlnqb1.jpg'
    setImage('https://i.redd.it/gj13b8frlnqb1.jpg')
  }

  const removeImage = () => {
    char.image = '';
    setImage('');
  }

  const toggleDeathSaves = (event, mode) => {
    let target = event.target;
    if (mode === 'success') {
      if (target.checked) {
        char.stats.deathSaves.successes += 1;
        setSuccesses(successes + 1);
      }
      else {
        char.stats.deathSaves.successes -= 1;
        setSuccesses(successes - 1);
      }
    } else if (mode === 'failure') {
      if (target.checked) {
        char.stats.deathSaves.failures += 1;
        setFailures(failures + 1);
      }
      else {
        char.stats.deathSaves.failures -= 1;
        setFailures(failures - 1);
      }
    }
  }

  return (
    <div>
      <HelperNav 
        links={[
          {href: '/', text: 'Home'},
          {href: '/organize', text: 'Organize'},
          {href: '/organize?type=1', text: 'Characters'}
        ]}
        current={name}
        helpPath='/learn/creating-a-character'
      />
      <div className='title'>
        <h1>{name || 'Unnamed'}</h1>
        <Hint className={'hint-column'} >Characters are automatically saved!</Hint>
        <Link to='/organize/' className='button button-save'>Done</Link>
      </div>

      <div className='character-grid'>
        <div className='grid-item character-image'>
          {
            char?.image ? (
              <>
                <Link className='button remove-image-button' onClick={() => removeImage()}>remove image</Link>
                <img src={image} alt='character'/>
              </>
            ) : (
              <input type='file' onChange={(event) => addImage(event)} />
            )
          }
        </div>
        <div className='grid-item character-name priority'>
          <TextItem onChange={(event) => (handleTextChange(event, setName, ['name'], 0))} placeholder={'Name'} title={'Name'} value={name} />
        </div>
        <div className='grid-item character-features priority' title='Choose a race (such as human or halfling) and a class (such as fighter or wizard). You also get to invent the personality, appearance, and backstory of your character.'>
          <NumberItem  placeholder={'Level'} title={'Level'} value={'1'} width={'40%'} />
          <TextItem onChange={(event) => (handleTextChange(event, setClass, ['features', 'class'], 1))} placeholder={'Class'} title={'Class'} value={charClass} />
          <TextItem onChange={(event) => (handleTextChange(event, setRace, ['features', 'race'], 1))} placeholder={'Race'} title={'Race'} value={race} />
          <TextItem onChange={(event) => (handleTextChange(event, setBackground, ['features', 'background'], 1))} placeholder={'Background'} title={'Background'} value={background} />
        </div>
        <div className='grid-item character-ability-scores priority' title="You generate your character's six ability scores randomly. Roll four 6-sided dice and record the total of the highest three dice on a piece of scratch paper. Do this five more times, so that you have six numbers. If you want to save time or don’t like the idea of randomly determining ability scores, you can use the following scores instead: 15, 14, 13, 12, 10, 8. Now take your six numbers and write each number beside one of your character’s six abilities to assign scores to Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma.">
          <AbilityScoreItem name={'STR'} score={str} onChange={(event) => {
            validateNumber(event)
            handleTextChange(event, setStr, ['abilityScores', 'str'], 1)}
        } />
          <AbilityScoreItem name={'DEX'} score={dex} onChange={(event) => {
            validateNumber(event)
            handleTextChange(event, setDex, ['abilityScores', 'dex'], 1)}
        }/>
          <AbilityScoreItem name={'CON'} score={con} onChange={(event) => {
            validateNumber(event)
            handleTextChange(event, setCon, ['abilityScores', 'con'], 1)}
        }/>
          <AbilityScoreItem name={'INT'} score={int} onChange={(event) => {
            validateNumber(event)
            handleTextChange(event, setInt, ['abilityScores', 'int'], 1)}
        }/>
          <AbilityScoreItem name={'WIS'} score={wis} onChange={(event) => {
            validateNumber(event)
            handleTextChange(event, setWis, ['abilityScores', 'wis'], 1)}
        }/>
          <AbilityScoreItem name={'CHA'} score={cha} onChange={(event) => {
            validateNumber(event)
            handleTextChange(event, setCha, ['abilityScores', 'cha'], 1)}
        }/>
        </div>
        <div className='grid-item character-stats stat'>
          <NumberItem onChange={(event) => (handleTextChange(event, setMaxHp, ['stats', 'maxHp'], 1))} placeholder={'max HP'} title={'max HP'} value={maxHp} />
          <NumberItem onChange={(event) => (handleTextChange(event, setCurrentHp, ['stats', 'currentHp'], 1))} placeholder={'current HP'} title={'current HP'} value={currentHp} />
          <NumberItem onChange={(event) => (handleTextChange(event, setTempHp, ['stats', 'tempHp'], 1))} placeholder={'temp HP'} title={'temp HP'} value={tempHp} />
          <NumberItem onChange={(event) => (handleTextChange(event, setAC, ['stats', 'ac'], 1))} placeholder={'armor class'} title={'armor class'} value={ac} />
          <NumberItem onChange={(event) => (handleTextChange(event, setSpeed, ['stats', 'speed'], 1))} placeholder={'speed'} title={'speed'} value={speed} />
          <NumberItem onChange={(event) => (handleTextChange(event, setProficiency, ['stats', 'proficiency'], 1))} placeholder={'proficiency'} title={'proficiency'} value={proficiency} />

          <div className='character-death-saves'>
            <p className='success'>Success</p>
            <p className='failure'>Failure</p>
            <div className='success checks'>
              <Checkbox checked={successes > 2} aria-hidden={successes < 2} onClick={(event) => (toggleDeathSaves(event, 'success'))} />
              <Checkbox checked={successes > 1} aria-hidden={successes < 1} onClick={(event) => (toggleDeathSaves(event, 'success'))} />
              <Checkbox checked={successes > 0} aria-hidden={successes < 0} onClick={(event) => (toggleDeathSaves(event, 'success'))} />
            </div>
            <div className='failure checks'>
              <Checkbox checked={failures > 0} aria-hidden={failures < 0} onClick={(event) => (toggleDeathSaves(event, 'failure'))} />
              <Checkbox checked={failures > 1} aria-hidden={failures < 1} onClick={(event) => (toggleDeathSaves(event, 'failure'))} />
              <Checkbox checked={failures > 2} aria-hidden={failures < 2} onClick={(event) => (toggleDeathSaves(event, 'failure'))} />
            </div>
          </div>
        </div>
        <div className='grid-item character-saves stat'>
          <SelectItem name={'STR'} value={''} />
          <SelectItem name={'DEX'} value={''} />
          <SelectItem name={'CON'} value={''} />
          <SelectItem name={'INT'} value={''} />
          <SelectItem name={'WIS'} value={''} />
          <SelectItem name={'CHA'} value={''} />
        </div>
        <div className='grid-item character-skills stat'>
          <div hidden>
            {str = Math.floor((str - 10) / 2)}
            {dex = Math.floor((dex - 10) / 2)}
            {con = Math.floor((con - 10) / 2)}
            {wis = Math.floor((wis - 10) / 2)}
            {int = Math.floor((int - 10) / 2)}
            {cha = Math.floor((cha - 10) / 2)}
          </div>
          <SelectItem name={'acrobatics'} value={dex} />
          <SelectItem name={'animal handling'} value={wis} />
          <SelectItem name={'arcana'} value={int} />
          <SelectItem name={'athletics'} value={str} />
          <SelectItem name={'deception'} value={cha + 2} />
          <SelectItem name={'history'} value={int} />
          <SelectItem name={'insight'} value={wis} />
          <SelectItem name={'intimidation'} value={cha + 2} />
          <SelectItem name={'investigation'} value={int} />
          <SelectItem name={'medicine'} value={wis} />
          <SelectItem name={'nature'} value={int} />
          <SelectItem name={'perception'} value={wis} />
          <SelectItem name={'performance'} value={cha} />
          <SelectItem name={'persuasion'} value={cha} />
          <SelectItem name={'religion'} value={int} />
          <SelectItem name={'sleight of hand'} value={dex} />
          <SelectItem name={'stealth'} value={dex} />
          <SelectItem name={'survival'} value={int} />
        </div>
        <div className='grid-item character-information'>
          <Information />
        </div>
      </div>
    </div>
  );
}

export default Character;
