async function newFormHandler(event) {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const contents = document.querySelector('input[name="post-text"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      postTitle,
      contents,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
