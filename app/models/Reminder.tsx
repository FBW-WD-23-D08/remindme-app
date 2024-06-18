import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Reminder = mongoose.models.Reminder || mongoose.model('Reminder', reminderSchema);
export default Reminder;
