import axois from 'axios';
const state={
    tableItem:[
        {id:1,title:'inherit',Completed:true},
        {id:2,title:'overload',Completed:false},
        {id:3,title:'overright',Completed:true},
        {id:4,title:'class',Completed:false},
        {id:4,title:'get',Completed:true},
        {id:5,title:'propery',Completed:true},
        {id:6,title:'method',Completed:false},
        {id:7,title:'anoher',Completed:true},
        {id:8,title:'anoher',Completed:true},
        {id:9,title:'anoher',Completed:true},
        {id:10,title:'anoher',Completed:true},
        {id:11,title:'anoher',Completed:true},
        {id:12,title:'anoher',Completed:true},
        {id:13,title:'anoher',Completed:true},
        {id:14,title:'anoher',Completed:true},
        {id:15,title:'anoher',Completed:true},
        {id:16,title:'anoher',Completed:true},
    ]
};

const getters={
};

const mutations={
    setTodos:(state,todos)=>(state.tableItem=todos),
}

const actions={
    async  fetchTodos({commit}){
        const response=await axois.get('https://jsonplaceholder.typicode.com/todos'
        );
        commit('setTodos',response.data);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}