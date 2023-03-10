const modelView = document.querySelector('model-viewer');
const nFlower = document.querySelector('.name-flower');
const dFlower = document.querySelector('.description');
const imgFlower = document.querySelector('.ar-img');

const nameFlower = [
    "Livelymentum",
    "Pyronium",
    "Stillenia Sylverossa",
    "Authoritus",
    "Cyberflower",
    "Enchantus",
    "Imagineria Playfora",
    "Charmellae Delicatus",
    "Earthea",
    "Empathium"
];

const descriptionFlower = [
    "Your personality flower is Livelymentum. You’re a cheerful and vigorous type with a ‘happy-go-lucky’ attitude that translates into everything you do, from the way you water your flowers to the way you seek out new adventures. You possess a unique ability to show your loved ones what a wonderful kaleidoscope of flowers our world is. Surround yourself with spirited and driven friends who will inspire you and support even your craziest ideas - and say ‘yes’ to everything that makes your leaves flutter.",
    "Your personality flower is Pyronium. You’re an extravagant and adventurous type who easily outshines the crowd. Bold ideas and risky journeys to the edge of the Earth do not frighten you: they become your fuel better than any water or fertilizer can. No one can stop you if you make an informed decision, regardless if it is to run a marathon or conquer the world. However, make sure not to lose all your leaves during the journey. Water yourself 3 times a week, have proper rest under the sun, and don’t forget to nourish yourself regularly.",
    "Your personality flower is Stillenia Sylverossa. You’re a calm and structured person who strives for perfection, and you also have high standards for flowers near you. Hustle and bustle, changes in fertiliser, watering, and humidity levels are not for you. However, don’t spend countless hours in attempts to perfect your leaves; instead, try saying ‘yes’ to new flowers or adventures and be more open-minded about the world - it has so much to offer!",
    "Your personality flower is Authoritus. You’re a persistent and goal-oriented type who achieves the boldest aims by all means. You establish yourself as a resilient and mighty flower who likes to be in control of their neighbours; some weeds are even afraid of you. You never lose your temper, no matter how hard the challenge is - but you also tend to hide your emotions. Watering yourself is essential; but don’t forget to also stay open to other flowers. It will help your bud bloom and add a new meaning to your life.",
    "Your personality flower is Cyberflower. You’re rebellious and unstoppable. Other flowers think that you’re - quite literally - out of this world and share in hushed tones theories on your origins. Late nights, dazzling signs, and insane technological ideas are a part of your daily routine. When flowers around you are bothered with watering or fertilisers, you’re cherishing dreams of space travel and teleportation. After exploring new galaxies, however, don’t forget to get back to earth and take care of your daily routines.",
    "Your personality flower is Enchantus. You are a charming and affectionate type who romanticizes life. Warm and delicate flowers inspire you and fill your heart with joy while arrogant and impulsive neighbours make you wither. Don’t neglect proper watering, choose a sunlit place with a good level of humidity, and surround yourself with flowers that create a welcoming atmosphere.",
    "Your personality flower is Imagineria Playfora. You’re a creative type who thinks outside the box and encourages curiosity in other flowers. Your favourite way of starting a discussion is with a question: ‘What if?’ (‘What if we were human beings, not flowers?’) Your open-mindedness allows you to accept all ideas easily; you are always up for trying new things, from colouring your leaves to adding tea to your pot. Your key to nourishing is listening to your gut feeling (even - especially! - when it comes to watering) and avoiding drafts.",
    "Your personality flower is Charmellae Delicatus. ‘Beauty is in the eyes of the beholder,’ – it’s about you. You’re an enchanting and sophisticated type, the life and soul of any flower party. Your charming smile won’t leave anyone indifferent, everyone treats you with love and respect. However, don’t confide in sweet smiles only. Remember: some flowers are deeper than you can imagine. Stay insightful and pay attention to the sincere people that surround you.",
    "Your personality flower is Earthea. You’re a nature enthusiast with a genuine love for simplicity in details. Sunshine, a warm breeze, green grass, and blooming branches drive your inspiration up and fill you with energy more than any fertiliser can. Meditation and photosynthesizing are the perfect mix that makes you mindful and flourishing.",
    "Your personality flower is Empathium. Every flower growing near you nourishes and flourishes. You happily serve others, making them feel welcomed and loved, whether it’s a prickly cactus or a dainty rose. Carry on radiating your love, warmth, and tenderness, and the world will return them in full. However, don’t forget to take care of yourself: you’re the main source of love and energy for yourself, too. "
];


const scaleModel = [
    "0.9 0.9 0.9", // 1
    "6.0 6.0 6.0", // 2
    "0.05 0.05 0.05", // 3
    "0.18 0.18 0.18", // 4
    "0.5 0.5 0.5", // 5
    "0.5 0.5 0.5", // 6
    "0.05 0.05 0.05", // 7
    "1.0 1.0 1.0",
    "0.3 0.3 0.3", //9
    "1.0 1.0 1.0"
];

const animationName = [
    "Anim Blye",
    "",
    "Armature|ALL",
    "rotate",
    "",
    "",
    "",
    "",
    "",
    ""
];
const defaultScale = modelView.getAttribute('scale');

function pageMove(pageid){
    if(pageid == 1 || pageid == 7){
        document.querySelector('header').style.display = 'flex';
    }
    if(pageid == 0 || pageid == 8){
        document.querySelector('header').style.display = 'none';
    }

    let result = '-' + pageid * 100 + '%'
    wrapper.style.transform = `translateX(${result})`;

    if(pageid == 8){
        const id = cards.result();

        imgFlower.src = "src/flowers/" + id + ".png";

        modelView.iosSrc = "src/models/" + "2" + ".usdz";
        modelView.src = "src/models/" + "2" + ".glb";
        nFlower.innerHTML = nameFlower[id - 1];
        dFlower.innerHTML = descriptionFlower[id - 1];

        if (modelView.hasOwnProperty('setScale')) {
            modelView.setScale(2, 2, 2);
          } else {
            console.error('setScale is not supported in this version of model-viewer');
          }

    }
}

modelView.addEventListener('camera-change', (event) => {
    const modelIsVisible = event.detail && event.detail.plane && event.detail.plane.visible;
    if (modelIsVisible) {
      const animation = modelView.querySelector('#animationId');
      animation.style.display = 'block';
      alert('test');
    }
  });