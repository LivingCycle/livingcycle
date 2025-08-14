export interface Helpline {
  name: string;
  number: string;
  description: string;
  hours: string;
  textOption?: string;
  website?: string;
}

export const helplines: Helpline[] = [
  {
    name: '211 - Community Services',
    number: '211',
    description: 'Connect with local resources for food, housing, healthcare, employment',
    hours: '24/7',
    website: 'https://211.org'
  },
  {
    name: '988 - Crisis Lifeline',
    number: '988',
    description: 'Free, confidential crisis support',
    hours: '24/7',
    textOption: 'Text 988',
    website: 'https://988lifeline.org'
  },
  {
    name: 'Crisis Text Line',
    number: '741741',
    description: 'Text HOME to connect with a crisis counselor',
    hours: '24/7',
    textOption: 'Text HOME to 741741'
  },
  {
    name: 'SAMHSA National Helpline',
    number: '1-800-662-4357',
    description: 'Treatment referral and information service',
    hours: '24/7',
    website: 'https://samhsa.gov'
  },
  {
    name: 'Veterans Crisis Line',
    number: '1-800-273-8255',
    description: 'Support for Veterans and their families',
    hours: '24/7',
    textOption: 'Text 838255',
    website: 'https://veteranscrisisline.net'
  }
];