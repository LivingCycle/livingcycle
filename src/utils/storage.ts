import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface LivingCycleDB extends DBSchema {
  checklist: {
    key: string;
    value: any;
  };
  scripts: {
    key: string;
    value: any;
  };
  settings: {
    key: string;
    value: any;
  };
}

let db: IDBPDatabase<LivingCycleDB>;

async function getDB() {
  if (!db) {
    db = await openDB<LivingCycleDB>('livingcycle-db', 1, {
      upgrade(db) {
        db.createObjectStore('checklist');
        db.createObjectStore('scripts');
        db.createObjectStore('settings');
      },
    });
  }
  return db;
}

// Checklist functions
export function saveChecklist(items: any[]) {
  try {
    localStorage.setItem('daily-checklist', JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save checklist:', e);
  }
}

export function loadChecklist(): any[] | null {
  try {
    const stored = localStorage.getItem('daily-checklist');
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    console.error('Failed to load checklist:', e);
    return null;
  }
}

// Settings functions
export function saveSetting(key: string, value: any) {
  try {
    localStorage.setItem(`setting-${key}`, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save setting:', e);
  }
}

export function loadSetting(key: string): any {
  try {
    const stored = localStorage.getItem(`setting-${key}`);
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    console.error('Failed to load setting:', e);
    return null;
  }
}

// Clear all data
export function clearAllData() {
  try {
    localStorage.clear();
    console.log('All local data cleared');
  } catch (e) {
    console.error('Failed to clear data:', e);
  }
}