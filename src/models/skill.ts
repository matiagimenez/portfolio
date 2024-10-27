import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
	name: { type: String },
});

export const Skill = mongoose.models.Skill || mongoose.model('Skill', schema);
