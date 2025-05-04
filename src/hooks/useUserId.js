import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

export function useUserId() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Try to get the existing UUID from localStorage
    const storedUserId = localStorage.getItem('userId');
    
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Generate a new UUID if none exists
      const newUserId = uuidv4();
      localStorage.setItem('userId', newUserId);
      setUserId(newUserId);
    }
  }, []);

  return userId;
} 