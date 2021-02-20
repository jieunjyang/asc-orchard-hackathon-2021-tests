/* eslint-disable no-unused-vars */
const { SPANISH_TO_ENGLISH, TRACK_LIST } = require('./constants.js')

const newSingle = (single) => {
  return `New single ${single} is dropping soon!`
};
// console.log(newSingle('Mood'));

const eresBadBunny = (name) => {
  if (name.toLowerCase() === 'bad bunny') return true;
  return false;
};
// console.log(eresBadBunny('Bd Bunny'));
// console.log(eresBadBunny('BAD BUNNY'));
// console.log(eresBadBunny('BaD bnNy'));

const areYouLil = (name) => {
  // if (name.substring(0, 3) === 'Lil') return true;
  return (name.split(' ')[0] === 'Lil');
  // return false;
};
// console.log(areYouLil('Lil Wayne'));
// console.log(areYouLil('Lil Baby'));
// console.log(areYouLil('DaBaby'));
// console.log(areYouLil('Young Thug'));

const mostViewsThreeVideos = (videoOneViews, videoTwoViews, videoThreeViews) => {
  return Math.max(videoOneViews, videoTwoViews, videoThreeViews);
};
// console.log(mostViewsThreeVideos(1,2,3));

const mostViews = (videoViews) => {
  return Math.max(...videoViews);
};
// console.log(mostViews([1,2,3]));
// console.log(mostViews([5,6,7,8]));

const validateEmail = (email) => {
    if (!(email.includes('@')))
        return 'invalid email';
    if (!(['.com', '.edu', '.net', '.org'].indexOf(email.substring(email.length - 4)) > -1))
        return 'invalid email';
    if (email.split('@')[0] === '')
        return 'invalid email';
    return 'valid email';
};
// console.log(validateEmail('name@gmail.com'));
// console.log(validateEmail('firstname.lastname@oldschool.edu'));
// console.log(validateEmail('@helloworld.org'));

const validateEmailWithMessage = (email) => {
    if (!(email.includes('@')))
        return 'Invalid email: missing an @ symbol.';
    if (!(['.com', '.edu', '.net', '.org'].indexOf(email.substring(email.length - 4)) > -1))
        return 'Invalid email: email address should end with .com, .edu, .net, or .org';
    if (email.split('@')[0] === '')
        return 'Invalid email: missing recipient name.';
    return 'valid email';
};
// console.log(validateEmailWithMessage('name@gmail'));
// console.log(validateEmailWithMessage('firstname.lastname.oldschool.edu'));
// console.log(validateEmailWithMessage('@helloworld.org'));

const getInitials = (name) => {
  const splitName = name.split(' ');
  if (splitName.length === 1)
      return splitName[0].substring(0, 2).toUpperCase();
  if (splitName.length === 2)
      return splitName[0].substring(0, 1) + splitName[1].substring(0, 1);
  if (splitName.length === 3)
      return splitName[0].substring(0, 1) + splitName[1].substring(0, 1) + splitName[2].substring(0, 1);
};
// console.log(getInitials('Jorja Smith'));
// console.log(getInitials('Billie Eilish'));
// console.log(getInitials('Daddy Yankee'));
//
// console.log(getInitials('Ozuna'));
// console.log(getInitials('Lorde'));
// console.log(getInitials('24kgoldn'));
//
// console.log(getInitials('Megan Thee Stallion'));
// console.log(getInitials('Lil Uzi Vert'));
// console.log(getInitials('Run The Jewels'));

const getInitialsOneName = (name) => {
  // insert code
};

const getInitialsLongName = (name) => {
  // insert code
};

const howRepetitiveAreYou = (lyrics, word) => {
  const lyricsArray = lyrics.split(' ');
  let wordCount = 0;
  for (var i = 0; i < lyricsArray.length; i++) {
      if (lyricsArray[i].includes(word))
          wordCount++;
  }
  return wordCount;
};
console.log(howRepetitiveAreYou(`came through drippin' (drip drip)
    came through drippin' (drip drip)
    came through drippin' (drip drip)
    diamonds on my wrist, they drippin' (ice)
    came through drippin' (drip drip)
    came through drippin' (drip drip)
    came through drippin' (drip drip)
    diamonds on my wrist, they drippin' (ice)
    came through drippin' (drip drip)
    came through drippin' (drip drip)
    came through drippin' (drip drip)
    diamonds on my wrist, they drippin' (ice)
    came through drippin' (drip drip)
    came through drippin' (drip drip)
    came through drippin' (drip drip)
    diamonds on my wrist, they drippin' (ice)`,
    'drippin'
));
console.log(howRepetitiveAreYou(`huh, because i'm happy
    clap along if you feel like a room without a roof
    because i'm happy
    clap along if you feel like happiness is the truth
    because i'm happy
    clap along if you know what happiness is to you
    because i'm happy
    clap along if you feel like that's what you wanna do`,
    'happy'
));
// console.log(howRepetitiveAreYou(`work, work, work, work, work, work
//     you see me i be work, work, work, work, work, work
//     you see me do me dirt, dirt, dirt, dirt, dirt, dirt
//     there's something 'bout that work, work, work, work, work, work
//     when you a gon' learn, learn, learn, learn, learn, learn
//     me na care if me tired, tired, tired, tired, tired, tired`,
//     'work'
// ));
// console.log(howRepetitiveAreYou(`work, work, work, work, work, work
//     you see me i be work, work, work, work, work, work
//     you see me do me dirt, dirt, dirt, dirt, dirt, dirt
//     there's something 'bout that work, work, work, work, work, work
//     when you a gon' learn, learn, learn, learn, learn, learn
//     me na care if me tired, tired, tired, tired, tired, tired`,
//     'learn'
// ));
// console.log(howRepetitiveAreYou(`Work, work, work, work, work, work
//     You see me I be work, work, work, work, work, work
//     You see me do me dirt, dirt, dirt, dirt, dirt, dirt
//     There's something 'bout that work, work, work, work, work, work
//     When you a gon' learn, learn, learn, learn, learn, learn
//     Me na care if me tired, tired, tired, tired, tired, tired`,
//     'work'
// ));

const translateThis = (titles) => {
  const spanishToEnglish = SPANISH_TO_ENGLISH;
  const translatedList = [];
  for (let i = 0; i < titles.length; i++) {
      const splitTitle = titles[i].split(' ');
      let translatedTitle = [];
      for (let j = 0; j < splitTitle.length; j++) {
          translatedTitle[j] = spanishToEnglish[splitTitle[j]];
      };
      translatedList.push(translatedTitle.join(" "));
  };
  return translatedList;
};
// console.log(translateThis(['un dia', 'soltera', 'vete', 'la canción']));

const getSingles = (trackList = TRACK_LIST) => {

};

const getUniqueArtists = (trackList = TRACK_LIST) => {
  // insert code
};

const getMostStreamedTrack = (trackList = TRACK_LIST) => {
  // insert code
};

module.exports = {
  newSingle,
  eresBadBunny,
  areYouLil,
  mostViewsThreeVideos,
  mostViews,
  validateEmail,
  validateEmailWithMessage,
  getInitials,
  getInitialsOneName,
  getInitialsLongName,
  howRepetitiveAreYou,
  translateThis,
  getSingles,
  getUniqueArtists,
  getMostStreamedTrack
};
