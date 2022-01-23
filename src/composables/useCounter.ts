const count = ref(0);

const useCounter = () => {
  const increment = () => count.value++;
  const decrement = () => count.value--;
  return {
    count: readonly(count),
    increment,
    decrement,
  }
}

export default useCounter;