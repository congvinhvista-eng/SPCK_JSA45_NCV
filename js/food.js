async function convertCurrency() {
  const amount = Number(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`,
  );

  const data = await response.json();

  if (data.result === "success") {
    const rate = data.conversion_rates[to];
    const result = amount * rate;

    document.getElementById("result").textContent =
      `${amount} ${from} = ${result.toLocaleString()} ${to}`;
  }
}
