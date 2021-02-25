const state={
    navMenuItems:[
        {id:1,nameToggle:'lesson one',parts:[
            {id:1,linkItem:'Algorithm',router:"/home/algorithm"},
            {id:1,linkItem:'C#',router:"/home/csharp"},
            {id:1,linkItem:'Java',router:"/home/java"},
        ]},

        {id:1,nameToggle:'lesson two',parts:[
            {id:1,linkItem:'JavaScript',router:"/home"},
            {id:1,linkItem:'Git',router:"/home/csharp"},
            {id:1,linkItem:'Bootstrap',router:"/home/java"},
        ]},
    ]
};

const getters={};

const mutations={}

const actions={};

export default {
    state,
    getters,
    mutations,
    actions
}