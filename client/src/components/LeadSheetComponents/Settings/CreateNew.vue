<template>
  <v-card>
    <v-card-title>
      Create New Lead Sheet
    </v-card-title>
    <v-card-text>
      <v-container class="pb-0">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="form.title"
              label="Title"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.artist"
              label="Artist"
            />
          </v-col>
          <v-col cols="6">
            <v-radio-group v-model="form.row" row>
              <v-radio label="Major" value="major" @change="selectKeys" />
              <v-radio label="Minor" value="minor" @change="selectKeys" />
            </v-radio-group>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="form.key"
              :items="keys"
              hide-selected
              label="Key"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="form.meter"
              :items="signatures"
              item-text="text"
              item-value="data"
              hide-selected
              label="Time Signature"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.measures"
              label="Measures"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.measuresPerLine"
              label="Measures Per Line"
              hint="Can be changed later"
              persistent-hint
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="pt-0">
      <v-row justify="end" class="pr-8">
        <v-btn
          text
          color="red"
          @click="closeDialog"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="createSong"
        >
          Create
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    signatures: {
      type: Array,
      required: true,
    },
    keys: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      form: {
        title: '',
        artist: '',
        key: '',
        meter: null,
        row: '',
        measures: 32,
        measuresPerLine: 4,
      },
    };
  },
  methods: {
    selectTimeSignature() {
      this.$emit('select-time-signature', this.meter);
    },
    selectKeys() {
      this.$emit('select-key', this.form.row);
    },
    createSong() {
      this.$emit('create-lead-sheet', this.form);
      this.$emit('close-dialog');
    },
    closeDialog() {
      this.$emit('close-dialog');
    },
  },
};
</script>
