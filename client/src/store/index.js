import axios from "axios";
import { API_URL } from "../config/config";
import { formatAnalyzedData } from "../utils/functions";

export const state = () => ({
  analyzed_data: [],
  loading: false,
});

export const getters = {
  getAnalyzeData: (state) => {
    if (state.analyzed_data.length === 0) return;
    return state.analyzed_data;
  },
};

export const mutations = {
  isLoading: (state) => {
    state.loading = !state.loading;
  },
  updateAnalyzeData: (state, data) => {
    state.analyzed_data = formatAnalyzedData(data.data, data.sentence);
  },
};

export const actions = {
  async analyzeSentences({ commit }, form) {
    commit("isLoading");

    try {
      const response = await axios.get(
        `${API_URL}/api/general_tone`,
        {
          params: {
            text: form.sentences,
            language: form.language,
          },
        }
      );
      commit("updateAnalyzeData", {
        data: response.data,
        sentence: form.sentences,
      });
    } catch (error) {
      console.log(error);
    }

    commit("isLoading");
  },
};
