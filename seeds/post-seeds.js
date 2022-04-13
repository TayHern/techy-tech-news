const { Post } = require('../models');

const postdata = [
  {
    title: 'Why Octane Sucks.',
    post_text: 'This is the first post',
    user_id: 10
  },
  {
    title: 'Why wraiths are toxic.',
    post_text: 'Wraiths are very sweaty players, especially the ones that use the bald headed skin',
    user_id: 5
  },
  {
    title: 'Why Gibraltar needs to be nerfed.',
    post_text: 'Gibraltar has had made ups and downs to his kit. However, he is still at top picks of legends and top pro levels',
    user_id: 3
  },
  {
    title: 'Why Olympus is the best map for ranked players.',
    post_text: 'Olympus has made a strong impression on players and continues to evolve.  There is so many POIs in the map that it has made landing and contesting drops less likely.',
    user_id: 4
  },
  {
    title: 'Nessies Galore.',
    post_text: 'Praise the nessie!',
    user_id: 1
  },
  {
    title: 'Praise the Nessie.',
    post_text: 'I am not even sure why I decided to write about nessie, but here is part 2',
    user_id: 7
  },
  {
    title: 'What is the problem with Stormpoint.',
    post_text: 'Stormpoint map is really bad.  Even I am not sure exaclty what the main reason is.  People complain that the map is too large or there is not enough good loot pools for it to make people want to fight on the map.  Majority of the time, the squads are already down to 8 left by the time the first ring closes and it makes it hard for teams to be able to apply pressure to one another to win the game.',
    user_id: 9
  },
  {
    title: 'Rampage.',
    post_text: 'There is not much to say except that I hate the rampage and so do many others... that is all.',
    user_id: 6
  },
  {
    title: 'Connectivity issues?.',
    post_text: 'There is so many connectivity issues as of lately.  Devs from a kind fan, can you please help us?',
    user_id: 2
  },
  {
    title: 'Shooting for noobs',
    post_text: 'From a high up level player, please go to the firing range and learn your guns.  This will help you be able to apply the gun skills and win your fire fights.',
    user_id: 8
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
