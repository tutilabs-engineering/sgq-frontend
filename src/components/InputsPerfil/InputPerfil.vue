<template>
  <div class="input">
    <label for="">{{ title }}</label>
    <input :type="type" :placeholder="placeholder" :value="value" :disabled="disabled"/>
  </div>
</template>

<script>
export default {
  name: "InputPerfil",
  props: ["title", "value", "type", "placeholder", "disabled"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  background-color: var(--main_primaryWhite);
  padding: 10px;
  justify-content: center;
  height: 80px;
  border-radius: 10px;
  color: var(--black_text);
  font-weight: 600;
}

.input input {
  border: none;
  outline: none;
  height: 50px; 
  padding: 0px 5px 0 5px;
  background-color: transparent;
}
</style>
