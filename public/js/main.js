    document.querySelector('.delete-article')
        .addEventListener('click', (e) => {
            const id = e.target.attributes['data-id'].value;
            fetch('/article/' + id, {
                    method: 'DELETE'
                })
                .then(res => {
                    return window.location.href = '/';
                })
        })