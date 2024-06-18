import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../lib/dbConnect';
import Reminder from '../../../models/Reminder';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo();

  if (req.method === 'GET') {
    try {
      const reminders = await Reminder.find({});
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching reminders' });
    }
  } else if (req.method === 'POST') {
    const { text, completed } = req.body;
    try {
      const newReminder = new Reminder({ text, completed });
      await newReminder.save();
      res.status(201).json(newReminder);
    } catch (error) {
      res.status(500).json({ message: 'Error creating reminder' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
