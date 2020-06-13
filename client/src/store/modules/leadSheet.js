import Vue from 'vue';
import { parseInteger } from '@/lib/utils';

const localState = {
  meta: null,
  beatsData: [],
  systems: null,
  isEditing: false,
  leadSheet: {},
};

const localGetters = {
  meta: state => state.meta,
  beatsData: state => state.beatsData,
  isEditing: state => state.isEditing,
  systems: state => state.systems,
  leadSheet: state => state.leadSheet,
};

const localActions = {
  collectMeta({ commit }, meta) {
    commit('set_meta', meta);
  },
  setBeatsData({ commit }, payload) {
    commit('set_beats_data', payload);
  },
  editForm({ commit }) {
    commit('edit_form');
  },
  createMeasures({ commit, state }, newMeasures = null) {
    let measures;
    if (!newMeasures) measures = parseInteger(state.meta.measures);
    else measures = parseInteger(newMeasures);

    const measuresPerLine = parseInteger(state.meta.measuresPerLine);
    let lines = measures / measuresPerLine;
    const isInt = Number.isInteger(lines);
    const lastLineMeasures = measures % measuresPerLine;
    if (!isInt) {
      lines = Math.floor(lines);
      lines += 1;
    }

    const systems = [];
    for (let i = 0; i < lines; i += 1) {
      const barNumber = { measures: null };
      if (!isInt && i + 1 === lines) barNumber.measures = lastLineMeasures;
      else barNumber.measures = parseInteger(state.meta.measuresPerLine);
      systems.push(barNumber);
    }

    if (!newMeasures) commit('set_systems', systems);
    else commit('set_systems', [...state.systems, ...systems]);
  },

  setData({ commit }, payload) {
    commit('set_data', payload);
  },
};

const localMutations = {
  set_meta(state, meta) {
    state.meta = meta;
  },
  set_beats_data(state, payload) {
    state.beatsData.push(payload);
  },
  edit_form(state) {
    state.isEditing = !state.isEditing;
  },
  set_systems(state, sys) {
    state.systems = sys;
  },
  set_data(state, payload) {
    const { key, path, value } = payload;
    Vue.set(state.leadSheet, `${path}.${key}`, value);
  },
};

export default {
  namespaced: true,
  state: localState,
  getters: localGetters,
  actions: localActions,
  mutations: localMutations,
};
