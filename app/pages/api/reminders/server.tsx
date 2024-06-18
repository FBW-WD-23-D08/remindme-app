// pages/api/reminders/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Reminder from '../../../models/Reminder';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const reminders = await Reminder.find({});
      res.status(200).json({ success: true, data: reminders });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === 'POST') {
    try {
      const reminder = await Reminder.create(req.body);
      res.status(201).json({ success: true, data: reminder });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === 'PUT') {
    try {
      const {
        query: { id },
      } = req;

      const reminder = await Reminder.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!reminder) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: reminder });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === 'DELETE') {
    try {
      const {
        query: { id },
      } = req;

      const deletedReminder = await Reminder.deleteOne({ _id: id });
      if (!deletedReminder) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: {} });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
}