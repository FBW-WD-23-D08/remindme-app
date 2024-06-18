

import mongoose, { Document, Schema } from 'mongoose';

export interface IReminder extends Document {
  text: string;
  completed: boolean;
}

const ReminderSchema: Schema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.models.Reminder || mongoose.model<IReminder>('Reminder', ReminderSchema);
