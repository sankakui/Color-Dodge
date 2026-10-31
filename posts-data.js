/*
  HOW TO ADD A POST (put the newest one at the TOP of the list):

  Chapter update:
  { type: 'update', date: '2026-10-31', title: 'Katakoi Seesaw ch. 12',
    series: 'Katakoi Seesaw', link: 'projects/katakoi.html',
    body: 'Short note about the release. Line breaks are kept.' },

  Answered ask:
  { type: 'ask', date: '2026-10-30', from: 'Anonymous',
    question: 'The question you received.',
    answer: 'Your reply.' },

  date = YYYY-MM-DD. link is optional. Text is shown as plain text.
*/
const POSTS = [
  {
    type: 'update',
    date: '2026-10-31',
    title: 'Katakoi Seesaw ch. 12 is up',
    series: 'Katakoi Seesaw',
    link: 'projects/katakoi.html',
    body: 'Sample post: replace me with your real update.\nQC took a bit longer this time, thanks for waiting.'
  },
  {
    type: 'ask',
    date: '2026-10-30',
    from: 'Anonymous',
    question: 'Sample ask: will you pick up more oneshots next month?',
    answer: 'Sample answer: yes, a few are in the queue.'
  }
];
