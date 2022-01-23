<script setup lang="ts">
// post
const inputText = ref('')
const postResult = ref('結果')
const onSubmit = async () => {
  const data = await useFetch('/api/posts', {
    method: 'post',
    body: {
      inputText: inputText.value,
    }
  }).then(res => {
    console.log('posts ok.');
    return 'ok';
  }).catch((err: Error) => {
    console.log('error. ', err.message);
    return err.message;
  })
  postResult.value = data
}
</script>

<template>
  <section>
    <h2 class="text-xl">Post Test</h2>
    <p>Result: {{ postResult }}</p>
    <form @submit.prevent="onSubmit">
      <div>
        <input type="text" v-model="inputText" placeholder="free text" class="px-4 py-2 bg-gray-200 rounded-lg" />
      </div>
      <div>
        <button class="bg-green-500 text-white px-4 py-2 rounded-xl" type="submit">post!</button>
      </div>
    </form>
  </section>
</template>