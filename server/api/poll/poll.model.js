'use strict';

import mongoose from 'mongoose';

var PollSchema = new mongoose.Schema({
  name: String,
  author: String,
  date: { type: Date, default: Date.now },
  expires: { type: Date, expires: '14d' },
  options: [{ name: String }],
  votes: Number
});

export default mongoose.model('Poll', PollSchema);
