function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputURL = document.getElementById('URL').value
    let name = document.getElementById('name').value
if (checkForURL(inputURL)){
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const allData = await response.json();
    return allData;
  } catch (error) {
    console.log("error", error);
  }
}
updateUI('/all',url)
};



export { handleSubmit}
