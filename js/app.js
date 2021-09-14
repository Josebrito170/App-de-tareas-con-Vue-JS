const app = new Vue({
    el: '#app',
    data: {
        titulo: 'App de Tareas con Vue',
        tareas: [{
            nombre:'', descripcion: ''
        }],
        nuevaTarea: '',
        nuevaDescripcion: ''
    },
    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                descripcion: this.nuevaDescripcion,
                estado: false
            });
            this.nuevaTarea = '';
            this.nuevaDescripcion = '';
            localStorage.setItem('task-local-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('task-local-vue', JSON.stringify(this.tareas));

        },
        eliminarTareas: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('task-local-vue', JSON.stringify(this.tareas));

        }
    },
    created() {
        let datosTask = JSON.parse(localStorage.getItem('task-local-vue'));
        if(datosTask === null){
            this.tareas = [];
        }else{
            this.tareas = datosTask;
        }
    },

});