const newFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#comment').value.trim();
  const blog_id =parseInt(location.pathname.split("/")[2])

  if (text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ text, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('failed to post comment');
    }
  }
};
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
