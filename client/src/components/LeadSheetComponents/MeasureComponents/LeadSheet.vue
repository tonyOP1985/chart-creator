<template>
  <v-card v-if="meta" class="mr-auto justify-center">
    <v-container class="lead-sheet pa-2">
      <v-col class="align-content-center" cols="12">
        <h2 class="text-center">{{ meta.title }}</h2>
        <h4 class="text-center">{{ meta.artist }}</h4>
      </v-col>
      <System
        v-for="(system, index) in systems"
        :id="index"
        :key="index"
        :index="index"
        :measures="system.measures"
        @set-system-data="setData"
      />
    </v-container>
    <v-dialog
      v-model="edit"
      width="500"
    >
      <EditMeasure />
    </v-dialog>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import System from './System.vue';
import { timeSignatures } from '@/lib/constants';

export default {
  components: {
    System,
  },
  data() {
    return {
      input: [],
      meter: timeSignatures[0],
      temp: [],
      edit: false,
      form: {
        systems: [],
      },
    };
  },
  computed: {
    ...mapGetters('leadSheet', ['meta', 'systems']),
  },
  methods: {
    setData(payload) {
      this.temp.push(payload);
      this.form.systems = this.temp;
      if (this.form.systems.length === this.systems) {
        this.temp = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .lead-sheet {
    width: 85%;
  }

  .left-bar-line {
    border-left: 1px solid black;
  }

  .measure {
    border-right: 1px solid black;
    max-height: 20px;
  }

  .edit-icon {
    font-size: .8rem;
  }

  .meter {
    position: absolute;
    top: 17%;
    left: 8%;
  }
</style>
