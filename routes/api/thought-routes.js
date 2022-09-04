const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)
;

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)
;

// Set up POST at api/thoughts/:id/reactions
router.route('/:id/reactions').post(addReaction);

  // Set up DELETE at api/thoughts/:id/reactions/:reactionId
router.route('/:id/reactions/:reactionId').delete(removeReaction);

module.exports = router;