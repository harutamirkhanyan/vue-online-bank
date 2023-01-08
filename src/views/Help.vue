<template>
  <app-page title="Help">
    <question-item v-for="q in questions" :key="q.title" :question="q">
    </question-item>
  </app-page>
</template>

<script>
import QuestionItem from '../components/question/QuestionItem.vue';
import AppPage from '../components/ui/AppPage.vue';
export default {
  setup() {
    const questions = [
      {
        title: 'What is in the system',
        text: 'Here is everything for viewing applications',
      },
      {
        title: 'What is in the system',
        text: 'Here is everything for viewing applications',
      },
    ];
    return {
      questions,
    };
  },

  components: { AppPage, QuestionItem },
};
</script>
