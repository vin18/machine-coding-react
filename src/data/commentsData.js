const commentsData = [
  {
    id: 1,
    name: "Walter White",
    comment: "I love cooking",
    replies: [
      {
        id: 2,
        name: "Walter Jr",
        comment: "I like to eat breakfast",
        replies: [
          {
            id: 3,
            name: "Heisenberg",
            comment: "I am the one who knocks",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Tony Stark",
    comment: "I am Iron Man",
    replies: [
      {
        id: 5,
        name: "Steve Rogers",
        comment: "I am Captain America",
        replies: [],
      },
    ],
  },
];

export default commentsData;
