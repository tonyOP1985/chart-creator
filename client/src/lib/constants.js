const majorKeys = [
  {
    key: 'C',
    text: 'C major',
  },
  {
    key: 'C#',
    text: 'C# major',
  },
  {
    key: 'Db',
    text: 'Db major',
  },
  {
    key: 'D',
    text: 'D major',
  },
  {
    key: 'Eb',
    text: 'Eb major',
  },
  {
    key: 'E',
    text: 'E major',
  },
  {
    key: 'F',
    text: 'F major',
  },
  {
    key: 'F#',
    text: 'F# major',
  },
  {
    key: 'G',
    text: 'G major',
  },
  {
    key: 'Ab',
    text: 'Ab major',
  },
  {
    key: 'A',
    text: 'A major',
  },
  {
    key: 'Bb',
    text: 'Bb major',
  },
  {
    key: 'B',
    text: 'B major',
  },
];

const minorKeys = [
  {
    key: 'C',
    text: 'C minor',
  },
  {
    key: 'C#',
    text: 'C# minor',
  },
  {
    key: 'D',
    text: 'D minor',
  },
  {
    key: 'D#',
    text: 'D# minor',
  },
  {
    key: 'Eb',
    text: 'Eb minor',
  },
  {
    key: 'E',
    text: 'E minor',
  },
  {
    key: 'F',
    text: 'F minor',
  },
  {
    key: 'F#',
    text: 'F# minor',
  },
  {
    key: 'G',
    text: 'G minor',
  },
  {
    key: 'G#',
    text: 'G# minor',
  },
  {
    key: 'A',
    text: 'A minor',
  },
  {
    key: 'A#',
    text: 'A# minor',
  },
  {
    key: 'Bb',
    text: 'Bb minor',
  },
  {
    key: 'B',
    text: 'B minor',
  },
];

const timeSignatures = [
  {
    text: '4/4',
    data: {
      beats: 4,
      value: 4,
    },
  },
  {
    text: '3/4',
    data: {
      beats: 3,
      value: 4,
    },
  },
  {
    text: '2/4',
    data: {
      beats: 2,
      value: 4,
    },
  },
  {
    text: '5/4',
    data: {
      beats: 5,
      value: 4,
    },
  },
  {
    text: '6/4',
    data: {
      beats: 6,
      value: 4,
    },
  },
  {
    text: '1/4',
    data: {
      beats: 1,
      value: 4,
    },
  },
  {
    text: '6/8',
    data: {
      beats: 6,
      value: 8,
    },
  },
  {
    text: '12/8',
    data: {
      beats: 4,
      value: 8,
    },
  },
];

module.exports = {
  majorKeys,
  minorKeys,
  timeSignatures,
};
