export interface Script {
  text: string;
  checklist: string[];
  followUp?: string[];
}

export const scripts: Record<string, Script> = {
  '211': {
    text: "Hi, I'm calling 211 for help. I need assistance with [choose: housing/food/healthcare/utilities/job search services/vocational rehabilitation]. I'm located in [your city or zip code]. Can you help me find available resources?",
    checklist: [
      'Your current zip code',
      'Type of help needed (be specific)',
      'Household size (if relevant)',
      'Any urgent timeline',
      'For job services: Current employment status',
      'For vocational rehab: Any barriers to employment'
    ],
    followUp: [
      'They may ask about your income level',
      'They might ask about your current living situation',
      'They could ask about transportation access',
      'They may transfer you to specific service providers'
    ]
  },
  
  '988': {
    text: "Hi, I'm calling because I'm having a really hard time right now and need someone to talk to.",
    checklist: [
      'Find a quiet, private space',
      'Have tissues and water nearby',
      'Know you can hang up anytime',
      'No personal info required'
    ],
    followUp: [
      "They'll ask how you're feeling",
      "They might ask if you're safe",
      "They'll listen without judgment",
      'They may offer coping strategies'
    ]
  },
  
  'medical': {
    text: "Hi, I'm calling to schedule an appointment. I've been experiencing [symptoms] for [duration]. I'd like to discuss this with the doctor. What appointments do you have available?",
    checklist: [
      'Insurance card',
      'List of current medications',
      'Description of symptoms',
      'Preferred appointment times',
      'Pharmacy information'
    ],
    followUp: [
      'Insurance information',
      'Previous visit date',
      'Referring doctor (if any)',
      'Preferred appointment times'
    ]
  },
  
  'work': {
    text: "Hi [Supervisor's name], I'm not feeling well today and won't be able to come to work. I'll keep you updated on my status for tomorrow. Thank you for understanding.",
    checklist: [
      "Supervisor's contact info",
      'Any urgent tasks to mention',
      'Expected return date (if known)',
      'Work coverage needs'
    ],
    followUp: [
      'They may ask about urgent projects',
      'They might need you to notify HR',
      "They could ask for a doctor's note",
      'They may ask about work handoff'
    ]
  },
  
  'vocational-rehab': {
    text: "Hi, I'm calling to learn about vocational rehabilitation services. I have [a disability/health condition/barrier to employment] and I'm looking for help with [finding work/job training/keeping my job]. This is my first time calling. Can you help me understand what services are available?",
    checklist: [
      'Your Social Security number (they may ask)',
      'Description of your disability or barrier',
      'Current work status (unemployed/employed/student)',
      'Any medical documentation you have',
      'Income information (for eligibility)',
      'Pen and paper for notes',
      'Calendar for scheduling intake appointment'
    ],
    followUp: [
      'They will likely schedule an intake appointment',
      'They may ask about your work history',
      'They might ask about your career goals',
      'They will explain the eligibility process',
      'They may ask about your disability or health condition',
      'They might transfer you to an intake specialist'
    ]
  },
  
  'vocational-rehab-simple': {
    text: "Hi, I need help finding work because of my [disability/health condition]. I heard vocational rehabilitation might help. What do I need to do to get started?",
    checklist: [
      'Just your basic information',
      'Be ready to briefly describe your situation',
      'Have a calendar ready'
    ],
    followUp: [
      'They will guide you through next steps',
      'They are used to first-time callers',
      'It\'s okay to say you don\'t know something'
    ]
  },
  
  'vocational-rehab-nervous': {
    text: "Hi, I'm calling about vocational rehab services. I'm nervous because this is my first time calling. I have some challenges that make it hard to work, and I need help. Can you walk me through what vocational rehab does and how to apply?",
    checklist: [
      'It\'s okay to be nervous',
      'They deal with first-time callers daily',
      'You can ask them to slow down or repeat things',
      'You can call back if you get overwhelmed'
    ],
    followUp: [
      'They will be patient with you',
      'You can ask questions',
      'They want to help you succeed',
      'No question is too basic'
    ]
  },
  
  'default': {
    text: "Hi, I'm calling about [topic]. Could you help me with this?",
    checklist: [
      'Clear idea of what you need',
      'Any relevant account numbers',
      'Pen and paper for notes'
    ]
  }
};