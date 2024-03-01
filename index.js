 let items = [];

        function renderItems() {
            const list = document.getElementById('items');
            list.innerHTML = '';
            items.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'todo-item';
                listItem.innerHTML = `
                    <span>${item}</span>
                    <button onclick="editItem(${index})">Edit</button>
                    <button onclick="deleteItem(${index})">Delete</button>
                `;
                list.appendChild(listItem);
            });
        }

        function addItem() {
            const newItem = document.getElementById('new-item').value.trim();
            if (newItem) {
                items.push(newItem);
                document.getElementById('new-item').value = '';
                renderItems();
            }
        }

        function editItem(index) {
            const newItem = prompt('Edit item:', items[index]);
            if (newItem !== null) {
                items[index] = newItem.trim();
                renderItems();
            }
        }

        function deleteItem(index) {
            if (confirm('Are you sure you want to delete this item?')) {
                items.splice(index, 1);
                renderItems();
            }
        }
