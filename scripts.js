const handlingForms = {
    data() {
        return {
            members: [],
            newMember: {
                fname: null,
                lname: null,
                instrument: null
            }
        };
    },
    methods: {
        addMember() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                this.members.push(this.newMember);
                this.newMember = {};
            } else {
                alert('Erro');
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');