import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import { GiPocketRadio } from "react-icons/gi";
import corpcommentImg from "/public/corpcomment.png";
import rmtdevImg from "/public/pic1.jpeg";
import businessImg from "/public/business.jpg";
import doctorImg from "/public/doctor.png";
import moneyImg from "/public/money.jpg";
import mediaImg from "/public/media.png";
import webbizImg from "/public/webbiz.png";
import ambassadorImg from "/public/ambassador.jpeg";
import householdImg from "/public/books/household.png";
import hopeImg from "/public/books/hope.png";
import whoImg from "/public/about/who.jpeg";
import mirrorImg from "/public/books/mirror.png";
import deflectionImg from "/public/books/pointofdeflection.png";
import hiddenImg from "/public/books/hidden-self.png";
import unpublishedImg from "/public/books/unpublished.jpeg";
import featuredImg from "/public/books/pointofdeflection2.png";
import wealthImg from "/public/books/wealth.png";
import sexImg from "/public/books/sex.png";
import deflectionArt from "/public/books/nameart/point.png";
import hiddenArt from "/public/books/nameart/hidden.png";
import mirrorArt from "/public/books/nameart/mirror.png";
import hopeArt from "/public/books/nameart/hope.png";
import householdArt from "/public/books/nameart/household.png";
import dashArt from "/public/books/nameart/dash.png";
import anonimousArt from "/public/books/nameart/trek.png";
import sexArt from "/public/books/nameart/sex.png";
import livingArt from "/public/books/nameart/living.png";
import wealthArt from "/public/books/nameart/wealth.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Books",
    hash: "#books",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];
export const experiencesData = [
  {
    title: "Doctor of Philosophy in Management",
    location: "University of New Castle (AIMS) Kuala Lumpur – Malaysia",
    description:
      "as i graduated i was serving as a manager at Savoy Real Estate & Gelato Divino in Mombasa from 2012 to 2016.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Acting manager",
    location: "Alshaya (Debenhams) Mall of Qatar (Doha - Qatar) ",
    description:
      "In charge of cosmetics department.Training & developing staff abilities.Overseeing stocks controller’s work and Initiating business growth.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
  {
    title: " Business Proprietor",
    location: "Dr.Bahaidar Consultancy Ltd Nairobi – Kenya.",
    description:
      "We provide case studies and practical solutions to assist sole proprietors and enterprises streamline operations and achieve thresholds of success.",
    icon: React.createElement(LiaBusinessTimeSolid),
    date: "2021 - present",
  },
  {
    title: " Chief Executive Officer",
    location: "IQRA FM, Nairobi – Kenya.",
    description:
      "Creation of enticing marketing strategies, clearing debts, and resolving management issues at IQRA FM as the CEO.",
    icon: React.createElement(GiPocketRadio),
    date: "2021 - present",
  },
];
export const profilesData = [
  {
    title: "Who is Dr.Bahaidar?...",
    description:
      "My name is Dr. Mohamed Bahaidar and I am currently the Chief Executive Officer (CEO) at 95.0 IQRA FM. I am a comprehensive business analyst and researcher with over 14 years’ experience acquainte  with over 2,000 books in matters concerning philosophy, psychology, meditation, theology, busines modules, leadership, entrepreneurship, management, marketing bravura and social issues. I provide professional business consultancy and solutions to everyday problems. My passion to positively impact my community and region is unending....",
    tags: [
      {
        name: "who is dr bahaidar",
        readMoreLink: "/profiles/who-is-dr-bahaidar",
      },
    ],
    imageUrl: whoImg,
    readMoreLink: "/profiles/who-is-dr-bahaidar",
  },
  {
    title: "My Journey Towards Excellence",
    description:
      "Coming from a childhood riddled with mockery and often being referred to as a failure and good for nothing, I did not let this break me but instead the misconceptions made me desire to succeed. I studied hard and achieved the doctorate level, achieving a PhD in Management from the University of Newcastle. I have always aspired to make a positive difference in my personal pursuit for knowledge and enlightenment of society in general. I am an established author of 5 books published in the United States and the United Kingdom and...",
    tags: [{ name: "my journey", readMoreLink: "/profiles/my-journey" }],
    imageUrl: doctorImg,
    readMoreLink: "/profiles/my-journey",
  },
  {
    title: "BEST SELLLING BOOKS AUTHORED BY DR. BAHAIDAR:",
    description:
      "1.THE POINT OF DEFLECTION   2.THE HIDDEN SELF    3.MIRROR REFLECTIO   4.A HOUSEHOLD OF BLIS      5.SPARKLING HOP       My Mantra in Life:       “Live Each Day with The Hope of a Better Tomorrow”.",
    tags: [
      {
        name: "best selling books",
        readMoreLink: "/profiles/best-selling-books",
      },
    ],
    imageUrl: featuredImg,
    readMoreLink: "/profiles/best-selling-books",
  },
  {
    title: "Conferred the MEENA Brand Award in Muscat, Oman",
    description:
      "The greatest motivation in life is inspiring others to believe in themselves and accomplish the impossible. I have dedicated my life to positively impact others. My disadvantaged background as a slow performer did not deter me from becoming an inspiring author who sees the need to not only motivate but provide pragmatic solutions to the existing complications that affect our lives. I have lived in Qatar for almost four years and was awarded Best Meena Personal Brand Award in....",
    tags: [{ name: "meena award", readMoreLink: "/profiles/meena-award" }],
    imageUrl: rmtdevImg,
    readMoreLink: "/profiles/meena-award",
  },
  {
    title: "Business Consultant Providing Pragmatic & Comprehensive Solutions",
    description:
      " The more I delved into the world of philosophy, psychology and motivational stories the more craving I developed to cover as many more books, which made me recognize the beauty existence has to offer. Through one-on-one engagement in Q&A, my augmented wisdom comprehends how business functions in tandem with society, projections and expectations. It is this backdrop that gave me the aptitude to interact with more than 10,000 people by evaluating....",
    tags: [
      {
        name: "business consultant",
        readMoreLink: "/profiles/business-consultant",
      },
    ],
    imageUrl: moneyImg,
    readMoreLink: "/profiles/business-consultant",
  },
  {
    title: "Founder of Spiderwebbiz Solutions",
    description:
      "A dynamic business that specializes in creating and leveraging interconnected networks to drive growth and success. Inspired by the intricate and efficient design of a spiderweb, we believe in the power of collaboration, partnerships and network effects to unlock new opportunities and achieve outstanding results. I have managed to initiate this innovative and unique concept to offer businesses comprehensive solutions across all platforms shared by partners...",
    tags: [
      {
        name: "founder of spiderwebbiz",
        readMoreLink: "/profiles/founder-of-spiderwebbiz",
      },
    ],
    imageUrl: webbizImg,
    readMoreLink: "/profiles/founder-of-spiderwebbiz",
  },
  {
    title: "CEO of IQRA FM ",
    description:
      "The need to strengthen communication lines and reach out to the masses led me to launching the Dawn of IQRA FM as the current Chief Executive Officer (CEO). 95.0 IQRA FM has established itself as a reputable radio station that reaches a large audience across the Muslim community. The Station has a target audience of 700,000 listeners this includes Nairobi and its environs plus a few other towns within Kenya, a record of 1,500,000 listeners during Ramadhan month. I am fully engaged in the operations and advertising... ",
    tags: [
      { name: "ceo of iqra fm", readMoreLink: "/profiles/ceo-of-iqra-fm" },
    ],
    imageUrl: corpcommentImg,
    readMoreLink: "/profiles/ceo-of-iqra-fm",
  },
  {
    title: "Event Organizer & Brand Ambassador",
    description:
      "I initiate programs and motivational talks to guide the youth towards their future ambitions. Furthermore, I took those who have a talent in singing to studios to ensure they record their music. For dancers and comedians, I introduced a platform called Cheka Na Doctor B where they showcase their talent and are featured in media. media, radio and tv interactions. I aspire to give back to society and make a positive difference. I am an ambassador for hire and represent brands in achieving their advertising and marketing goals. I have a knack....",
    tags: [
      {
        name: "event organizer and brand ambassador",
        readMoreLink: "/profiles/event-organizer-and-brand-ambassador",
      },
    ],
    imageUrl: ambassadorImg,
    readMoreLink: "/profiles/event-organizer-and-brand-ambassador",
  },
  {
    title: "DOCTOR BAHAIDAR CONSULTANCY LIMITED",
    description:
      "Dr. Bahaidar is synonymous with business consultancy, support and training of Small and Medium Businesses (SMEs), individuals and organisations. Doctor Bahaidar Consultancy Ltd adopts the relationship marketing which is vital because it fosters customer loyalty through a healthy relationship that leads to long-term engagement. The company cultivates a working environment characterized by an open flow of information that meets our client needs and interests....",
    tags: [
      {
        name: "dr bahaidar consultancy",
        readMoreLink: "/profiles/dr-bahaidar-consultancy",
      },
    ],
    imageUrl: businessImg,
    readMoreLink: "/profiles/dr-bahaidar-consultancy",
  },
  {
    title: "MEDIA ENGAGEMENTS",
    description:
      "I have been a panelist in Kenya media and ‘Amka na BBC’ program on various social issues. I have also been invited to a number of TV stations such as Citizen, KBC Channel 1, K24 and NTV among others. I have offered consultancy services to ‘Drop of Zanzibar’ a Mineral Water Company and the Debenhams in Qatar. I have been featured in print media.",
    tags: [
      {
        name: "media engagements",
        readMoreLink: "/profiles/media-engagements",
      },
    ],
    imageUrl: mediaImg,
    readMoreLink: "/profiles/media-engagements",
  },
];
export const booksData = [
  {
    titleImageUrl: deflectionArt.src,
    description:
      "The Point of Deflection is a book that gives insight into understanding why people change not only in their behavior but also in their perception. For instance, if you asked a child about his future ambitions, he would be quick to respond with professions they have always looked up to. This could be a doctor, pilot or whatever gives impetus and drives their passion. It will come as no surprise that fifteen years down the road the responses to the same question could differ significantly. The question on our minds is, “What has changed?” What distinguishes us? Is it because of the influence of society, family, friends, and colleagues? Is this a coincidence or is it the result of increasing peer pressure, which causes us to be either better or worse people? Life is all about conscious choices that result in either marked success or impending failure. Choices have consequences and looking back, one has to make rational decisions to minimize failure. Moving forward in the face of insurmountable obstacles without a way out or divine assistance may snuff out your valid dream. This is the reason why humans reach a point of no return and even consider suicide. We lose faith in our dreams and fail to fulfill our potential.",
    imageUrl: deflectionImg.src,
  },
  {
    titleImageUrl: hiddenArt.src, //'The Hidden Self',
    description:
      "The Hidden Self is not about delving into the biology of our bodies; rather, it is about understanding life in a broader sense. Nonetheless, we have an advantage because our intellect demonstrates the power that has been bestowed upon us thus elevating us above all other living things.Attempting to understand all of our human potential has revealed the human mind’s unique abilities to revolutionize the world, create more modern wonders, develop solid economic powerhouses, and create sophisticated weaponry beyond imagination. We are constantly looking for reasons why actual results differ from our expectations. While we may believe that certain actions are in our best interests in the long run. Often at times independent analysis reveals that they are harmful and does endanger our peaceful coexistence. A difficult past is sometimes assumed to be the sole predictor of our future goals. You can’t rely on past success so we’re always looking forward to rewriting history and adding to our current list of accomplishments. Just as a butterfly remembers being a caterpillar. Unappealing, unattended and unimportant. But that is the belief we hold; grisly realities emerge only when you allow your past to define you. Do not allow your previous poor performances to determine your future as this can spell out catastrophes and disasters of epic proportions. Thus, we should always remain focused on the power of positivity, such as the charm and beauty of the butterfly. Let us focus on the prospects of a promising future and refrain from sympathizing with your difficult past. From an obscure trail of events, we can forge a way forward, and that may well be all it is, time to learn and move on.",
    imageUrl: hiddenImg.src,
  },
  {
    titleImageUrl: mirrorArt.src, //mirror reflection
    description:
      "We lose ourselves in the pursuit of society’s imperatives. The art of self-importance is what drives us to believe we are significant. We want to be seen, heard and known by the general public. We have a strong desire to be antagonistic. Our lives are in competition; who is superior to the others? Who takes better initiative? And when we look around, it appears that everyone else is doing better than us, and we need to pull our socks up to catch up. Who is more attractive? Who has the most money? And who is the happiest? This is what bothers us and brings us to our knees. When we see a population of success, it weakens us as individuals and makes us feel like failures. However, because we did not succeed in life, we are left with grief, anger, and bitterness. Suddenly, we feel undeniable pressure, and we become disheartened because our ambition was to be influential and swollen with pride. We now seem pathetic and ignored by the world, and no one seems to acknowledge our value or significance. What we need to consider is what is causing this overwhelming sense of grandness.'",
    imageUrl: mirrorImg.src,
  },
  {
    titleImageUrl: hopeArt.src, //'Sparkling Hope',
    description:
      "Sparkling Hope depicts a harsh reality that most of us try to avoid. We find ourselves entangled in a mess whose source we have no idea about; stuck in a situation we can’t get out of and unable to relate to the accusation of a mistake we never made. How can we hope when everything is crumbling around us? What do we do when we are wrongfully accused and have exhausted all possible defenses? What do we do in a reformatory, and can we truly reform in a place where mistreatment and injustice abound? We are enslaved in agony, befuddled by our situation. Trying to figure out what’s going on, but there’s none. The only question we have is, ‘How can life be so unfair to us?’ The author employs psychological techniques to reach our most hidden and vulnerable emotions. He uses pain to bring about peace and provides a different perspective through the light of hope that burns in our rigid journey. We have a mission to complete, no matter what obstacles we face. “Success will be valid only if we can cross the bridge beyond our breaking point.”",
    imageUrl: hopeImg.src,
  },
  {
    titleImageUrl: householdArt.src, //'a Household of Bliss',
    description:
      "A Household of Bliss delves into a world full of misconceptions and dilemmas that require more than a quick fix. Surely, impulsive decisions cannot be the remedy to our problems. If that is the case, then who will be there to guide us? Who can understand our anguish and desperation as we watch the many houses around us crumble and fall apart? Our world is full of couples who grapple with understanding their partners and defining happiness. Pleasure vanishes in unfamiliar houses that, rather than bringing harmony and peace to our world, steal our joy, leaving us with the question: can we make our houses into loving homes? A Household of Bliss tackles history’s most complex and mind-boggling issue. A book about rehabilitating those in need as they mend broken families. An upbeat book that offers solutions to your problems while also emphasizing the importance of restoring the entire environment in order to create bliss in the world.",
    imageUrl: householdImg.src,
  },
  {
    titleImageUrl: wealthArt.src, //'Millionaire’s Quest',
    description:
      "Who is a millionaire and how do you become one? For those who are interested, let us explore this fascinating quest. Is it the success of their businesses that allows them to keep their massive wealth as a security of their status, and if so, what exactly is a business? Is it sufficient for us to find a corporation or is there more to it? What distinguishes your company? Is it you as a person or a structure that you started with? For example, consider the philosophy: A company is you as a person and that makes all the difference. What happens after you die? Does the company die with you? What if we reject the notion of a business being a person and instead refer to it as a structure? Would that be correct? Furthermore, what happens if we move that transaction somewhere else? Will that change the fundamental concept of your company? To summarize, all of these falls under one umbrella which is an idea. It only takes one thought to make all the difference. Just a thought, which some may regard as a dream can propel you to success. Will I be correct in saying that it only took one inspiration for Martin Cooper to invent a mobile phone; one inspiring idea for the Wright brothers to have their first successful airplane in 1903; or the ingenuity of George Soros to make $1 billion in a single day? And am I correct in saying you’re only one idea away from becoming a millionaire?.",
    imageUrl: wealthImg.src,
  },
  {
    titleImageUrl: sexArt.src, //'Trailing the Scent of Sex',
    description:
      "As I entered the room, I was greeted by a beautiful, hypnotic woman. She had a unique physique, much like a model. I was a young man with no experience, a 19-year-old virgin with coyness in my bones. Her stunning appearance astounded me. ‘Was this a dream?’ I was taken aback in a place I wasn’t familiar with. In shock, my mouth hung open wide. A well-lit brown skin tone with a spicy scent trail. Is she perfumed with cloves? An awkward question to ask in chemistry. My temperature rose as I felt heat rising within me. My fever was caused by flammable emotions rising to the surface. She drew in closer and stripped me bare of romance. As I fell onto the bed and landed on my Achilles’ heel, I lost my strength. The woman in her early forties is kissing me and leaning on me in a cowgirl pose, making me want to delve deeper into our passionate relationship. My inquisitive hands were everywhere. I finally made it to her fat-lipped extra labia vagina. What I saw was a protruding pussy that appeared to be about to blossom. I was stunned and wondered why it was this way. Is it due to her level of expertise? “Who am I to know?” I asked myself inquisitively. As she slowly digs it up on my penis, I squeal with delight. Oh my gosh! She was skilled at this skill. She made an upward and downward motion. She placed her extra labia on the tip of my dick, which drove me insane with delight. I was covered in goosebumps and didn’t know what to do. My hands were all over the place, and I was holding her tightly, unsure of what I should and shouldn’t touch, leaving me perplexed and befuddled. It felt like I was high on opium in my head, which was an odd and intense sensation. Perplexed, I dined in ecstasy to the point of ejaculation. An instant release caused my unconsciousness.",
    imageUrl: sexImg.src,
  },
  {
    titleImageUrl: anonimousArt.src, //'The Anonymous Trek',
    description:
      "It is an invigorating concept for us to be able to forge ahead even when we are in limbo, lost in a dilemma or clouded by our emotions. We are trying to figure out where we are and where we are supposed to be. Having established where we currently stand, we then need to settle down and balance ourselves. We need to get used to the environment, noting that we can only stand out if we are willing to assimilate to our environs. Is it possible to overcome our turbulent emotional state? The disasters in front of us and the internal conflicts distract us from being able to address the challenges outside of us. We are filled with conflicting emotions, enslaved in our mental prison and unable to move forward. This is due to our inability to comprehend how far we must travel to reach the land of serenity. We awaken in a confused state and unsure of what is going on. It is as if you were thrown into this world at the age of 21, mesmerized by almost everything around us. We are oblivious to the harsh reality of our existence and have no idea what is going on. Everyone is fighting to get to the top because we are overcrowded at the bottom. However, how long will it take us to get there? This is a troubling question. A question that most of us are unable to answer. Disparate answers may appear to justify what we are unsure of. But who is to answer if at the age of 40 we still don’t know who we are and what we stand for?",
    imageUrl: unpublishedImg.src,
  },
  {
    titleImageUrl: dashArt.src, //'My Dash of Existence',
    description:
      "Life is riddled with challenges and unending problems affecting one and all. These complexities don’t have marked escape routes as they traverse barriers into uncharted terrains. Ironically, problems make life worth living as they exist as catalysts to stimulate solutions and give meaning to life. Problem solvers go to great lengths to utilize rationale and wisdom in handling situations that seem impossible to overcome. However, there are some who believe they can arbitrarily solve everyone else’s issues. Then again why do people easily give up with the slightest affliction? A common and sensible question that even connoisseurs of reasoning fail to answer. No one is immune to trouble and misfortune. How we cope with these scenarios gauge the level of our resilience. Contrary to this motivation, the fact on the ground is that many are rightfully weighed down by the burden of comprising situations. I decided to investigate further and came to the following conclusion: perhaps we let our guard down due to exhaustion. We have seen tinder relationships go up in smoke, countless marriages go through hell and end up in the ashes of divorce. The fate of children from broken homes living in uncertainty and despair. The downtrodden devoid of ambition and hope for a better day. Rich or poor, none is spared from the twists and turns of the meandering path of existence. So, what prompts our sense of enervation in the face of constant challenges? Why do we easily give in and give up? Understanding the root cause of our problems is the first step to taking control. Identifying our priorities and liberating ourselves from physical and psychological abuse, overdependency and enslavement is paramount. The struggles we face are real and dynamic. It is human nature to want a happy, fulfilling and problem free living. A fantasy short-lived once reality sets in. Faced with adversity, many wither and crumble. We give up not because we are weak rather, we are afraid that the same situation will reoccur when least expected. Can we make it through this cycle of anxiety? The sea of worries has tidal waves of issues. Losing hope in these stormy waters of life drowns even a professional diver. Holding on and never giving up will keep us afloat. We should nurture and develop our problem-solving skills of critical thinking, decision-making, creativity and information processing. Optimism is the only vessel that can ferry us to safety shores. It is the missing link that fills the gap and dash of existence.",
    imageUrl: unpublishedImg.src,
  },
  {
    titleImageUrl: livingArt.src, //'The Living Silhouette',
    description:
      "For a young orphan who grew up as a shepherd to make ends meet, the situation was dire. He was humiliated as he grew up and his own nuclear family members shunned him. This forced him to flee a home strained by the fact that he is no longer accepted by his community, with increased public pressure, name-calling and deceptive propaganda hurled at him. He was forced to flee, incensed and agitated by his own people’s disdain for him. He participated in a three-year boycott with his supporters. Subsequently, they suffered from severe hunger to the point of eating grass as well as illness due to a lack of food, medicine and trade. Due to the intense nature of the situation, he sought a way out and decided to travel to a nearby location to find peace of mind. Everything happened because he saw things differently. He lived in a community that preferred to follow in the footsteps of its forefathers. Any individual who contradicts their ideology is punished. In our homes, we are supposed to feel a sense of belonging. In this case, he is overwhelmed by the fact that his own people reject him. This tainted his reputation as a member of a noble family, respected by the community, and entrusted with the tribe’s wealth. Everything was lost after his guardian died; he was an uncle and a strong leader who had his back. He is no longer with him and the tables have turned.",
    imageUrl: unpublishedImg.src,
  },
];

export const quotesData = [
  {
    number: "001",
    text: "The simple reflex of looking at the toilet bowl before flashing indicates our difficulty in disconnecting from our attachments. The best thing we can do is learn from it and move on. We should live in the moment and consciously relate to our actions.",
    author: "Dr. Mohamed Bahaidar",
  },
  {
    number: "002",
    text: "A house may just be a standing structure but what causes emotions, especially when we visit our ancestral homes? What remains edged in our minds as we reminiscence? Is it the housing facility or recollection of childhood experiences relived in our homes?",
    author: "Dr. Mohamed Bahaidar",
  },
  {
    number: "003",
    text: "It is incredible to realize that humans are the only creatures who allow their children to return home regardless of the conflict. Why is this the case? You may offend someone and repeat the same mistake over and over again. However, the love of your home no matter how humble will never fade.",
    author: "Dr. Mohamed Bahaidar",
  },
  {
    number: "004",
    text: "We can’t tolerate anymore that which emanates from deep inside us. We simply want people to understand where we are coming from as that is all we desire and crave for. We can do all manner of surprising things just to get this kind of attention. We all want it and use different means to attain it. Things get tougher as the years pass by. We get to the level of desperation and end up doing things sometimes deemed as unacceptable.",
    author: "Dr. Mohamed Bahaidar",
  },
];
