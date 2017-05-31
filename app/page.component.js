import template from './page.component.html'
const API_URL = "http://localhost:8080/sgp/api"
class controller {

    constructor($http,$q) {
    this.$http=$http;
    this.$q=$q;
    this.collaborateurs=[];
    this.departements=[];
    this.departementID = ""
    /*DepartementService.getDepartements().then(departements =>this.departements=departements);
    DepartementService.getClients().then(clients =>this.clients=clients);*/
  }
  onSelectDep(id) {
        this.departementID = id

        this.update()
    }
  update() {

        let dep = this.departementID ? "?departement=" + this.departementID : ""

        this.$http.get(API_URL + "/collaborateurs" + dep)
            .then(
            response => this.clients = response.data,
            err => this.$q.reject(err)
            )

        this.$http.get(API_URL + "/departements")
            .then(
            response => this.departements = response.data,
            err => this.$q.reject(err)
            )
    }

    $onInit() {
        this.update()

    }
}

export let PageComponent = {
    template,
    controller,
    bindings: {
        clients: '&',
        departement: '&'
    }
}