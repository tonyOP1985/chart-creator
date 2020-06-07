<template>
  <v-col class="system flex-nowrap my-8">
    <v-row>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon
            class="edit-system"
            small
            @click="editSystem"
            v-on="on"
          >
            mdi-wrench
          </v-icon>
        </template>
        <span>Edit System {{ index }}</span>
      </v-tooltip>
    </v-row>
    <v-row
      v-if="index === 0"
      class="meter"
    >
      <span>{{ 4 }}</span>
      <span>{{ 4 }}</span>
    </v-row>
    <v-row justify="space-between" class="text-no-wrap">
      <FlexMeasure
        v-for="(measure, measureIndex) in measures"
        :id="measureIndex"
        :key="measureIndex"
        :systemID="id"
        :class="{ 'mt-5': index !== 0 }"
        class="px-0"
        :width="measureWidth"
        :measureIndex="measureIndex"
        @set-measure-data="setMeasureData"
      />
    </v-row>
    <v-dialog v-model="dialog" width="300">
      <v-card>
        <v-card-text class="pb-0 pt-3">
          <v-text-field
            v-model="newMeasures"
            label="Measures"
          />
        </v-card-text>
        <v-card-actions>
          <v-row justify="end" class="pr-4">
            <v-btn
              text
              color="red"
              @click="editSystem"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="cyan"
              @click="setMeasures"
            >
              Create
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import FlexMeasure from '@/components/LeadSheetComponents/MeasureComponents/FlexMeasure.vue';
import Measure from './Measure.vue';

export default {
  components: {
    Measure,
    FlexMeasure,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    measures: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      newMeasures: null,
      temp: [],
      dialog: false,
      form: {
        systemId: this.id,
        sequence: this.index,
        measures: [],
      },
    };
  },
  computed: {
    systemIndex() {
      return this.index;
    },
    measureWidth() {
      if (this.measures === 5) return 2;

      return 3;
    },
  },
  methods: {
    editSystem() {
      this.dialog = !this.dialog;
    },
    setMeasureData(payload) {
      this.temp.push(payload);
      this.form.measures = this.temp;
      if (this.form.measures.length === this.measures) {
        this.$emit('set-system-data', this.form);
        this.temp = [];
      }
    },
    setMeasures() {
      this.measures = parseInt(this.newMeasures, 10);
      this.editSystem();
    },
  },
};
</script>

<style scoped>
  .system {
    position: relative;
  }

  .meter {
    width: 1em;
    position: absolute;
    left: -1em;
    top: 0;
    bottom: 0;
  }

  .edit-system {
    position: absolute;
    top: 50%;
    right: -5%;
  }
</style>
