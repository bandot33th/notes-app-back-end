const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
];
const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
});

module.exports = { addNoteHandler, getAllNotesHandler };
