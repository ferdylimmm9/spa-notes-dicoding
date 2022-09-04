let notes = [
  {
    id: +new Date(),
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: +new Date() + 1,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: +new Date() + 2,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: +new Date() + 3,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: +new Date() + 4,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: +new Date() + 5,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
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
    return undefined;
  } else {
    const note = notes.filter((note) => note.id === id)[0];
    return note;
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
