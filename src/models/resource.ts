import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String },
  url: { type: String },
  description: { type: String },
});

export const Resource =
  mongoose.models.Experience || mongoose.model('Resource', schema);
