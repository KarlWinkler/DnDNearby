import React, { useState } from "react";

import "../Styles/Home.css"
import board1 from "../Art/Druid.jpeg"
import board2 from "../Art/Dwarves.jpeg"
import board3 from "../Art/Archer.jpeg"
import board4 from "../Art/Mage.jpeg"
import Title from "../Components/Title";
import HelperNav from "../Components/HelperNav";
import LogOut from "./LogOut";
import Post from "./Forums/Components/Post";


function Home({ user, posts, setPosts }) {
  // const boards = [board1, board2, board3, board4];
  // const titles = ["Druids are lowkey the best", "Dwarfs the unspoken kings", "Art by Alley", "Druids are lowkey the best"];
  // const subtitles = ["Druids · Propaganda · IDK", "Dwarfs · Propaganda · kings", "Art · Promotion · creative", "Druids · Propaganda · IDK"];
  // const text = ["Druids in Dungeons & Dragons (D&D) are spellcasters who are deeply connected with the forces of nature. They are versatile characters who can summon the fury of the elements, shape-shift into animals, and cast a variety of spells that allow them to communicate with nature, control the weather, and heal. Druids are often found protecting sacred sites and preserving the natural balance, stepping into an adventurous role when these are threatened.In the game, Druids are known for their unique ability to transform into animals, a feature known as Wild Shape. This ability grows stronger with the character's level, allowing for more powerful and diverse animal shapes, and even elementals at higher levels. Druids also have a special bond with certain sacred plants and woods, which they use as a focus for their spellcasting and to craft items like weapons and shields.",
  // "Dwarves in many fantasy settings, including Dungeons & Dragons, are often portrayed as unspoken kings, embodying the trope of a stoic race that rules deep beneath the mountains. They are known for their craftsmanship, mining expertise, and valor. Dwarven society is usually depicted as a collection of strongholds and kingdoms where each clan or family upholds the honor of its name and the might of its ancestors.<br/> In D&D, Dwarves are steadfast, hardy, and brave. They are a proud people, fond of the traditions and the legacies of their clans. Dwarven kings and leaders often go unspoken in the tales of men, as they dwell beneath the earth, surrounded by the riches of the mines and the forges where legendary weapons and armor are made. They are masters of stone and iron, warriors born, and their halls are said to be filled with the echoes of hammers and the warmth of forge fires.",
  // "Starting as an artist can be an exhilarating yet challenging journey, marked by a personal quest for self-expression and a desire to connect with others through one's art. An emerging artist like Alley is likely at the beginning of this path, navigating the creation of a unique style and voice.",
  // "Druids are considered one of the more versatile classes in D&D, capable of filling various roles in a party thanks to their wide range of spells and abilities. They can serve as a support class, healing allies and controlling the battlefield, or take on a more offensive role by summoning the raw power of nature against their foes."]

  return (
    <>
      {
        user ? (
          <div className="feed">
            <HelperNav links={[]} current='' helpPath='/learn/about-the-site' />
            <Title title={'Home'} />
            {posts.map((post, index) => (
              <Post key={index} post={post} posts={posts} setPosts={setPosts} />
            ))}
          </div>
        ) : (
          <LogOut />
        )
      }
    </>   
  );
}

export default Home;

