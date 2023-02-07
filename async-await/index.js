const api = fetch("https://api.github.com/users/Felipe2304");

async function getData() {
  try {
    const response = await api;
    const user = await response.json();

    console.log(user);
  } catch (error) {
    console.log("deu ruim ");
  } finally {
    console.log("operação finalizada");
  }
}

getData();
