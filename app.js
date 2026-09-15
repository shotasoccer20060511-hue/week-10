async function loadUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok){
            throw new Error("通信エラー: " + response.status);
        }

        const users = await response.json();

        console.log(users);

        userList.textContent = "";

        users.forEach((user) =>{
            const card = document.createElement("div");
            card.className = "bg-white rounded-lg shadow p-4";

            const name = document.createElement("div");
            name.className = "text-lg font-bold";
            name.textContent = user.name;

            const email = document.createElement("p");
            email.className = "text-gray-600 text-sm";
            email.textContent = user.email;

            card.appendChild(name);
            card.appendChild(email);
            userList.appendChild(card);
        });
    } catch (error) {
        userList.textContent = "データ取得に失敗しました。";
        console.error(error);    
    }
}

loadUsers();