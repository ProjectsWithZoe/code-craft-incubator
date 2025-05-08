// pages/api/save-user.js

import { supabase } from "../src/lib/supabase"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { uuid} = req.body;

  try {
    const { data, error } = await supabase
      .from('user_subscription_details')
      .insert([{ uuid }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({
      message: 'User and date added',
      user: data,
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}
