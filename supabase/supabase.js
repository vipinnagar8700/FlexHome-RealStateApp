import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const supabaseUrl = 'https://zbkvyvcdyxtbqsaljhsi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpia3Z5dmNkeXh0YnFzYWxqaHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNzUzNjcsImV4cCI6MjAzNDk1MTM2N30.-46annmm0Cy3vK2-pvxmzlzCraPtdWcTkE3a8rlYN2s';

export const supabase = createClient(supabaseUrl, supabaseKey, {
    localStorage: AsyncStorage, // Use AsyncStorage for React Native
  });