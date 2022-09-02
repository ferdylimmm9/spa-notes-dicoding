let notes = [
  {
    id: +new Date(),
    title: "Lorem Ipsum 01",
    body: "Eiusmod deserunt fugiat consequat et nulla cillum eu commodo dolor eu anim cillum mollit. Sunt est nisi eu ea exercitation. Commodo proident proident est id amet.",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: +new Date() + 2,
    title: "Lorem Ipsum 02",
    body: "Eiusmod deserunt fugiat consequat et nulla cillum eu commodo dolor eu anim cillum mollit. Sunt est nisi eu ea exercitation. Commodo proident proident est id amet.",
    archived: false,
    createdAt: "2022-08-22T04:27:34.572Z",
  },
  {
    id: +new Date() + 3,
    title: "Lorem Ipsum 03",
    body: "Eiusmod deserunt fugiat consequat et nulla cillum eu commodo dolor eu anim cillum mollit. Sunt est nisi eu ea exercitation. Commodo proident proident est id amet.",
    archived: true,
    createdAt: "2022-09-12T04:27:34.572Z",
  },
  {
    id: +new Date() + 4,
    title: "Lorem Ipsum 04",
    body: "Eiusmod deserunt fugiat consequat et nulla cillum eu commodo dolor eu anim cillum mollit. Sunt est nisi eu ea exercitation. Commodo proident proident est id amet.",
    archived: true,
    createdAt: "2022-06-09T04:27:34.572Z",
  },
];

export const getNotesByTitle = (title) => {
  if (!title) {
    return notes;
  } else {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(title.toLowerCase())
    );
  }
};

export const getNoteById = (id) => {
  if (!id) {
    return notes;
  } else {
    return notes.filter((note) => note.id === id)[0];
  }
};

export const deleteNote = (id) => {
  notes = notes.filter((note) => note.id !== id);
};

export const toggleNote = (id) => {
  notes = notes.map((note) => {
    return {
      ...note,
      archived: note.id === id ? !note.archived : note.archived,
    };
  });
};

export const addNote = (note) => {
  notes = [
    ...notes,
    { id: +new Date(), createdAt: new Date().toString(), ...note },
  ];
};
