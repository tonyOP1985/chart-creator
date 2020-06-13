<template>
  <v-row>
    <v-spacer />
    <v-btn text @click="newDialog = true">
      <span>Add New</span>
    </v-btn>
    <v-btn text @click="keyDialog = true">Key</v-btn>
    <v-btn text @click="timeSignatureDialog = true">Key Signature</v-btn>
    <v-btn text>Transpose</v-btn>
    <v-btn text @click="addMeasureDialog = true">Add Measures</v-btn>
    <div v-show="meta">

      <v-btn
        v-if="isEditing"
        text
        @click="toggleEdit()"
      >
        Preview
      </v-btn>
      <v-btn
        v-else
        text
        @click="toggleEdit()"
      >
        Edit
      </v-btn>
    </div>
    <v-spacer />
    <v-dialog
      v-model="keyDialog"
      width="500"
    >
      <KeyDialogBox
        :keys="keys"
        @select-key="selectKeys"
      />
    </v-dialog>
    <v-dialog
      v-model="timeSignatureDialog"
      width="300"
    >
      <TimeSignatureDialog
        :signatures="signatures"
        @select-time-signature="selectedTimeSignature"
        @close-dialog="timeSignatureDialog = false"
      />
    </v-dialog>
    <v-dialog
      v-model="newDialog"
      width="500"
    >
      <NewDialog
        :keys="keys"
        :signatures="signatures"
        @create-lead-sheet="createLeadSheet"
        @close-dialog="newDialog = false"
        @select-key="selectKeys"
      />
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import { majorKeys, minorKeys, timeSignatures } from '@/lib/constants';
import NewDialog from '@/components/LeadSheetComponents/Settings/CreateNew.vue';


export default {
  components: {
    NewDialog,
  },
  data() {
    return {
      major: true,
      key: null,
      timeSignature: null,
      keyDialog: false,
      timeSignatureDialog: false,
      transposeDialog: false,
      newDialog: false,
      addMeasureDialog: false,
    };
  },
  computed: {
    keys() {
      return this.major ? majorKeys : minorKeys;
    },
    signatures() {
      return timeSignatures;
    },
    ...mapGetters('leadSheet', ['isEditing', 'meta']),
  },
  methods: {
    selectKeys(value) {
      if (value === 'major') {
        this.major = false;
      } else if (value === 'minor') {
        this.major = true;
      } else {
        this.major = true;
      }
    },
    selectedTimeSignature() {
      this.timeSignatureDialog = false;
    },
    createLeadSheet(payload) {
      this.$store.dispatch('leadSheet/collectMeta', payload);
      this.$store.dispatch('leadSheet/createMeasures');
    },
    toggleEdit() {
      this.$store.dispatch('leadSheet/editForm');
    },
  },
};
</script>
