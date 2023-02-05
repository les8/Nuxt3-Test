export default defineEventHandler(async () => {
  //api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=EO5k7xOcI8ct4qh1AnZbpVRgXJc6FaIObgjqJjr9&currencies=EUR%2CUSD%2CCAD')

  return data;
})