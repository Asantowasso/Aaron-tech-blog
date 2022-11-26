const newFormHandler = async (event) => {
    event.preventDefault();

    text = document.querySelector('#comment-name').value.trim()

}

if (text) {
    const response = await fetch(`\api\comments`,{
        method: 'POST',
        body: JSON.stringify ({text}),
        headers: {
                'Content-Type': 'application/json'
        }

    });

if(response.ok) {
    document.location.replace('/profile');
}else{
    alert('failed to post comment')
}

};

document
.querySelector('.new-comment-form')
.addEventListener('submit', newFormHandler);