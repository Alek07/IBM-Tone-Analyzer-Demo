import { TONE_COLORS } from "./constants";

const set_data = (data, sentence, AnalyzedData) => {
  let ChartData = {
    labels: [],
    datasets: [
      {
        backgroundColor: [],
        data: [],
      },
    ],
  };

  data.tones.forEach((tone) => {
    ChartData.labels.push(tone.tone_name);
    ChartData.datasets[0].data.push(tone.score);
    ChartData.datasets[0].backgroundColor.push(TONE_COLORS[tone.tone_id]);
  });
  AnalyzedData.push({ sentence, ChartData });
};

export const formatAnalyzedData = (data, sentences) => {
  let newAnalyzedData = [];

  if (data.sentences_tone) {
    data.sentences_tone.forEach((sentence) => {
      set_data(sentence, sentence.text, newAnalyzedData);
    });
  } else {
    set_data(data.document_tone, sentences, newAnalyzedData);
  }

  return newAnalyzedData;
};
