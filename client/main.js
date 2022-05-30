

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneBtn");
const goalsBtn = document.querySelector("#add-goal");


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes")
    .then(res  => { 
        const data = res.data
        let fortune = document.createElement('li');
        fortune.innerText = data
        const list = document.querySelector('ul');
        list.appendChild(fortune);
    });
}

const appendGoals = ({data}) => {
    const goalsList = document.querySelector('#goalsList');
    data.forEach(({text, id}) =>{
        let goals = document.createElement('li');
        goals.className = 'goals';
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-button';
        deleteBtn.innerText = 'X';
      
        // // const handledeleteBtn = handledeleteBtn(id);
        // // const editBtn = handleEditBtn(id);

        goals.innerText = text;
        goals.id = id;
        goalsList.append(goals, deleteBtn);

    })
};





const getGoals = () => {
    axios.get("http://localhost:4000/api/goals")
    .then(appendGoals) 
}
   

const deleteHandler = (id) => {
    
    deleteBtn.addEventListener('click', () =>{
        axios.delete("http://localhost:4000/api/goals/${id}")
        .then(appendGoals)
    });

};

fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
goalsBtn.addEventListener('click', getGoals);