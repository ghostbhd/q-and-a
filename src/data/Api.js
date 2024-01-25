const questions = [
  {
    id: 1,
    title: 'What is best restaurant i can find in marrakech ?',
    distance: '1.2 km',
  },
  {
    id: 2,
    title: 'How can i find a good hotel in marrakech ?',
    distance: '500 m',
  },
  {
    id: 3,
    title: 'What is the best place to visit in marrakech ?',
    distance: '1.2 km',
  },
  {
    id: 4,
    title: 'What is the best place to visit in marrakech ?',
    distance: '1.2 km',
  },
  {
    id: 5,
    title: 'What is the best place to visit in marrakech ?',
    distance: '1.2 km',
  },
];


export function QuestionsApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(questions);
    }, 300);
  });
}