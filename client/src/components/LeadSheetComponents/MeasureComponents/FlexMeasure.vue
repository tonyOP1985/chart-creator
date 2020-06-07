<template>
  <v-col
    class="d-flex flex-row measure py-0 flex-nowrap"
    :class="{ 'left-bar-line': measureIndex === 0 }"
  >
    <Beat
      v-for="(beat, index) in meta.meter.beats"
      :id="index"
      :key="index"
      :index="index"
      :systemID="systemID"
      :measureID="id"
      @set-beat-data="setBeatData"
    />
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex';
import Beat from '@/components/LeadSheetComponents/MeasureComponents/Beat.vue';

export default {
  components: {
    Beat,
  },
  props: {
    measureIndex: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    systemID: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      temp: [],
      form: {
        measureId: this.id,
        systemId: this.systemID,
        beats: [],
      },
    };
  },
  computed: {
    beats() {
      if (this.meta.meter) return this.meta.meter.beats;
      return this.meta.meter.beats;
    },
    ...mapGetters('leadSheet', ['meta']),
  },
  methods: {
    setBeatData(payload) {
      this.temp.push(payload);
      this.form.beats = this.temp;
      if (this.form.beats.length === this.beats) {
        this.$emit('set-measure-data', this.form);
        this.temp = [];
      }
    },
  },
};
</script>

<style scoped>
  .left-bar-line {
    border-left: 1px solid black;
  }

  .measure {
    border-right: 1px solid black;
    max-height: 20px;
  }
</style>
