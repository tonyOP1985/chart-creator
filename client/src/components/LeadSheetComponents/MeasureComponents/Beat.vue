<template>
  <v-col class="px-1 py-0" cols="3">
    <!-- TODO: larger chord names do janky things when space is tight -->
    <v-row
      v-if="!isEditing"
      :justify="justify"
      class="body-2 beat pt-0"
      :class="{ 'pl-0': index === 0 }"
      no-gutters
    >
      <span
        v-show="form.startsRepeat"
        class="font-weight-bold repeat"
      >
        :
      </span>
      <span class="body-2 text-no-wrap pl-1">
        {{ formattedInput }}
      </span>
      <span
        v-show="form.endsRepeat"
        class="font-weight-bold repeat"
      >
        :
      </span>
    </v-row>
    <v-text-field
      v-else
      v-model="form.text"
      hide-details
      class="ma-0 pt-0 pa-0 body-2 custom-text-field"
      :class="{ 'pl-0': index === 0 }"
      @keyup.enter="setValue()"
    />
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    index: {
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
    measureID: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      form: {
        measureId: this.measureID,
        systemId: this.systemID,
        beatId: this.id,
        count: this.index + 1,
        startsRepeat: null,
        endsRepeat: null,
        text: null,
      },
    };
  },
  computed: {
    // TODO: handling of repeats works for now.  will need to revisit
    formattedInput() {
      const inputLen = this.form.text ? this.form.text.length : 0;
      if (this.form.text) {
        if (this.form.text.charAt(0) === ':' && this.id === 0) {
          this.form.startsRepeat = true;
          return this.form.text.substring(1);
        } if (this.form.text.charAt(inputLen - 1) === ':' && this.id !== 0) {
          this.form.endsRepeat = true;
          return this.form.text.substring(0, inputLen - 1);
        }
        return this.form.text;
      }
      return '';
    },
    justify() {
      if (this.index === 0) return 'start';

      return 'space-between';
    },
    ...mapGetters('leadSheet', ['isEditing']),
  },
  methods: {
    setValue() {
      const payload = {
        index: this.index,
        value: this.userInput,
      };
      this.$store.dispatch('leadSheet/setBeatsData', payload);
    },
  },
};
</script>

<style scoped>
  .v-text-field input {
    padding: 0 0 3px 0 !important;
  }

  .beat {
    height: 18px;
  }

  .custom-text-field.v-input__control.v-input__slot.v-text-field__slot input {
    padding: 0 !important;
  }

  .repeat {
    display: inline-block;
    height: 19px;
  }
</style>
