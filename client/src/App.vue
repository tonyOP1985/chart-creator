<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Chart Creator</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">User Login</span>
      </v-btn>
      <v-btn
        text
        target="_blank"
      >
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <ActionsBar />
      <v-row justify="center">
        <v-col sm="12" md="8">
          <LeadSheet />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import LeadSheet from '@/components/LeadSheetComponents/MeasureComponents/LeadSheet.vue';
import ActionsBar from '@/components/LeadSheetComponents/Settings/ActionsBar.vue';

export default {
  name: 'App',
  components: {
    LeadSheet,
    ActionsBar,
  },
  data: () => ({
    //
  }),
};
</script>
